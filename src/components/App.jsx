import React from 'react'
import "../styles/App.css";
import BottomHeader from './Header_Components/BottomHeader';
import Header from './Header';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Header /> */}
      {/* <BottomHeader /> */}
    </div>
  )
}

export default App;
