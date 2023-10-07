import React from 'react';
import "../src/styles/App.css";
import { Navigate, Route, Routes } from 'react-router-dom';
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
import { useAuth } from './components/utils/AuthProvider';
import { toast } from 'react-toastify';
import ProfilePage from './components/Pages/ProfilePage';
import MyOrders from './components/ProductPages/MyOrders';


function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/login' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/products' element={<HomePage />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/myaccount' element={user ? <ProfilePage /> : <Navigate to='/login' />} />
        <Route path='/myaccount/orders' element={user ? <MyOrders /> : <Navigate to='/login' />} />
        <Route path='/wishlist' element={user ? <WishList /> : <Navigate to='/login' />} />
        <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />} />
        <Route path='/cart/success' element={<Success />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
