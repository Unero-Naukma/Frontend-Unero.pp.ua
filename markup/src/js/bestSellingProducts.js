'use strict';

export function bestSellingProducts() {
  const unfilledhearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn--unfilled");
  const filledHearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn--filled");

  let changeFlag = [];
  for (let i = 0; i < unfilledhearts.length; i++) {
    changeFlag[i] = true;
  }

  const handleClick = (i) => {
    if (changeFlag[i]) {
      fill(i);
    } else {
      unfill(i);
    }
  }

  for (let i = 0; i < unfilledhearts.length; i++) {
    unfilledhearts[i].addEventListener("click", () => (handleClick(i)));
    filledHearts[i].addEventListener("click", () => (handleClick(i)));
  }

  function fill(i) {
    filledHearts[i].classList.toggle('products-small-cards__item-wishlist-btn--active');
    unfilledhearts[i].classList.toggle('products-small-cards__item-wishlist-btn--active');
    changeFlag[i] = false;
  }

  function unfill(i) {
    unfilledhearts[i].classList.toggle('products-small-cards__item-wishlist-btn--active');
    filledHearts[i].classList.toggle('products-small-cards__item-wishlist-btn--active');
    changeFlag[i] = true;
  }
}