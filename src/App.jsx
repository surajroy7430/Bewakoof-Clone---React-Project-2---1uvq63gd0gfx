import React, { useEffect, useState } from 'react';
import "../src/styles/App.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './components/utils/AuthProvider';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Home from './components/Pages/HomePagesComp/Home';
import Login from '../src/components/Authentication/Login.jsx';
import SignUp from '../src/components/Authentication/Signup.jsx';
import WishList from './components/ProductPages/Wishlist/WishList';
import Cart from './components/ProductPages/Cart/Cart';
import ErrorPage from './components/Pages/ErrorPage';
import ProfilePage from './components/Pages/ProfilePages/ProfilePage';
import MyOrders from './components/ProductPages/OrderDetails/MyOrders';
import OrderDetails from './components/ProductPages/OrderDetails/OrderDetails';
import MensClothing from './components/ProductsData/MensClothing';
import WomensClothing from './components/ProductsData/WomensClothing';
import MobileCovers from './components/ProductsData/MobileCovers';
import SearchResults from './components/ProductPages/SearchResults/SearchResults';
import SingleProductPage from './components/ProductPages/SingleProduct/SingleProductPage';
import ForgotPassword from './components/Authentication/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import Checkout from './components/ProductPages/CheckOut/CheckoutPage';
import MyProfile from './components/Pages/ProfilePages/MyProfile';

function App() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous authentication check
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <small>Loading...</small>
  }

  return (
    <div className="App">
      <Header />
      <ToastContainer autoClose={1000} />

      <div id='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/login' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/mens-clothing' element={<MensClothing />} />
        <Route path='/womens-clothing' element={<WomensClothing />} />
        <Route path='/mobile-covers' element={<MobileCovers />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path='/product/:productId' element={<SingleProductPage />} />
        <Route path='/myaccount' element={user ? <ProfilePage /> : <Navigate to='/login' />} />
        <Route path='/myaccount/orders' element={user ? <MyOrders /> : <Navigate to='/login' />} />
        <Route path='/myaccount/orders/:orderId' element={user ? <OrderDetails /> : <Navigate to='/login' />} />
        <Route path='/myaccount/profile' element={user ? <MyProfile /> : <Navigate to='/login' />} />
        <Route path='/wishlist' element={user ? <WishList /> : <Navigate to='/login' />} />
        <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App;
