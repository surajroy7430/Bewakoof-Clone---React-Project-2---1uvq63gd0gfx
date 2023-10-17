import React, { useEffect, useState } from 'react'
import './styles/Products.css'
import { Breadcrumbs, Button, Grid, Menu, MenuItem, Pagination, Typography } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { ArrowDropDown } from '@mui/icons-material';

const MensClothing = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null); // Added state for Menu anchor
    const [selectedOption, setSelectedOption] = useState(null);
    const limit = 300;

    useEffect(() => {
      const fetchData = async(page) => {
        try {
          const mensProducts = await getProductsData(page, limit, 'Men');
          setProducts(mensProducts);
          // console.log('mensProducts', mensProducts);
        } catch (error) {
          console.log("Error: ", error);
        }
      }

      fetchData(page);
    }, [page])

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

  const handleSortClose = (option, optionText) => {
    setAnchorEl(null);
    setSelectedOption(optionText)
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
                    Men's Clothing <span style={{color: 'gray'}}>({products.length})</span>
                  </Typography>
                </Breadcrumbs>
            </Grid>
          </div>

          {products && 
          (<div className='sortButtonContainer' style={{ marginLeft: '50px', marginTop: '15px' }}>
                <Button variant='outlined' onClick={handleSortClick}>
                    Sort By {selectedOption || null} <ArrowDropDown />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleSortClose(null)}
                >
                    <MenuItem 
                      onClick={() => handleSortClose('price-low-to-high', 'Price: Low to High')}>Price: Low to High
                    </MenuItem>
                    <MenuItem 
                      onClick={() => handleSortClose('price-high-to-low', 'Price: High to Low')}>Price: High to Low
                    </MenuItem>
                </Menu>
          </div>)}

          <Grid container spacing={2}>
              {products && products.map((cards) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={cards._id}>
                  <ProductCards {...cards} />
                </Grid>
              ))}
          </Grid>

              {/* <Pagination
                count={Math.ceil(500 / limit)}
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

export default MensClothing
