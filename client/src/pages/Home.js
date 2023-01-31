import React from 'react';
import { useQuery } from '@apollo/client';
import PostList from '../components/PostList/PostList';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
  // Hits utils/queries POSTS and returns all posts
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.allPosts || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
        {/* If query is loading, or returning an error or happy path - display accordingly */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>One sec...</div>
          ) : error ? (
            <div>Or nor :( --- {error.message}</div>
          ) : (
        <PostList
        // send the queried posts and page title through props
      posts={posts}
      title="Daily Bytes"
    />
  )}
</div>

        </div>
      </main>
    );
  };
  
  export default Home;