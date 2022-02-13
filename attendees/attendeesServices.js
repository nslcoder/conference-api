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
  } catch (error) {
    return error;
  }
};

module.exports = { addAttendee, addAttendeeTalk };
