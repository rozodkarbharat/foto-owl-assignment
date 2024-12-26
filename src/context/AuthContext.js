import { useNavigate } from "react-router-dom";
import useAddToInstantDB from "../CustomHooks/useAddToInstantDB";
import { db } from "../db";

const { createContext, useState, useEffect } = require("react");


export const AuthContext = createContext()


export const AuthConetxtProvider = ({children})=>{
    const { addData, loading, Error, success } = useAddToInstantDB('users');
    const { isLoading, error, data } = db.useQuery({ users: {} });
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const navigate = useNavigate()
    const [Data, setData] = useState({ name: "", number: "" });

    const handleChange = (e) => {
            const { name, value } = e.target;
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

    function handleLogin(){
        console.log(Data,'data')
        let isUserExist = data?.users?.filter((user)=>user.number == Data.number)
        if(isUserExist?.length==0){
            addData(Data);
        }
        else{
        setisLoggedIn(true)
        }
    }

    useEffect(() => {
        if(!Data.id){
            navigate("/login")
        }
    }, [Data])

    useEffect(() => {
        setisLoggedIn(success?true:false)
    }, [success])

    return <AuthContext.Provider value={{handleLogin, loading, error, success, Data, handleChange,users:data?.users || [], isLoggedIn}} >{children}</AuthContext.Provider>
}