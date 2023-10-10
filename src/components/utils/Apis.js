import axios from "axios";
import { getHeaderWithProjectIDAndBody, getHeaderWithProjectId } from "./configs";

const BASE_DOMAIN = 'https://academics.newtonschool.co';
const configById = getHeaderWithProjectId();
const configByIdAndBody = getHeaderWithProjectIDAndBody();

export const getProductsData = async(page, limit) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/clothes/products?page=${page}&limit=${limit}`, 
            configById
        );
        
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
}

export const registerUser = async (userInfo, navigate) => {
    userInfo.appType = 'ecommerce';
    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/api/v1/user/signup`, userInfo, configByIdAndBody
        );
        const {name, email} = res.data.data.user
        console.log({Name: name, Email: email});

        if(res.data.token) {
            sessionStorage.setItem('authToken', res.data.token);
            sessionStorage.setItem('userInfo', JSON.stringify({Name: name, Email: email}));

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
        return res.data.data
    } 
    catch (error) {
        throw error.response.data.message;
    }
}

export const getProductsDetails = async (productId) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/product/${productId}`, configById
        )
        return response.data.data
    } catch (error) {
        throw error;
    }
}

export const addProductToCart = async (productId, quantity) => {
    try {
        const response = await axios.patch(
            `${BASE_DOMAIN}/api/v1/ecommerce/cart/${productId}`, {
                quantity: quantity,
            }, configById
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getProductReviews = async (productId) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/ecommerce/review/${productId}`, configById
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const addReview = async (productId, reviewData) => {
    try {
        const response = await axios.post(
            `${BASE_DOMAIN}/api/v1/ecommerce/review/${productId}`, 
            reviewData, configById
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const deleteReview = async (reviewId) => {
    try {
        await axios.delete(`${BASE_DOMAIN}/api/v1/ecommerce/review/${reviewId}`, 
            configById
        );
    } catch (error) {
        throw error;
    }
};