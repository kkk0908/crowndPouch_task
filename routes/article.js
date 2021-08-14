const articleRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const articleController = require("../controllers").article;
const { Joi, celebrate, errors } = require("celebrate")

articleRouter.get("/getArticle/:id", celebrate({
  params: Joi.object().keys({
    id: Joi.string().required()
  }),

}), errors(), (request, response) => {
  articleController.getArticle(request.params.id).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

articleRouter.get("/getAllArticle", (request, response) => {
  articleController.getAllArticles().then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

articleRouter.post("/insertArticle", celebrate({
  body: Joi.object().keys({
    fields: Joi.object().keys({
      sportName: Joi.string().required(),
      article: Joi.string().required(),
      content: Joi.string().required(),
      author: Joi.string().required(),
    })
    ,
    files: Joi.object().keys({
      img: Joi.object().required()
    })
  })
}), errors(), (request, response) => {

  articleController.insertArticle(request.body).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});


articleRouter.put("/editArticle/:id", celebrate({
  params: Joi.object().keys({
    id: Joi.string().required()
  }),
  body: Joi.object().keys({
    fields: Joi.object().keys({
      sportName: Joi.string(),
      article: Joi.string(),
      content: Joi.string(),
      author: Joi.string(),
    })
    ,
    files: Joi.object().keys({
      img: Joi.object()
    })
  })
}), errors(), (request, response) => {

  articleController.editArticle({ ...request.body, id: request.params.id }).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

articleRouter.delete("/deleteArticle/:id", celebrate({
  params: Joi.object().keys({
    id: Joi.string().required()
  }),

}), errors(), (request, response) => {
  articleController.deleteArticle(request.params.id,).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});
module.exports = articleRouter;