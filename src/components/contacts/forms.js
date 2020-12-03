import React from "react";
import FormsItem from "./formsItem";
import "./style.scss";

const Forms = () => {
  return(
    <div className="form-container">
      <FormsItem nameText="Name" placeText="Enter your name"/>
      <FormsItem nameText="Email" placeText="Enter your email"/>
      <FormsItem nameText="Subject" placeText=""/>
     </div>
  );
    
};

export default Forms;