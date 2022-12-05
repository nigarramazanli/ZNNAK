import "./LatestProducts.css";
import item1 from "./image 1166.png";
import item2 from "./image 15.png";
import item3 from "./image 1168.png";
import item4 from "./image 32.png";
import item5 from "./image 23.png";
import item6 from "./image 3.png";
import sale from "./Group 27.png";
import shop from './fluent_cart-24-regular.png'
import fav from './Vector.png'
import search from './Vector (1).png'

export const LatestProducts = () => {
  return (
    <div className="LatestProducts">
      <h1>Leatest Products</h1>
      <div className="links">
        <a href="#">New Arrival</a>
        <a href="#">Best Seller</a>
        <a href="#">Featured</a>
        <a href="#">Special Offer</a>
      </div>
      <div className="ShopGrid">
        <div className="grid-item">
          <div className="card">
            <img
              src={item1}
              style={{ marginLeft: "73px", marginTop: "33px" }}
            />
          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
        <div className="grid-item">
          <div className="card" style={{ background: "white" }}>
            <img src={sale} style={{marginLeft:'25px', marginTop:'18px',position:'absolute'}}/>
            <div className="icon">
                <div><img src={shop}/></div>
                <img src={fav}/>
                <img src={search}/>
            </div>
            <img
              src={item2}
              style={{ marginLeft: "68px", marginTop: "-215px"  }}
            />

          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src={item3} style={{ marginLeft: "69px", marginTop: "38px" }}/>
          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src={item5} style={{ marginLeft: "54px" }} />
          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
        <div className="grid-item">
          <div className="card">
            <img
              src={item4}
              style={{ marginLeft: "36px", marginTop: "13px" }}
            />
          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src={item6} style={{ marginLeft: "5px", marginTop: "16px" }} />
          </div>
          <span className="title">Comfort Handy Craft</span>
          <span className="newprice">$42.00</span>
          <span className="price">$65.00</span>
        </div>
      </div>
    </div>
  );
};
