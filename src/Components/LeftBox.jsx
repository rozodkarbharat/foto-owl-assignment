import React from 'react'
import SearchBar from "../Components/SearchBar";
import HomeHeader from "../Components/HomeHeader";
import ContactsContainer from "../Components/ContactsContainer";
import style from "../Css/LeftBox.module.css"

const LeftBox = () => {
  return (
    <div className={style.left_box}>
        <HomeHeader />
        <SearchBar />
        <ContactsContainer />
      </div>
  )
}

export default LeftBox
