import React from 'react';
import "../src/styles/App.css";
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import HomePage from '../src/components/Pages/HomePage.jsx';
import Login from '../src/components/Authentication/Login.jsx';
import SignUp from '../src/components/Authentication/Signup.jsx';
import SingleProduct from './components/ProductPages/SingleProduct';
import WishList from './components/ProductPages/WishList';
import Cart from './components/ProductPages/Cart';
import Success from './components/ProductPages/Success';
import ErrorPage from './components/Pages/ErrorPage';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
