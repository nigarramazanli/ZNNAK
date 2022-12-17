import './GridDefaultItem.scss';
import like from './components/photo/heart.png';
import shop from './components/photo/shop.png';
import zoom from './components/photo/zoom.png';

interface GridDefaultItemProps {
  img: string;
  title: string;
  newprice: string;
  oldprice: string;
}

export const GridDefaultItem = (props: GridDefaultItemProps) => {
  const { img, title, newprice, oldprice } = props;
  return (
    <>
      <div className="boxes-grid">
        <div className="chair-box-grid">
          <div className="background-color">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about-grid">
          <div className="about-title-grid">
            <h3>{title}</h3>
          </div>
          <div className="color-button-grid">
            <button className="button-orange"></button>
            <button className="button-pink"></button>
            <button className="button-blue"></button>
          </div>
          <div className="price-grid">
            <p>${newprice}</p>
            <del>${oldprice}</del>
          </div>
        </div>
        <div className="icon-grid">
          <img src={shop} alt="" className="icon-button" />
          <img src={zoom} alt="" className="icon-button" />
          <img src={like} alt="" className="icon-button" />
        </div>
      </div>
    </>
  );
};
