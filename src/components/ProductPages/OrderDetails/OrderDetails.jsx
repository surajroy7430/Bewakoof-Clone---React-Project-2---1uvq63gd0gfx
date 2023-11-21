import React from 'react';
import './MyOrders.css';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  CardMedia, 
  Chip, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
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
    }= {}, 
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
                <Grid item xs={4}>
                  <CardMedia
                    component='img'
                    image={items && items[0].product.displayImage}
                    alt={items && items[0].product.name}
                    style={{ height: isSm ? '200px' : '300px' }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography className='orderedStatus'>
                      {status}
                    </Typography>
                    <Typography className='orderedItemName'>
                      {items && items[0].product.name}
                    </Typography>
                    <Typography className='orderedItemPrice'>
                      Price: ₹{items && items[0].product.price}
                    </Typography>
                    <Typography className='orderedItemPrice'>
                      Size: {items && items[0].size}
                    </Typography>
                  </CardContent>
                </Grid>
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
                    <Typography>Cart Total </Typography>
                    <Typography><b>₹</b> {totalPrice}</Typography>
                </div>
                <div className="orderPaymentWrapper">
                    <Typography>Delivery Fee </Typography>
                    <Typography>FREE</Typography>
                </div>
                <div className="orderPaymentWrapper">
                    <Typography>COD </Typography>
                    <Typography>FREE</Typography>
                </div>
                <div className="orderPaymentWrapper">
                    <Typography>Order Total </Typography>
                    <Typography><b>₹</b> {totalPrice}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </Box>
  )
}

export default OrderDetails
