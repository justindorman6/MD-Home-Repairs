import React from 'react'
import classes from './Header.module.css'
import Logo from '../../assets/images/mdLogo.png'
import Services from '../ServicesSection/ServicesSection';


const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={Logo} alt="logo" />

            <button className={classes.Button}>Services offered</button>
            <button className={classes.Button}>Profile</button>
            <button className={classes.Button}>Before&After</button>
            <button className={classes.Contact}>Contact Us</button>
        </header>
    )
}

export default Header