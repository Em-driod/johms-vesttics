import React from 'react';  
import Navbar from '../Component/Navbar';  
import HeroSection from '../Component/Herosection';  
import InfoSection from '../Component/Infosection';  
import KaftansSection from '../Component/Kafthansection';  
import ClothingSection from '../Component/Clothingsection';  

const Homepage = () => {  
  return (  
    <div className="bg-black">  
      <Navbar />  
      <HeroSection />  
      <InfoSection />  
      <KaftansSection />  
      <ClothingSection />  
    </div>  
  );  
};  

export default Homepage;