const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  songs: [Song]
}

type Song {
  _id: ID
  songId: Int
  title: String
  artist: String
  image: String
  lyrics: String
  category: String
  notes: [String]
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    users: [User]
    user(username: String!): User
    me: User
    songs(song: String): [Song]
    song(songId: Int): Song
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSong(title: String!, artist: String, lyrics: String, category: String, image: String, songId: Int): Song
    removeSong(songId: Int, userId: ID): Song
  }


`;
module.exports = typeDefs;
