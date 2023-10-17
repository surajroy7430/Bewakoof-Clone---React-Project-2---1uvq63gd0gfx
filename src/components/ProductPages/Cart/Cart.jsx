import React from 'react'
import './Cart.css'
import { Breadcrumbs, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthProvider'
import CartItems from './CartItems'

const Cart = () => {
  const { cart } = useAuth();

  if(cart.items.length === 0) {
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
          <div className='breadcrumbsAndOrderButton'>
            <div className='cartBreadcrumbs'>
              <Grid item>
                  <Breadcrumbs>
                    <Link to='/'>Home</Link>
                    <Typography>
                      <b>My Bag</b> <span style={{color: 'gray'}}>{cart.items.length} item</span>
                    </Typography>
                  </Breadcrumbs>
              </Grid>
            </div>
            <div className='orderButtonWrapper'>
              <Typography className='subTotal'><b>Sub Total:</b> ₹{cart.totalPrice}</Typography>
              <Button variant='contained' className='orderNowButton'>Order Now</Button>
            </div>
          </div>
          <Grid container spacing={2}>
              {cart && cart.items.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i+1}>
                  <CartItems  
                    product={item.product} 
                    quantity={item.quantity} 
                    className='cartCardWrapper' 
                  />
                </Grid>
              ))}
          </Grid>
      </div>
    )
  }
}

export default Cart
