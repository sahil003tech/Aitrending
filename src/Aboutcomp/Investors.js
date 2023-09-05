import React from "react";

const Investors = () => {
  return (
    <div className="top-container">
      <div
        className="text-container"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <div>
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "Inter",
              fontWeight: "bold",
              marginBottom: "1.4rem",
              marginLeft: "20px",
            }}
          >
            Investors
          </h2>
          <hr
            style={{
              width: "30%",
              marginLeft: "20px",
              borderBottom: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="https://aisot.com/hubfs/1-Jul-03-2023-06-46-15-2309-PM.png"
              alt=""
              width={200}
              height={200}
            />
            <img
              src="https://aisot.com/hubfs/2-Jul-03-2023-06-46-37-8327-PM.png"
              alt=""
              width={200}
              height={200}
            />
            <img
              src="https://aisot.com/hubfs/3-Jul-03-2023-06-46-57-4494-PM.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
