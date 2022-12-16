import './FeaturedProducts.scss';
import { FeaturedProduct } from './FeaturedProduct';
import Rectangle1 from './Rectangle pink.png';
import Rectangle2 from './Rectangle pinkk.png';
import chair1 from './chair1.png';
import chair2 from './chair2.png';
import chair3 from './chair3.png';
import chair4 from './chair4.png';

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      imgSrc: chair1,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 42,
    },
    {
      id: 2,
      imgSrc: chair2,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 49,
    },
    {
      id: 3,
      imgSrc: chair3,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 47,
    },
    {
      id: 4,
      imgSrc: chair4,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 49,
    },
  ];
  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <div className="chairs">
        {products.map((product, index) => (
          <FeaturedProduct
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            code={product.code}
            price={product.price}
          />
        ))}
      </div>
      <div className="pink-rectangles">
        <img src={Rectangle2} alt="" />
        <img src={Rectangle1} alt="" />
        <img src={Rectangle1} alt="" />
        <img src={Rectangle1} alt="" />
      </div>
    </div>
  );
};
