import React from 'react';

const TextInput = ({placeholder, name, value, onChange, parentId}) => (
  <input
    onChange={(e) => onChange(e, parentId)}
    value={value}
    name={name}
    placeholder={placeholder}
    type="text"
    className="profile-list__item-input"
  />
);

export default TextInput;
