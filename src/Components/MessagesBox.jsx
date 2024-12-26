import React from "react";
import MessagesHeader from "./MessagesHeader";
import style from "../Css/MessagesBox.module.css"
import MessagesFooter from "./MessagesFooter";
const MessagesBox = () => {
  return <div className={style.messsage_box}>
    <MessagesHeader/>
    <MessagesFooter/>
  </div>;
};

export default MessagesBox;
