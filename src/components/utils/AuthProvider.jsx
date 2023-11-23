import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartProducts, getPlacedOrders, getWishListProducts } from './Apis';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credential, setCredential] = useState(null);
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

    const setCredentialData = (data) => {
        setCredential(data);
    };

    const updateAddress = (newAddress) => {
        // Update the user object with the new address
        const updatedUser = { ...user, addressType: 'HOME', address: [...user.address, newAddress] };
        setUser(updatedUser);
    
        // Update the user info in localStorage
        localStorage.setItem('userInfo', JSON.stringify(updatedUser));
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = await getCartProducts(authToken);
                if(cartItems) {
                    setCart(cartItems);
                }
                // console.log("cartItems", cartItems.items);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCartItems();

        const fetchWishlistItems = async () => {
            try {
                const wishlistItems = await getWishListProducts(authToken);
                if(wishlistItems) {
                    setWishList(wishlistItems);
                }
                // console.log("wishlistItems", wishlistItems);
            } catch (error) {
                console.error(error);
            }
        };
        fetchWishlistItems();

        const fetchPlacedOrders = async () => {
            try {
                const placedItems = await getPlacedOrders(authToken);
                if(placedItems) {
                    setOrders(placedItems);
                }
                // console.log("placed Items", placedItems);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlacedOrders();

    }, [authToken, setCart, setWishList, setOrders])

    const loginUser = (userdata) => {
        setUser(userdata.data);
        setIsLoggedIn(true);

        // Store the authentication token and user info in localStorage
        localStorage.setItem('authToken', userdata.token);
        localStorage.setItem('userInfo', JSON.stringify(userdata.data));
        fetchCartItems();
        fetchWishlistItems();
        
        // sessionStorage.setItem('cartLength', cart.items.length);
        // sessionStorage.setItem('wishlistLength', wishlist.items.length);
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');
        sessionStorage.removeItem('cartLength');
        sessionStorage.removeItem('wishlistLength');
        navigate('/login');
    }

    const value = {
        user, 
        isLoggedIn, 
        loginUser,
        credential, 
        setCredentialData,
        logout, 
        wishlist, 
        cart,
        orders, 
        updateAddress
    }

  return (
    <AuthContext.Provider value={value}>
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
