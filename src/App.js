import React from 'react';
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import Socials from './Components/Socials/Socials'
import BeforeandAfter from './Components/BeforeandAfter/BeforeandAfter'
import Profile from './Components/Profile/Profile'
import ContactUs from './Components/ContactUs/ContactUs'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Socials />
      <BeforeandAfter />
      <Profile />
      <ContactUs />
    </div>
  );
}

export default App;
