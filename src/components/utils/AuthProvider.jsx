import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartProducts } from './Apis';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishList] = useState([])
    const authToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('userInfo');

    // Check if the user is already logged in on component mount
    useEffect(() => {
        if (authToken && storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = await getCartProducts(authToken);
                setCart(cartItems);
                console.log("cartItems", cartItems.items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
    
        fetchCartItems();
    }, [authToken])

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
        setWishList(updatedWish);
    };
    
    const removeFromWish = (productId) => {
        const updatedWish = wishlist.filter((item) => item.productId !== productId);
        setWishList(updatedWish);
    };

    const addToCart = (product) => {
        const updatedCart = [cart, product];
        setCart(updatedCart);
    };
    
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
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
