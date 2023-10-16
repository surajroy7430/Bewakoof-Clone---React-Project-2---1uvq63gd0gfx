import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './styles/WishList.css'
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../utils/Apis';
import { toast } from 'react-toastify';
import { useAuth } from '../utils/AuthProvider';

const WishListItems = ({ products }) => {
    const { _id, displayImage, brand, name, price} = products;
    const { addToCart } = useAuth();
    const navigate = useNavigate();

    const showProductDetails = () => {
        navigate(`/product/${_id}`);
    }
    const handleAddToCart = async() => {
        console.log('prdoct', _id);
        const authToken = localStorage.getItem('authToken');
        // console.log('authToken', authToken);
        try {
            // Call the API function to add the product to the cart
            const updatedProduct = await addProductToCart(_id, 1, authToken); // Assuming quantity is 1, adjust as per your requirements
            // Update the cart state with the updated product from the API response
            addToCart(updatedProduct);
            toast('Product added to the cart!');
        } catch (error) {
            // Handle API errors here
            console.error('error', error);
            // toast.error('Failed to add product to cart. Please try again later.');
        }
    }
    
  return (
    <Card className='cartsCard'>
        <CardMedia
            component="img"
            alt={name}
            image={displayImage}
            title={name}
            style={{cursor: 'pointer'}}
            onClick={showProductDetails}
        />
        <CardContent>
            <div style={{marginBottom: '10px'}} className='productNameWrapper'>
                <Typography className='brandName'>{brand}</Typography>
                <small className='productName'>{name}</small>
            </div>
            <Typography variant="body2" color="text.secondary">
                <b>Price</b>: ₹{price}
            </Typography>
            
        </CardContent>
        <Button 
            variant='text' 
            fullWidth 
            className='addToCartButton'
            onClick={handleAddToCart}
        >
            Add To Cart</Button>
    </Card>
  )
}

export default WishListItems
