import React from "react";

import "./style.scss";
import PriceItem from './priceItem';

class Price extends React.Component {
  state = {
    activeItem: 0
  }
  changeActive = (key) =>  {
    this.setState(() => ({activeItem: key}));
  }
  render() {
    const {activeItem} = this.state;
    function checkForActive(key) {
      return key == activeItem;
    }

    return (
      <ul className="desktop__second-filters-price-values">
        <PriceItem name="$0.00 - $50.00" active={checkForActive(0)} index="0" changeActive={this.changeActive}/>
        <PriceItem name="$50.00 - $100.00" active={checkForActive(1)} index="1" changeActive={this.changeActive}/>
        <PriceItem name="$100.00 - $150.00" active={checkForActive(2)} index="2" changeActive={this.changeActive}/>
        <PriceItem name="$150.00 - $200.00" active={checkForActive(3)} index="3" changeActive={this.changeActive}/>
        <PriceItem name="$200.00+" active={checkForActive(4)} index="4" changeActive={this.changeActive}/>
      </ul>
    );
  };
}

export default Price;