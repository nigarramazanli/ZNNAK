import './Playwood.scss';
import facebook from './photos/Group 202.svg';
import heart from './photos/Vector (5).svg';
import instagram from './photos/Group 203.svg';
import leftimg1 from '../../../HomePage/components/FeaturedProducts/chair1.png';
import leftimg2 from '../../../HomePage/components/FeaturedProducts/chair2.png';
import leftimg3 from '../../../HomePage/components/FeaturedProducts/chair3.png';
import rightimg from '../../../HomePage/components/hero/photo/armchair.png';
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
          <span className="price-cat-tag">$55.00</span>
          <span className="price-pink">
            <del>
              <b>$75.00</b>
            </del>
          </span>
          <p className="color-blue">
            <b>Color</b>
          </p>
          <p className="playwood-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
            volutpat sit.
          </p>
          <div className="add-to-card">
            <p>Add To Cart</p>
            <img src={heart} alt="" />
          </div>
          <p className="price-cat-tag">
            <b>Categories:</b>
          </p>
          <p className="price-cat-tag">
            <b>Tags</b>
          </p>
          <div className="sharing">
            <span className="price-cat-tag">
              <b>Share</b>
            </span>
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
