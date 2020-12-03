import React, {Component} from 'react';

import './style.scss';

export default class InputCustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ``,
      toggleHidden: true,
      searchFocus: false,
      searchResult: this.getMatches(``)
    };
    this.getMatches = this.getMatches.bind(this);
    this.onToggleFocus = this.onToggleFocus.bind(this);
    this.onToggleBlur = this.onToggleBlur.bind(this);
    this.onSearchFocus = this.onSearchFocus.bind(this);
    this.onSearchBlur = this.onSearchBlur.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onOptionSelected = this.onOptionSelected.bind(this);
  }

  //  props = value, options, name, parentId, multiple, onChange

  onToggleFocus() {
    this.setState((state) => ({
      toggleHidden: !state.toggleHidden
    }));
  }

  onToggleBlur(e) {
    e.preventDefault();
    this.setState((state) => {
      return {
        toggleHidden: (!state.searchFocus)
      };
    });
  }

  onSearchFocus() {
    this.setState({
      searchFocus: true,
      toggleHidden: false
    });
  }

  onSearchBlur() {
    this.setState({
      searchFocus: false,
      toggleHidden: true
    });
  }

  onSearchChange(e) {
    this.setState(() => {
      return ({
        searchResult: this.getMatches(e.target.value),
        searchValue: e.target.value
      });
    });
  }

  getMatches(search) {
    return this.props.options.filter((item) => item.toLowerCase().match(search.toLowerCase() + `.*`));
  }

  onOptionSelected(newValue) {

    this.props.onChange(newValue, this.props.name, this.props.parentId);
    this.setState({
      searchValue: ``,
      toggleHidden: false
    });
  }

  render() {
    const toggleClass = `input-select__toggle` + (this.state.toggleHidden ? `   input-select__toggle--hidden` : ``);
    const inputSelectClass = `input-select` + (!this.state.toggleHidden ? `  input-select--toggle` : ``);
    const headerClass = `input-select__header` + (!this.state.toggleHidden ? `   input-select__header--toggle` : ``);
    const value = (this.props.value !== ``) ? this.props.value : (`Enter your ${this.props.name}`);

    const optionsList = this.state.searchResult.map((item, index) => {
      const itemClass = `input-select__options-item` + (item === value ? `  input-select__options-item--selected` : ``);
      return (
        <li
          onMouseDown={() => this.onOptionSelected(item)}
          key={index}
          className={itemClass}>{item}
        </li>
      )
    });

    return (
      <div
        className={inputSelectClass}>
        <div
          onMouseDown={this.onToggleFocus}
          onBlur={this.onToggleBlur}
          className={headerClass}>{value}</div>
        <div className={toggleClass}>
          <input
            value={this.state.searchValue}
            type="text"
            onChange={this.onSearchChange}
            onMouseDown={this.onSearchFocus}
            onBlur={this.onSearchBlur}
            autoComplete="off"
            className="input-select__search-input"
          />
          <ul className="input-select__options-list">
            {optionsList}
          </ul>
        </div>
      </div>
    );
  }
}
