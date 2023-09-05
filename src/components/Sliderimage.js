import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Imagef from "../Images/photo-first-fotor-20230719154113.png";
import Imaget from "../Images/photo-main-fotor-20230719151846.png";
import Images from "../Images/photo-second-fotor-20230719163026.png";
import "../css/Slider.css";
import '../css/glass.css'
import { Link, NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Sliderimage = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      className="swiper-image"
    >
      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <div className="container " >
            <div className="glass">
            <h1 className="slider-h1 bt ht">
              Build using
              <br />
              Strategy Studio
            </h1>
            <p className="bt" style={{ color: "white" }}>
              Strategist Studio helps you build and automate
              <br />
              using our sophisticated tools and skilled
              <br />
              team of developers.
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
          <div className="slide-box " >
            <span
              style={{
                fontWeight: "300",
                marginLeft: "10px",
                paddingRight: "10px",
              }}
            >
              "AITradingSpy can you create a trading strategy for TSLA using a
              set of proprietary indicators and back test it for past 3 months
              and provide me performance."
            </span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1610247948543-28d438fd094b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="container">
            <div className="glass">
            <h1 className="slider-h2 bt ht">
              Optimize using
              <br />
              Trade Optimizer
            </h1>
            <p className="slider-p bt">
              Trade Optimizer are advanced machine learning
              <br />
              algorithms that meticulosly scrutinize and
              <br />
              Optimize future trades.
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
          {/* box-1 */}
          <div className="slide-1">
            <span
              style={{
                fontWeight: "300",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "AITradingSpy can you find what I can do to optimize my option
              calls for AAPL and META based on my performance in the past month"
            </span>
          </div>
          {/* box-2 */}
          <div className="slide-2">
            <span
              style={{
                fontWeight: "300",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              " Find what was my best performing trade by risk reward ratio for
              the past month ".
            </span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            height={900}
            width="100%"
            className="slider-image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="container">
            <div className="glass" style={{}}>
            <h1 style={{ color: "white" }} className="bt ht">
              Grow Using
              <br />
              Community Builder
            </h1>
            <p className="bt" style={{ color: "white" }}>
              Community builder helps you build,nurture,and
              <br />
              monetize trading communities.
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
          <div className="slide-3">
            <span
              style={{
                fontWeight: "300",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "AITradingSpy find which of my community members who have recorded
              their trades had the best continued performance and compare it to
              my strategy and market data."
            </span>
          </div>
          <img
            src="https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={900}
            width="100%"
            className="slider-image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliderimage;
