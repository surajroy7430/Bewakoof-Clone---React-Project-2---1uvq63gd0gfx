import axios from "axios";
import { getAuthHeaderConfig, getHeaderWithProjectIDAndBody, getHeaderWithProjectId } from "./configs";

const BASE_DOMAIN = 'https://academics.newtonschool.co';
const configById = getHeaderWithProjectId();
const configByIdAndBody = getHeaderWithProjectIDAndBody();

{/* products data */}
export const getProductsData = async(page, limit, gender) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/clothes/products?page=${page}&limit=${limit}`, 
            configById
        );
        // console.log(response.data);
        
        return response.data.data.filter(product => product.gender === gender);
    } catch (error) {
        // console.error("Error fetching products: ", error);
        throw error.response.data.message;
    }
}

{/* single products details */}
export const getProductsDetails = async (productId) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/product/${productId}`, 
            configById
        )
        // console.log('data', response.data.data);
        return response.data.data
    } catch (error) {
        throw error.response.data.message;
    }
}

{/* User */}
export const registerUser = async (userInfo, navigate) => {
    userInfo.appType = 'ecommerce';
    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/api/v1/user/signup`, userInfo, configByIdAndBody
        );
        const {name, email} = res.data.data.user
        console.log({Name: name, Email: email});

        if(res.data.token) {
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('userInfo', JSON.stringify(res.data.data.user));

            navigate('/login');
        }
    } catch (error) {
        throw error.response.data.message;
    }
}

export const signInUser = async(userInfo) => {
    userInfo.appType = 'ecommerce';

    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/api/v1/user/login`, userInfo, configByIdAndBody
        )
        
        return res.data;
    }
    catch (error) {
        throw error.response.data.message;
    }
}

export const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${BASE_DOMAIN}/api/v1/user/forgotPassword`, {
            email: email,
            appType: 'ecommerce'
        }, configByIdAndBody
        );

        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

{/* Search the product */}
export const getProductsBySearch = async (searchTerm, title, limit) => {
  try {
    const response = await axios.get(
      `${BASE_DOMAIN}/api/v1/ecommerce/clothes/products?search={"${title}":"${searchTerm}"}&limit=${limit}`, 
      configById
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getProductsByFilter = async (filterTerm, title, limit) => {
  try {
    const response = await axios.get(
      `${BASE_DOMAIN}/api/v1/ecommerce/clothes/products?filter={"${title}":"${filterTerm}"}&limit=${limit}`, 
      configById
    );
    console.log('filter DATA', response.data.data);
    return response.data.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

{/* Cart */}
export const addProductToCart = async (productId, quantity, authToken) => {
    try {
        const response = await axios.patch(
            `${BASE_DOMAIN}/api/v1/ecommerce/cart/${productId}`,
            {
                quantity: quantity,
            },
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('cartLength', response.data.data.items.length);

        // console.log('cart API Patch', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
export const getCartProducts = async (authToken) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/cart`,
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('cartLength', response.data.data.items.length);

        // console.log( 'cart API Get', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
}
export const deleteOneProductFromCart = async (productId, authToken) => {
    try {
        const response = await axios.delete(
            `${BASE_DOMAIN}/api/v1/ecommerce/cart/${productId}`,
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('cartLength', response.data.data.items.length);
        // console.log( 'cart API Delete', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
}

{/* Wishlist */}
export const addProductToWishlist = async (productId, authToken) => {
    try {
        const response = await axios.patch(
            `${BASE_DOMAIN}/api/v1/ecommerce/wishlist/${productId}`,
            { 
                productId: productId 
            },
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('wishlistLength', response.data.data.items.length);

        // console.log('wishlist API Patch', response.data.data.items);
        return response.data.data.items;
    } catch (error) {
        throw error.response.data.message;
    }
};
export const getWishListProducts = async (authToken) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/wishlist`,
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('wishlistLength', response.data.data.items.length);

        // console.log('wishlist API get', response.data.data);
        return response.data.data.items;
    } catch (error) {
        throw error.response.data.message;
    }
};
export const deleteOneProductFromWishlist = async (productId, authToken) => {
    try {
        const response = await axios.delete(
            `${BASE_DOMAIN}/api/v1/ecommerce/wishlist/${productId}`,
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('wishlistLength', response.data.data.items.length);

        // console.log( 'wishlist API Delete', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
}
export const deleteAllProductsFromWishlist = async (authToken) => {
    try {
        const response = await axios.delete(
            `${BASE_DOMAIN}/api/v1/ecommerce/wishlist`,
            getAuthHeaderConfig(authToken)
        );
        localStorage.setItem('wishlistLength', response.data.data.items.length);

        // console.log( 'wishlist API Delete', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
}

{/* Checkout */}
export const placeOrder = async (orderData, authToken) => {
    try {
        const response = await axios.post(
            `${BASE_DOMAIN}/api/v1/ecommerce/order`, 
            orderData,
            getAuthHeaderConfig(authToken)
        );
        // console.log('Order API POST', response.data.data);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};
{/* ordered items */}
export const getPlacedOrders = async (authToken) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/order`,
            getAuthHeaderConfig(authToken)
        );

        // console.log('get placed orders', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const getOnePlacedOrderDetail = async (orderId, authToken) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/order/${orderId}`,
            getAuthHeaderConfig(authToken)
        );

        // console.log('placed order detail', response.data.data);
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};


{/* Reviews */}
export const addProductReview = async (productId, reviewData, authToken) => {
    try {
        const response = await axios.post(
            `${BASE_DOMAIN}/api/v1/ecommerce/review/${productId}`, 
            reviewData, 
            getAuthHeaderConfig(authToken)
        );
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const getProductReviews = async (productId, authToken) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/review/${productId}`, 
            getAuthHeaderConfig(authToken)
        );
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const deleteProductReview = async (reviewId, authToken) => {
    try {
        const response = await axios.delete(
            `${BASE_DOMAIN}/api/v1/ecommerce/review/${reviewId}`, 
            getAuthHeaderConfig(authToken)
        );
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

{/* delete User */}
export const deleteAccount = async (authToken) => {
    try {
        const response = await axios.delete(`${BASE_DOMAIN}/api/v1/user/deleteMe`, 
            getAuthHeaderConfig(authToken)
        )
  
        return response.data;
        } catch (error) {
            throw error.response.data.message;
    }
};