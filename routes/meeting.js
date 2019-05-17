const express = require('express');
const router = express.Router();

const meetingsController = require('../controllers/meeting');

router.get('/', meetingsController.getMeetings);