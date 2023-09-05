import React from "react";
import "../css/Feature.css";

const Feature = () => {
  return (
    <div className="responsive-section">
      <div className="feature">
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "20px",
            color: "white",
          }}
        >
          As Seen On
        </p>
        <div style={{ width: "95%" }}>
          <div className="logo-section  flex-wrap">
            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/9f63556f57e5461b751cc9a681db90584ad2effc-73x59.png"
              alt=""
              height={59}
              width={73}
              className="logos"
            />

            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/49dd460feb81e3039babf6afd794ade13c7aa78a-93x47.png"
              alt=""
              height={47}
              width={93}
              className="logos"
            />

            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/2dd83f5764dc3c37fe52010396e767a89f9523e7-136x20.png"
              alt=""
              height={20}
              width={136}
              className="logo-ben"
            />
            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/f0acbdee2e1eb4b955a872e379fef79eb8629c3b-119x37.png"
              alt=""
              height={37}
              width={119}
              className="logo-bloo"
            />
            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/a5d1afb3d49999d034336fde1a0d460bfcadb163-140x40.png"
              alt=""
              height={40}
              width={140}
              className="nas"
            />
            <img
              src="https://cdn.sanity.io/images/l4rnpwz2/production/38f6de31bd1e3e9e0659005758f4a6a0dbb1c728-146x30.png"
              alt=""
              height={30}
              width={146}
              className="nas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
