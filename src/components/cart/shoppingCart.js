import React, {Component} from 'react';

import CartHeader from '../cartHeader';
import CartItems from '../cartItems';
import CalculateShipping from '../cartCalculateShipping';
import CartButtons from '../cartButtons';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: `B&O Play Wireless SPeaker`, price: 65, qty: 1, id: 0},
        {name: `Liquid Unero Ginger Lily`, price: 40, qty: 2, id: 1},
        {name: `Simple Fabric Bag`, price: 41, qty: 1, id: 2},
        {name: `Incrediable good`, price: 55.55, qty: 2, id: 3},
        {name: `Great imagination`, price: 110, qty: 3, id: 4}
      ],
      isExpress: false
    };

    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.setShipping = this.setShipping.bind(this);
  }

  increaseQty(id) {
    this.setState(({items}) => {
      let newItems = [...items];
      newItems[id].qty++;
      return {
        items: newItems
      };
    });
  }

  decreaseQty(id) {
    this.setState(({items}) => {
      let newItems = [...items];
      newItems[id].qty -= newItems[id].qty > 1 ? 1 : 0;
      return {
        items: newItems
      };
    });
  }

  deleteItem(id) {
    this.setState(({items}) => {
      const newItems = [...items.slice(0, id), ...items.slice(id + 1)];
      return {
        items: newItems
      };
    });
  }

  clearAll() {
    this.setState(() => {
      return {
        items: []
      };
    });
  }

  setShipping() {
    this.setState(({isExpress}) => {
      return {
        isExpress: !isExpress
      };
    });
  }
x
  render() {
    const {items, isExpress} = this.state;
    const subtotal = items.reduce((sum, {price, qty}) => sum + qty * price, 0);
    return (
      <div>
        <CartHeader/>
        <CartItems
          cartItems={items}
          decreaseQty={this.decreaseQty}
          increaseQty={this.increaseQty}
          deleteItem={this.deleteItem}/>
        <CartButtons clearAll={this.clearAll}/>
        <CalculateShipping
          subtotal={subtotal}
          isExpress={isExpress}
          setShipping={this.setShipping}/>
      </div>
    );
  }
}

export default CartPage;
