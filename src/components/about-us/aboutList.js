import React from "react";
import "./style.scss";

class Alist extends React.Component {
  render() {
    return (
      <div className="about-us_info-biglist">
        <ul className="about-us_info-list">
          <li className="about-us_info-item">Art Direction</li>
          <li className="about-us_info-item">Branding &amp; Identity</li>
          <li className="about-us_info-item">Digital Marketing</li>
          <li className="about-us_info-item">Project Management </li>
        </ul>
        <ul className="about-us_info-list">
          <li className="about-us_info-item">Information architecture</li>
          <li className="about-us_info-item">User interphase design (UI )</li>
          <li className="about-us_info-item">User Experience Design (Ux)</li>
          <li className="about-us_info-item">Usability analysis</li>
        </ul>
      </div>
    );
    }

    
  };

export default Alist;