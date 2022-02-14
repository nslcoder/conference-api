const { addTalk, addTalkAttendee, eraseTalkById } = require('./talksServices');

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
    await addTalkAttendee(id, attendeeid);
    res
      .status(200)
      .send({ message: "Attendee has been added to the talk's list" });
  } catch (error) {
    res.send(error);
  }
};

const deleteTalkById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await eraseTalkById(id);
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postTalk, postTalkAttendee, deleteTalkById };
