import React, {Component} from 'react';

import WishlistList from '../wishlistList';
import WishlistHeader from '../wishlistHeader';

import './wishlist.scss';

import itemsData from './itemsData.json';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsData
    };

    this.addToCart = this.addToCart.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addToCart(id) {
    console.log("Added to cart " + this.state.items[id].itemName);
  }

  deleteItem(id) {
    this.setState(({items}) => {
      const newItems = [...items.slice(0, id), ...items.slice(id + 1, items.length)];
      return {
        items: newItems
      };
    });
  }

  render() {
    return (
      <>
        <WishlistHeader/>
        <WishlistList items={this.state.items} addToCart={this.addToCart} deleteItem={this.deleteItem}/>
      </>
    );
  }
}
