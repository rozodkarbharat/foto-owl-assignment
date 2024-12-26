import React, { useContext, useEffect } from 'react'
import MessagesBox from '../Components/MessagesBox'
import LeftBox from '../Components/LeftBox'
import style from "../Css/Chat.module.css"
import { useParams } from 'react-router-dom'
import { MessagContext } from '../context/MessageContext'

const Chat = () => {
  const {setReceiverNumber, } =useContext(MessagContext)
  const {id} = useParams()

  useEffect(() => {
    if(id){
      setReceiverNumber(id)
    }
  
  }, [id])
  return (
    <div className={style.chat_page}>
      <LeftBox />
      <MessagesBox id ={id} />
    </div>
  )
}

export default Chat
