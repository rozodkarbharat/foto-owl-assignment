import React from "react";
import Contact from "../Components/contact";
import SearchBar from "../Components/SearchBar";
import style from "../Css/Home.module.css";
import HomeHeader from "../Components/HomeHeader";
import ContactsContainer from "../Components/ContactsContainer";
import EmptyMessageBox from "../Components/EmptyMessageBox";

const Home = () => {
  return (
    <div className={style.home_page}>
      <div>
        <HomeHeader />
        <SearchBar />
        <ContactsContainer />
      </div>

        <EmptyMessageBox/>
    </div>
  );
};

export default Home;
