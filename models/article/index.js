// eslint-disable-next-line no-unused-vars
const Article = require("./articleModel");

exports.addArticle = (article) => Article.create(article)

exports.editArticle = (article, _id) => Article.findOneAndUpdate({ _id }, article, { new: true })

exports.getAllArticles = () => Article.find()

exports.getArticle = (_id) => Article.findOne({ _id })

exports.deleteArticle = (_id) => Article.remove({ _id })