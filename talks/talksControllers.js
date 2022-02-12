const { addTalk } = require('./talksServices');

const postTalk = async (req, res) => {
  try {
    const talkData = req.body;
    const message = await addTalk(talkData);
    res.status(201).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postTalk };
