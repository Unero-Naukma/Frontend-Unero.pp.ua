import React, {Component} from 'react';

import '../myProfileList/style.scss';
import '../myProfileSaveChanges/style.scss';

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
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChange = this.onChange.bind(this);
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
      this.props.onChange(state.inputsData);

      const oldItems = state.items;
      let newItem = oldItems[itemId];

      newItem.fields[targetName].value = newValue;

      const newItems = [...oldItems.slice(0, itemId), newItem, ...oldItems.slice(itemId + 1)];
      return {
        items: newItems
      };
    });
  }

  render() {
    const items = this.state.items.map((item, index) => {
      if (item.fields["state"] === undefined) {
        return <InputFormItem onChangeText={this.onChangeText} onChangeSelect={this.onChangeSelect} id={index} key={index} item={item}/>;
      }
      else if (this.state.inputsData["country"] === "United States of America") {
        return <InputFormItem onChangeText={this.onChangeText} onChangeSelect={this.onChangeSelect} id={index} key={index} item={item}/>;
      } else {
        return <></>
      }
    });

    return (
      <form id="input-form" className="profile-list" onSubmit={(e) => this.props.onSubmit(e, this.state.inputsData)}>
        {items}
        {
          this.props.save &&
          <input value="Save Changes" type="submit" className="save-changes  save-changes__button"/>
        }
      </form>
    );
  }
}
