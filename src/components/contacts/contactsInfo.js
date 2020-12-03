import React from "react";
import ContactsInfoItem from "./contactsInfoItem";
import Phone from "../../assets/images/phone.png";
import Dot from "../../assets/images/point.png";
import Email from "../../assets/images/email.png";
import "./style.scss";

const ContactsInfo = () => {
  return(
    <div className="three-item-container">
    <ContactsInfoItem imageSrc={Phone} mainText="Phone" allText1="Phone 01: (0091) 8547 632521" allText2="Phone 02: (084) 965 4788"/>
    <ContactsInfoItem imageSrc={Dot} mainText="Address" allText1="69 Halsey St, New York, Ny 10002," allText2="United States."/>
    <ContactsInfoItem imageSrc={Email} mainText="Email" allText1="support.center@unero.co" allText2="hello@unero.co"/>
  </div>
  );
    
};

export default ContactsInfo;