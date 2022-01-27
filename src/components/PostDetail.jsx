import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import arrowLeft from "../arrow-left.svg";

const url = "https://m-api.agdevelopments.net/api";
const storageUrl = "https://m-api.agdevelopments.net/storage/";
const PostDetail = () => {
    let {id} = useParams();
    const [post, setPost] = useState({})
    const getPost = async () => {
        const res = await axios.get(url + '/posts/' + id);
        setPost(state => {
            return res.data
        });
    };
    useEffect(() => {
        getPost();
    },[]);

    return (
        <div>
            <Link className={"my-3 flex items-center"} to={"/"}>
                <img src={arrowLeft} alt=""/>
                <p className="text-gray-700 text-sm font-bold">
                    Back to post list
                </p>
            </Link>
            <div className={"flex py-2"}>
                <img className={"h-80"} src={storageUrl + post.image} alt=""/>
                <div className={"px-2"}>
                    <p className={"text-center text-2xl"}>{post.title}</p>
                    <p>{post.text}</p>
                    <p className={"text-right text-slate-500 text-xs"}>{post.created_at}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
