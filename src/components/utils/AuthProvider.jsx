import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartProducts, getPlacedOrders, getWishListProducts } from './Apis';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([])
    const [wishlist, setWishList] = useState([])
    const [orders, setOrders] = useState([])
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
                // console.log("cartItems", cartItems);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCartItems();

        const fetchWishlistItems = async () => {
            try {
                const wishlistItems = await getWishListProducts(authToken);
                setWishList(wishlistItems);
                // console.log("wishlistItems", wishlistItems);
            } catch (error) {
                console.error(error);
            }
        };
        fetchWishlistItems();

        const fetchPlacedOrders = async () => {
            try {
                const placedItems = await getPlacedOrders(authToken);
                setOrders(placedItems);
                // console.log("placed Items", placedItems);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlacedOrders();

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

  return (
    <AuthContext.Provider 
        value={{
            user, 
            isLoggedIn, 
            loginUser, 
            logout, 
            wishlist, 
            cart,
            orders
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
