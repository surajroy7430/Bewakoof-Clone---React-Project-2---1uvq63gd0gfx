import { Box, Breadcrumbs, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './styles/SingleProduct.css'
import { Link } from 'react-router-dom';
import { DescriptionOutlined, FavoriteOutlined, LocalMall } from '@mui/icons-material';
import { FadeLoader } from 'react-spinners';
// import { addProductToCart } from '../utils/Apis';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../utils/AuthProvider';
import { addProductToWishlist } from '../utils/Apis';

const SingleProductDetails = ({ product }) => {
  const { displayImage, images, description, name, price, fabric, brand, subCategory, color, gender } = product;
  // console.log('images', images);
  const { isLoggedIn, wishlist, addToWish, cart, addToCart } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const handleAddToWishList = async(productId) => {
    try {
      await addProductToWishlist(productId);
      // Show success message (toast.info)
      console.log('Product added to the wishlist!');
    } catch (error) {
      // Handle error (user not logged in or API error)
      console.error(error.message);
      // Show error message (toast.error)
    }
    // const productInWish = wishlist.find((item) => item.productId === product.productId);

    // if (!isLoggedIn) {
    //   toast.warn('Please login first');
    //   return;
    // }
    // if (productInWish) {
    //   toast.warn('Product already exists in the wishlist!');
    // } else {
    //   // Product not in the cart, add it to the cart
    //   addToWish(product);
    //   toast('Product added to the wishlist!');
    // }
  }
  
  const handleAddToCart = async() => {
    const productInCart = cart.find((item) => item.productId === product.productId);

    if (!isLoggedIn) {
      toast.warn('Please login first');
      return;
    }
    if (productInCart) {
      toast.warn('Product already exists in the cart!');
    } else {
      // Product not in the cart, add it to the cart
      addToCart(product);
      toast('Product added to the cart!');
    }
  }

  return (
    <>     
      <div className='breadcrumbs'>
        <ToastContainer />
        <Grid item>
          <Breadcrumbs>
            <Link to='/'>Home</Link>
            <Typography>{gender}'s Clothing</Typography>
            <Typography>{gender}'s {subCategory}</Typography>
            <Typography>{name}</Typography>
          </Breadcrumbs>
        </Grid>
      </div>
      <Box p={2}>
        {isLoading ? (
          <div className='fadeLoader'>
            <FadeLoader  color="#303231" height={50} margin={30} radius={2} width={7} />
          </div>
        ) : (
        <Grid container spacing={2} className='productWrapper'>
          <Grid item xs={12} md={12} lg={6} className='galleryImages'>
            <Box className='imageGallery'>
              {images?.slice(-5).map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`product-image-${index+1}`} 
                />
              ))}
            </Box>
            <img src={displayImage} alt={name} className='displayImage' />
          </Grid>

          <Grid item xs={12} md={12} lg={6} className='productDetails'>
            <Typography variant="body1" className='brandName'>{brand}</Typography>
            <Typography variant="h6" className='productName'>{name}</Typography>
            <Typography className='productPrice'>
              <span>₹</span>{price}
            </Typography>
            <Typography variant="body2" className='priceTag'>inclusive of all taxes</Typography>
            <Typography variant="h6" className='fabricType'>{fabric}</Typography>
            <Typography variant="body1" className='productColor'>COLOUR: <strong>{color}</strong></Typography>
            
            <div className='addToCartandWishButton'>
              <Button variant="contained" className='add_to_cart' onClick={handleAddToCart}>
                <LocalMall /> ADD TO BAG
              </Button>

              <Button variant="outlined" className='add_to_wishlist' onClick={handleAddToWishList}>
                <FavoriteOutlined /> WISHLIST
              </Button>
            </div>

            <div className='description-wrapper'>
              <Button variant="text" onClick={toggleDescription} className='description_button'>
                <DescriptionOutlined />
                <strong>Product Description</strong>
                <span>{isDescriptionVisible ? '-' : '+'}</span>
              </Button>
              {isDescriptionVisible && (
                <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} className='descriptionDetails' />
            )}
            </div>

            <div className='reviewsHolder'>
              <Typography>Product Reviews</Typography>
              <Button variant='outlined' className='rateButton'>RATE</Button>
            </div>
          </Grid>
        </Grid>
        )}
      </Box>  
    </>
  )
}

export default SingleProductDetails
