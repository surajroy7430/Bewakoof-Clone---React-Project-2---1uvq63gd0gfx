import React from 'react';
import './Products.css';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';

const MensClothing = (props) => {
    const {name, displayImage, price, type, brand} = props;

  return (
    <>
        <Card className='productCards'>
            <>
                <small style={{color: 'white', backgroundColor: '#979797', whiteSpace: 'nowrap'}}>{type}</small>
                <CardMedia 
                    component='img'
                    image={displayImage} 
                    alt={name} 
                    className='productImage'
                />
            </>

            <CardContent>
                <ToastContainer />
                <div style={{marginBottom: '10px'}} className='productNameWrapper'>
                    <p className='brandName'>{brand}</p>
                    <small className='productName'>{name}</small>
                </div>
                <div className='priceWrapper'>
                    <div>
                        <strong>₹{price}</strong>&nbsp;
                        <span><del>₹999</del></span>&nbsp;
                        <span style={{color: 'white', backgroundColor: '#00ff00'}}>53% OFF</span>
                    </div>
                    <IconButton aria-label='add to wishlist'>
                        <FavoriteBorder />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default MensClothing
