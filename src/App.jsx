import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navigation_list from './Components/Navigation/Navigation_list';
import Home from './Components/Home/Home.jsx';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact'; 
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn.jsx'; // <-- default import
import Product_details from './pages/Product_details/Product_detials.jsx';
import  Wishlist from './pages/Wishlist/Wishlist.jsx';
import { Cart } from './pages/Cart/Cart.jsx';

function App() {
  return (
    <div>
      <Header />
      <Navigation_list />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/productdetail" element={<Product_details/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
