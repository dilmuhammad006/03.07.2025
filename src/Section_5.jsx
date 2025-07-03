import React from "react";
import "./styles/Section_5.scss";
import image1 from "./assets/pexels-andrea-piacquadio-774909.svg";
import image2 from "./assets/pexels-pixabay-220453.svg";

const Section_5 = () => {
  return (
    <div className="section_5">
      <p>TESTIMONIALS</p>
      <p>Client says about us</p>

      <div className="card-wrapper">
        <div className="card">
          <img src={image2} alt="" />{" "}
          <div className="info">
            <p>
              <b>Louis Saville</b> /CEO at Google inc
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={image1} alt="" />{" "}
          <div className="info">
            <p>
              <b>Rekha Varadwaz</b> /Manager at Nike inc
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_5;
