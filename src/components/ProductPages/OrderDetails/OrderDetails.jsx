import { Grid, Card, CardContent, Typography, Box, CardMedia, Chip, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import './MyOrders.css'
import { useAuth } from '../../utils/AuthProvider';

const OrderDetails = ({ orders }) => {
  const { user } = useAuth();
  const { 
    _id, 
    status, 
    totalPrice, 
    orderDate, 
    shipmentDetails: {
      address: {
        city, country, state, street, zipCode
      } = {}, 
      type
    }, 
    items 
} = orders;

const theme = useTheme();
const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return new Date(dateString).toLocaleDateString(undefined, options).toUpperCase();
  };

  return (
    <Box style={{margin: '100px 40px 20px'}}>
      <div className='orderIdWrapper'>
        <Typography variant="body2">ORDER# <strong>{ _id }</strong></Typography>
        <Typography variant="body2">Order Placed: <b>{formatDate(orderDate)}</b></Typography>
      </div>
      <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Card variant="outlined" style={{ padding: 10, display: 'flex' }}>
              {/* <Grid Container> */}
                <Grid item xs={4}>
                  <CardMedia
                    component='img'
                    image={items[0].product.displayImage}
                    alt={items[0].product.name}
                    style={{ height: isSm ? '200px' : '300px' }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography className='orderedStatus'>
                      {status}...
                    </Typography>
                    <Typography className='orderedItemName'>
                      {items[0].product.name}
                    </Typography>
                    <Typography className='orderedItemPrice'>
                      ₹{items[0].product.price}
                    </Typography>
                  </CardContent>
                </Grid>
              {/* </Grid> */}
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card variant="outlined" style={{marginBottom: '20px'}}>
              {/* Shipping details */}
              <h4 style={{backgroundColor: 'rgba(0,0,0,.09)', padding: '13px 20px'}}>
                SHIPPING DETAILS
              </h4>

              <CardContent>
                <div className='shippingDetails'>
                  <b style={{textTransform: 'capitalize'}}>{ user.name }</b>
                  <Chip label={type} size="small" />
                </div>
                <Typography variant="body1">
                  {street}, {city}, {zipCode}, {state}, {country}
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              {/* Payment summary */}
              <h4 style={{backgroundColor: 'rgba(0,0,0,.09)', padding: '13px 20px'}}>
                PAYMENT SUMMARY
              </h4>
              <CardContent>
                <div className="orderPaymentWrapper">
                    <b>Amount Paid </b>
                    <strong>₹ {totalPrice}</strong>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </Box>
  )
}

export default OrderDetails
