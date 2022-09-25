const routes = require('express').Router();
const contactsController = require('../controllers/contactsController');

routes.get('/', contactsController.getContacts);
module.exports = routes;