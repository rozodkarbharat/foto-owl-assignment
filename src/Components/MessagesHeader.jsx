import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import style from "../Css/MessagesHeader.module.css";
import { AuthContext } from "../context/AuthContext";

const MessagesHeader = ({id}) => {
  const { users} = useContext(AuthContext);
  const [userData, setuserData] = useState({})
  useEffect(() =>  {
    let tempUser =  users.filter((user) =>user.number == id)
    setuserData(tempUser[0]||{})
  }, [id])
  return (
    <div className={style.message_header}>
      <div className={style.profile_detail}>
      <BsPersonFill className={style.profile_image} />
      <div className={style.profile_text}>
        <p className={style.user_name}>{userData?.name}</p>
        <p className={style.message_header_text}>click here for contact info</p>
      </div>
      <p></p>

      </div>
      <span aria-hidden="true" data-icon="menu" class="">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <title>menu</title>
          <path
            fill="#fff"
            d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default MessagesHeader;
