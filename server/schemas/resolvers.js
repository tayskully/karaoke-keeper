const { User, Song } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { getSongs, getRandomSongs, getSongById } = require("../utils/song");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "songs",
        });
      }
      throw AuthenticationError;
    },
    users: async () => {
      return User.find();
    },
    songs: async (_, { song }) => {
      if (song === "random") {
        const songData = await getRandomSongs();
        return songData;
      }
      const songData = await getSongs(song);
      // console.log(songData);
      return songData;
    },

    //get one song for lyric page
    song: async (_, { songId }) => {
      const songData = await getSongById(songId);
      return songData;
    },

    note: async (_, { songId }) => {
      const noteData = await Song.findOne(songId);

      return noteData;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addSong: async (parent, { songId }, context) => {
      if (context.user) {
        const songData = await getSongById(songId);
        const song = await Song.create(songData);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { songs: song._id } }
        );

        return song;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
    removeSong: async (parent, { userId, songId }) => {
      console.log(userId, songId);
      // first find the song in the DB with the songId (genius id)
      const song = await Song.findOne({ songId });

      // second remove the song from the user using song._id (DB id)
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { songs: song._id } },
        { new: true }
      );
    },
    addNote: async (parent, { songId, noteText }, context) => {
      try {
        // Find the song by its ID and update it using findOneAndUpdate
        const updatedSong = await Song.findOneAndUpdate(
          { _id: songId },
          {
            $addToSet: { notes: { noteText } },
          },
          { new: true }
        );

        return updatedSong;
      } catch (error) {
        // Handle any errors, such as invalid songId
        throw new Error("Note creation failed: " + error.message);
      }
    },
  },
};

module.exports = resolvers;
