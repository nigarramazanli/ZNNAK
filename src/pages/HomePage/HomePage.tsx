import './HomePage.scss';
import { DiscountItem } from './components/DiscountItem/DiscountItem';
import { Hero } from './components/hero/hero';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { Logos } from './components/Logos/Logos';
import { Subscribe } from './components/Subscribe/Subscribe';
import { TopCategories } from './components/TopCategories/TopCategories';
import { TrendingProduct } from './components/TrendingProduct/TrendingProduct';
import { Unique } from './components/Unique/Unique';

export const HomePage = () => {
  return (
    <>
      <Hero />
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
