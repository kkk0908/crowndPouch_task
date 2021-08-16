const bodyParser = require("body-parser");
const cors = require("cors");
const static = require("kvell-scripts").static;
const middlewares = require("../utils/middleware");
const routes = require("../routes");
const path = require("path");

const socket = require("socket.io");
const color = require("colors");
const dl = require('delivery')
const fs = require('fs');

const express = require('express')

/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
const globalMiddlewares = (app, server) => {
    app.use(middlewares.formidable, bodyParser.json(), bodyParser.urlencoded({ extended: true }));
    app.use("/static", static(path.join(__dirname, "..", "public")));
    // Have Node serve the files for our built React app

    app.use("/article", routes.article);
    app.use("/cities", routes.cities);



    // error handler, if no route has been caught
    app.get("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.post("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.delete("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.put("/*", (req, res) => { res.send("404 not found"); res.end(); });
    app.use(middlewares.auth); // middleware to validate authenticated users

    // socket Part 
    const io = socket(server, {
        cors: {
            origin: '*',
        }
    });
    // io.on("connection", (socket) => {
    //     //user sending message
    //     console.log("socket id", socket.id)
    //     socket.on("file", (fileData) => {
    //         console.log(">>>>> fileData", fileData)
    //         //gets the room user and the message sent
    //         // const p_user = get_Current_User(socket.id);

    //     });

    //     socket.on("disconnect", () => {
    //         console.log("Disconnected.")
    //     })

    // })

    io.on('connection', function (socket) {
        var delivery = dl.listen(socket);
        delivery.on('receive.success', function (file) {
            var params = file.params;
            fs.writeFile(file.name, file.buffer, function (err) {
                if (err) {
                    console.log('File could not be saved.');
                } else {
                    console.log('File saved.');
                };
            });
        });
    });

    app.use(cors()); // core 



};

module.exports = globalMiddlewares;
