import React from 'react'
import classes from './Socials.module.css'
import flogo from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'

const Socials = (props) => {
    return (
        <div className={props.mobile ? classes.Socials_mobile : classes.Socials_desktop}>
            <a href="https://www.facebook.com/pages/MD-Home-Repairs/507111079385470?ref=hl">
                <img src={flogo} alt="flogo" />
            </a>
            <a href="https://www.linkedin.com/in/mdalaga-mrisho-93083229/">
                <img src={linkedin} className={classes.linkedin} alt="flogo" />
            </a>
        </div>
    )
}

export default Socials