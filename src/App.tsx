import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Leatest } from './components/leatest_blog/leatest';
import { Trending } from './components/trending_product/trending';
import React from 'react';
import { Unique } from './components/Unique/Unique';
function App() {
  return (
    <div className="App">
      <Header />
      <Unique/>
      <Trending />
      <Leatest />
      <Footer />
    </div>
  );
}

export default App;
