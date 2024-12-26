import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import styles from "../Css/SearchBar.module.css"
import { HiArrowLeft } from "react-icons/hi2";


const SearchBar = () => {
  return (
    <div className={styles.search_box}>
        <IoSearchOutline className={styles.search_icon} />
        {/* <HiArrowLeft className={styles.left_arrow} /> */}
        <input className={styles.input_box} type="text" placeholder='Search' />
    </div>
  )
}

export default SearchBar
