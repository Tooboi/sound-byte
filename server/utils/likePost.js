const Mutation = {
    likePost: async (_, { postId }, { userId }) => {
        // Find the post by its id
        const post = await Post.findById(postId);
        // Check if the user has already liked the post
        if (post.likers.indexOf(userId) === -1) {
            // If not, like the post
            post.like(userId);
            await post.save();
            return {
                success: true,
                message: `Post "${post.songName}" has been liked.`,
                post,
            };
        } else {
            return {
                success: false,
                message: `Post "${post.songName}" has already been liked by this user.`,
                post,
            };
        }
    },
    unlikePost: async (_, { postId }, { userId }) => {
        // Find the post by its id
        const post = await Post.findById(postId);
        // Check if the user has already liked the post
        if (post.likers.indexOf(userId) !== -1) {
            // If yes, unlike the post
            post.unlike(userId);
            await post.save();
            return {
                success: true,
                message: `Post "${post.songName}" has been unliked.`,
                post,
            };
        } else {
            return {
                success: false,
                message: `Post "${post.songName}" has not been liked by this user.`,
                post,
            };
        }
    },
};

// You should add the like and unlike mutations to your GraphQL schema and then map them to the corresponding resolver functions.
// Also, you can use the populate method on the post object to fetch the user's information along with the post data, but with GraphQL
//  this could be handled in a different way, you can use the dataloader pattern to handle the population of related data in GraphQL.