import React from 'react'
import './styles/Cart.css'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthProvider'

const Cart = () => {
  const { cart } = useAuth();

  if(cart.length === 0) {
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
  } else {
    return (
      <div>
            <h1 style={{margin: '100px'}}>Cart</h1>
            <ul>
                {cart.map((product, i) => (
                    <li key={i+1}>{product.items.name}</li>
                ))}
            </ul>
      </div>
    )
  }
}

export default Cart
