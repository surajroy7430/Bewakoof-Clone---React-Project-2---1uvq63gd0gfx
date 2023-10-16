import React, { useEffect, useState } from 'react'
import './styles/Products.css'
import { Breadcrumbs, Grid, Pagination, Typography } from '@mui/material';
import { getProductsData } from '../utils/Apis';
import ProductCards from './ProductCards';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const MensClothing = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 500;

    const fetchData = async(page) => {
      try {
        const mensProducts = await getProductsData(page, limit, 'Men');
        setProducts(mensProducts);
        // console.log('mensProducts', mensProducts);
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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

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
