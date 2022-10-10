const express = require('express');
const router = express.Router();

router.use('/', require('./swaggerRoutes'));
router.use('/contacts', require('./contactsRoutes'));

module.exports = router;