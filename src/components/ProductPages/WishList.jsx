import React from 'react';
import './styles/WishList.css';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthProvider';

const WishList = () => {
  const { wishlist, user } = useAuth();

  if(wishlist.length === 0) {
    return (
      <div id='empty_wishlist'>
        <div className='empty_wishlist_container'>
          <img
            src='https://images.bewakoof.com/web/wishlistEmpty.svg'
            alt='empty_wishlist' 
            loading='lazy' 
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
      <h1 style={{margin: '100px'}}>Wish Item IS Here</h1>
    )
  }
}

export default WishList
