import React from "react";
import "./styles/Section_6.scss";
import image1 from "./assets/james-lindsay-kVBzVaVa7Q0-unsplash 1 (1).svg";
import image2 from "./assets/pexels-john-tekeridis-1428348 (1).svg";

const Section_6 = () => {
  return (
    <div className="section_6">
      <p>LETEST NEWS</p>
      <p>From Our Blog</p>

      <div className="card-wrapper">
        <div className="card">
          <img src={image1} alt="" />
          <p>2020 Interior Design Trends</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button">CONTINUE READING....</div>
        </div>
        <div className="card">
          <img src={image2} alt="" />
          <p>28 Notable Product at ARC Interior Design</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button">CONTINUE READING....</div>
        </div>
      </div>
    </div>
  );
};

export default Section_6;
