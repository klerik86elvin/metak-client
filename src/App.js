import './App.css';
import Post from "./components/Post";
import axios from "axios";
import React, {useEffect, useState} from "react";
import PostsBlock from "./components/PostsBlock";

const url = "https://m-api.agdevelopments.net/api";
const storageUrl = "https://m-api.agdevelopments.net/storage/";
function App() {
    const [posts, setPosts] = useState([])
    const [links, setLinks] = useState([])
    const getPosts = async (pageNumber = 1) => {
        const res = await axios.get(url + '/posts?page=' + pageNumber);
        setPosts(state => {
            return res.data.data
        });
        setLinks(state => {
            return res.data.meta
        })
    };
    useEffect((pageNumber) => {
        getPosts(pageNumber);
    },[]);

  return (
    <div className="App">
        <PostsBlock links={links} storageUrl={storageUrl} posts={posts} getPosts={getPosts}/>
    </div>
  );
}

export default App;
