import React from "react";
import "../Aboutcss/Four.css";

const Four = () => {
  return (
    <div className="top-container">
      <div className="text-container">
        {/* left */}
        <div className="four-left">
          <img
            src="https://aisot.com/hubfs/neural%20networks%20aisot%20.png"
            alt=""
            width={480}
            height={240}
            className="four-image-left"
          />
        </div>
        {/* right */}
        <div className="four-right">
          <span>
            <h2
              style={{
                fontSize: "40px",
                fontFamily: "Inter",
                fontWeight: "bold",
                marginBottom: "1.4rem",
              }}
            >
              Vision
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
              width: "100%",
              marginTop: "1.4rem",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              Our vision is to launch the new era of asset managment, where
              fully automated and AI-powered investment products become the
              norm. We believe in harnessing the power of advanced technology to
              remove emotions from investment decision-making, and to provide
              our clients with investment products that are tailored to their
              individual objectives.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
