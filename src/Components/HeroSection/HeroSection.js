import React from 'react'
import classes from './HeroSection.module.css'

const HeroSection = (props) => {
    return (
        <div className={classes.HeroSectionContainer}>
            <h1>MD Home Repairs</h1>
            {props.mobile ? <p>The best service money can buy.</p> :
                <p>Providing you with the best service money can buy.</p>}

        </div>
    )
}

export default HeroSection