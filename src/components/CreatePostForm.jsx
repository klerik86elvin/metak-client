import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import arrowLeft from "../arrow-left.svg";

const url = "http://localhost:8000/api";
const CreatePostForm = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const auth = JSON.parse(window.localStorage.getItem('auth'))
    //const password = JSON.parse(window.localStorage.getItem('password'))
    const [post, setPost] = useState({title: '', text: '', image: ''})
    const [message, setMessage] = useState({});

    const onInputChange = (e) => {
        setPost({...post, image: e.target.files[0]})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', post.image);
        data.append('title', post.title)
        data.append('text', post.text)
        axios.post(url + '/posts', data, {headers: {password: window.localStorage.getItem('password')}})
            .then(function (response) {
                setMessage({});
                window.localStorage.clear();
                navigate('/');
            })
            .catch(function (error) {
                if (error.response.status == 422)
                {
                    setMessage(error.response.data.errors)
                }
                console.log(error.response);
            });
    }
    if (auth)
    {
        return(
            <div>
                <Link className={"my-3 flex items-center"} to={"/"}>
                    <img src={arrowLeft} alt=""/>
                    <p className=" text-gray-700 text-sm font-bold">
                        Back to post list
                    </p>
                </Link>
                <div className={"bg-slate-300 flex justify-center p-10"}>
                    <div className={"w-1/2"}>
                        <form onSubmit={onSubmit}>
                            <div>
                                <label className="my-1 block text-sm font-medium text-gray-700">
                                    title
                                </label>
                                <div className="my-1 flex rounded-md shadow-sm">
                                    <input type="text"
                                           className="outline-none p-1 my-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md  border-gray-300"
                                           placeholder="title"
                                           value={post.title}
                                           onChange={e => setPost({...post, title: e.target.value})}
                                    />
                                </div>
                                {
                                    message.title ? message.title.map((error, index) => {
                                        return <p key={index} className="text-red-500 text-xs italic">{error}</p>
                                    }) : ''
                                }

                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Text
                                </label>
                                <div className="mt-1">
                                    <textarea  rows="3"
                                               className=" p-1 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                               placeholder="text"
                                               value={post.text}
                                               onChange={e => setPost({...post, text: e.target.value})}
                                    >{post.text ? post.text : ''}</textarea>
                                </div>
                                {
                                    message.text ? message.text.map((error, index) => {
                                        return <p key={index} className="text-red-500 text-xs italic">{error}</p>
                                    }) : ''
                                }

                            </div>
                            <div>
                                <p>Upload image</p>
                                <input onChange={onInputChange} type="file"/>
                                {
                                    message.image ? message.image.map((error, index) => {
                                        return <p key={index} className="text-red-500 text-xs italic">{error}</p>
                                    }) : ''
                                }
                            </div>
                            <div className={"flex justify-center"}>
                                <button className={"text-xl bg-slate-400  rounded-xl w-full mt-6 px-4 py-1 hover:bg-blue-600 hover:text-white"}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Link className={"my-3 flex items-center"} to={"/auth"}>
                <img src={arrowLeft} alt=""/>
                <p className="text-gray-700 text-sm font-bold">
                    Back auth
                </p>
            </Link>
            <div className={"flex h-80 items-center justify-center"}>
                <p className={"text-2xl"}>Not auth</p>
            </div>
        </div>
    );

};

export default CreatePostForm;