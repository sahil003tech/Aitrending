import React from "react";
import "../css/Action.css";
import Image from "../Images/Tradingimage.jpg";
import '../css/glass.css'
import { Link, NavLink } from "react-router-dom";

const Action = () => {
  return (
    <div className="main" style={{ marginTop: "0" }}>
      <div className="container">
        <div className="glass">
        <h1 style={{ color: "white" }}>
          AI Working to
          <br />
          help you trade
        </h1>
        <p style={{ color: "white", fontSize: "15px" }}>
          Trading needs an AI partner and no better
          <br />
          partner for regular traders than AITradingSpy.
        </p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <a href="#" className="slider-button" style={{fontSize:'14px'}}>
          <NavLink
                to="/early" style={{textDecoration:'none', color:'white'}}>
                  Request Early access</NavLink>
          </a>
        </div>
      </div>
      <img
        src={Image}
        alt=""
        height={900}
        width="100%"
        className="slider-image"
        style={{ objectFit: "cover", marginTop: "0" }}
      />
    </div>
  );
};

export default Action;
