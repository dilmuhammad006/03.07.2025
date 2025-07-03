import React from "react";
import image from "./assets/toa-heftiba-FV3GConVSss-unsplash.svg";
import  "./styles/Section_1.scss"

const Section_1 = () => {
  return (
    <div className="section_1">
      <div className="info">
        <p>MODERN INTERIOR</p>
        <p>Create Your Interior Design.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="button">CONTACT</div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Section_1;
