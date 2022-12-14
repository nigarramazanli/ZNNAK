import './App.scss';
import { AboutUs } from './pages/AboutUsPage/AboutUs';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Faq } from './pages/Faq/Faq';
import { Footer } from './components/Footer/Footer';
import { GridDefault } from './pages/GridDefault/GridDefault';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { NotFound } from './pages/NotFound/NotFound';
import { OrderCompleted } from './pages/OrderCompleted/OrderCompleted';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCarts } from './pages/ShoppingCarts/ShoppingCarts';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { baseUrl } from './constants';
import { getValueFromLocalStorage } from './services/localStorage.service';
import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    const token = getValueFromLocalStorage('accessToken');
    if (token) {
      requestHeaders.set('Authorization', `Bearer ${token}`);
    }

    fetch(`${baseUrl}/users/current`, { headers: requestHeaders })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<GridDefault />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/shopping-carts" element={<ShoppingCarts />} />
          <Route path="/order-completed" element={<OrderCompleted />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
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
