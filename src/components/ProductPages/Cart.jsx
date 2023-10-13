import React from 'react'
import './styles/Cart.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div id='empty_cart'>
      <div className='empty_cart_container'>
        <img
          src='	https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png'
          alt='empty_cart' 
          loading='lazy' 
          width='170px'
        />
        <Typography className='empty_title'>Nothing in the bag</Typography>
        <Button 
          className='empty_cart_button'
          variant='contained'
          LinkComponent={Link}
          to='/mens-clothing'
        >Continue Shopping</Button>
      </div>
    </div>
  )
}

export default Cart
