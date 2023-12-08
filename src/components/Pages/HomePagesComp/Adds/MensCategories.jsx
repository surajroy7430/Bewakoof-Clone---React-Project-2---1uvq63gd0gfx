import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';

const MensCategories = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/men-clothing');
    }

    const categories = [
        {
            title: 'printed_tshirts',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg',
        },
        {
            title: 'oversized_tshirts',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg',
        },
        {
            title: 'shorts',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg',
        },
        {
            title: 'joggers',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg',
        },
    ];

  return (
    <div>
        <Grid container spacing={3} className="categories" justifyContent="center" mt='1px'>
            {categories.map((category, index) => (
                <Grid item key={index+1} xs={12} sm={6} md={4} lg={3}>
                    <Paper
                        elevation={3}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center',
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

export default MensCategories
