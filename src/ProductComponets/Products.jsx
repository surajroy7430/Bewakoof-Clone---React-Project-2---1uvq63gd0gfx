import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import '../styles/Products.css';

const Products = (props) => {
    const {name, displayImage, color, category, price, seller, type} = props
    
  return (
    <Card sx={{display: 'flex'}}>
      <CardMedia 
        component='img' 
        image={displayImage} 
        alt={name} 
        sx={{width: '20%'}}
        className='productImage'
      />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CardContent>
          <Typography component='div' variant='h5' color='text.secondary'>{name}</Typography>
          <Typography variant='p' color='text.secondary'>$ {price}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default Products
