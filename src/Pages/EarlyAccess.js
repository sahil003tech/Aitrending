import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import Section1Early from '../components/EarlyAccess/Section1Early';

const EarlyAccess = () => {
  return (
    <div style={{ height: "100vh" }}>
    <Navbar/>
   <Section1Early/>
   <Footer/>
 </div>
  )
}

export default EarlyAccess