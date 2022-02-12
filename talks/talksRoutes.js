const express = require('express');
const router = express.Router();

const { postTalk } = require('./talksControllers.js');

router.post('/', postTalk);

module.exports = router;
