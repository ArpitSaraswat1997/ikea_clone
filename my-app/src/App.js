// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import Homepage from './components/landing page/Homepage';
import React from 'react';
import SingleProduct from './components/singleProduct page/singleProductpage';
import Cart from './components/cart/cart'
import ProductPage from './components/product page/ProductListing';
import Signup from './components/login-signup/Signup'
import Login from './components/login-signup/login'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes >
        <Route path='/' element = {<Homepage />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path = '/products' element = {<ProductPage />} />
        <Route path = "/products/:id" element = {<SingleProduct />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
      {/* <SingleProduct /> */}
      {/* <Cart /> */}
      {/* <Homepage/> */}
      <Footer/>
      {/* <ProductPage/> */}
     {/* <Signup /> */}
     {/* <Login /> */}
      </div>
  );
}

export default App;
