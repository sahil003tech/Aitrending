import React from "react";
import Topdiv from "../Aboutcomp/Topdiv";
import Second from "../Aboutcomp/Second";
import Third from "../Aboutcomp/Third";
import Four from "../Aboutcomp/Four";
import Team from "../Aboutcomp/Team";
import Advisor from "../Aboutcomp/Advisor";
import Investors from "../Aboutcomp/Investors";
import Partnars from "../Aboutcomp/Partnars";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Topdiv />
      <Second />
      <Third />
      <Four />
      <Team />
      <Advisor />
      <Investors />
      <Partnars />
      <Footer />
    </div>
  );
};

export default About;
