const { addTalk, addTalkAttendee } = require('./talksServices');

const postTalk = async (req, res) => {
  try {
    const talkData = req.body;
    const message = await addTalk(talkData);
    res.status(201).send({ message });
  } catch (error) {
    res.send(error);
  }
};

const postTalkAttendee = async (req, res) => {
  try {
    const { id } = req.params;
    const { attendeeid } = req.query;
    const message = await addTalkAttendee(id, attendeeid);
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postTalk, postTalkAttendee };
