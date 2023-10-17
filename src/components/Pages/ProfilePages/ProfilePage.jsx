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
            marginTop: '100px',
        }}
    >
      <Container>
        <Typography 
          variant='h3' 
          sx={{
              fontSize: '35px', 
              fontWeight: '600',
        }}>My Account</Typography>
        <Divider orientation='horizontal' variant='middle' flexItem className='profileDivider' />

        <Box sx={{display: 'flex', marginTop: '50px', marginBottom: '20px'}}>
          <Box className='accountOptions' style={{margin: '30px 0'}}>
            <Link to='/myaccount/orders'>
              <Typography className='myAccOptionsTitle'>My Orders <NavigateNext /></Typography>
              <Typography style={{color: '#979797', opacity: '0.5'}}>
                <small>View, modify and track orders</small>
              </Typography>
            </Link>
          </Box>
          <Divider orientation='vertical' variant='middle' flexItem style={{color: '#979797'}} />

          <Box className='accountOptions' style={{margin: '30px'}}>
            <Link to='/wishlist'>
              <Typography className='myAccOptionsTitle'>My Wishlist <NavigateNext /></Typography>
              <Typography style={{color: '#979797', opacity: '0.5'}}>
                <small>See Wishlist</small>
              </Typography>
            </Link>
          </Box>
          <Divider orientation='vertical' variant='middle' flexItem style={{color: '#979797'}} />

          <Box className='accountOptions' style={{margin: '30px'}}>
            <Link to='/myaccount/profile'>
              <Typography className='myAccOptionsTitle'>My Profile <NavigateNext /></Typography>
              <Typography style={{color: '#979797', opacity: '0.5'}}>
                <small>Edit personal info, change password</small>
              </Typography>
            </Link>
          </Box>
        </Box>
        <Divider orientation='horizontal' style={{marginBottom: '300px'}} />

      </Container>
    </Box>
  )
}

export default ProfilePage
