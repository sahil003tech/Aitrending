import React, { useState, useEffect } from "react";
import "../css/Magnifi.css";
import MagnifiSvg from "../Images/magnifi.svg";
import Image from "../Images/Untitled design (1).png";

const Magnifi = () => {
  // return (
  //   <div className="image">
  //     <img src={MagnifiSvg} alt="image" className="image-responsive" />
  //   </div>
  // );
  // const [text, setText] = useState("");
  // const fullText = "Trading with AI";

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const interval = setInterval(() => {
  //     if (currentIndex === fullText.length) {
  //       clearInterval(interval);
  //     } else {
  //       setText(fullText.slice(0, currentIndex + 1));
  //       currentIndex++;
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <div className="svg-animation">
        <svg
          className="animated-text"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 30"
        >
          <text x="0" y="20">
            {text}
          </text>
        </svg>
      </div> */}
      <div className="css-typing" style={{}}>
        <h1 className="text-center">Trading With</h1>
        <h1 className="d-none d-sm-block">Artificial Intelligence</h1>
        <h1 className="d-block d-sm-none text-center">Artificial</h1>
        <h1 className="d-block d-sm-none text-center">Intelligence</h1>
      </div>
      <div>
        <img src={Image} alt="" width="100%" className="top-animation" />
      </div>
    </div>
  );
};

export default Magnifi;
