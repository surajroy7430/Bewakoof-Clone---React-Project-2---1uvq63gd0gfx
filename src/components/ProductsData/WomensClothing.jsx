import React, { useEffect, useState } from 'react'
import './styles/Products.css'
import { Breadcrumbs, Button, Grid, IconButton, Menu, MenuItem, Pagination, Typography } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { ArrowDropDown } from '@mui/icons-material';

const WomensClothing = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null); // Added state for Menu anchor
  const limit = 500;

  useEffect(() => {
    const fetchData = async(page) => {
      try {
        const womensProducts = await getProductsData(page, limit, 'Women');
        setProducts(womensProducts);
        // console.log('womensProducts', womensProducts);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData(page);
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = (option) => {
    setAnchorEl(null);
    // Implement sorting logic based on the selected option
    if (option === 'price-low-to-high') {
        // Sort products array by price: low to high
        const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    } else if (option === 'price-high-to-low') {
        // Sort products array by price: high to low
        const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className='fadeLoader'>
          <FadeLoader color="#303231" height={50} margin={30} radius={2} width={7} />
        </div>
      ) : (
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

          {products && 
          (<div className='sortButtonContainer' style={{ marginLeft: '50px' }}>
                <Button variant='outlined' onClick={handleSortClick}>
                    Sort By <ArrowDropDown />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleSortClose(null)}
                >
                    <MenuItem onClick={() => handleSortClose('price-low-to-high')}>Price: Low to High</MenuItem>
                    <MenuItem onClick={() => handleSortClose('price-high-to-low')}>Price: High to Low</MenuItem>
                </Menu>
          </div>)}

          <Grid container spacing={2}>
              {products.map((cards) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={cards._id}>
                  <ProductCards {...cards} />
                </Grid>
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
        </>
      )}
    </>
  )
}

export default WomensClothing
