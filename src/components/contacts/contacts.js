import React from "react";
import Send from "./buttonSend";
import ContactsInfo from "./contactsInfo";
import Forms from "./forms";
import Map from "./map";
import "./style.scss";

const Contacts = () => {
  return(
    <main>
    <div className="page-container">
      <div className>
        <h1 className="main_text">We’d love to hear from you.</h1>
      </div>
      <div className>
        <p className="all_text">If you need any help, please contact us or send us an email or go to our forum. We are sure that<br /> you can receive our reply as soon as possible.</p>
      </div>
      <ContactsInfo/>
      <div className="question-container">
        <div>
          <h2 className="title">Get In Touch</h2>
        </div>
        <Forms/>
        <div className="form">
          <label> Message <span className="dot" />
            <br />
            <input type="text" name="your-name" defaultValue size={40} className="form-input-text-big" value="" />
          </label>
        </div>
        
        <Send/>
      </div>
      <Map/>
    </div>
  </main>
  );
    
};

export default Contacts;