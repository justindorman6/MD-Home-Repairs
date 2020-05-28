import React from 'react'
import classes from './Header.module.css'
import Logo from '../../assets/images/mdLogo.png'

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={Logo} alt="logo" />
            <a href="#region"><button className={classes.Button}>Services offered</button></a>
            <button className={classes.Button}>Profile</button>
            <button className={classes.Button}>Our Work</button>
            <button className={classes.Contact}>Contact Us</button>
        </header>
    )
}

export default Header