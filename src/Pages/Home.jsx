import React from "react";
import style from "../Css/Home.module.css";

import EmptyMessageBox from "../Components/EmptyMessageBox";
import LeftBox from "../Components/LeftBox";

const Home = () => {
  return (
    <div className={style.home_page}>
      <LeftBox />
      <EmptyMessageBox />
    </div>
  );
};

export default Home;
