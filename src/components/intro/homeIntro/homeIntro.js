import React from 'react';
import "./style.scss";
import Slider from "../../slider/";
import pic1 from "../../../assets/images/collection.png";
import pic2 from "../../../assets/images/collection.png";
import pic3 from "../../../assets/images/collection.png";

const pic1Alt = `collection1`;
const pic2Alt = `collection2`;
const pic3Alt = `collection3`;


const HomeIntro = () => {
  return (
    <section className="intro">
      <input type="radio" className="intro__radio-button" id="btn-1" name="field" defaultChecked />
      <input type="radio" className="intro__radio-button" id="btn-2" name="field" />
      <input type="radio" className="intro__radio-button" id="btn-3" name="field" />
      <div className="intro__collection-wrapper">
        <Slider/>
        <ul className="intro__collection-list">
          <li className="intro__collection-item">
            <a href="#"><img src={pic1} alt={pic1Alt}></img></a>
          </li>
          <li className="intro__collection-item">
            <a href="#"><img src={pic2} alt={pic2Alt}></img></a>
          </li>
          <li className="intro__collection-item">
            <a href="#"><img src={pic3} alt={pic3Alt}></img></a>
          </li>
        </ul>
      </div>
      <div className="intro__dots">
        <label className="intro__dots-item" htmlFor="btn-1"><div /></label>
        <label className="intro__dots-item" htmlFor="btn-2"><div /></label>
        <label className="intro__dots-item" htmlFor="btn-3"><div /></label>
      </div>
    </section>
  );
};

export default HomeIntro;
