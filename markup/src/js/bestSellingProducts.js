module.exports = () => {
    const hearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn");
    const filledHearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn-filled");
    

      for(let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener("click", function() {
        if(changeFlag[i]) {
            fill(i);
        } else {
            unfill(i);
        }
    });
        filledHearts[i].addEventListener("click", function() {
        if(changeFlag[i]) {
            fill(i);
        } else {
            unfill(i);
        }
    });
      }
    
    let changeFlag = [16];
    for(let i = 0; i < hearts.length; i++) {
      changeFlag[i] = true;
    }
    function fill(i) {
      filledHearts[i].classList.add('products-small-cards__item-wishlist-btn--active');
      hearts[i].classList.remove('products-small-cards__item-wishlist-btn--active');
      changeFlag[i] = false;
    }
    function unfill(i) {
      hearts[i].classList.add('products-small-cards__item-wishlist-btn--active');
      filledHearts[i].classList.remove('products-small-cards__item-wishlist-btn--active');
      changeFlag[i] = true;
    }
}