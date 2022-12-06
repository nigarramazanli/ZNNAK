import './Footer.scss';
import Facebook from './Facebook.svg';
import Instagram from './Instagram.svg';
import Twitter from './Twitter.svg';
import hekto from './Hektoo.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="foot-main">
        <div className="foot-first">
          <div className="foot-part-one">
            <img className="hektoone" src={hekto} alt="" />
            <form className="formone" action="">
              <input className="inpone" type="text" placeholder="Enter Email Address" name="search" id="" />
              <button className="butone" type="submit">
                Sign Up{' '}
              </button>
            </form>
            <p className="contactinfo">Contact Info</p>
            <p className="address">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="two-three-four">
            <div className="foot-part-two">
              <p className="blackpart">Catagories</p>
              <p className="textpart">Laptops & Computers</p>
              <p className="textpart">Cameras & Photography</p>
              <p className="textpart">Smart Phones & Tablets</p>
              <p className="textpart">Video Games & Consoles</p>
              <p className="textpart">Waterproof Headphones</p>
            </div>
            <div className="foot-part-three">
              <p className="blackpart">Customer Care</p>
              <p className="textpart">My Account</p>
              <p className="textpart">Discount</p>
              <p className="textpart">Returns</p>
              <p className="textpart">Orders History</p>
              <p className="textpart">Order Tracking</p>
            </div>
            <div className="foot-part-four">
              <p className="blackpart">Pages</p>
              <p className="textpart">Blog</p>
              <p className="textpart">Browse the Shop</p>
              <p className="textpart">Category</p>
              <p className="textpart">Pre-Built Pages</p>
              <p className="textpart">Visual Composer Elements</p>
              <p className="textpart">WooCommerce Pages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-second">
        <div className="foot-second-main">
          <div className="foot-second-root">
            <p className="rights">©Webecy - All Rights Reserved</p>
            <div className="ikons">
              <img className="ikon" src={Facebook} alt="" />
              <img className="ikon" src={Instagram} alt="" />
              <img className="ikon" src={Twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
