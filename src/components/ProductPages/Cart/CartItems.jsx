import { Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteOneProductFromCart } from '../../utils/Apis';

const CartItems = ({ product, quantity }) => {
    const { _id, displayImage, brand, name, price} = product;
    const navigate = useNavigate();

    const showProductDetails = () => {
        navigate(`/product/${_id}`);
    }

    const removeFromCart = async () => {
        const authToken = localStorage.getItem('authToken');
        try {
            await deleteOneProductFromCart(_id, authToken);
            toast.info('Deleted');

            // window.location.reload();
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
                <b>Quantity</b>: {quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <b>Price</b>: ₹{price}
            </Typography>
            {quantity > 1 ?  (
                <Typography variant="body2" color="text.secondary">
                    <b>Total Price</b>: ₹{price*quantity}
                </Typography>
            ) : null}
        </CardContent>
        <Button 
            variant='text' 
            fullWidth 
            className='removeFromCartButton'
            onClick={removeFromCart}
        >
            Remove
        </Button>
    </Card>
  )
}

export default CartItems
