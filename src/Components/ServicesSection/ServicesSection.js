import React from 'react'
import classes from './ServicesSection.module.css'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServicesSection = () => {
    const services = [{ title: "Tiling" }, { title: "Paiting" }, { title: "Paving" }, { title: "Plastering" },
    { title: "High Pressure Roof Cleaning" }, { title: "Brick laying" }, { title: "Electrical" }, { title: "Water Proofing" }, { title: "Plumbing" },
    { title: "Carpenting" }].map(service =>
        <ServiceCard title={service.title} />)
    return (
        <div className={classes.ServicesSection}>
            {services}
        </div>
    )
}
export default ServicesSection