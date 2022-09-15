const routes = require('express').Router();
const namesController = require('../controllers/index');

routes.get('/', namesController.getName);

module.exports = routes;