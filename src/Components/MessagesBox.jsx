import React, { useContext } from "react";
import MessagesHeader from "./MessagesHeader";
import style from "../Css/MessagesBox.module.css"
import MessagesFooter from "./MessagesFooter";
import { MessagContext } from "../context/MessageContext";


const MessagesBox = ({id}) => {
  const {messages} = useContext(MessagContext)
  return <div className={style.messsage_box}>
    <MessagesHeader id={id}/>
    <div className={style.messages_container} style={{paddingTop:"90px",paddingBottom:"150px"}}>
    {
      messages?.length>0 && messages.map((message) =>{
        return <p style={{color:"#fff", width:"100%",textAlign:message.to==id?"right":"left",padding:"0px 20px",boxSizing:"border-box", fontSize:"18px"}}>{message.from && message?.message}</p>
      })
    }

    </div>
    <MessagesFooter id={id}/>
  </div>;
};

export default MessagesBox;
