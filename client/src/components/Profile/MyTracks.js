import React from 'react';
import LargeTrack from '../Tracks/LargeTrack';

function MyTracks({ user, posts }) {
  const desiredUsername = user.username;
  const filteredPosts = posts.filter((post) => post.artist === desiredUsername);
// console.log(filteredPosts);
  if (filteredPosts.length === 0) {
    return (
      <div className="mt-5">
        <h3>nothing to see here</h3>
      </div>
    );
  } else {
    return (
      <div>
        {filteredPosts.map((post) => (
          <LargeTrack post={post} user={user} key={post._id}/>
        ))}
      </div>
    );
  }
}

export default MyTracks;
