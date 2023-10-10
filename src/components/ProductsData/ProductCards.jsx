import React, { useEffect, useState } from 'react';
import './styles/Products.css';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';

const ProductCards = (props) => {
    const {name, displayImage, price, brand} = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeOut);
    }, []);

  return (
    <>
        <Card className='productCards'> 
            {isLoading ? (
                <Loader width={300} height={270} />
            ) : (
                <CardMedia 
                    component='img'
                    image={displayImage} 
                    alt={name} 
                    className='productImage' 
                    style={{cursor: 'pointer'}}
                />
            )}
            <CardContent>
                <ToastContainer />
                {isLoading ? (
                    <Loader width={200} height={25} />
                ) : (
                    <div style={{marginBottom: '10px'}} className='productNameWrapper'>
                        <Typography className='brandName'>{brand}</Typography>
                        <small className='productName'>{name}</small>
                    </div>
                )}
                
                <div className='priceWrapper'>
                {isLoading ? (
                    <Loader width={150} height={25} />
                ) : (
                    <>
                        <strong>₹{price}</strong>&nbsp;
                        <IconButton aria-label='add to wishlist'>
                            <FavoriteBorder />
                        </IconButton>
                    </>
                )}
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default ProductCards
