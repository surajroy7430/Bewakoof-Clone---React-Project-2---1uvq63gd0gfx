import React from 'react';
import './WishList.css';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { addProductToCart, deleteOneProductFromWishlist } from '../../utils/Apis';
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
            await deleteOneProductFromWishlist(_id, authToken);

            toast('Product added to the cart!', {
                position: 'top-left'
            });

            window.location.reload();
        } catch (error) {
            // Handle API errors here
            console.error('error', error);
            // toast.error('Failed to add product to cart. Please try again later.');
        }
    }

    const removeFromWishlist = async () => {
        const authToken = localStorage.getItem('authToken');
        try {
            await deleteOneProductFromWishlist(_id, authToken);
            toast.info('Deleted');

            window.location.reload();
        } catch (error) {
            toast.error(error);
            console.error('error: ', error);
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
        <ButtonGroup fullWidth>
            <Button 
                variant='text'
                className='addToCartButton'
                onClick={handleAddToCart}
            >
                Add To Cart
            </Button>
            <Button 
                variant='text'
                className='removefromWishlistButton'
                onClick={removeFromWishlist}
            >
                Remove
            </Button>
        </ButtonGroup>
    </Card>
  )
}

export default WishListItems;
