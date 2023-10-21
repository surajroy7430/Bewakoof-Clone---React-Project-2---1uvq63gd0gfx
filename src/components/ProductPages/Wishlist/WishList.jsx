import React from 'react';
import './WishList.css';
import { Breadcrumbs, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/AuthProvider';
import WishListItems from './WishListItems';
import { deleteAllProductsFromWishlist } from '../../utils/Apis';
import { toast } from 'react-toastify';

const WishList = () => {
  const { wishlist, user } = useAuth();

  const removeAllProducts = async () => {
    const authToken = localStorage.getItem('authToken');
    try {
        await deleteAllProductsFromWishlist(authToken);
        toast.info('Deleted All');

        window.location.reload();
    } catch (error) {
        toast.error(error);
        console.error('error: ', error);
    }
  }

  if(wishlist.length === 0) {
    return (
      <div id='empty_wishlist'>
        <div className='empty_wishlist_container'>
          <img
            src='https://images.bewakoof.com/web/wishlistEmpty.svg'
            alt='empty_wishlist' 
            width='150px'
          />
          <Typography className='empty_title'>Hey! Your wishlist is empty.</Typography>
          <Typography className='empty_subtitle'>Save your favourites here and make them yours soon!</Typography>
          <Button 
            className='empty_wish_button'
            variant='contained'
            LinkComponent={Link}
            to='/mens-clothing'
          >Shop Now</Button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className='breadcrumbsAndDeleteButton'>
          <div className='breadcrumbs'>
            <Grid item>
                <Breadcrumbs>
                  <Link to='/'>Home</Link>
                  <Typography>
                    Wishlist <span style={{color: 'gray'}}>({wishlist.length})</span>
                  </Typography>
                </Breadcrumbs>
            </Grid>
          </div>
          {wishlist.length > 1 ? 
          (
            <div className='deleteAllButton'>
              <Button variant='contained' className='deleteButton' onClick={removeAllProducts}>
                Delete All Products
              </Button>
            </div>
          ) : null}
        </div>
        <Grid container spacing={2}>
            {wishlist && wishlist.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i + 1}>
                <WishListItems  
                  products={item.products} 
                  className='cartCardWrapper' 
                />
              </Grid>
            ))}
        </Grid>
      </div>
    )
  }
}

export default WishList
