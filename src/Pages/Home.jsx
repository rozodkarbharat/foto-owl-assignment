import React, { useEffect, useState } from "react";
import style from "../Css/Home.module.css";
import EmptyMessageBox from "../Components/EmptyMessageBox";
import LeftBox from "../Components/LeftBox";

const Home = () => {
  const [screenSizeWidth, setscreenSizeWidth] = useState(window.innerWidth)

  return (
    <div className={style.home_page}>
      <LeftBox />
      {screenSizeWidth>700 && <EmptyMessageBox />}
    </div>
  );
};

export default Home;
