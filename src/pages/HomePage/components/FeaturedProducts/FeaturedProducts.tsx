import './FeaturedProducts.scss';
import { FeaturedProduct } from './FeaturedProduct';
import { useState } from 'react';
import chair1 from './chair1.png';
import chair2 from './chair2.png';
import chair3 from './chair3.png';
import chair4 from './chair4.png';

const products = [
  [
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
  ],
  [
    {
      id: 4,
      imgSrc: chair4,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 49,
    },
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
  ],
  [
    {
      id: 1,
      imgSrc: chair1,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 42,
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
    {
      id: 2,
      imgSrc: chair2,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 49,
    },
  ],
  [
    {
      id: 4,
      imgSrc: chair4,
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
      id: 2,
      imgSrc: chair2,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 49,
    },
    {
      id: 1,
      imgSrc: chair1,
      title: 'Cantilever chair',
      code: 'Code - Y523201',
      price: 42,
    },
  ],
];
export const FeaturedProducts = () => {
  const [chosenProducts, setchosenProducts] = useState(0);
  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <div className="chairs">
        {products[chosenProducts].map((product) => (
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
        <button onClick={() => setchosenProducts(0)}></button>
        <button onClick={() => setchosenProducts(1)}></button>
        <button onClick={() => setchosenProducts(2)}></button>
        <button onClick={() => setchosenProducts(3)}></button>
      </div>
    </div>
  );
};
