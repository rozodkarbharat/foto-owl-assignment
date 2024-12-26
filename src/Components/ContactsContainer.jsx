import React, { useContext } from 'react'
import Contact from './contact'
import style from '../Css/ContactsContainer.module.css'
import { AuthContext } from '../context/AuthContext'

const ContactsContainer = () => {
  const {users, Data} = useContext(AuthContext)
  return (
    <div className={style.contact_container}>
      {
        users.length>0 && users.map((user)=>{
          if(Data.number==user.number) return <></>;
          return <Contact user={user} Data ={Data} />
        })
      }
    </div>
  )
}

export default ContactsContainer
