import React from "react";
import image from "./assets/pexels-vecislavas-popa-1571460.svg";
import "./styles/Section_3.scss";

const Section_3 = () => {
  return (
    <div className="section_3">
      <img src={image} alt="" />
      <div className="info">
        <p>ABOUT US</p>
        <p>Interioris The Will of An Epoch Mextreo</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form injected humour, or
          randomised words which don't look even slightly believable.If you are
          going to use a passage of Lorem Ipsum, sure there isn't anything
          embarrassing hidden the middleof text. All the Lorem Ipsum generators
          on the Internettend to repeat predefined chunks as necessary,making
          this the first true generator on the Internet.
        </p>
        <div className="button">LEARN MORE</div>
      </div>
    </div>
  );
};

export default Section_3;
