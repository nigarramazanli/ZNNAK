import './HomePage.scss';
import { Hero } from './components/hero/hero';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { TrendingProduct } from './components/TrendingProduct/TrendingProduct';
import { Unique } from './components/Unique/Unique';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Unique/>
      <TrendingProduct />
      <LeatestBlog />
    </>
  );
};
