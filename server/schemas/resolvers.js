const { User, Song } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { getSongs } = require("../utils/song");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    users: async () => {
      return User.find();
    },
    songs: async (_, { song }) => {
      const songData = await getSongs(song);
      console.log(songData);
      return songData;
    },

    //get one song for lyric page
    song: async (_, { songId }) => {
      const songData = await Song.findOne({ _id: songId });
  
      return songData;
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

    addSong: async (parent, { song }, context) => {
      if (context.user) {
        const song = await Song.create({
          title,
          artist,
          lyrics,
          category,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { songs: song._id } }
        );

        return song;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
