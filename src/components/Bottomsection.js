import React from "react";
import "../css/bottom.css";
import tick from "../Images/tick.svg";
import Apple from "../Images/apple.svg";
import Android from "../Images/android.svg";
import Image from "../Images/image-apple.png";
import { Link, NavLink } from "react-router-dom";

const Bottomsection = () => {
  return (
    <div className="background">
      <div className="start">
        <div className="heading">Start investing today</div>
      </div>

      <div className="list-section">
        {/* Image  */}
        <div
          // style={{
          //   width: "50%",
          //   display: "flex",
          //   justifyContent: "flex-start",
          //   alignItems: "flex-start",
          // }}
          className="image-left"
        >
          <img
            src="https://iitfinance.com/img/phone.png"
            alt=""
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        {/* List item */}
        <div className="right-part pe-2">
          <ul>
            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Build and experiment with trading strategies
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Use Marketplace Bots and AI Strategies
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Find your trading support using Natural Language
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Monetize your strategies and communities
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              AI Copilot for your trading
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
height={20}
width={20}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Learn and Build with industry leaders
            </li>
            <li className="mt-3 ">
              <div className="">
                <a
                  href="#"
                  className="slider-button  mt-3"
                  style={{ backgroundColor: "#FF5757", fontSize:'12px' }}
                ><NavLink
                to="/early" style={{textDecoration:'none',color:'white'}}>
                  Request Early access</NavLink>
                </a>
              </div>
            </li>
          </ul>

          {/* <div
            className="right-btn"
            style={{ marginBottom: "16px", marginLeft: "30px" }}
          >
            <a href="#">
              <button style={{ backgroundColor: "#FF5757" }}>
                Request Early Access
              </button>
            </a>
          </div> */}
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          columnGap: "20px",
        }}
      >
        <img src={Apple} alt="" height={50} />
        <img src={Android} alt="" height={50} />
      </div> */}
    </div>
  );
};

export default Bottomsection;
