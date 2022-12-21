import lupaplus from './lupaplus.png';
import marketarabasi from './marketarabasi.png';
import qalp from './qalp.png';

interface IFeaturedProductsProps {
  imgSrc: string;
  title: string;
  code: string;
  price: number;
}

export const FeaturedProduct = (props: IFeaturedProductsProps) => {
  const { imgSrc, title, code, price } = props;
  return (
    <div className="chair-box">
      <div className="greybox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="info">
        <h2>Cantilever chair</h2>
        <div className="colors">
          <button className="green"></button>
          <button className="pink"></button>
          <button className="bluee"></button>
        </div>
        <p>{code}</p>
        <p>${price}.00</p>
      </div>
      <div className="icons">
        <div>
          <img src={marketarabasi} alt="" />
        </div>
        <img src={qalp} alt="" />
        <img src={lupaplus} alt="" />
      </div>
      <button className="buttonnn">View Details</button>
    </div>
  );
};
