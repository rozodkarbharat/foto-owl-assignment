import React, { useContext, useEffect, useRef, useState } from "react";
import style from "../Css/Login.module.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    
    const { handleLogin,loading, error, success, Data, handleChange, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const ref = useRef(null)
    
    useEffect(()=>{
        if(isLoggedIn){
            navigate("/")
        }
        else if(error){
            toast.error("Something went wrong! please try again")
        }
    },[success,error, isLoggedIn])


    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(ref.current){
            return
        }
        ref.current = setTimeout(() => {
            ref.current= null;
        }, 2000);
        if (Data.name === "") {
            toast.error("Please enter your name.")
            return;
        }
    
        if (Data.number === "" || isNaN(Data.number) || Data.number.length < 10) {
            toast.error("Please enter a valid mobile number.")
            return;
        }
        handleLogin(Data);
    };

    return (
        <div className={style.login_page}>
            <form onSubmit={handleSubmit} className={style.login_form}>
                <p className={style.title}>Login</p>

                <input
                    type="text"
                    placeholder="Name"
                    className={style.login_input}
                    name="name"
                    value={Data.name}
                    onChange={handleChange} 
                />

                <input
                    type="number"
                    placeholder="Mobile Number"
                    className={style.login_input}
                    name="number"
                    value={Data.number}
                    onChange={handleChange} 
                />


                <input type="submit" value="Login" className={style.login_btn} />
            </form>
        </div>
    );
};

export default Login;
