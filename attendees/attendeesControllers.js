const { addAttendee } = require('./attendeesServices');

const postAttendee = async (req, res) => {
  try {
    const attendeeData = req.body;
    const message = await addAttendee(attendeeData);
    res.status(201).send({ message });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postAttendee };
