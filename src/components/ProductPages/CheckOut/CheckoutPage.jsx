import React, { useState } from 'react'
import './Checkout.css';
import { deleteOneProductFromCart, placeOrder } from '../../utils/Apis';
import { useAuth } from '../../utils/AuthProvider';
import { Box, Button, Container, Divider, Grid, MenuItem, Menu, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import AddressDialog from './AddessDialog';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { user, cart, updateAddress } = useAuth();
  const cartAPI = cart.items;

  if (!cartAPI || cartAPI.length === 0) {
    // Handle the case where cartAPI is undefined or empty
    return <div>No items in the cart</div>;
  }

  const { _id } = cartAPI[0].product;

  const [address, setAddress] = useState(user.address || {});
  // console.info(user)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const orderData = {
    productId:  cartAPI && cartAPI[0].product._id,
    quantity:  cartAPI && cartAPI[0].quantity,
    addressType: 'HOME',
    address: address
  }
  // console.log(orderData)

  const showProductDetails = () => {
    navigate(`/product/${_id}`);
  }

  const handleSaveAddress = (newAddress) => {
    updateAddress(newAddress);
    setAddress(newAddress);
  };

  const handlePaymentMethod = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handlePaymentMethodClose = (method) => {
    setAnchorEl(null);
    setPaymentMethod(method);
  };

  const removeFromCart = async () => {
    const authToken = localStorage.getItem('authToken');
    try {
      await deleteOneProductFromCart(_id, authToken);
    } catch (error) {
      console.error(error);
    }
  }
  
  const handlePlaceOrder = async (token) => {
    const authToken = localStorage.getItem('authToken');
    // console.log('user.address:', user.address);
    
    if(!updateAddress) {
      toast.error('Address is Required');
      return
    } else {
      try {
        const response = await placeOrder(orderData, authToken, token.id)

        console.log('order placed', response);
        toast(response.message);
        // console.log(response.message);
        removeFromCart();
        navigate('/orderconfirmed');

        // window.location.reload();
      } catch (error) {
        // console.log(error);
        toast.error(error);
      }
    }
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{fontSize: '35px', fontWeight: '600',}}>
          Checkout
        </Typography>
        <Divider orientation='horizontal' className='checkoutDivider' />
        
        <Grid container spacing={6} justifyContent='center' mt>
          <Grid item xs={12} md={9} lg={5}>
            {cartAPI && cartAPI.map((item, i) => (
                <Card key={i+1} elevation={5} style={{ padding: 10, marginBottom: 20 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component='img'
                        image={item.product.displayImage}
                        alt={item.product.name}
                        style={{ height: '200px', cursor: 'pointer' }}
                        onClick={showProductDetails}
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
                          <b>Price: </b>₹{item.product.price}
                        </Typography>
                        <Typography className='checkoutItemQuantity'>
                          <b>Quantity: </b>{item.quantity}
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
                {user.address && user.address.map((add, index) => (
                  <div key={index}>
                    <Typography>
                      {user.name}<br/>
                      {user.email}<br/>
                      {add.mobile}<br/>
                      {add.street}, {add.city}<br/>
                      {add.state}, {add.country}, {add.zipCode}
                    </Typography>
                  </div>
                ))}

                {!(user.address && user.address.length > 0) && (
                  <Button 
                    variant='contained' 
                    onClick={() => setDialogOpen(true)} 
                    style={{backgroundColor: '#42a2a2'}}
                    className='addressButton'
                  >
                    Add Address
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <b>Total Price for Product 1: </b>
                  <b>₹{cartAPI && cartAPI[0].product.price*cartAPI[0].quantity}</b>
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
                    token={handlePlaceOrder}
                    amount={(cartAPI && cartAPI[0].product.price*cartAPI[0].quantity) * 100} // Amount in cents
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
