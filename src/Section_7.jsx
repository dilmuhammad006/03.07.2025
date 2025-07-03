import React from "react";
import "./styles/Section_7.scss";

const Section_7 = () => {
  return (
    <div className="section_7">
      <p>DON’T FORGET TO SIGN UP</p>
      <hr />
      <p>
        Find out early about all upcoming promotions and new product releases
        with our newsletter.
      </p>

      <div className="input-wrapper">
        <input type="text" placeholder="Enter your email address....." />
        <div className="button">SUBSCRIBE</div>
      </div>
    </div>
  );
};

export default Section_7;
