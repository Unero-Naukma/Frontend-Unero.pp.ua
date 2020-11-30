import React from "react";
import Item from "./item";
import "./style.scss";

class Select extends React.Component {
  state = {
    activePos: 0
  }

  changeActive = (key) => {
    this.setState(() => ({ activePos: key }));
  }

  render() {
    const {name, items} = this.props;
    const {activePos} = this.state;
    const lengths = items.map((item) => item.length);
    const maxWord = Math.max.apply(Math, lengths);
    const countOfSpaces = maxWord - items[activePos].length;
    let spaces = "";
    console.log(activePos);
    for (let i = 0; i < countOfSpaces; i++) {
      spaces += "  ";
    }
    let key = 0;

    function checkForActive(key) {
      if ((key -1) === activePos) return true;
      return false;
    }

    return (
      <div className="select">
        <div className="select__wrapper">
          <p className="select__name">{name}:</p>
          <pre className="select__active-item">{items[activePos] + spaces}</pre>
          <span className="select__arrow"></span>
        </div>
        <ul className="select__items">{items.map((item) => <Item changeActive={this.changeActive} index={key++} item={item} active={checkForActive(key)} key={item + key}></Item>)}</ul>
      </div>
    );
  };
}

export default Select;