import React from 'react';
import "./style.scss";
import {ReactComponent as StarIcon} from '../../assets/images/star-icon.svg';

const Stars = ({productGrade}) => {
  const starClasses = [];
  for (let i = 0; i < 5; i++) {
    if (i < productGrade) {
      starClasses[i] = `products-small-cards__star--yellow`;
    } else {
      starClasses[i] = `products-small-cards__star--grey`;
    }
  }
  return (      
    <>
      <StarIcon className={`products-small-cards__star  ${starClasses[0]}`}/>
      <StarIcon className={`products-small-cards__star  ${starClasses[1]}`}/>
      <StarIcon className={`products-small-cards__star  ${starClasses[2]}`}/>
      <StarIcon className={`products-small-cards__star  ${starClasses[3]}`}/>
      <StarIcon className={`products-small-cards__star  ${starClasses[4]}`}/>
    </>
  );
};

export default Stars;
