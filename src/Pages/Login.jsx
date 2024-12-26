import React, { useContext, useEffect, useState } from "react";
import style from "../Css/Login.module.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const { handleLogin,loading, error, success, Data, handleChange, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()

    
    useEffect(()=>{
        if(isLoggedIn){
            navigate("/")
        }
        else if(error){
            alert("Something went wrong! please try again")
        }
    },[success,error, isLoggedIn])

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (Data.name === "") {
            alert("Please enter your name.");
            return;
        }
    
        if (Data.number === "" || isNaN(Data.number) || Data.number.length < 10) {
            alert("Please enter a valid mobile number.");
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
