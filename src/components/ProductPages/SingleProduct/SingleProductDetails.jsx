import { Box, Breadcrumbs, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { Link } from 'react-router-dom';
import { DescriptionOutlined, FavoriteOutlined, LocalMall } from '@mui/icons-material';
import { FadeLoader } from 'react-spinners';
import { addProductReview, addProductToCart, getProductReviews } from '../../utils/Apis';
import { toast } from 'react-toastify';
import { useAuth } from '../../utils/AuthProvider';
import { addProductToWishlist } from '../../utils/Apis';
import ReviewDialog from './Review/ReviewDialog';

const SingleProductDetails = ({ product }) => {
  const { _id, displayImage, images, description, name, price, fabric, brand, subCategory, color, gender } = product || {};
  // console.log('images', images);
  const { isLoggedIn, wishlist, cart } = useAuth();
  const isProductInWishlist =  wishlist && wishlist.find(item => item.products._id === _id);
  const authToken = localStorage.getItem("authToken");

  const [isLoading, setIsLoading] = useState(true);
  const [isReviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

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

  const handleAddToWishList = async() => {
    // console.log('prdoct', _id);
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

        window.location.reload();
      } catch (error) {
        // Handle API errors here
        console.error(error);
        toast.error(error);
      }
    }
  }
  
  const handleAddToCart = async() => {
    // console.log('prdoct', _id);
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
        await addProductToCart(_id, 1, authToken); // Assuming quantity is 1
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
  }

  const handleOpenReviewDialog = () => {
    if (!isLoggedIn) {
      toast.error('Please login first', {
        position: 'top-left'
      });
      return;
    }
    else {
      setReviewDialogOpen(true);
    }
  };

  const handleCloseReviewDialog = () => {
    setReviewDialogOpen(false);
  };

  const handleReviewSubmit = async (reviewData) => {
    try {
      await addNewProductReview(reviewData);
      handleCloseReviewDialog(); // Close the dialog after successful submission
    } catch (error) {
      console.error(error);
      // Handle error when adding review fails
    }
  };

  const addNewProductReview = async (reviewData) => {
    try {
      // Call the API function to add the product review
      await addProductReview(_id, reviewData, authToken);
      // Assuming you want to refresh the reviews after adding a new one
      const updatedReviews = await getProductReviews(_id, authToken);
      setReviews(updatedReviews);
      toast('Review added successfully!');

      // window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error('Failed to add review. Please try again later.');
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const productReviews = await getProductReviews(_id, authToken);
        // console.log(_id);
        setReviews(productReviews);
        // toast.success('Success')
      } catch (error) {
        console.error(error);
        // console.log(_id);
        // Handle error fetching reviews
      }
    };

    fetchReviews();
  }, [_id, authToken]);

  return (
    <>     
      <div className='breadcrumbs'>
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
                <FavoriteOutlined style={{color: isProductInWishlist ? 'red' : 'rgb(148, 148, 148)'}} />&nbsp;
                {isProductInWishlist ? 'WISHLISTED' : 'WISHLIST'}
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
              <Button variant='outlined' className='rateButton' onClick={handleOpenReviewDialog}>RATE</Button>
            </div>
            <ReviewDialog open={isReviewDialogOpen} onClose={handleCloseReviewDialog} onSubmit={handleReviewSubmit} />
            {/* <div>{reviews}</div> */}
          </Grid>
        </Grid>
        )}
      </Box>  
    </>
  )
}

export default SingleProductDetails
