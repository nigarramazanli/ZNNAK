import './Playwood.scss';
import facebook from './photos/Group 202.svg';
import heart from './photos/Vector (5).svg';
import instagram from './photos/Group 203.svg';
import leftimg1 from './photos/Rectangle 134.png';
import leftimg2 from './photos/Rectangle 136.png';
import leftimg3 from './photos/Rectangle 137.png';
import rightimg from './photos/Rectangle 138.png';
import twitter from './photos/Group 204.svg';

export const Playwood = () => {
  return (
    <div className="playwood-container">
      <div className="playwood">
        <div className="image-first-column">
          <img src={leftimg1} alt="" />
          <img src={leftimg2} alt="" />
          <img src={leftimg3} alt="" />
        </div>
        <div className="image-second-column">
          <img src={rightimg} alt="" />
        </div>
        <div className="playwood-arm-chair">
          <h1>Playwood arm chair</h1>
          <div className="rating" data-total-value="0">
            <div className="stars" data-item-value="5">
              ★
            </div>
            <div className="stars" data-item-value="4">
              ★
            </div>
            <div className="stars" data-item-value="3">
              ★
            </div>
            <div className="stars" data-item-value="2">
              ★
            </div>
            <div className="stars" data-item-value="1">
              ★
            </div>
          </div>
          <span className="twenty-two">(22)</span> <br />
          <span className="price-cat-tag">$32.00</span>
          <span className="price-pink">$32.00</span>
          <p className="color-blue">Color</p>
          <p className="playwood-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
            volutpat sit.
          </p>
          <div className="add-to-card">
            <p>Add To Cart</p>
            <img src={heart} alt="" />
          </div>
          <p className="price-cat-tag">Categories:</p>
          <p className="price-cat-tag">Tags</p>
          <div className="sharing">
            <span className="price-cat-tag">Share</span>
            <div className="social-media-icons">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
