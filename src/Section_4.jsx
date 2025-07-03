import React from "react";
import image from "./assets/pexels-lisa-fotios-1090638.svg";
import "./styles/Section_4.scss";

const Section_4 = () => {
  return (
    <div className="section_4">
      <div className="info">
        <p>20</p>
        <p>Years Of Successful Working The Market</p>
        <div className="button">READ MORE</div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Section_4;
