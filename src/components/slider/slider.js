import React from 'react';
import Slider from "react-slick";
import './style.scss';



const photos = [
  {
    name: 'Photo 1',
    url: "http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/03/sl-home1.jpg"
  },
  {
    name: 'Photo 2',
    url: "http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/03/sl-home2.jpg"
  }
];



const PhotoSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slider"
  };
  return (
    <Slider {...settings}>
      {photos.map((photo) => {
        return (
          <div className="item">
            <img width="100%" src={photo.url} />
          </div>
        )
      })}
    </Slider>
  );

};


const Photo = () => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const leftArrow = document.querySelector('.slick-prev');
    const rightArrow = document.querySelector('.slick-next');
  
    leftArrow.textContent = "";
    rightArrow.textContent = "";
  });
    
  
 
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slider"
  };

  return (
    <Slider {...settings}>
      {photos.map((photo) => {
        return (
          <div className="item">
            <img width="100%" src={photo.url} />
          </div>
        )
      })}
    </Slider>
  );
};
export default Photo;
