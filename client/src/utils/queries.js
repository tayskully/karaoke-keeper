import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
  query getSong($songId: Int) {
    song {
      _id
      songId
      title
      artist
      image
      lyrics
      category
      notes
    }
  }
`;
