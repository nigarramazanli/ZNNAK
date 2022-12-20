import './HomePage.scss';
import { DiscountItem } from './components/DiscountItem/DiscountItem';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { Hero } from './components/hero/hero';
import { LatestProducts } from './components/LatestProducts/LatestProducts';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { Logos } from './components/Logos/Logos';
import { ShopexOffer } from './components/ShopexOffer/ShopexOffer';
import { Subscribe } from './components/Subscribe/Subscribe';
import { TopCategories } from './components/TopCategories/TopCategories';
import { TrendingProduct } from './components/TrendingProduct/TrendingProduct';
import { Unique } from './components/Unique/Unique';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <Unique />
      <TrendingProduct />
      <DiscountItem />
      <TopCategories />
      <Subscribe />
      <Logos />
      <LeatestBlog />
    </>
  );
};
