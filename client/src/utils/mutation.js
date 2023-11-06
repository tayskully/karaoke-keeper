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
  mutation Mutation($songId: Int) {
    addSong(songId: $songId) {
      title
      songId
      artist
      lyrics
      image
      _id
      category
      notes {
        createdAt
        noteText
      }
    }
  }
`;

export const REMOVE_SONG = gql`
  mutation RemoveSong($songId: Int, $userId: ID) {
    removeSong(songId: $songId, userId: $userId) {
      title
      songId
      _id
      artist
      category
      image
      lyrics
      notes {
        createdAt
        noteText
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation Mutation($noteText: String!, $songId: ID) {
    addNote(noteText: $noteText, songId: $songId) {
      _id
      artist
      notes {
        createdAt
        noteText
      }
      title
      category
      image
      lyrics
      songId
    }
  }
`;
