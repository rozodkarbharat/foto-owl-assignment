import React from 'react'
import style from "../Css/MessagesFooter.module.css"
import { IoSearchOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";




const MessagesFooter = () => {
  return (
    <div className={style.message_footer}>
        {/* <IoSearchOutline className={style.search_icon} /> */}
        <FiPlus className={style.plus_icon} />
        <input className={style.input_box} type="text" placeholder='Type a message' />
        <span aria-hidden="true" data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="#8696a0" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span>

    </div>
  )
}

export default MessagesFooter
