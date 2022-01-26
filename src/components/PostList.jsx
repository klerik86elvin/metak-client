import React from 'react';
import Post from "./Post";

const PostList = ({posts, storageUrl}) => {
    return (
        <div>
            <p className="text-2xl py-2 text-center border-b solid">Post List</p>
            <div className="flex my-2 gap-x-8 mx-auto">
                {posts.map(post =>
                    <Post key={post.id} post={post} url={storageUrl}/>
                )}
            </div>
        </div>
    );
};


export default PostList;