import React from 'react'
import style from "../Css/Contact.module.css"
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Contact = ({user, Data}) => {
  const navigate=useNavigate()
  function handleOpenChat(user){
    navigate(`/${user.number}`)
  }
  
  return (
    <div className={style.contact} onClick={()=>handleOpenChat(user)}>
      <BsPersonFill className={style.profile_image} />
      <div className={style}>
        <p className={style.user_name}>{user.name}</p>
        <p className={style.message}>this is message</p>
      </div>
    </div>
  )
}

export default Contact
