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
  title: String
  artist: String
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
    songLyrics (song: String): Song
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;
module.exports = typeDefs;
