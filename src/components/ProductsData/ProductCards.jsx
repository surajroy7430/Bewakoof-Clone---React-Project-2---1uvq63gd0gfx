import React, { useEffect, useState } from 'react';
import './styles/Products.css';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { addProductToWishlist, deleteOneProductFromWishlist } from '../utils/Apis';
import { useAuth } from '../utils/AuthProvider';

const ProductCards = (props) => {
    const {_id, name, displayImage, price, brand} = props;
    const { isLoggedIn, wishlist, updateWishlist } = useAuth();
    const isProductInWishlist = wishlist && wishlist.some(item => item.products._id === _id);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, []);

    const showProductDetails = () => {
        navigate(`/product/${_id}`);
    }

    const handleAddToWishList = async() => {
        const authToken = localStorage.getItem('authToken');
        // console.log('authToken', authToken);
    
        if (!isLoggedIn) {
            toast.error('Please login first', {
                position: 'top-left'
            });
            return;
        }
        else {
            try {
                // Call the API function to add the product to the cart
                await addProductToWishlist(_id, authToken);
                toast('Product added to the wishlist!', {
                    position: 'top-left'
                });
                
                updateWishlist();
            } catch (error) {
                // Handle API errors here
                console.error(error);
                toast.error(error, {
                    position: 'top-left'
                });
            }
        }
    }
    const removeFromWishlist = async () => {
        const authToken = localStorage.getItem('authToken');
        try {
            await deleteOneProductFromWishlist(_id, authToken);
            toast.info('Deleted');

            updateWishlist();
        } catch (error) {
            toast.error(error);
            // console.error('error: ', error);
        }
    }

  return (
    <>
        <Card className='productCards'> 
            {isLoading ? (
                <Loader width={300} height={270} />
            ) : (
                <CardMedia 
                    component='img'
                    image={displayImage ? displayImage : 'https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg'} 
                    alt={name}
                    title={name}
                    style={{cursor: 'pointer'}}
                    onClick={showProductDetails}
                />
            )}
            <CardContent>
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
                            <strong>₹{price}</strong>
                            <IconButton 
                                aria-label='add to wishlist' 
                                onClick={isProductInWishlist ? removeFromWishlist : handleAddToWishList}
                            >
                                {isProductInWishlist ? <Favorite style={{color: '#f56767'}} /> : (
                                    <FavoriteBorder style={{color: 'black'}} />
                                )}
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
