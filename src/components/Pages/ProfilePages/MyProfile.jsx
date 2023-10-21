import { Box,  Container, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../utils/AuthProvider'

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{fontSize: '35px', fontWeight: '600',}}>
          My Profile
        </Typography>
        <Divider orientation='horizontal' className='myOrdersDivider' />

        <div style={{margin: '30px 0'}}>
          <TextField 
            margin="normal"
            id="name"
            name='name'
            value={user.name}
            disabled
          /><br/>
          <TextField 
            margin="normal"
            id="email"
            name='email'
            value={user.email}
            disabled
          />
        </div>
      </Container>
    </Box>
  )
}

export default MyProfile
