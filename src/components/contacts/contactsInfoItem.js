import React from "react";
import "./style.scss";

const ContactsInfoItem = ({imageSrc, mainText,allText1,allText2}) => {
  return(
    <div className="three-item_space">
      <div className="three-item_item">
        <img src={imageSrc} alt="phoneimage" className="key" />
        <div className="three-item_main_text">{mainText}</div>
        <div className="three-item_all_text">
        <p>{allText1}<br/>{allText2}</p>
        </div>
      </div>
    </div>
  );
    
};

export default ContactsInfoItem;