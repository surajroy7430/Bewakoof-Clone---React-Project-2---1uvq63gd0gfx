import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductsBySearch } from '../utils/Apis';
import ProductCards from '../ProductsData/ProductCards';
import { Grid, Pagination } from '@mui/material';

const SearchResults = () => {
  const location = useLocation();
  // const {searchTerm} = useParams()
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('name');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsBySearch(searchTerm, 'name');
        setSearchResults(products);
        console.log(products.length);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

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
        {searchResults.map((product) => (
            <ProductCards key={product._id} {...product} />
        ))}

        </Grid>
    </Grid>
  );
};

export default SearchResults;
