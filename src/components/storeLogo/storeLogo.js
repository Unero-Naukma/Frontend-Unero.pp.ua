import React from 'react';

const StoreLogo = ({classList}) => {
  const classes = `store-logo  unselectable  ${classList}`;
  return (
    <p className={classes}>Unero</p>
  );
};

export default StoreLogo;
