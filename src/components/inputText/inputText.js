import React from 'react';

const InputText = ({placeholder, name, value, onChange, parentId, multiple}) => {

  let inputClass = `profile-list__item-input`;

  if (multiple) {
    inputClass += `  profile-list__input-multiple`;
  }

  return (
    <input
      onChange={(e) => onChange(e, parentId)}
      value={value}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      type="text"
      className={inputClass}
    />
  );
};

export default InputText;
