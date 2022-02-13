const Attendee = require('./attendeeModel');

const addAttendee = async (attendeeData) => {
  try {
    await Attendee.create(attendeeData);
    return 'Attendee is added';
  } catch (error) {
    return error;
  }
};

const addAttendeeTalk = async (attendeeId, talkId) => {
  try {
    const attendee = await Attendee.findById(attendeeId);
    attendee.talks.push(talkId);
    await attendee.save();

    // Redirect to the talks route to add the attendee in the talk's list
    res.redirect(`../talks/${talkId}?attendeeid=${attendeeId}`);

    // Return this after being redirected back from the talks route
    return `Attendee has been added to the talk with the id ${talkId}`;
  } catch (error) {
    return error;
  }
};

module.exports = { addAttendee, addAttendeeTalk };
