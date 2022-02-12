const mongoose = require('mongoose');
const { Schema } = mongoose;

const talkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
      min: '2022-2-21',
      max: '2022-2-25',
    },
    time: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Attendee',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Talk', talkSchema);
