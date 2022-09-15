const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Kaynara Melo');
});

module.exports = routes;