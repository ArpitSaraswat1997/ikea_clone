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
import Checkout1 from './components/payment-checkout/checkOut1';
import Checkout from './components/payment-checkout/Checkout';
import CardsDetails from './components/payment-checkout/CardDetails';
import {Routes,Route} from "react-router-dom"
import ThankYOu from './components/payment-checkout/thankYou';
// import CardsDetails from './components/payment-checkout/CardDetails';

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
        <Route path='/checkout' element = {<Checkout1 />} />
        <Route path = "/checkout2" element = {<Checkout />} />
        <Route path = "/checkout3" element = {<CardsDetails />} />
        <Route path = "/thankyou" element = {<ThankYOu />} />
        {/* <Route path ="/cardDetails" element={<CardsDetails/>}/> */}
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
