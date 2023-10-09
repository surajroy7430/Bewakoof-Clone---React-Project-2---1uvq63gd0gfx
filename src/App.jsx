import React from 'react';
import "../src/styles/App.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './components/utils/AuthProvider';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Home from './components/Pages/HomePagesComp/Home';
import Login from '../src/components/Authentication/Login.jsx';
import SignUp from '../src/components/Authentication/Signup.jsx';
import WishList from './components/ProductPages/WishList';
import Cart from './components/ProductPages/Cart';
import Success from './components/ProductPages/Success';
import ErrorPage from './components/Pages/ErrorPage';
import ProfilePage from './components/Pages/ProfilePage';
import MyOrders from './components/ProductPages/MyOrders';
import ProductsPage from './components/Pages/ProductsPage';
import WomensClothing from './components/ProductsData/WomensClothing';
import MobileCovers from './components/ProductsData/MobileCovers';
import SingleProductDetails from './components/ProductPages/SingleProductDetails';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/login' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mens-clothing' element={<ProductsPage />} />
        <Route path='/womens-clothing' element={<WomensClothing />} />
        <Route path='/mobile-covers' element={<MobileCovers />} />
        <Route path='/product/:id' element={<SingleProductDetails />} />
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
