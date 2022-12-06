import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './pages/hero/hero';
import { Leatest } from './pages/leatest_blog/leatest';
import { Trending } from './pages/trending_product/trending';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trending />
      <Leatest />
      <Footer />
    </div>
  );
}

export default App;
