import React, { useEffect, useState } from 'react';
import './styles/Products.css';
import { Breadcrumbs, Button, Divider, Grid, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { ArrowDropDown } from '@mui/icons-material';
import FilterOptions from '../ProductPages/FilterResults/FilterOptions';

const MensClothing = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState('Men');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null); // Added state for Menu anchor
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const limit = 300;

  useEffect(() => {
    const fetchData = async(page) => {
      try {
        const mensProducts = await getProductsData(page, limit, gender);
        setProducts((prevProducts) => [...prevProducts, ...mensProducts.slice(0, limit)]);
        // console.log('mensProducts', mensProducts);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData(page);
  }, [page, gender])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (
      window.innerHeight + scrollPosition >=
      (document.body.offsetHeight - 200) && (limit == 500)
    ) {
      // Load more products here
      setPage((prevPage) => prevPage + 1);
    }
  }, [scrollPosition]);

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
          {!isMD && (
          <div className='breadcrumbs'>
            <Grid item>
              <Breadcrumbs>
                <Link to='/'>Home</Link>
                <Typography>
                  Men Clothing
                </Typography>
              </Breadcrumbs>
            </Grid>
          </div>
          )}

          <div className="clothingLength">
            <div className="clothingLengthName">
              <h2>Men's Clothing&nbsp;
                <span style={{color: 'gray'}}>({products.length})</span>
              </h2>
            </div>
            <Divider orientation='horizontal' className='clothingDivider' />
          </div>

          {products && (
            <div className='sortButtonContainer' style={{ marginLeft: '50px', marginTop: '15px' }}>
              <Button variant='outlined' onClick={handleSortClick}>
                <span>Sort By&nbsp;</span> {selectedOption || 'Popular'} <ArrowDropDown />
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
            </div>
          )}

          <Grid container spacing={2}>
            {/* Filter Options */}
            {!isMD && (
              <Grid item md={3}>
                <FilterOptions products={products} setProducts={setProducts} gender={gender} />
              </Grid>
            )}

            {/* Product Cards */}
            <Grid item xs={isMD ? 12 : 9}>
              <Grid container>
                {products.map((card) => (
                  <Grid item xs={12} sm={6} md={4} key={card._id}>
                    <ProductCards {...card} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default MensClothing
