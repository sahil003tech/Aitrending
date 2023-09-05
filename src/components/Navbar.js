// import React, { useState } from "react";
// import "../css/Navbar.css";

// const Navbar = () => {
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

//   return (
//     <header className={color ? "header header-bg" : "header"}>
//       <a href="#" className="logo">
//         AITradingSPy
//       </a>

//       <nav className={color ? "navbar header-bg" : "navbar"}>
//         <ul>
//           <li>
//             <a href="#">Discover</a>
//           </li>

//           <li>
//             <a href="#">Learn</a>
//           </li>

//           <li>
//             <a href="#">Magnifi+</a>
//           </li>

//           <li>
//             <a href="#">Sigh in</a>
//           </li>
//           <li>
//             <a href="#">
//               <button className="btn">Get Started</button>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../Images/navbar-logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? `navbar navbar-bg  ${menuOpen ? "open" : ""}`
          : `navbar  ${menuOpen ? "open" : ""}`
      }
    >
      <div className="logo">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            width={120}
            height={40}
            style={{ backgroundColor: "transparent", marginLeft: "40px" }}
          />
        </Link>
      </div>
      
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        {/* <li>
          <div>
            <NavLink
              to="about"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              About ATS
            </NavLink>
          </div>
        </li> */}
        {/* <li>How It Works</li> */}
         <li>
          <div>
            <NavLink
              to="/stratergy"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              Studio
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              to="/optimizer"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              Optimizer
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              to="/community"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              Community Builder
            </NavLink>
          </div>
        </li>
        <li>Sign In</li>
        <li>
          <div style={{ marginRight: "40px", }}>
             <NavLink
              to="/early"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
             <button type="button" style={{backgroundColor:' #5E17EB', color:'white'}} className="btn">Request Early Access</button>
            </NavLink>
            {/* <a href="#" style={{ textDecoration: "none" }}  className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }>
              
            </a> */}
          </div>
        </li>
      </ul>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>


  );
};

export default Navbar;
