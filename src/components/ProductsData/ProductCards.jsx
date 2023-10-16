import React, { useEffect, useState } from 'react';
import './styles/Products.css';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { addProductToWishlist } from '../utils/Apis';
import { useAuth } from '../utils/AuthProvider';

const ProductCards = (props) => {
    const {_id, name, displayImage, price, brand} = props;
    const { isLoggedIn, wishlist, addToWish } = useAuth();
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
        // console.log('prdoct', _id);
        const authToken = localStorage.getItem('authToken');
        // console.log('authToken', authToken);
    
        if (!isLoggedIn) {
            toast.error('Please login first');
            return;
        }
        else {
          try {
            // Call the API function to add the product to the cart
            const updatedProduct = await addProductToWishlist(_id, authToken); // Assuming quantity is 1, adjust as per your requirements
            // Update the cart state with the updated product from the API response
            addToWish(updatedProduct);
            toast('Product added to the wishlist!');
          } catch (error) {
            // Handle API errors here
            console.error(error);
            toast.error(error);
          }
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
                    image={displayImage} 
                    alt={name} 
                    title={name}
                    style={{cursor: 'pointer'}}
                    onClick={showProductDetails}
                />
            )}
            <CardContent>
                {/* <ToastContainer /> */}
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
                            onClick={handleAddToWishList}
                            
                        >
                            <FavoriteBorder style={{color: wishlist.find(item => item._id === _id) ? 'red' : 'black'}} />
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
