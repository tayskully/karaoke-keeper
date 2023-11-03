import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SONG = gql`
mutation Mutation($title: String!, $artist: String, $lyrics: String, $category: String, $image: String, $songId: Int) {
  addSong(title: $title, artist: $artist, lyrics: $lyrics, category: $category, image: $image, songId: $songId) {
    _id
    artist
    category
    image
    lyrics
    notes
    title
  }
}
`;

export const REMOVE_SONG = gql`
mutation Mutation($songId: Int) {
  removeSong(songId: $songId) {
    _id
    artist
    title
    category
    image
    lyrics
    notes
    songId
  }
}
`;