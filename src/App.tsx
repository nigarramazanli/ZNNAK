import './App.css';
import { Header } from './components/Header/Header';
import { Leatest } from './components/leatest_blog/leatest';
import { Trending } from './components/trending_product/trending';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Header />
      <Trending />
      <Leatest />
    </div>
  );
}

export default App;
