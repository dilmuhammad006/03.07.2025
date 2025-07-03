import React from "react";
import "./styles/Section_2.scss";

const Section_2 = () => {
  return (
    <div className="section_2">
      <p>WHAT WE DO</p>
      <p>Our Service</p>

      <div className="card-wrapper">
        <div className="card">
          <p>Interior Design</p>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
        <div className="card">
          <p>Architecture</p>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
        <div className="card">
          <p>Planning</p>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
