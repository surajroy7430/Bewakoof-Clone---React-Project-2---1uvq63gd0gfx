import { Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../utils/AuthProvider'
import { deleteAccount } from '../../utils/Apis';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { user, credential, logout } = useAuth();
  const authToken = localStorage.getItem("authToken");

  const deleteUser = async() => {
    try {
      await deleteAccount(authToken); 
      logout(); // Log the user out after successfully deleting the account
      toast.success('Account Deleted');
    } catch (error) {
      toast.error('Something went wrong!, try again later');
    }
  }

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
            label="Name"
            value={credential ? credential.data.name : user.name}
            disabled
            style={{marginRight: '20px', width: '350px'}}
          />
          <TextField 
            margin="normal"
            id="email"
            name='email'
            label="Email Address"
            value={credential ? credential.data.email : user.email}
            disabled
            style={{width: '350px'}}
          />
        </div>

        {user && user.address[0] ? (
          <div>
            <div>
              <TextField
                margin="normal"
                label="Mobile"
                value={user.address[0].mobile}
                style={{marginRight: '20px', width: '350px'}}
                disabled
              />
              <TextField
                margin="normal"
                label="Street"
                value={user.address[0].street}
                disabled
                style={{width: '350px'}}
              />
            </div>
            <div>
              <TextField
                margin="normal"
                label="City"
                value={user.address[0].city}
                disabled
                style={{marginRight: '20px', width: '350px'}}
              />
              <TextField
                margin="normal"
                label="State"
                value={user.address[0].state}
                disabled
                style={{width: '350px'}}
              />
            </div>
            <div style={{marginBottom: '30px'}}>
              <TextField
                margin="normal"
                label="Country"
                value={user.address[0].country}
                disabled
                style={{marginRight: '20px', width: '350px'}}
              />
              <TextField
                margin="normal"
                label="Zip Code"
                value={user.address[0].zipCode}
                disabled
                style={{width: '350px'}}
              />
            </div>
          </div>
        ) : null}

        {user ? (
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
        ) : null}
      </Container>
    </Box>
  )
}

export default MyProfile
