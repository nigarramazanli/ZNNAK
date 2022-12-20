import './LatestProducts.scss';
import { LatestProduct } from './LatestProduct';
import item1 from './image 1166.png';
import item2 from './image15.png';
import item3 from './image 1168.png';
import item4 from './image 32.png';
import item5 from './image 23.png';
import item6 from './image 3.png';

export const LatestProducts = () => {
  return (
    <div className="latest-products">
      <h1>Leatest Products</h1>
      <div className="links">
        <a href="!">New Arrival</a>
        <a href="!">Best Seller</a>
        <a href="!">Featured</a>
        <a href="!">Special Offer</a>
      </div>
      <div className="shop-grid">
        <LatestProduct
          imgSrc={item1}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img1'}
        />
        <LatestProduct
          imgSrc={item2}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img2'}
        />
        <LatestProduct
          imgSrc={item3}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img3'}
        />
        <LatestProduct
          imgSrc={item5}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img4'}
        />
        <LatestProduct
          imgSrc={item4}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img5'}
        />
        <LatestProduct
          imgSrc={item6}
          title={'Comfort Handy Craft'}
          newPrice={42}
          price={67}
          imgclass={'img6'}
        />
      </div>
    </div>
  );
};
