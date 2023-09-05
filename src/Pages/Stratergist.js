import React from 'react'
import Footer from "../components/Footer";
import Section1Stratergy from '../components/Stratergist/Section1Stratergy';
import Navbar from '../components/Navbar';

const Stratergist = () => {
  return (
    <div style={{ height: "100vh" }}>
       <Navbar/>
       <Section1Stratergy/>
       <Footer/>
      
    </div>
  )
}

export default Stratergist