import React from "react";
import "../Aboutcss/Third.css";

const Third = () => {
  return (
    <div className="top-container" id="who-we-are">
      <div className="text-container">
        {/* left */}
        <div className="third-left">
          <img
            src="https://aisot.com/hubfs/eth%20spinoff%20vertical%20transp.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
        {/* Right */}
        <div className="third-right">
          <span>
            <h2
              style={{
                fontSize: "40px",
                fontFamily: "Inter",
                fontWeight: "bold",
                marginBottom: "1.4rem",
              }}
            >
              Who We are
            </h2>
          </span>
          <hr
            style={{
              width: "50%",
              marginLeft: "0",
              borderBottom: "1px solid black",
            }}
          />
          <div
            style={{
              marginBottom: "1.4rem",
              width: "95%",
              marginTop: "1.4rem",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1.8",
              }}
            >
              Founded in 2019 as a spin-off from ETH Zurich, Aisot Technologies
              AG (aisot) developed the first reliable forecasts for clearly
              defined time horizons for investment professionals. aisot has been
              serving some of the leading asset and wealth management firms in
              Europe and in the U.S.. All of aisot’s products are created with
              institutional standards, focused on usability and quality. aisot’s
              high-performing team is composed of seasoned professionals and
              scientists in the fields of AI, Natural Language Processing, and
              Quantitative Finance.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
