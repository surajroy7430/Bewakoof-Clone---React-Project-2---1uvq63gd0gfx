import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { Home } from '@mui/icons-material';

const ErrorPage = () => {
    const matches = useMediaQuery('(min-width:600px)'); // Define your desired media query here
    const headingFontSize = matches ? '300px' : '200px';

    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '79px',
    };
    const containerStyles = {
        textAlign: 'center'
    };
    const headingStyles = {
        fontSize: headingFontSize, 
        fontWeight: '600',
        color: '#b8b8b8',
    };
    const messageStyles = {
        fontSize: '25px',
        padding: '5px',
        color: '#878585'
    };
    const buttonStyles = {
        borderRadius: '50px',
        padding: '10px 25px',
        marginTop: '20px'
    };

  return (
    <Box style={boxStyles}>
        <Container maxWidth='md' style={containerStyles}>
            <Typography variant='h1' style={headingStyles}>404</Typography>
            <Typography style={messageStyles}>Page Not Found!</Typography>
            <div>
                <Button 
                    variant='contained' 
                    component={Link} 
                    to='/' 
                    style={buttonStyles}>BACK TO HOMEPAGE&nbsp;<Home />
                </Button>
            </div>
        </Container>
    </Box>
  )
}

export default ErrorPage
