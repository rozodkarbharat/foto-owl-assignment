import React from 'react'
import MessagesBox from '../Components/MessagesBox'
import LeftBox from '../Components/LeftBox'
import style from "../Css/Chat.module.css"

const Chat = () => {
  return (
    <div className={style.chat_page}>
      <LeftBox />
      <MessagesBox/>
    </div>
  )
}

export default Chat
