
const citiesController = {};
const httpStatus = require("../constants/customHttpStatus")
const citiesModelMethod = require("../models/cities")
const fileHandler = require("../utils/fileHandler")
const path = require('path')
const fs = require('fs')

citiesController.fetchCities = async (query) => {
    try {
        let cities = await citiesModelMethod.fetchCities(query)
        return { ...httpStatus.FETCHED, cities }
    } catch (error) {
        console.log(error)
        return httpStatus.INTERNAL_SERVER_ERROR
    }
}

citiesController.fetchAllCitiesWithNoCond = async () => {
    try {
        let cities = await citiesModelMethod.fetchAllCitiesWithNoCond()
        return { ...httpStatus.FETCHED, cities }
    } catch (error) {
        console.log(error)
        return httpStatus.INTERNAL_SERVER_ERROR
    }
}

citiesController.fetchCitiesByMaxPop = async () => {
    try {
        let cities = await citiesModelMethod.fetchCitiesByMaxPop()
        return { ...httpStatus.FETCHED, cities }
    } catch (error) {
        console.log(error)
        return httpStatus.INTERNAL_SERVER_ERROR
    }
}

citiesController.uploadVideo = async ({ files }) => {
    try {
        console.log(files)
        let file = files.video
        // create directories if doesn't exist

        let dir = path.join(__dirname, "..", "public");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        dir = path.join(__dirname, "..", "public", "video");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        let fileInfo = {}
        if (file) {
            let fileName = path.join("video", `video_${Date.now()}.mp4`);
            let newPath = path.join(__dirname, "..", "public", fileName);
            let oldPath = file.path;

            fileInfo = await fileHandler.filePathHandler(newPath, fileName, oldPath);
        }


        return { ...httpStatus.CREATED, message: "Video Uploaded Successfully!", fileInfo }
    } catch (error) {
        console.log(error)
        return httpStatus.INTERNAL_SERVER_ERROR
    }
}

module.exports = citiesController;