import React from "react";
import Navbar from "../components/Navbar";
import Magnifi from "../components/Magnifi";
import Feature from "../components/Feature";
import Sliderimage from "../components/Sliderimage";
import Action from "../components/Action";
import Bottomsection from "../components/Bottomsection";
import Footer from "../components/Footer";
import Location from "../components/Location";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar/>
      <Magnifi />
      <Feature />
      <Sliderimage />
      <Action />
      <Bottomsection />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
