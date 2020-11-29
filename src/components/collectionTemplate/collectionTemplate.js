import React from 'react';
import 'style.scss'
const CollectionTemplatePhotos = () => {
  return(
    <section className>
        <div className="page-header-portfolio" style={{backgroundPosition: '50% 0px'}}>
          <div className="page-header-content">
            <h1 style={{fontWeight: 400}}>Simple Decor Lookbook</h1>
          </div>
        </div>
        <div className="page-header-container">
          <div className="page-header-space">
            <div className="page-header-text_item">
              <p style={{margin: '25px 0'}}><strong><span style={{color: '#000000'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dunt ut laoreet dolore magna aliquam. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</span></strong></p>
              <p style={{margin: '25px 0'}}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdie.</p>
            </div>
          </div>
          <div className="page-header-photo">
            <div className="page-header-photo_item">
              <img className src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/04/d2-570x570.jpg" alt="d2" title="d2" />
            </div>
            <div className="page-header-photo_item">
              <img className src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/04/d3-570x570.jpg" alt="d3" title="d3" />
            </div>
          </div>
          <div className="page-header-space">
            <div className="page-header-text_item">
              <p style={{margin: '25px 0'}}><span style={{color: '#000000'}}><strong>Items In This Collection</strong></span> <br /> Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth.</p>
            </div>
          </div>
          <ul className="products-small-cards">
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <div className="products-small-cards__stars">
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--grey">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <span className="products-small-cards__stars-count">4</span>
                  </div>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <div className="products-small-cards__stars">
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <svg className="products-small-cards__star  products-small-cards__star--yellow">
                      <use xlinkHref="#star-icon" />
                    </svg>
                    <span className="products-small-cards__stars-count">7</span>
                  </div>
                  <div className="products-small-cards__item-text-block-discount">
                    <p className="products-small-cards__item-discount">$36.00</p>
                    <p className="products-small-cards__item-price  products-small-cards__item-price--discount">$47.50</p>
                  </div>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <div className="products-small-cards__item-text-block-discount">
                    <p className="products-small-cards__item-discount">$50.00</p>
                    <p className="products-small-cards__item-price  products-small-cards__item-price--discount">$80.00</p>
                  </div>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
            <li className="products-small-cards__item">
              <img src="../assets/img/TempProduct.png" alt="Product image" className="products-small-cards__item-image" />
              <div className="products-small-cards__item-all-info">
                <div className="products-small-cards__item-text-block">
                  <a href className="products-small-cards__item-title">Miliraty Backpack</a>
                  <p className="products-small-cards__item-price">$36.00</p>
                </div>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active">
                  <use xlinkHref="#wishlist-icon" />
                </svg>
                <svg className="products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled">
                  <use xlinkHref="#wishlist-filled-icon" />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </section>
  );
};

export default CollectionTemplatePhotos;