import React from "react";
import "./style.scss";

const FormsItem = ({nameText,placeText,}) => {
  return(
    <div className="form">
      <label>{nameText}<span className="dot">*</span>
       <br />
       <input type="text" name="your-name" defaultValue size={40} className="form-input-text" value="" placeholder={placeText} />
     </label>      
    </div>
  );
    
};

export default FormsItem;