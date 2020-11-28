import React from 'react';

const TextInput = ({item}) => {

  const {header, isNecessary, fields} = item;

  fields = fields.map((item) => {

    const {isSelect, placeholder, options, text} = item;

    return (
      <div></div>
    );
  });

  return (
    <div></div>
  );
};

export default TextInput;
