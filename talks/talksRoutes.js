const express = require('express');
const router = express.Router();

const {
  postTalk,
  postTalkAttendee,
  deleteTalkById,
} = require('./talksControllers.js');

router.post('/', postTalk);
router.put('/:id', postTalkAttendee);
router.delete('/:id', deleteTalkById);

module.exports = router;
