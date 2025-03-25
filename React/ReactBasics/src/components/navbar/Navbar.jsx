import React from 'react'
import Styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.section}>
            <div className={Styles.logo}>Logo</div>
        </div>
        <div className={Styles.section}>
            <div>Home</div>
            <div>Contact</div>
            <div>About</div>
        </div>
    </div>
  )
}

export default Navbar