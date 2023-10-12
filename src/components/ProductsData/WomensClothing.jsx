import React, { useEffect, useState } from 'react'
import './styles/Products.css'
import { Breadcrumbs, Grid, Pagination, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';
import { Link } from 'react-router-dom';

const WomensClothing = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 500;
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  const isSM = useMediaQuery(theme.breakpoints.up('sm'));

  const fetchData = async(page) => {
    try {
      const womensProducts = await getProductsData(page, limit, 'Women');
      setProducts(womensProducts);
      console.log('womensProducts', womensProducts);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
      fetchData(page);
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className='breadcrumbs'>
        <Grid item>
            <Breadcrumbs>
              <Link to='/'>Home</Link>
              <Typography>
                Women's Clothing <span style={{color: 'gray'}}>({products.length})</span>
              </Typography>
            </Breadcrumbs>
        </Grid>

      </div>
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

          {/* <Pagination
            count={Math.ceil(386 / limit)}
            variant="outlined"
            shape="rounded"
            color="primary"
            page={page}
            onChange={handlePageChange}
            style={{ marginTop: '20px' }}
          /> */}
      </Grid>
    </>
  )
}

export default WomensClothing
