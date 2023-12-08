import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Add1 = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/men-clothing');
    }

    const categories = [
        {
            title: 'New Arivals',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg',
        },
        {
            title: 'Combos',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif',
        },
        {
            title: 'Official Collaborations',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg',
        },
        {
            title: 'Vote for Designs',
            imageUrl: 'https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg',
        }, 
    ];

  return (
    <div>
        <Grid container spacing={2} className="categories" justifyContent="center" mt mb>
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
                        <Typography style={{fontSize: '13px', fontWeight: 600}}>{category.title}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}
export default Add1