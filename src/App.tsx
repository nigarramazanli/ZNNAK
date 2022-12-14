import './App.scss';
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Faq } from './pages/Faq/Faq';
import { Footer } from './components/Footer/Footer';
import { GridDefault } from './pages/GridDefault/GridDefault';
import { Header } from './components/Header/Header';
import { HectoDemo } from './pages/HectoDemo/HectoDemo';
import { HomePage } from './pages/HomePage/HomePage';
import { MyAccount } from './pages/MyAccount/MyAccount';
import { NotFound } from './pages/NotFound/NotFound';
import { OrderCompleted } from './pages/OrderCompleted/OrderCompleted';
import { ProductDeatils } from './pages/ProductDetails/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import React from 'react';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grid-default" element={<GridDefault />} />
          <Route path="/product-details" element={<ProductDeatils />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/order-completed" element={<OrderCompleted />} />
          <Route path="/hect-odemo" element={<HectoDemo />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
