import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './WishList.css'
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../../utils/Apis';
import { toast } from 'react-toastify';

const WishListItems = ({ products }) => {
    const { _id, displayImage, brand, name, price} = products;
    const navigate = useNavigate();

    const showProductDetails = () => {
        navigate(`/product/${_id}`);
    }
    const handleAddToCart = async() => {
        // console.log('prdoct', _id);
        const authToken = localStorage.getItem('authToken');
        // console.log('authToken', authToken);
        try {
            // Call the API function to add the product to the cart
            await addProductToCart(_id, 1, authToken); // Assuming quantity is 1
            toast('Product added to the cart!', {
                position: 'top-left'
            });
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

export default WishListItems;
