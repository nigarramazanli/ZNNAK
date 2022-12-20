import './DiscountItem.scss';
import item from './photo/vector-2.png';
import tortuga from './photo/tortuga-01-b 1.png';
export const DiscountItem = () => {
  return (
    <div className="discount-general-container">
      <div className="discount-general">
        <h1>Discount Item</h1>
        <div className="three-phrases">
          <p>Wood Chair</p>
          <p>Plastic Chair</p>
          <p>Sofa Colletion</p>
        </div>
        <div className="Products-sofa">
          <div className="products">
            <p className="n1">20% Discount Of All Products</p>
            <p className="n2">Eams Sofa Compact</p>
            <p className="n3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              <br /> feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="products-properties">
              <div className="products-properties-left">
                <div className="left-u">
                  <img src={item} alt="..." />
                  <span>Material expose like metals</span>
                </div>
                <div className="left-d">
                  <img src={item} alt="..." />
                  <span>Simple neutral colours.</span>
                </div>
              </div>
              <div className="products-properties-right">
                <div className="right-u">
                  <img src={item} alt="..." />
                  <span>Clear lines and geomatric figures</span>
                </div>
                <div className="right-d">
                  <img src={item} alt="..." />
                  <span>Material expose like metals</span>
                </div>
              </div>
            </div>
            <button className="shopname">Shop now</button>
          </div>
          <div className="sofa">
            <div className="sofa-circle">
              <img className="tortuga" src={tortuga} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
