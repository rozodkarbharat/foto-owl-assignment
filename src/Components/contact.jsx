import React from 'react'
import style from "../Css/Contact.module.css"
import { BsPersonFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div className={style.contact}>
      <BsPersonFill className={style.profile_image} />
      <div className={style}>
        <p className={style.user_name}>Bharat</p>
        <p className={style.message}>this is message</p>
      </div>
    </div>
  )
}

export default Contact
