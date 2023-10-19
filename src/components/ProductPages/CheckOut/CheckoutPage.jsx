import React, { useState } from 'react';
import { placeOrder } from '../../utils/Apis';
import { useAuth } from '../../utils/AuthProvider';
import { Button, MenuItem, Menu } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import AddressDialog from './AddessDialog';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
  const { user, cart } = useAuth();
  const cartAPI = cart.items;

  const [address, setAddress] = useState(user.address || {});
  // console.info(user)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [stripeDialogOpen, setStripeDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // console.log( 'cartAPI place order', cartAPI.map((item) => item._id));
  const handleSaveAddress = (newAddress) => {
    const updatedAddress = [...user.address, newAddress];
    setAddress(newAddress);
  };

  const handlePaymentMethod = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handlePaymentMethodClose = (method) => {
    setAnchorEl(null);
    setPaymentMethod(method);

    // Open Stripe dialog only when 'Card' is selected
    if (method === 'Card') {
      setStripeDialogOpen(true);
    } else {
      // Close the Stripe dialog if any other option is selected
      setStripeDialogOpen(false);
    }
  };

  const handlePlaceOrder = async (token) => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await placeOrder(
        cartAPI.map((item) => item._id), 
        cartAPI.map((item) => item.quantity),
        address,
        authToken,
        token.id)
        console.log('plcae order', response);
    } catch (error) {
      console.error('placeorder', error);
    }
  }

  return (
    <div style={{margin: '100px'}}>
      <h2>Checkout</h2>
      {address.street && (
        <div>
          <h3>Delivery Address:</h3>
          <p>
            {address.name}<br/>
            {address.email}<br/>
            {address.mobile}<br/>
            {address.street}, {address.city}<br/>
            {address.state}, {address.country}, {address.zipCode}<br/>
          </p>
        </div>
      )}

      {!address.street && (
        <Button variant='contained' onClick={() => setDialogOpen(true)} className='addressButton'>
          Add Address
        </Button>
      )}

      {address.street && (
        <Button variant='outlined' onClick={() => setDialogOpen(true)}>
          Change Address
        </Button>
      )}

      <AddressDialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        onSave={handleSaveAddress} 
      />

      <Button variant='outlined' onClick={handlePaymentMethod}>
        {paymentMethod === 'COD' ? 'Cash on Delivery' : 'Pay With Card'} <ArrowDropDown />
      </Button>
      <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handlePaymentMethodClose(paymentMethod)}
      >
          <MenuItem 
            onClick={() => handlePaymentMethodClose('COD')}>Cash on Delivery
          </MenuItem>
          <MenuItem 
            onClick={() => handlePaymentMethodClose('Card')}>Pay With Card
          </MenuItem>
      </Menu>

      {stripeDialogOpen && (
        <StripeCheckout
          stripeKey="pk_live_51O2uQoSDri24Myy1TYDG1Rzm2x8CCJOSlG0oqGprnUOSrdUpqgyreIkJXH9SevgqjwgOWc0kXiycgq0UMw0f460r006stDAD7M"
          token={handlePlaceOrder}
          amount={cart.totalPrice * 100} // Amount in cents
          currency="INR"
          name="BEWAKOOF"
          description="Payment for your Order"
          closed={() => setStripeDialogOpen(false)}
        />
      )}

      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </div>
  )
}

export default Checkout
