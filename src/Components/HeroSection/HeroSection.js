import React from 'react'
import classes from './HeroSection.module.css'
import HeroImage from '../../assets/images/tools.jpg'

const HeroSection = (props) => {
    return (
        <div className={classes.HeroSectionContainer}>
            <img src={HeroImage} alt="hero"/>
            <div className={classes.Overlay}></div>
            <div className={classes.Headings}>
                <h1>MD Home Repairs</h1>
                {props.mobile ? <p>The best service money can buy.</p> :
                    <p>Providing you with the best service money can buy.</p>}
            </div>

        </div>
    )
}

export default HeroSection