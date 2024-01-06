const express = require('express')
const movieRoute = express.Router()

const movieController = require('../controller/movieController')
movieRoute.get("/", movieController.findAll);

module.exports = movieRoute;