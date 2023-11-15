import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';

const WomensCategories = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/womens-clothing');
    }

    const categories = [
        {
            title: 'printed_tshirts',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg',
        },
        {
            title: 'oversized_tshirts',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png',
        },
        {
            title: 'fashion_tops',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg',
        },
        {
            title: 'joggers',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png',
        },
    ];

  return (
    <div>
        <Grid container spacing={3} className="categories" justifyContent="center" mt>
            {categories.map((category, index) => (
                <Grid item key={index+1} xs={12} sm={6} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center',
                            padding: '0px',
                        }}
                        onClick={toProducts}
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.title}
                            style={{ width: '75%', height: 'auto' }}
                        />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default WomensCategories
