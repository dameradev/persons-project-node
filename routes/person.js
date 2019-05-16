const express = require('express');
const router = express.Router();

const personsController = require('../controllers/person');

router.get('/', personsController.getPersons);

router.get('/create-person', personsController.getCreatePerson);

module.exports = router;