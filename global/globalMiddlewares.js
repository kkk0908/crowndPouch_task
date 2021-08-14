const bodyParser = require("body-parser");
const cors = require("cors");
const static = require("kvell-scripts").static;
const middlewares = require("../utils/middleware");
const routes = require("../routes");
const path = require("path");

const express = require('express')

/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} servers
 */
const globalMiddlewares = (app, server) => {
    app.use(middlewares.formidable, bodyParser.json(), bodyParser.urlencoded({ extended: true }));
    app.use("/static", static(path.join(__dirname, "..", "public")));
    // Have Node serve the files for our built React app

    app.use("/article", routes.article);

    app.use(cors()); // core 

    // error handler, if no route has been caught
    app.get("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.post("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.delete("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.put("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.use(middlewares.auth); // middleware to validate authenticated users




};

module.exports = globalMiddlewares;
