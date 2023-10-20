import React from 'react';
import './styles/ProfilePage.css';
import { Box, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavigateNext } from '@mui/icons-material';

const ProfilePage = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '80px',
            padding: '0 20px',
        }}
    >
      <Container>
        <Typography 
          variant='h3' 
          sx={{
              fontSize: '35px', 
              fontWeight: '600',
        }}>My Account</Typography>
        <Divider orientation='horizontal' className='profileDivider' />

        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '50px', marginBottom: '20px'}}>
          <Box className='accountOptions'>
            <Link to='/myaccount/orders'>
              <Typography className='myAccOptionsTitle'>My Orders <NavigateNext /></Typography>
              <Typography style={{color: '#868686', opacity: '0.5'}}>
                <small>View, modify and track orders</small>
              </Typography>
            </Link>
          </Box>
          <Divider orientation='horizontal' className='profileOptionsDivider' />

          <Box className='accountOptions'>
            <Link to='/wishlist'>
              <Typography className='myAccOptionsTitle'>My Wishlist <NavigateNext /></Typography>
              <Typography style={{color: '#868686', opacity: '0.5'}}>
                <small>See Wishlist</small>
              </Typography>
            </Link>
          </Box>
          <Divider orientation='horizontal' className='profileOptionsDivider' />

          <Box className='accountOptions'>
            <Link to='/myaccount/profile'>
              <Typography className='myAccOptionsTitle'>My Profile <NavigateNext /></Typography>
              <Typography style={{color: '#868686', opacity: '0.5'}}>
                <small>Edit personal info, change password</small>
              </Typography>
            </Link>
          </Box>
        </Box>
        <Divider orientation='horizontal' style={{marginBottom: '300px'}} className='profileOptionsDivider' />

      </Container>
    </Box>
  )
}

export default ProfilePage
