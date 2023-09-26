import React from 'react';
import '../../styles/Login.css'
import { 
    Typography, 
    Paper, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button,
    Grid
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='main'>
        <Paper className='paper'>
            <Avatar className='avatar'>
                <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5'>Log in to your account</Typography>
            <Typography variant='p'>for Latest trends, exciting offers and everything Bewakoof®!</Typography>

            <form className='form'>
                <FormControl fullWidth required margin='normal'>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input 
                        id='email' 
                        name='email' 
                        autoComplete='off' 
                        autoFocus
                    />
                </FormControl>
                <FormControl fullWidth required margin='normal'>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input 
                        id='password' 
                        name='password' 
                        autoComplete='off' 
                    />
                </FormControl>
                <Button 
                    className='submit'
                    type='submit' 
                    fullWidth
                    variant='contained'>
                    <Typography>Log In</Typography>
                </Button>
                <Link to='/forget'>Forgot Password?</Link>
            </form>
        </Paper>
    </main>
  )
}

export default Login
