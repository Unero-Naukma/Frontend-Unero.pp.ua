import React from 'react';

const InputSelect = ({options, name, value, onChange, parentId, multiple}) => {

  const optionsList = options.map((option, index) => <option key={index} className="" value={option}>{option}</option>);

  let selectClass = `profile-list__item-input  profile-list__item-select`;

  if (multiple) {
    selectClass += `  profile-list__input-multiple`;
  }

  return (
    <div className="profile-list__select-wrapper">
      <select
        value={value}
        name={name}
        onChange={(e) => onChange(e, parentId)}
        className={selectClass}>
        {optionsList}
      </select>
    </div>
  );
};

export default InputSelect;
