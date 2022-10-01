const routes = require('express').Router();
const contactsController = require('../controllers/contactsController');

routes.get('/', contactsController.getContacts)
routes.post('/', contactsController.createContact);

routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);
module.exports = routes;