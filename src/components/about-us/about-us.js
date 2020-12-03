import React from "react";
import tempProduct from "../../assets/images/TempProduct.png";
import Alist from "./aboutList";
import Address from "./address";
import Partners from "./partners";
import "./style.scss";

const AboutUs = () => {
  return(
    <main>
        <div className="about-us_wrap">
        <div>
          <h1 className="about-us_main-text">We Create Artworks, Concepts, Interiors &amp; Brand Design</h1>
        </div>
        <div>
          <img src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/03/about1.jpg" alt="no image" className="item-image"  />
        </div>
        <div className="about-us_desktop_text">
        <h2 className="about-us_title">Services</h2>
        <p className="about-us_text1">It was a big, round room with a high arched roof, and the walls and ceiling and floor were covered 
          with large emeralds set closely together.
        </p>
        <div>
          <p className="about-us_text">In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. 
            Thinking that viewed in some particular lights, the case might by a bare possibility some small degree be deemed, under the 
            circumstances, a rather hard one, an honest clergyman of the town addressed a note to his Grace.
          </p>
        </div>
        <Alist/>
        </div>
        
      <div className="about-us_desktop_text">
        <h2 className="about-us_title">Our Office</h2>
        <p className="about-us_text">It was shaped like a chair and sparkled with gems, as did everything else. 
          In the center of the chair was an enormous Head, without a body to support it or any arms or legs whatever.
        </p>
      </div>
      <div className="about-us_photo-about">
        <img src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/03/about2-570x381.jpg" className="about-us_photo-up" alt="photo"/>
        <img src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/03/about3-570x381.jpg" className="about-us_photo-up" alt="photo"/>
      </div>
      
      <div className="about-us_desktop_text">
        <Address/>
        <div>
          <h2 className="about-us_title">We Love Our Clients</h2>
          <p className="about-us_text">It was shaped like a chair and sparkled with gems, as did everything else. 
            In the center of the chair was an enormous Head, without body to support it or any arms or legs whatever.
          </p>
        </div>
        <Partners/>
      </div>

      </div>
    </main>
  )
};

export default AboutUs;