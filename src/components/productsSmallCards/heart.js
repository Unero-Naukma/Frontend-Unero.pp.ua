import React from 'react';
import "./style.scss";
import { ReactComponent as HeartIcon } from '../../assets/images/wishlist-icon.svg';
import { ReactComponent as FilledHeartIcon } from '../../assets/images/wishlist-fill-icon.svg';

class Heart extends React.Component {
  state = {
    isFilled: false
  }

  toggleHeart = () => {
    this.setState((state) => ({ isFilled: !state.isFilled }));
  }

  bigger = "";
  constructor(props) {
    super(props);
    if (props.big) {
      this.bigger = "big";
    }
  }

  render() {
    if (!this.state.isFilled) {
      return <HeartIcon onClick={this.toggleHeart} className={`products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active  ${this.bigger}`} />;
    } else {
      return <FilledHeartIcon onClick={this.toggleHeart} className={`products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled  products-small-cards__item-wishlist-btn--active  ${this.bigger}`} />;
    }
  }
}

export default Heart;

