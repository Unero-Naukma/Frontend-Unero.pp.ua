import React from 'react';
import './style.scss';
import PhotoSlider from "../slider/";


const Collections = () => {
  return (
    <div className="collections">
      <h1 className="collections__title">Collections</h1>
      <PhotoSlider/>
    </div>
  );
};

export default Collections;