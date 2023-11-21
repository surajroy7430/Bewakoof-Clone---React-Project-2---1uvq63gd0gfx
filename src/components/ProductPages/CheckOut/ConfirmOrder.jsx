import React from 'react';
import './Checkout.css';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
  const navigate = useNavigate();

  const showOrderdetails = () => {
    navigate('/myaccount/orders');
    window.location.replace('/myaccount/orders');
  };

  return (
    <Box className='confirmedOrderWrapper'>
      <Paper className='confirmedOrder' elevation={2}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9n9hECp5e9lT3d3kDazcunSyR_toFcRJx1cV_ObQQ-fEizyZVEYEbgBK5Sp_EhTzN2_4&usqp=CAU'
          alt='Confimed Order' 
          style={{width: '40%'}}
        />
        <Typography 
          variant='h4'
          style={{marginTop: '20px', color: 'red', fontWeight: 600}}
        >
          Order Successful</Typography>
        <Typography 
          variant='body2'
          style={{marginTop: '20px'}}
        >
          Thank You So Much For Your Order</Typography>

        <Button 
          variant='contained' 
          onClick={showOrderdetails}
          style={{backgroundColor: 'springgreen', fontWeight: 600, marginTop: '20px'}}
        >
          CHECK STATUS</Button>
      </Paper>
    </Box>
  )
}

export default ConfirmOrder
