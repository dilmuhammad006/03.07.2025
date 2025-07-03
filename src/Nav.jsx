import React from "react";
import logo from "./assets/Screenshot_3 [Recovered] 1.svg";
import "./styles/Nav.scss"
const Nav = () => {
  return (
    <nav>
      <img src={logo} />
      <div className="navigation">
        <p className="isActive">HOME</p>
        <p>PROJECT</p>
        <p>SERVICES</p>
        <p>ABOUT</p>
        <p>BLOG</p>
        <p>SHOP</p>
        <p>CONTACT</p>
      </div>
      <div className="navButton">Sign Up</div>
    </nav>
  );
};

export default Nav;
