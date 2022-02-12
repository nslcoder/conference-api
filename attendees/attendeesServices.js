const Attendee = require('./attendeeModel');

const addAttendee = async (attendeeData) => {
  try {
    await Attendee.create(attendeeData);
    return 'Attendee is added';
  } catch (error) {
    return error;
  }
};

module.exports = { addAttendee };
