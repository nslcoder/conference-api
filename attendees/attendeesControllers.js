const { addAttendee, addAttendeeTalk } = require('./attendeesServices');

const postAttendee = async (req, res) => {
  try {
    const attendeeData = req.body;
    const message = await addAttendee(attendeeData);
    res.status(201).send({ message });
  } catch (error) {
    res.send(error);
  }
};

const postAttendeeTalk = async (req, res) => {
  try {
    const { id } = req.params;
    const { talkId } = req.body;
    const message = await addAttendeeTalk(id, talkId);
    res.status(200).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postAttendee, postAttendeeTalk };
