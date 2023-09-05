import React from 'react'
import Section1optimizer from '../components/Optimizer/Section1optimizer'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

const Optimizer = () => {
  return (
    <div style={{ height: "100vh" }}>
       <Navbar/>
       <Section1optimizer/>
       <Footer/>
      
    </div>
  )
}

export default Optimizer