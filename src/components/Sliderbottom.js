import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../css/Slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Sliderbottom = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>
          <div className="container">
            <h1>
              Match Strategy to
              <br />
              your personality
            </h1>
            <p>
              Built on a unique personality engine, now
              <br />
              you're not just investing, you're investing to fit you.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/40a531cc54ea16396c374fe639d9854cea12bc79-1920x1080.jpg?fm=webp&q=80"
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
            <h1>
              Match Strategy to
              <br />
              your personality
            </h1>
            <p>
              Built on a unique personality engine, now
              <br />
              you're not just investing, you're investing to fit you.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/e2299801eff983cede3b956917b682cc3553974d-1920x1080.jpg?fm=webp&q=80"
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="container">
            <h1>
              Match Strategy to
              <br />
              your personality
            </h1>
            <p>
              Built on a unique personality engine, now
              <br />
              you're not just investing, you're investing to fit you.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/6a143d27c5922a2b523aa1207097a353a2215ea5-1920x1080.jpg?fm=webp&q=80"
            alt=""
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliderbottom;
