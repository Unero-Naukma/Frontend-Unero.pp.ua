import React from "react";
import "./style.scss";

class Address extends React.Component {
  render() {
    return (
      <div className="about-us_address">
      <address className="about-us_address-item">
        <h5 className="about-us_title-address">Melbourne</h5>
        <p className="about-us_text mod">258 New Design St, VIC 10000, Austria  
        </p> 
        <p className="about-us_text mod">+0900 8618 3725 69
        </p>
        <p className="about-us_text mod">hello@unero co 
        </p>
      </address>
      <address className="about-us_address-item">
        <h5 className="about-us_title-address">Newyork</h5>
        <p className="about-us_text mod">3rd Floor, 692 Orchard St, NY 10000, Newyork 
        </p>
        <p className="about-us_text mod">+04200 4739 6899 6880 
        </p>
        <p className="about-us_text mod">office@unero.co 
        </p>
      </address>
    </div>
    );
    }

    
  };

export default Address;