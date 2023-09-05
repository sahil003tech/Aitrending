import React from "react";
import "../css/goal.css";

const Activity = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="activity">
        <h1 style={{ color: "black" }}>
          Designed to
          <br />
          help you invest
        </h1>
        <p style={{ color: "black" }}>
          We belive investing shouldn't take over
          <br />
          your life , it should allow you to live it.
        </p>
        <a href="#">
          <button>Get Started</button>
        </a>
      </div>
      <img
        src="https://cdn.sanity.io/images/l4rnpwz2/production/8d84ce23505c6358636cf6f8e2442818ed0ec1af-2400x1350.jpg?fm=webp&q=80"
        alt=""
        height={900}
        width="100%"
        className="slider-image"
      />
    </div>
  );
};

export default Activity;
