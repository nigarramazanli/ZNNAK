import fav from './fav.png';
import search from './search.png';
import shop from './shop.png';

interface ILatestProductProps {
  imgSrc: string;
  title: string;
  imgclass: string;
  newPrice: number;
  price: number;
}

export const LatestProduct = (props: ILatestProductProps) => {
  const { imgSrc, title, imgclass, newPrice, price } = props;
  return (
    <div className="grid-item">
      <div className="cardd">
        <img src={imgSrc} className={imgclass} alt="" />
      </div>
      <div className="icon">
        <div>
          <img src={shop} alt="" />
        </div>
        <img src={fav} alt="" />
        <img src={search} alt="" />
      </div>
      <div>
        <span className="titlee">{title}</span>
        <span className="newprice">${newPrice}.00</span>
        <span className="price">${price}.00</span>
      </div>
    </div>
  );
};
