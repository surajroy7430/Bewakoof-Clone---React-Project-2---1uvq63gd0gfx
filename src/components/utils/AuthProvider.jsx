import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartProducts, getPlacedOrders, getWishListProducts } from './Apis';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([])
    const [wishlist, setWishList] = useState([])
    const [orders, setOrders] = useState([])
    const authToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('userInfo');

    const navigate = useNavigate();

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
                localStorage.setItem('cartLength', cart.items.length);
                // console.log("cartItems", cartItems.items.length);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCartItems();

        const fetchWishlistItems = async () => {
            try {
                const wishlistItems = await getWishListProducts(authToken);
                setWishList(wishlistItems);
                localStorage.setItem('wishlistLength', wishlist.items.length);
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
        localStorage.setItem('cartLength', cart.items.length);
        localStorage.setItem('wishlistLength', wishlist.items.length);
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartLength');
        localStorage.removeItem('wishlistLength');
        navigate('/login');
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
    // Use the useContext hook to access the AuthContext value
    const context = useContext(AuthContext);

    // Throw an error if the hook is used outside of the AuthProvider
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
