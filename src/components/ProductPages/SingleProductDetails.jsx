import { Box, Breadcrumbs, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import './styles/SingleProduct.css'
import { Link } from 'react-router-dom';
import { DescriptionOutlined } from '@mui/icons-material';

const SingleProductDetails = ({ product }) => {
  const { displayImage, images, description, name, price, fabric, brand, subCategory, color, gender } = product;
  // console.log('images', images);
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <>
      <div className='breadcrumbs'>
        <Grid item>
          <Breadcrumbs>
            <Link to='/'>Home</Link>
            <Typography>{gender} Clothing</Typography>
            <Typography>{gender} {subCategory}</Typography>
            <Typography>{name}</Typography>
          </Breadcrumbs>
        </Grid>
      </div>
      <Box p={2}>
        <Grid container spacing={2} className='productWrapper'>
          <Grid item xs={12} md={6}>
            <Box>
              {images?.map((image, index) => (
                <img key={index} src={image} alt={`product-image-${index+1}`} style={{cursor: 'pointer', width: '80px'}} />
              ))}
            </Box>
            <img src={displayImage} alt={name} style={{width: '50%', height: 'auto'}} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body1">{brand}</Typography>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h6">₹{price}</Typography>
            <Typography variant="body2">inclusive of all taxes</Typography>
            <Typography variant="body1">Color: {color}</Typography>
            <Button variant="text" onClick={toggleDescription} className='description_button'>
              <DescriptionOutlined /> Product Description <span>{isDescriptionVisible ? '-' : '+'}</span>
            </Button>
            {isDescriptionVisible && (
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SingleProductDetails
