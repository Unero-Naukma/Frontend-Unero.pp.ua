import React from 'react';

import InputText from '../inputText';
import InputSelect from '../inputSelect';

const InputFormItem = ({item: {header, isNecessary, fields}, id, onChange}) => {

  let labelClass = `profile-list__item`;

  let star = <></>;
  if (isNecessary === `true`) {
    star = <span className="profile-list__star">*</span>;
  }

  const inputNames = Object.keys(fields);

  const multiple = inputNames.length > 1;

  if (multiple) {
    labelClass += `  profile-list__item-multiple`;
  }

  let inputFields = [];
  inputNames.map((key, index) => {
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
              multiple={multiple}
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
              multiple={fields.length > 1}
            />
        );
        break;
      default:
        inputFields.push(<input id={key.id} className="" type="text" placeholder="This should be input"/>);
    }
  });

  return (
    <label className={labelClass}>
      <div className="profile-list__item-name">{header}{star}</div>
      {inputFields}
    </label>
  );
};

export default InputFormItem;
