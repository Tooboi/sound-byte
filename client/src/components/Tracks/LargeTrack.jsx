import React from 'react';

function LargeTrack({ post, user }) {

    return (
        <div>{post.artist} - {post.songName} - {post.createdAt} </div>
    )
}

export default LargeTrack;