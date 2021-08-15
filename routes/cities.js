const citiesRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const citiesController = require("../controllers").cities;
const { Joi, celebrate, errors } = require("celebrate")

citiesRouter.get("/", celebrate({
  query: Joi.object().keys({
    skip: Joi.number().allow('', null),
    limit: Joi.number().allow('', null),
    sortField: Joi.string().allow('', null),
    sortValue: Joi.string().allow('', null),
    searchText: Joi.string().allow('', null),
  })
}), errors(), (request, response) => {
  citiesController.fetchCities(request.query).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

citiesRouter.get("/citiesByMaxPop", (request, response) => {
  citiesController.fetchCitiesByMaxPop(request.query).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

citiesRouter.get("/citiesByNoCond", (request, response) => {
  citiesController.fetchAllCitiesWithNoCond(request.query).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

citiesRouter.post("/uploadVideo", (request, response) => {
  citiesController.uploadVideo(request.body).then(res => response.status(res.status).json(res),
    err => response.status(err.status).json(err))
});

citiesRouter.put("/", (request, response) => {
  // put method
});

citiesRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = citiesRouter;