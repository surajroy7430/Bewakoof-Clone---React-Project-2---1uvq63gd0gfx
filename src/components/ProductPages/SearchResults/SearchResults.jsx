import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import { useLocation } from 'react-router-dom';
import { getProductsBySearch } from '../../utils/Apis';
import ProductCards from '../../ProductsData/ProductCards';
import { Grid, Typography, Pagination } from '@mui/material';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('name');
  const [searchResults, setSearchResults] = useState([]);
  const limit = 300;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsBySearch(searchTerm, 'name', limit);
        setSearchResults(products);
        // console.log(products.length);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <Typography variant='h5' style={{marginTop: '100px', marginLeft: '50px', fontWeight: 600}} className='serarchResults'>
        Search Result For : "{searchTerm}" <span style={{color: 'gray'}}>({searchResults.length})</span>
      </Typography>
      <Grid container spacing={2}>
        {searchResults && searchResults.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <ProductCards key={product._id} {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchResults;
