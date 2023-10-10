import React, { useEffect, useState } from 'react';
import './styles/Products.css'
import { Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';

const MensClothing = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 15;
    const theme = useTheme();
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isSM = useMediaQuery(theme.breakpoints.up('sm'));

    const fetchData = async(page) => {
      try {
        const productsData = await getProductsData(page, limit);
        setProducts(productsData);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handlePageChange = (event, value) => {
      setPage(value);
    };

  return (
    <Grid 
      container 
      direction='column'
      alignItems='center' 
      justifyContent='center' 
      className='columnContainer'
    >
      <Grid 
        item 
        container 
        direction='row' 
        alignItems='center' 
        justifyContent='center' 
        className='rowContainer' 
        gap='20px'
      >
        {products.map((cards) => (
            <ProductCards key={cards._id} {...cards} />
        ))}

      </Grid>

        <Pagination
          count={Math.ceil(135 / limit)}
          variant="outlined"
          shape="rounded"
          color="primary"
          page={page}
          onChange={handlePageChange}
          style={{ marginTop: '20px' }}
        />
    </Grid>
  )
}

export default MensClothing
