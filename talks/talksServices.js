const Talk = require('./talkModel');

const addTalk = async (talkData) => {
  try {
    await Talk.create(talkData);
    return 'Talk is added';
  } catch (error) {
    return error;
  }
};

const addTalkAttendee = async (talkId, attendeeId) => {
  try {
    const talk = await Talk.findById(talkId);
    talk.attendees.push(attendeeId);
    await talk.save();
  } catch (error) {
    return error;
  }
};

module.exports = { addTalk, addTalkAttendee };
