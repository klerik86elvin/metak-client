import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Post = ({post, url}) => {
    return (
        <div className="rounded-lg border solid bg-slate-100">
            <Link to={"posts/" + post.id} className="block rounded-lg">
                <img className="rounded-t-lg" src={url + post.image} alt=""/>
                <p className="truncate text-center border-b solid w-48">{post.title}</p>
                <p className="p-2 text-right text-xs text-slate-500">{post.created}</p>
            </Link>
        </div>
    );
};

export default Post;