import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProductCards from '../../ProductsData/ProductCards';
import { useLocation } from 'react-router-dom';
import { getProductsByFilter } from '../../utils/Apis';

const FilterProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterTerm = queryParams.get('name');
  const [filteredResults, setFilteredesults] = useState([]);
  const limit = 500;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByFilter(filterTerm, 'name', limit);
        setFilteredesults(products);
        // console.log(products.length);
      } catch (error) {
        console.error(error);
      }
    };

    if (filterTerm) {
      fetchData();
    }
  }, [filterTerm]);

  return (
    <>
      <Typography variant='h5' style={{marginTop: '100px', marginLeft: '50px', fontWeight: 600}}>
        Search Result For : "{filterTerm}" <span style={{color: 'gray'}}>({filteredResults.length})</span>
      </Typography>
      <Grid container spacing={2}>
        {filteredResults && filteredResults.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <ProductCards key={product._id} {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FilterProducts
