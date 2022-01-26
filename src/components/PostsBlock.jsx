import React from 'react';
import PostList from "./PostList";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

const PostsBlock = ({posts, storageUrl, links, getPosts}) => {
    return (
        <div>
            <PostList posts={posts} storageUrl={storageUrl}/>
            <div className="flex justify-center">
                {links.length != 0 ?
                    <Pagination totalItemsCount={links.total}
                                activePage={links.current_page}
                                itemsCountPerPage={links.per_page}
                                onChange={(pageNumber) =>  getPosts(pageNumber)}
                                activeClass="active bg-blue-500 text-white"
                                innerClass="pagination flex gap-2l"
                                itemClass="w-8 text-center"
                    />
                    : null}
            </div>
            <div className={"flex justify-end"}>
                <Link to={"/auth"} className={"bg-slate-500 p-2 rounded text-white hover:bg-blue-600"}>add new post</Link>
            </div>
        </div>
    );
};

export default PostsBlock;