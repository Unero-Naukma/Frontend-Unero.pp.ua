import React, {Component} from 'react';

import WishlistList from '../wishlistList';
import WishlistHeader from '../wishlistHeader';

import './wishlist.scss';

class WishlistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {itemName: `B&O Play Wireless SPeaker`, price: 75, inStock: true},
        {itemName: `Liquid Unero Ginger Lily`, price: 205, discount: 35, inStock: false},
        {itemName: `Simple Fabric Bag`, price: 47, inStock: true},
        {itemName: `Wood Simple Chair`, price: 205, inStock: true}
      ]
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({items}) => {
      const newItems = [...items.slice(0, id), ...items.slice(id + 1, items.length)];
      console.log(id);
      return {
        items: newItems
      };
    });
  }

  render() {
    return (
      <>
        <WishlistHeader/>
        <WishlistList items={this.state.items} deleteItem={this.deleteItem}/>
      </>
    );
  }
}

export default WishlistPage;
