import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/HomePagesComp/Home'
import Login from '../Authentication/Login'
import SignUp from '../Authentication/Signup'
import ForgotPassword from '../Authentication/ForgotPassword'
import MensClothing from '../ProductsData/MensClothing'
import WomensClothing from '../ProductsData/WomensClothing'
import MobileCovers from '../ProductsData/MobileCovers'
import SearchResults from '../ProductPages/SearchResults/SearchResults'
import SingleProductPage from '../ProductPages/SingleProduct/SingleProductPage'
import ProfilePage from '../Pages/ProfilePages/ProfilePage'
import MyOrders from '../ProductPages/OrderDetails/MyOrders'
import OrderDetailsAPI from '../ProductPages/OrderDetails/OrderDetailsAPI'
import MyProfile from '../Pages/ProfilePages/MyProfile'
import WishList from '../ProductPages/Wishlist/WishList'
import Cart from '../ProductPages/Cart/Cart'
import Checkout from '../ProductPages/CheckOut/CheckoutPage'
import ConfirmOrder from '../ProductPages/CheckOut/ConfirmOrder'
import ErrorPage from '../Pages/ErrorPage'

const RouterComp = ({ user }) => {
  return (
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
      <Route path='/myaccount/order/:orderId' element={user ? <OrderDetailsAPI /> : <Navigate to='/login' />} />
      <Route path='/myaccount/profile' element={user ? <MyProfile /> : <Navigate to='/login' />} />
      <Route path='/wishlist' element={user ? <WishList /> : <Navigate to='/login' />} />
      <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />} />
      <Route path='/checkout' element={user ? <Checkout /> : <Navigate to='/login' />} />
      <Route path='/orderconfirmed' element={user ? <ConfirmOrder /> : <Navigate to='/login' />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default RouterComp
