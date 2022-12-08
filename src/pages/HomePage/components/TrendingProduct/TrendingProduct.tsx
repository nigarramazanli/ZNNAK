/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './TrendingProduct.scss';
import img1 from './photo/box_for_image.png';
import img2 from './photo/box_for_image(1).png';
import img3 from './photo/box_for_image(2).png';
import img4 from './photo/box_for_image(3).png';
import img5 from './photo/image1161(1).png';
import img6 from './photo/image1162.png';
import img7 from './photo/image7.png';
import img8 from './photo/image8.png';
import img9 from './photo/image9.png';

export const TrendingProduct = () => {
  return (
    <>
      <div className="trending-product">
        <h1 className="header_title">Trending Products</h1>
        <div className="card-group">
          <div className="card">
            <img src={img1} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Cantilever chair</h3>
              <div className="card-text">
                <p>
                  <b>$26.00</b>
                </p>
                <p>
                  <s>$42.00</s>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Cantilever chair</h3>
              <div className="card-text">
                <p>
                  <b>$26.00</b>
                </p>
                <p>
                  <s>$42.00</s>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Cantilever chair</h3>
              <div className="card-text">
                <p>
                  <b>$26.00</b>
                </p>
                <p>
                  <s>$42.00</s>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img4} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Cantilever chair</h3>
              <div className="card-text">
                <p>
                  <b>$26.00</b>
                </p>
                <p>
                  <s>$42.00</s>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="amonfOffers">
          <div className="card_1">
            <div className="card-body">
              <h2 className="card-title">23% off in all products</h2>
              <a href="#">
                <u>Shop Now</u>
              </a>
            </div>
            <div className="card_img">
              <img src={img6} className="card_image" />
            </div>
          </div>
          <div className="card_2">
            <div className="card-body">
              <h2 className="card-title">23% off in all products</h2>
              <a href="#">
                <u>View Collection</u>
              </a>
            </div>
            <div className="card_img">
              <img src={img5} className="card_image" />
            </div>
          </div>
          <div className="executiveChairCard">
            <div className="executiveChair">
              <div className="executiveChair-1">
                <div className="card-left">
                  <img className="chair-image" src={img8} />
                </div>
                <div className="card-right">
                  <h3>Executive Seat chair</h3>
                  <p>
                    {' '}
                    <s>$32.00</s>
                  </p>
                </div>
              </div>
              <div className="executiveChair-2">
                <div className="card-left">
                  <img className="chair-image" src={img9} />
                </div>
                <div className="card-right">
                  <h3>Executive Seat chair</h3>
                  <p>
                    <s>$32.00</s>
                  </p>
                </div>
              </div>
              <div className="executiveChair-3">
                <div className="card-left">
                  <img className="chair-image" src={img7} />
                </div>
                <div className="card-right">
                  <h3>Executive Seat chair</h3>
                  <p>
                    {' '}
                    <s>$32.00</s>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
