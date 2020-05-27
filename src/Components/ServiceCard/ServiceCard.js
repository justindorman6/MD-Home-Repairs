import React from 'react'
import classes from './ServiceCard.module.css'

const ServiceCard = (props)=>{
    return (
        <div className={classes.ServiceCard}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default ServiceCard