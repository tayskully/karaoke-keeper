import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query Query {
  me {
    songs {
      _id
      songId
      title
      artist
      image
      lyrics
      category
      notes
    }
    username
    password
    email
    _id
  }
}
`;

export const SEARCH_SONGS = gql`
  query Query($song: String) {
    songs(song: $song) {
      artist
      lyrics
      title
      image
      songId
    }
  }
`;

export const GET_SINGLE_SONG = gql`
  query Query($songId: Int) {
    song(songId: $songId) {
      _id
      songId
      title
      artist
      lyrics
      image
      category
      notes
    }
  }
`;
