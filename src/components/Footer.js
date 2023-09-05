import React,{useState} from "react";
import "../css/Footer.css";
import Logo from "../Images/AITradingSpy_Logo_Simple_Transperent.png";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Footer = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="footer mt-5 mt-auto "  >
      <div className="inside-footer d-flex">
      <ul className="mx-1 ps-0">
      <li> <NavLink
              to="/stratergy"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
            
              style={{ textDecoration: "none",color:'white' }}
            >
              Studio
            </NavLink></li>
            <li>
            <NavLink
              to="/optimizer"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
            
              style={{ textDecoration: "none",color:'white' }}
            >
              Optimizer
            </NavLink>
            </li>
        <li> <NavLink
              to="/community"
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
           
              style={{ textDecoration: "none",color:'white' }}
            >
              Community Builder
            </NavLink></li>
      </ul>
        <div className="mx-1" style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
            }}
          >
            Tampa Office
          </p>
          <p style={{ fontSize: "0.816em", color: "white" }}>
            501 East Kennedy Boulevard Tampa,
            <br />
            FL 33602
          </p>
        </div>
        <div className="mx-1" style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
            }}
          >
            St Peterburg Office
          </p>
          <p style={{ fontSize: "0.816em", color: "white" }}>
            2529 Central Ave, St.Peterburg,
            <br />
            FL 33713
          </p>
        </div>
        <div className="mx-1" style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
            }}
          >
            Get in touch with us.
          </p>
          <p
            style={{
              fontSize: "0.816em",
              color: "white",
            }}
          >
            To learn more,contact,
            <br />
            support@aitradingspy.com
          </p>
        </div>
       
      <div className="mx-1">
          <img
            src={Logo}
            alt=""
            width={144}
            height={144}
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
