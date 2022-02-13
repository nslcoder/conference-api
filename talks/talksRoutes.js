const express = require('express');
const router = express.Router();

const { postTalk, postTalkAttendee } = require('./talksControllers.js');

router.post('/', postTalk);
router.put('/:id', postTalkAttendee);

module.exports = router;
