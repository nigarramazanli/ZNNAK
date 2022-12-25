import './GridDefaultListItem.scss';
import like from './components/photo/heart.png';
import shop from './components/photo/shop.png';
import zoom from './components/photo/zoom.png';

interface GridDefaultListItemProps {
  img: string;
  title: string;
  newprice: string;
  oldprice: string;
}

export const GridDefaultListItem = (props: GridDefaultListItemProps) => {
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
          <div className="color-button-grid">
            <button className="button-orange"></button>
            <button className="button-pink"></button>
            <button className="button-blue"></button>
          </div>
          </div>
          <div className="price-grid">
            <p>${newprice}</p>
            <del>${oldprice}</del>
          </div>
          <div className='text-grid'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est<br/> adipiscing in phasellus non in justo.</p>
          </div>
        </div>
        <div className="iconss-grid">
          <img src={shop} alt="" className="icon-button" />
          <img src={zoom} alt="" className="icon-button" />
          <img src={like} alt="" className="icon-button" />
        </div>
      </div>
    </>
  );
};
