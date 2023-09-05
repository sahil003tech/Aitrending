import React from "react";
import Logo from "../Images/AITradingSpy_Logo_Simple_Transperent.png";

const Second = () => {
  return (
    <div className="top-container">
      <div className="text-container">
        {/* left-Part */}
        <div className="left-container">
          <span>
            <h2
              style={{
                fontSize: "40px",
                fontFamily: "Inter",
                fontWeight: "bold",
                marginBottom: "1.4rem",
              }}
            >
              Empowering Asset and <br /> Wealth Managers
            </h2>
          </span>
          <hr
            style={{
              width: "50%",
              marginLeft: "0",
              borderBottom: "1px solid black",
            }}
          />
          <div style={{ marginBottom: "1.4rem", width: "90%" }}>
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1.8",
              }}
            >
              We believe in the unparalleled value of data and strive to fully
              unleash its potential in all aspects of our work. Our mission is
              to assist organizations in deriving value and meaningful insights
              from vast volumes of data. Through our innovative products, our
              clients can optimize returns, mitigate risks, and boost
              operational efficiency.
            </span>
          </div>
        </div>
        {/* right part */}
        <div
          className="right-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt=""
            style={{ background: "transparent" }}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
