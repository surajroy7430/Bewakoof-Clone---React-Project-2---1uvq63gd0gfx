import React, { useState } from 'react';
import './Checkout.css';
import { placeOrder } from '../../utils/Apis';
import { useAuth } from '../../utils/AuthProvider';
import { Box, Button, Container, Divider, Grid, MenuItem, Menu, Paper, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import AddressDialog from './AddessDialog';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
  const { user, cart } = useAuth();
  const cartAPI = cart.items;

  const [address, setAddress] = useState(user.address || {});
  const authToken = localStorage.getItem("authToken");
  // console.info(user)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [anchorEl, setAnchorEl] = useState(null);
  const productIds = cartAPI && cartAPI.map(item => item.product._id);
  const productQuantity = cartAPI && cartAPI.map(item => item.quantity);
  const productItems = cartAPI && cartAPI.map((item) => ({
    productId: item.product._id,
    quantity: item.quantity
  }));
  console.log(productItems);
  const type = 'HOME';

  // console.log( 'cartAPI place order', cartAPI.map((item) => item._id));
  const handleSaveAddress = (newAddress) => {
    // const updatedAddress = [...user.address, newAddress];
    setAddress(newAddress);
  };

  const handlePaymentMethod = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handlePaymentMethodClose = (method) => {
    setAnchorEl(null);
    setPaymentMethod(method);
  };
  // console.log('qunatity',cart.quantity);
  // console.log('_id',cartAPI.map((item) => item.product._id));
  // console.log('_id', user.address);
  // console.log('_id',authToken);
  

  const handlePlaceOrder = async () => {
    try {
      const response = await placeOrder(
        productItems,
        address,
        authToken
      )

      console.log('order placed', response);
    } catch (error) {
      console.error('placeorder', error);
    }
  }
  const handlePayWithCard = async (token) => {
    try {
      const response = await placeOrder(
        productItems,
        address,
        authToken,
        token.id)
        console.log('place order', response);
    } catch (error) {
      console.error('placeorder', error);
    }
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{fontSize: '35px', fontWeight: '600',}}>
          Checkout
        </Typography>
        <Divider orientation='horizontal' className='profileDivider' />
        
        <Grid container spacing={6} justifyContent='center' mt>
          <Grid item xs={12} md={9} lg={5}>
            {cartAPI && cartAPI.map((item) => (
                <Card elevation={5} style={{ padding: 10, marginBottom: 20 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component='img'
                        image={item.product.displayImage}
                        alt={item.product.name}
                        style={{ height: '200px' }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CardContent>
                        <Typography className='checkoutItemId'>
                          <b>#{item.product._id}</b>
                        </Typography>
                        <Typography className='checkoutItemName'>
                          <b>Name: </b>{item.product.name}
                        </Typography>
                        <Typography className='checkoutItemPrice'>
                          <b>Price: </b>₹{item.product.price*item.quantity}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>

            ))}
          </Grid>
          
          <Grid item xs={12} md={9} lg={6}>
            <Card elevation={5}>
              <h4 style={{backgroundColor: 'rgba(0,0,0,.09)', padding: '13px 20px'}}>
                DELIVERY ADDRESS
              </h4>

              <CardContent>
                {address.street && (
                  <div className='addressWrapper'>
                    <Typography>
                      {user.name}<br/>
                      {user.email}<br/>
                      {address.mobile}<br/>
                      {address.street}, {address.city}<br/>
                      {address.state}, {address.country}, {address.zipCode}<br/>
                    </Typography>
                  </div>
                )}

                {!address.street && (
                  <Button 
                    variant='contained' 
                    onClick={() => setDialogOpen(true)} 
                    style={{backgroundColor: '#42a2a2'}}
                    className='addressButton'
                  >
                    Add Address
                  </Button>
                )}

                {address.street && (
                  <Button variant='outlined' onClick={() => setDialogOpen(true)} className='changeAddressButton'>
                    Change Address
                  </Button>
                )}

                <AddressDialog 
                  open={dialogOpen} 
                  onClose={() => setDialogOpen(false)} 
                  onSave={handleSaveAddress} 
                />
              </CardContent>
              <Divider />
              
              <h4 style={{backgroundColor: 'rgba(0,0,0,.09)', padding: '13px 20px'}}>
                PRICE SUMMARY
              </h4>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <b>Total Price: </b>₹{cart.totalPrice}
                </div>
                <Button 
                  variant='outlined' 
                  onClick={handlePaymentMethod} 
                  className='paymentButton'
                >
                  {paymentMethod === 'COD' ? 'Cash on Delivery' : 'Pay With Card'} <ArrowDropDown />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handlePaymentMethodClose(paymentMethod)}
                    className='paymentOptions'
                >
                    <MenuItem 
                      onClick={() => handlePaymentMethodClose('COD')}>Cash on Delivery
                    </MenuItem>
                    <MenuItem 
                      onClick={() => handlePaymentMethodClose('Card')}>Pay With Card
                    </MenuItem>
                </Menu>

                {paymentMethod === 'COD' ? (
                  <Button 
                  variant="contained" 
                  onClick={handlePlaceOrder} 
                  style={{backgroundColor: '#42a2a2'}}
                  className='placeOrderButton'
                >
                  Place Order
                </Button>
                ) : paymentMethod === 'Card' ? (
                  <StripeCheckout
                    stripeKey="pk_live_51O2uQoSDri24Myy1TYDG1Rzm2x8CCJOSlG0oqGprnUOSrdUpqgyreIkJXH9SevgqjwgOWc0kXiycgq0UMw0f460r006stDAD7M"
                    token={handlePayWithCard}
                    amount={cart.totalPrice * 100} // Amount in cents
                    currency="INR"
                    name="BEWAKOOF"
                    description="Payment for your Order"
                    className='stripePayment'
                  />
                  ) : null
                }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Checkout
