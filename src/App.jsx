import React, { useEffect, useState } from 'react';
import { useAuth } from './components/utils/AuthProvider';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import RouterComp from './components/RouterComponent/RouterComp';

function App() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous authentication check
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (isLoading) {
    return <small>Loading...</small>
  }

  return (
    <div className="App">
        <Header />
        <ToastContainer autoClose={1200} />
        <RouterComp user={user} />
        <Footer />
    </div>
  )
}

export default App;
