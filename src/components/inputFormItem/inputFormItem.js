import React from 'react';

import InputText from '../inputText';
import InputSelect from '../inputSelect';

const InputFormItem = ({item: {header, isNecessary, fields}, id, onChange}) => {

  let className = `profile-list__multiple-items`;


  let inputFields = [];
  Object.keys(fields).map((key, index) => {
    switch (fields[key].type) {
      case `text`:
        inputFields.push(
            <InputText
              key={index}
              parentId={id}
              onChange={onChange}
              value={fields[key].value}
              name={key}
              placeholder={fields[key].placeholder}
            />
        );
        break;
      case `select`:
        inputFields.push(
            <InputSelect
              key={index}
              parentId={id}
              onChange={onChange}
              name={key}
              value={fields[key].value}
              options={fields[key].options}
            />
        );
        break;
      default:
        inputFields.push(<input id={key.id} className="" type="text" placeholder="This should be input"/>);
    }
  });

  return (
    <label className="profile-list__item">
      <div className="profile-list__item-name">{header}{isNecessary && <span className="profile-list__star">*</span>}</div>
      {inputFields}
    </label>
  );
};

export default InputFormItem;
