import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
    const { postId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
        // pass URL parameter
        variables: { postId: postId},
  });
  // get the data from the query or an empty obj to allow it to continue without data
  const post = data?.getPost || {};
  
  return (
  <div>
    {loading ? (
        <div>One sec...</div>
    ) : error ? (
        <div>{error.message}</div>
    ) : (
        <div>
            {post.artist} -
            {post.songName}
        </div>
    )}
  </div>
  );
};

export default SinglePost;
