import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [wishlist, setWishList] = useState([])

    // Check if the user is already logged in on component mount
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('userInfo');
        if (authToken && storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const loginUser = (userdata) => {
        setUser(userdata.data);
        setIsLoggedIn(true);

        // Store the authentication token and user info in localStorage
        localStorage.setItem('authToken', userdata.token);
        localStorage.setItem('userInfo', JSON.stringify(userdata.data));
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');
    }

    const addToWish = (product) => {
        const updatedWish = [...wishlist, product];
        setCart(updatedWish);
    };
    
    const removeFromWish = (productId) => {
        const updatedWish = wishlist.filter((item) => item.productId !== productId);
        setWishList(updatedWish);
    };

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
    };
    
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.productId !== productId);
        setCart(updatedCart);
    };
  return (
    <AuthContext.Provider 
        value={{
            user, 
            isLoggedIn, 
            loginUser, 
            logout, 
            wishlist, 
            addToWish, 
            removeFromWish, 
            cart, 
            addToCart, 
            removeFromCart
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
