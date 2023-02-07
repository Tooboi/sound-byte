import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  // if (posts.length === 0) {
  //   return <h3>No Posts Yet</h3>;
  // }
  console.log('posts: ', posts);
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {
        posts.map((posts) => (
          <div key={posts._id} className="card mb-3">
            <img src={posts.imageFile} alt="..."></img>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/${posts.artist}`}
                >
                  {posts.artist} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted {posts.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {posts.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{posts.likes}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${posts._id}`}
            >
              {posts.songName}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
