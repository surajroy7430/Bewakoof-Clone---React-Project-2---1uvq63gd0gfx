import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return !!localStorage.getItem('authToken');
    });
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : []
    });
    const [wishlist, setWishList] = useState([])
    // useState(() => {
    //     const storedWish = sessionStorage.getItem('wishlist');
    //     return storedWish ? JSON.parse(storedWish) : []
    // });

    useEffect(() => {
        // Check if user data exists in local storage
        const storedUser = localStorage.getItem('userInfo');
        // const storedToken = localStorage.getItem('authToken');
        
        if (storedUser) {
            // If user data exists, automatically log in the user
            // const userData = JSON.parse(storedUser);
            // loginUser({ ...userData, token: storedToken });

            setUser(JSON.parse(storedUser));
        }
    }, []);

    const loginUser = (userdata) => {
        setUser(userdata);
        setIsLoggedIn(true);
        // const { status, token, data } = userdata;
        // if(status === 'success' && token) {
        //     localStorage.setItem('authToken', token);
        // }
        // else {
        //     console.log('token not found');
        // }
        // // // Store user data in local storage
        localStorage.setItem('userInfo', JSON.stringify(userdata));
        
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        // Clear user data from local storage on logout
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');

        // setCart([]); // Clear the wishlist in state
        // sessionStorage.removeItem('cart');

        // setWishList([]); // Clear the wishlist in state
        // sessionStorage.removeItem('wishlist');
    }

    const addToWish = (product) => {
        const updatedWish = [...wishlist, product];
        setCart(updatedWish);
        // sessionStorage.setItem('wishlist', JSON.stringify(updatedWish));
    };
    
    const removeFromWish = (productId) => {
        const updatedWish = wishlist.filter((item) => item.productId !== productId);
        setWishList(updatedWish);
    };

    const addToCart = (product) => {
        // const updatedCart = [...cart, product];
        // setCart(updatedCart);
        // localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Check if the product already exists in the cart
    const isProductInCart = cart.some((item) => item.productId === product.productId);

    if (!isProductInCart) {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
        // Product already exists in the cart, handle accordingly (show message, etc.)
        console.log('Product already exists in the cart.');
        // Optionally, you can show a toast message or an alert to notify the user
    }
    };
    
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.productId !== productId);
        setCart(updatedCart);
    };
  return (
    <AuthContext.Provider value={
        {user, isLoggedIn, loginUser, logout, wishlist, addToWish, removeFromWish, cart, addToCart, removeFromCart}
    }>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
