import React from 'react'
import classes from './ServicesSection.module.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import tiling from '../../assets/images/tiling.jpeg';
import painting from '../../assets/images/painting.jpeg';
import paving from '../../assets/images/paving.jpg';
import plastering from '../../assets/images/plastering.jpeg';
import roof_cleaning from '../../assets/images/roof_cleaning.jpg';
import brick_laying from '../../assets/images/brick_laying.jpg';
import electrical from '../../assets/images/electrical.jpeg';
import waterproofing from '../../assets/images/waterproofing.jpg';
import plumbing from '../../assets/images/plumbing.jpg';
import carpenting from '../../assets/images/carpenting.jpeg';

const ServicesSection = () => {
    const services = [{ title: "Tiling", image: tiling }, { title: "Painting", image: painting }, { title: "Paving", image: paving }, { title: "Plastering", image: plastering },
    { title: "High Pressure Roof Cleaning", image: roof_cleaning }, { title: "Brick laying", image: brick_laying }, { title: "Electrical", image: electrical }, { title: "Water Proofing", image: waterproofing }, { title: "Plumbing", image: plumbing },
    { title: "Carpenting", image: carpenting }].map(service =>
        <ServiceCard key={service.title} title={service.title} image={service.image} />)
        
    return (
        <div className={classes.ServicesSection}>
            {services}
        </div>
    )
}
export default ServicesSection