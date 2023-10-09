import React, { useEffect, useState } from 'react';
import '../ProductsData/Products.css'
import axios from 'axios'
import { getHeaderWithProjectId } from '../utils/configs';
import { useAuth } from '../utils/AuthProvider';
import MensClothing from '../ProductsData/MensClothing';
import { Grid, Paper } from '@mui/material';

const ProductsPage = () => {
  const { user } = useAuth();
  // console.log('user', user);
    const [products, setProducts] = useState([]);
    const limit = 100;

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();

        try {
            const productsData = await axios.get(
                `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=${limit}`,
                config
            );
            
            // console.log(productsData);
            const productsList = productsData.data.data;
            setProducts(productsList);
        } catch (error) {
            console.error("Cannot found products", error);
        }
    }
    useEffect(() => {
        fetchProducts();
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
