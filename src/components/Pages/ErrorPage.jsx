import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import { Home } from '@mui/icons-material';

const ErrorPage = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '79px',
        }}
    >
        <Container maxWidth='md' sx={{textAlign: 'center'}}>
            <Typography 
                variant='h1'
                sx={{
                    fontSize: '300px', 
                    fontWeight: '600',
                    color: '#b8b8b8',
                }}
            >404</Typography>
            <Typography sx={{
                fontSize: '25px',
                padding: '5px',
                color: '#878585'
            }
            }>Page Not Found!</Typography>
            <div>
                <Button 
                    variant='contained' 
                    component={Link} 
                    to='/' 
                    sx={{borderRadius: '50px',padding: '10px 25px', marginTop: '20px'}}
                >
                    BACK TO HOMEPAGE&nbsp;<Home />
                </Button>
            </div>
        </Container>
    </Box>
  )
}

export default ErrorPage
