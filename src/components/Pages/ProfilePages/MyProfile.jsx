import { Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../utils/AuthProvider'

const MyProfile = () => {
  const { user, logout } = useAuth();

  const deleteUser = () => {}

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
            style={{marginRight: '20px'}}
          />
          <TextField 
            margin="normal"
            id="email"
            name='email'
            value={user.email}
            disabled
          />
        </div>

        <Card variant="outlined" sx={{ borderColor: 'red', maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Delete Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Permanently delete your Account. This action is not reversible, so please continue with caution.
            </Typography>
          </CardContent>
          <div style={{ padding: '14px', borderTop: '1px solid red' }}>
            <Button variant="contained" color="error" onClick={deleteUser}>
              Delete Account
            </Button>
          </div>
        </Card>
      </Container>
    </Box>
  )
}

export default MyProfile
