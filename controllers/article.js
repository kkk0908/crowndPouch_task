
const articleController = {};
const errorHandler = require("../utils/errorHandler")
const httpStatus = require("../constants/customHttpStatus")
const fileHandler = require("../utils/fileHandler")
const articleModelMethod = require("../models/article")
const path = require('path')
const fs = require("fs")

articleController.insertArticle = async ({ fields, files, }) => {
    try {
        let article = fields
        let file = files.img

        // create directories if doesn't exist

        let dir = path.join(__dirname, "..", "public");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        dir = path.join(__dirname, "..", "public", "article");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (file) {
            let fileName = path.join("article", `article_${Date.now()}${path.extname(file.name)}`);
            let newPath = path.join(__dirname, "..", "public", fileName);
            let oldPath = file.path;
            let fileInfo = await fileHandler.filePathHandler(newPath, fileName, oldPath);
            article.image = fileInfo.fileName;
        }

        let articleObj = await articleModelMethod.addArticle(article)
        return { ...httpStatus.CREATED, articleObj }

    } catch (error) {
        console.log(error)
        return errorHandler.errorHandlerMain(error)
    }
}

articleController.editArticle = async ({ fields, files, id, }) => {
    try {

        let article = fields
        let file = files.img

        // create directories if doesn't exist
        let newFile = false
        let dir = path.join(__dirname, "..", "public");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        dir = path.join(__dirname, "..", "public", "article");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        if (file) {
            let fileName = path.join("article", `article${Date.now()}${path.extname(file.name)}`);
            let newPath = path.join(__dirname, "..", "public", fileName);
            let oldPath = file.path;

            let fileInfo = await fileHandler.filePathHandler(newPath, fileName, oldPath);
            article.image = fileInfo.fileName;
            newFile = true
        }
        let existedArticle = await articleModelMethod.getArticle(id)

        if (existedArticle && existedArticle.image && newFile) {

            let filePathToDelete = path.join(__dirname, "..", "public", existedArticle.image);
            if (fs.existsSync(filePathToDelete)) await fileHandler.unlinkFileHandler(filePathToDelete)
        }

        let articleObj = await articleModelMethod.editArticle(article, id)
        return { ...httpStatus.UPDATED, articleObj }

    } catch (error) {
        console.log(error)
        return errorHandler.errorHandlerMain(error)
    }
}

articleController.getArticle = async (id) => {
    try {
        let articleObj = await articleModelMethod.getArticle(id)
        return { ...httpStatus.FETCHED, articleObj }

    } catch (error) {
        console.log(error)
        return errorHandler.errorHandlerMain(error)
    }
}

articleController.getAllArticles = async () => {
    try {
        let articleObj = await articleModelMethod.getAllArticles()
        return { ...httpStatus.FETCHED, articleObj }
    } catch (error) {
        console.log(error)
        return errorHandler.errorHandlerMain(error)
    }
}


articleController.deleteArticle = async (id) => {
    try {
        let existedArticle = await articleModelMethod.getArticle(id)
        if (!existedArticle) return httpStatus.NOT_FOUND
        let articleObj = await articleModelMethod.deleteArticle(id)

        let filePathToDelete = path.join(__dirname, "..", "public", existedArticle.image);
        if (fs.existsSync(filePathToDelete)) await fileHandler.unlinkFileHandler(filePathToDelete)

        return { ...httpStatus.DELETED, articleObj }

    } catch (error) {
        console.log(error)
        return errorHandler.errorHandlerMain(error)
    }
}


module.exports = articleController;