import React, { useEffect, useState } from 'react';
import '../ProductsData/Products.css'
import MensClothing from '../ProductsData/MensClothing';
import { Grid } from '@mui/material';
import { getProductsData } from '../utils/Apis';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const limit = 100;

    const fetchData = async() => {
      try {
        const productsData = await getProductsData(limit);
        setProducts(productsData);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <Grid 
      container 
      direction='column'
      alignItems='center' 
      justifyContent='center' 
      className='columnContainer'
    >
      {
        products && (
          <Grid 
            item 
            container 
            direction='row' 
            alignItems='center' 
            justifyContent='center' 
            className='rowContainer' 
            gap='20px'
          >
              {products.map((productCards) => (
                  <MensClothing key={productCards._id} {...productCards} />
              ))}
          </Grid>
        )
      }
    </Grid>
  )
}

export default ProductsPage
