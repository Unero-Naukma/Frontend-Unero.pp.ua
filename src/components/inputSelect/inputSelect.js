import React from 'react';

const InputSelect = ({options, name, value, onChange, parentId}) => {

  const optionsList = options.map((option, index) => <option key={index} className="" value={option}>{option}</option>);

  return (
    <div className="profile-list__select-wrapper">
      <select
        value={value}
        name={name}
        onChange={(e) => onChange(e, parentId)}
        className="profile-list__item-input  profile-list__item-select">
        {optionsList}
      </select>
    </div>
  );
};

export default InputSelect;
