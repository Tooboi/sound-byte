import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        songName
        audioFile
        artist
        likers
        tags
      }
    }
  }
`;