import React from 'react';
import './style.scss';
const CollectionTemplatePhotos = () => {
  return(
    <section>
        <div className="page-header-portfolio">
          <div className="page-header-content">
            <h1 className="page-header-content-name">Simple Decor Lookbook</h1>
          </div>
        </div>
        <div className="page-header-container">
          <div className="page-header-space">
            <div className="page-header-text_item">
              <p className="page-header-text_item-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dunt ut laoreet dolore magna aliquam. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
              <p className="page-header-text_item-text">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdie.</p>
            </div>
          </div>
          <div className="page-header-photo">
            <div className="page-header-photo_item">
              <img src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/04/d2-570x570.jpg" alt="d2" title="d2" />
            </div>
            <div className="page-header-photo_item">
              <img src="http://demo2.drfuri.com/unero/wp-content/uploads/sites/2/2017/04/d3-570x570.jpg" alt="d3" title="d3" />
            </div>
          </div>
          <div className="page-header-space">
            <div className="page-header-text_item">
              <p className="page-header-text_item-title">Items In This Collection </p>
              <p className="page-header-text_item-text">Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CollectionTemplatePhotos;