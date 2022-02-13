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
    await addAttendeeTalk(id, talkId);

    /* Redirect to the talks route to add the attendee in the talk's list. 307 status code is added to use the original request's method, PUT, which is also what is needed at the talks route. Redirection usually has GET method, so 307 is necessary. */
    res.redirect(307, `/api/talks/${talkId}?attendeeid=${id}`);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { postAttendee, postAttendeeTalk };
