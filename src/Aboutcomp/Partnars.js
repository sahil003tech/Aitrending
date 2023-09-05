import React from "react";
import Animated from "./Animated";

const Partnars = () => {
  const logos = [
    "https://aisot.com/hs-fs/hubfs/13-1.png?width=400&height=400&name=13-1.png",
    "https://aisot.com/hs-fs/hubfs/24-1.png?width=400&height=400&name=24-1.png",
    "https://aisot.com/hs-fs/hubfs/11-Jun-27-2023-05-29-07-9740-PM.png?width=400&height=400&name=11-Jun-27-2023-05-29-07-9740-PM.png",
    "https://aisot.com/hs-fs/hubfs/24-1.png?width=400&height=400&name=24-1.png",
    "https://aisot.com/hs-fs/hubfs/13-1.png?width=400&height=400&name=13-1.png",
    "https://aisot.com/hs-fs/hubfs/13-1.png?width=400&height=400&name=13-1.png",
    "https://aisot.com/hs-fs/hubfs/11-Jun-27-2023-05-29-07-9740-PM.png?width=400&height=400&name=11-Jun-27-2023-05-29-07-9740-PM.png",
    // Add more logo URLs as needed
  ];

  return (
    <div className="top-container">
      <span>
        <h2
          style={{
            fontSize: "40px",
            fontFamily: "Inter",
            fontWeight: "bold",
            marginBottom: "1.4rem",
            paddingLeft: "20px",
          }}
        >
          Partnars
        </h2>
      </span>
      <hr
        style={{
          width: "50%",
          marginLeft: "20px",
          borderBottom: "1px solid black",
        }}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Animated logos={logos} />
      </div>
    </div>
  );
};

export default Partnars;
