import React, {useEffect, useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import arrowLeft from "../arrow-left.svg";

const url = "https://m-api.agdevelopments.net/api";
const AuthForm = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();
    const [message, setMessage] = useState('')

    const click = () => {
        axios.post(url + '/auth', {
            password: value,
        })
            .then(function (response) {
                window.localStorage.setItem('auth',response.data.auth);
                window.localStorage.setItem('password',response.data.password);
                if (response.data.auth) {
                    navigate('/create')
                }
                else
                    setMessage(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(() => {
        if (JSON.parse(window.localStorage.getItem('auth')))
        {
            return  navigate('/create')
        }
    }, []);

    return (
        <div>
            <Link className={"my-3 flex items-center"} to={"/"}>
                <img src={arrowLeft} alt=""/>
                <p className="text-gray-700 text-sm font-bold">
                    Back to post list
                </p>
            </Link>
            <div className={"flex justify-center items-center h-80 bg-slate-200"}>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        pasword
                    </label>
                    <div className={"flex"}>
                        <input
                            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="******************"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <div className={"flex justify-center ml-3"}>
                            <button onClick={click} className={" bg-blue-500 h-full p-1 px-2 rounded text-white"}>send</button>
                        </div>
                    </div>
                    <p className="absolute text-red-500 text-xs italic">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
