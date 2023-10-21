import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import './MyOrders.css';
import { useAuth } from '../../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyOrders = (props) => {
  const { orders } = useAuth();
  // console.log('_id', _id);

  const navigate = useNavigate();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  const formattedOrders = orders.map(order => {
    const createdAt = new Date(order.createdAt);
    const day = createdAt.getDate();
    const monthIndex = createdAt.getMonth();
    const monthName = monthNames[monthIndex];
    const year = createdAt.getFullYear();
    const formattedDate = `${day}-${monthName}-${year}`;
    
    // Add the formatted date to the order object
    return {
        ...order,
        createdAt: formattedDate
    };
  });
  // console.log('formattedOrders', formattedOrders);

  const showOrderDetails = () => {
    // navigate(`/order/${_id}`);
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{fontSize: '35px', fontWeight: '600',}}>
          My Orders
        </Typography>
        <Divider orientation='horizontal' className='myOrdersDivider' />

        <Grid container mt={5}>
          <Grid item xs={12} md={10} lg={8}>
            {formattedOrders && formattedOrders.map((item, i) => (
                <Card key={i+1} elevation={3} style={{ padding: 10, marginBottom: 20 }}>
                  <Grid container>
                    <Grid item xs={4} className='orderImage'>
                      <CardMedia
                        component='img'
                        image={item.order.items[0].product.displayImage}
                        alt={item.order.items[0].product.name}
                        style={{ height: isSm ? '200px' : '300px', cursor: 'pointer' }}
                        onClick={showOrderDetails}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CardContent>
                        <Typography className='orderId'>
                        <b>Order Id: </b>#{item.order._id}
                        </Typography>
                        <Typography className='orderItemName'>
                          <b>Name: </b>{item.order.items[0].product.name}
                        </Typography>
                        <Typography className='orderItemPrice'>
                          <b>Price: </b>₹{item.order.totalPrice}
                        </Typography>
                        <Typography className='orderDate'>
                          <b>Order At: </b>{item.createdAt}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MyOrders
