import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import BeforeandAfter from './Components/BeforeandAfter/BeforeandAfter'
import Profile from './Components/Profile/Profile'
import ContactUs from './Components/ContactUs/ContactUs'
import SideNav from './Components/SideNav/SideNav'
import Socials from './Components/Socials/Socials'
import classes from './App.module.css'

const App = () => {
  const [visible, setVisible] = useState(false)

  const getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(getWidth() < 500)
  })

  return (
    <div className={classes.App}>
      <Header visible={visible} showSideNav={() => setVisible(true)} mobile={mobile} />
      <SideNav closeNav={() => setVisible(false)} visible={visible} />
      <HeroSection mobile = {mobile}/>
      <ServicesSection mobile = {mobile}/>
      <BeforeandAfter mobile = {mobile}/>
      <Profile mobile = {mobile}/>
      <ContactUs mobile = {mobile}/>
    </div>
  );
}

export default App;
