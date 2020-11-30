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
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeText(e, itemId) {
    this.onChange(e.target.value, e.target.name, itemId);
  }

  onChangeSelect(newValue, name, itemId) {
    this.onChange(newValue, name, itemId);
  }

  onChange(newValue, targetName, itemId) {
    this.setState((state) => {

      state.inputsData[targetName] = newValue;

      const oldItems = state.items;
      let newItem = oldItems[itemId];

      newItem.fields[targetName].value = newValue;

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
    const items = this.state.items.map((item, index) => {
      return <InputFormItem onChangeText={this.onChangeText} onChangeSelect={this.onChangeSelect} id={index} key={index} item={item}/>;
    });

    return (
      <form className="profile-list" onSubmit={(e) => this.onSubmit(e)}>
        {items}
        {
          this.props.save &&
          <input value="Save Changes" type="submit" className="save-changes  save-changes__button"/>
        }
      </form>
    );
  }
}
