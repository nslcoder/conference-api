const Talk = require('./talkModel');

const addTalk = async (talkData) => {
  try {
    await Talk.create(talkData);
    return 'Talk is added';
  } catch (error) {
    return error;
  }
};

module.exports = { addTalk };
