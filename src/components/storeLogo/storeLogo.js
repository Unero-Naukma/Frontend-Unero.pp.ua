import React from 'react';
import './style.scss';

const StoreLogo = ({className}) => {
  const classes = `store-logo  unselectable  ${className}`;
  return (
    <p className={classes}>Unero</p>
  );
};

export default StoreLogo;
