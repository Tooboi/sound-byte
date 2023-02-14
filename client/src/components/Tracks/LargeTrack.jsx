import React from 'react';
import {
    Box,
} from '@chakra-ui/react'
function LargeTrack({ post, user }) {
  const profileURL = `https://source.boringavatars.com/beam/128/${user.username}`;
  console.log(post);
  return (
      <Box>{post.songName}</Box>
  );
}

export default LargeTrack;
