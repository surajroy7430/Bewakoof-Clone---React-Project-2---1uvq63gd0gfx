import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import './MyOrders.css';

const MyOrders = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{fontSize: '35px', fontWeight: '600',}}>
          My Orders
        </Typography>
        <Divider orientation='horizontal' className='myOrdersDivider' />

        <Grid container mt={5}>
          <Grid item xs={12} md={10} lg={8}>
            {
                <Card elevation={3} spacing={2} style={{ padding: 10, marginBottom: 20 }}>
                  <Grid container>
                    <Grid item xs={4} className='orderImage'>
                      <CardMedia
                        component='img'
                        image=''
                        alt=''
                        style={{ height: isSm ? '200px' : '300px' }}
                        
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CardContent>
                        <Typography className='orderId'>
                        <b>Order Id: </b>#
                        </Typography>
                        <Typography className='orderItemName'>
                          <b>Name: </b>
                        </Typography>
                        <Typography className='orderItemPrice'>
                          <b>Price: </b>₹
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MyOrders
