import './HomePage.scss';
import { Hero } from './components/hero/hero';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { TrendingProduct } from './components/TrendingProduct/TrendingProduct';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingProduct />
      <LeatestBlog />
    </>
  );
};
