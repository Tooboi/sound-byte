import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import UserPostList from '../components/Profile/UserPostList';

import { QUERY_ME, QUERY_POSTS } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { loading: loadingPosts, error: errorPosts, data: dataPosts } = useQuery(QUERY_POSTS);
  const posts = dataPosts?.allPosts || [];
  

  const { username: userParam } = useParams();

  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.user === userParam) {
    return (
      <div>
        <div className="flex-row justify-center mb-3">
          <div className="col-12 col-md-10 mb-5">
            <UserPostList user={user} posts={posts} />
          </div>
          {!userParam && <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}></div>}
        </div>
      </div>
    );
  }
};

export default Profile;
