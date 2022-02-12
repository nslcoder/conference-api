const express = require('express');
const router = express.Router();

const { postAttendee } = require('./attendeesControllers');

router.post('/', postAttendee);

module.exports = router;
