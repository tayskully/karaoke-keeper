const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  lyrics: {
    type: String,
  },
  notes: [
    {
      noteText: {
        type: String,
        minLength: 1,
        maxLength: 200,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Song = model("Song", songSchema);

module.exports = Song;
