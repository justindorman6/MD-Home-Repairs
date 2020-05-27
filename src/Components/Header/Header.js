import React from 'react'
import classes from './Header.module.css'
import Logo from '../../assets/images/mdLogo.png'

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={Logo} alt="logo" />
            <button className={classes.Button}>Contact Us</button>
        </header>
    )
}

export default Header