module.exports = () => {
    const hearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn");
    const filledHearts = document.querySelectorAll(".products-small-cards__item-wishlist-btn-filled");
    const texts = document.querySelectorAll(".products-small-cards__item-title");
    

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
<<<<<<< HEAD
      texts[i].classList.add("products-small-cards__item-title--active");
=======
>>>>>>> 4c7cb6e4ad76fb636647e0402f4cd43f73d51b37
      changeFlag[i] = false;
    }
    function unfill(i) {
      hearts[i].classList.add('products-small-cards__item-wishlist-btn--active');
      filledHearts[i].classList.remove('products-small-cards__item-wishlist-btn--active');
<<<<<<< HEAD
      texts[i].classList.remove('products-small-cards__item-title--active');
=======
>>>>>>> 4c7cb6e4ad76fb636647e0402f4cd43f73d51b37
      changeFlag[i] = true;
    }
}