import React from "react";
import './Company.css';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Company = () => {
  return (
    
     
    <div className="home">
      <div className="parts">
        <div className="part1">
          <p className="companyTitle">WELCOME</p>
          <p className="companyTitle">TO <span className="name">CHAINTECH</span></p>
          <p className="para1">
            From square one to engineering excellence! PixelPlex assists in
            full-cycle software 
          </p>
          <p className="para2">development,jumps in to take it over, or brings
            dedicated top-demanded skills.
          </p>
          <button className="button">Get Started <div className="Arrow"><BsArrowRightCircleFill /></div></button>
        </div>
      </div>
    </div>
  );
};

export default Company;
