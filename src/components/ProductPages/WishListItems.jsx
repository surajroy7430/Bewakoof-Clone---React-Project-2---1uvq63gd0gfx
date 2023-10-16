import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './styles/WishList.css'
import { useNavigate } from 'react-router-dom';

const WishListItems = () => {
  const { _id, displayImage, brand, name, price} = product;
    const navigate = useNavigate();

    const showProductDetails = () => {
        navigate(`/product/${_id}`);
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
    </Card>
  )
}

export default WishListItems
