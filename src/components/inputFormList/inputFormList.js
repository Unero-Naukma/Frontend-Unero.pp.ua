import React, {Component} from 'react';

import '../myProfileList/profileList.scss';
import '../myProfileSaveChanges/saveChanges.scss';

import InputFormItem from '../inputFormItem';

export default class InputFormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    let inputsData = {};

    this.state.items.map((item) => {
      Object.keys(item.fields).map((key) => {
        inputsData[key] = item.fields[key].value;
      });
    });

    this.state.inputsData = inputsData;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, itemId) {
    this.setState((state) => {
      const newValue = e.target.value;

      state.inputsData[e.target.name] = newValue;

      const oldItems = state.items;
      let newItem = oldItems[itemId];

      newItem.fields[e.target.name].value = newValue;

      const newItems = [...oldItems.slice(0, itemId), newItem, ...oldItems.slice(itemId + 1)];
      return {
        items: newItems
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.inputsData);
  }

  render() {
    const items = this.state.items.map((item, index) =>
      <InputFormItem onChange={this.onChange} id={index} key={index} item={item}/>
    );

    return (
      <div className="main-wrapper">
        <form className="profile-list" onSubmit={(e) => this.onSubmit(e)}>
          {items}
          <input type="submit" className="save-changes  save-changes__link"></input>
        </form>
      </div>
    );
  }
}
