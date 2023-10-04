const express = require("express");
const mainRoute = express.Router();
const { Home, About } = require("../controllers/mainController");

mainRoute.route("/").get(Home);
mainRoute.route("/home-info").get(Home);
mainRoute.route("/about").get(About);
mainRoute.route("/about-info").get(About);

module.exports = mainRoute;
