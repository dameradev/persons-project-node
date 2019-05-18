const express = require('express');
const router = express.Router();

const personsController = require('../controllers/person');

router.get('/', personsController.getPersons);



router.get('/create-person', personsController.getCreatePerson);


router.post('/create-person', personsController.postCreatePerson);

router.get('/:id', personsController.getPerson);

router.get('/:id/create-contact', personsController.getCreateContact)

router.post('/:id/create-contact', personsController.postCreateContact)

router.get('/:id/delete', personsController.deletePerson)


module.exports = router;