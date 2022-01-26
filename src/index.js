import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Navigate ,Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostDetail from "./components/PostDetail";
import AuthForm from "./components/AuthForm";
import CreatePostForm from "./components/CreatePostForm";

ReactDOM.render(

<React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="posts/:id" element={<PostDetail />} />
              <Route path="/auth" element={<AuthForm/>}/>
              {/*<Route path="/create" element={JSON.parse(window.localStorage.getItem('auth')) == true ? <CreatePostForm/> : <Navigate to={"/auth"}/>}/>*/}
              <Route path={"/create"} element={<CreatePostForm/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
