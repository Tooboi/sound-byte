import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList/PostList';

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
  console.log(user);
  
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
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">Viewing {userParam ? `${user.username}'s` : 'your'} profile.</h2>

          <div className="col-12 col-md-10 mb-5">
            <PostList thoughts={user.username} title={`${user.username}'s thoughts...`} showTitle={false} showUsername={false} posts={posts} />
          </div>
          {!userParam && (
            <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}>
              {/* <ThoughtForm /> */}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Profile;
