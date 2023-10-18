import React, { useState } from 'react';
import { placeOrder } from '../../utils/Apis';
import { useAuth } from '../../utils/AuthProvider';
import { Button, FormControl, TextField, MenuItem, Menu } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

const Checkout = () => {
  const { cart } = useAuth();
  const cartAPI = cart.items;

  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [anchorEl, setAnchorEl] = useState(null);

  console.log( 'cartAPI place order', cartAPI.map((item) => item._id));
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethod = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handlePaymentMethodClose = (method) => {
    setAnchorEl(null);
    setPaymentMethod(method);
  };

  const handlePlaceOrder = async () => {
    const authToken = localStorage.getItem('authToken');
    try {
      const response = await placeOrder(
        cartAPI.map((item) => item._id), 
        cartAPI.map((item) => item.quantity),
        {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          country: "USA",
          zipCode: 123456
        },
        authToken)
        console.log('plcae order', response);
    } catch (error) {
      console.error('placeorder', error);
    }
  }
  return (
    <div style={{margin: '100px'}}>
      <h2>Checkout</h2>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Address"
          variant="outlined"
          value={address}
          onChange={handleAddressChange}
        />
      </FormControl>
      <Button variant='outlined' onClick={handlePaymentMethod}>
        {paymentMethod === 'COD' ? 'Cash on Delivery' : 'Credit/Debit Card'} <ArrowDropDown />
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
            onClick={() => handlePaymentMethodClose('Card')}>Credit/Debit Card
          </MenuItem>
      </Menu>
      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </div>
  )
}

export default Checkout
