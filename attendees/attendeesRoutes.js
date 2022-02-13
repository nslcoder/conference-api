const express = require('express');
const router = express.Router();

const { postAttendee, postAttendeeTalk } = require('./attendeesControllers');

router.post('/', postAttendee);
router.put('/:id', postAttendeeTalk);

module.exports = router;
