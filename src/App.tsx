import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Leatest } from './components/leatest_blog/leatest';
import { Trending } from './components/trending_product/trending';
import React from 'react';
import { DiscountItem } from './components/DiscountItem/DiscountItem';
import { TopCategories } from './components/TopCategories/TopCategories';
import { Subscribe } from './components/Subscribe/Subscribe';
import { Logos } from './components/Logos/Logos';
function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <DiscountItem/>
      <TopCategories/>
      <Subscribe/>
      <Logos/>
      <Leatest />
      <Footer />
    </div>
  );
}

export default App;
