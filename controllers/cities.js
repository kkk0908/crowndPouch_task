
const citiesController = {};
const httpStatus = require("../constants/customHttpStatus")
const citiesModelMethod = require("../models/cities")

citiesController.fetchCities = async (query) => {
    try {
        let cities = await citiesModelMethod.fetchCities(query)
        return { ...httpStatus.FETCHED, cities }
    } catch (error) {
        console.log(error)
        return httpStatus.INTERNAL_SERVER_ERROR
    }
}

module.exports = citiesController;