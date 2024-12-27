import React, { useContext, useEffect, useState } from "react";
import MessagesBox from "../Components/MessagesBox";
import LeftBox from "../Components/LeftBox";
import style from "../Css/Chat.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { MessagContext } from "../context/MessageContext";

const Chat = () => {
  const { setReceiverNumber } = useContext(MessagContext);
  const { id } = useParams();
  const navigate = useNavigate()
  const [screenSizeWidth, setscreenSizeWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (id) {
      setReceiverNumber(id);
    }
  }, [id]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        navigate("/")
      } 
    };

    setscreenSizeWidth(window.innerWidth)
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);


  return (
    <div className={style.chat_page}>
     {screenSizeWidth> 700 && <LeftBox />}
      <MessagesBox id={id} />
    </div>
  );
};

export default Chat;
