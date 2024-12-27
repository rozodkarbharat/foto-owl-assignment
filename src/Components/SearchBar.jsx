import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import styles from "../Css/SearchBar.module.css"


const SearchBar = () => {
  return (
    <div className={styles.search_box}>
        <IoSearchOutline className={styles.search_icon} />
        <input className={styles.input_box} type="text" placeholder='Search' />
    </div>
  )
}

export default SearchBar
