import React from 'react'
import "../styles/App.css";
import Header from './Header';
import Login from './Pages/Login';
import Footer from './Footer';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SignUp /> */}
      <Routes>
        <Route path='/products' element={<HomePage />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
