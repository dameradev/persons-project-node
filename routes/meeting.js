const express = require('express');
const router = express.Router();

const meetingsController = require('../controllers/meeting');

router.get('/', meetingsController.getMeetings);

router.get('/create-meeting', meetingsController.getCreateMeeting);

router.post('/create-meeting', meetingsController.postCreateMeeting);

module.exports = router;