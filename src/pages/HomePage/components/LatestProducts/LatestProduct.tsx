import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../ShoppingCarts/cartSlice';
import fav from './fav.png';
import search from './search.png';
import shop from './shop.png';

interface ILatestProductProps {
  imgSrc: string;
  title: string;
  imgClass: string;
  newPrice: number;
  price: number;
}
const product = {
      
};

export const LatestProduct = (props: ILatestProductProps) => {
  const { imgSrc, title, imgClass, newPrice, price } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    //dispatch(addProductToCart(product));
  };

  return (
    <div className="grid-item">
      <div className="card">
        <img src={imgSrc} className={imgClass} alt="" />
      </div>
      <div className="icon">
        <button className="add-to-cart" onClick={handleAddToCart}>
          <img src={shop} alt="" />
        </button>
        <button className="add-to-favorite">
          <img src={fav} alt="" />
        </button>
        <button className="add-to-compare">
          <img src={search} alt="" />
        </button>
      </div>
      <div>
        <span className="titlee">{title}</span>
        <span className="newprice">${newPrice}.00</span>
        <span className="price">${price}.00</span>
      </div>
    </div>
  );
};
