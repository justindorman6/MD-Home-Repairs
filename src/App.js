import React from 'react';
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <ServicesSection/>
    </div>
  );
}

export default App;
