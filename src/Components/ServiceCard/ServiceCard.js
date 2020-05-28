import React from 'react'
import classes from './ServiceCard.module.css'

const ServiceCard = (props) => {

    //let source = require('../../assets/images/' + props.source);

    return (
        <div className={classes.ServiceCard}>
            <div className={classes.Image}>
                <img src={props.image} alt="service" />
            </div>
            <div className={classes.Title}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default ServiceCard