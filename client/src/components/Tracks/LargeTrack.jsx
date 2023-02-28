import React from 'react';

function LargeTrack({ post, user }) {
  const profileURL = `https://source.boringavatars.com/beam/128/${user.username}`;
  console.log(post);
  return (
      <div>{post.songName}</div>
  );
}

export default LargeTrack;
