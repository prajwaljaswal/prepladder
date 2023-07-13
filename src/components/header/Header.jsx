import React from 'react'
import logo from "../../assests/logo.svg"
import profile from "../../assests/profile.svg"
import notification from "../../assests/notification.svg"
const Header = () => {
  return (
    <div className='header-container'>
    <div className='logo-container'>
      <img src= {logo} alt='logo'/>
    </div>
    <div className='header-icons'>
 <div><img src= {notification} alt='logo'/></div>
 <div><img src= {profile} alt='logo'/></div>
    </div>
    </div>
  )
}

export default Header