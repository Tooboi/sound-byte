import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        songName
        audioFile
        artist
        likers {
          _id
        }
        createdAt
        tags
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      songName
      audioFile
      artist
      likes
      likers {
        _id
      }
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      _id
      songName
      audioFile
      artist
      likes
      likers {
        _id
      }
      createdAt
    }
}`


export const QUERY_ME = gql`
  query userPosts($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
      songName
      audioFile
      artist
      likes
      likers {
        _id
      }
      createdAt
      }
    }
  }
`;