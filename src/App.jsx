import React from 'react';
import "../src/styles/App.css";
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import HomePage from '../src/components/Pages/HomePage.jsx';
import Login from '../src/components/Authentication/Login.jsx';
import SignUp from '../src/components/Authentication/Signup.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
