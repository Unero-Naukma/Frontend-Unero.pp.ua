import React, {Component} from 'react';

import CartHeader from '../cartHeader';
import CartItemsList from '../cartItemsList';
import CalculateShipping from '../cartCalculateShipping';
import CartButtons from '../cartButtons';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {itemName: `B&O Play Wireless SPeaker`, price: 65, qty: 1, id: 0},
        {itemName: `Liquid Unero Ginger Lily`, price: 40, qty: 2, id: 1},
        {itemName: `Simple Fabric Bag`, price: 41, qty: 1, id: 2},
        {itemName: `Incrediable good`, price: 55.55, qty: 2, id: 3},
        {itemName: `Great imagination`, price: 110, qty: 3, id: 4}
      ],
      isExpress: false
    };

    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.setShipping = this.setShipping.bind(this);
    this.proceed = this.proceed.bind(this);
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
      const newItems = items.length > 1 ? [...items.slice(0, id), ...items.slice(id + 1)] : [];
      return {
        items: newItems
      };
    });
  }

  clearAll() {
    if (this.state.items.length < 1) {
      return;
    }
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

  proceed(total) {
    console.log(`Proceeded, total is: ${total}`);
  }

  render() {
    const {items, isExpress} = this.state;
    const subtotal = items.reduce((sum, {price, qty}) => sum + qty * price, 0);
    const empty = items.length < 1;
    return (
      <div>
        <CartHeader/>
        <CartItemsList
          cartItems={items}
          decreaseQty={this.decreaseQty}
          increaseQty={this.increaseQty}
          deleteItem={this.deleteItem}/>
        <CartButtons
          clearAll={this.clearAll}
          empty={empty}/>
        <CalculateShipping
          subtotal={subtotal}
          isExpress={isExpress}
          setShipping={this.setShipping}
          proceed={this.proceed}
          hidden={empty}/>
      </div>
    );
  }
}

export default CartPage;
