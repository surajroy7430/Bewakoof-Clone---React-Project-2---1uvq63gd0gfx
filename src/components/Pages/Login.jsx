import React from 'react';
import '../../styles/Login.css'
import { 
    Typography, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button,
    Grid,
    Paper
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='main-login-form'>
            <Paper className='login-form-wrap'>
                <div className='body-container'>
                    <div className='login-form-container'>
                        <Avatar className='avatar'>
                            <LockOutlined />
                        </Avatar>
                        <Typography variant='h2'>Log in to your account</Typography>

                        <form className='login-form'>
                            <FormControl fullWidth required margin='normal' className='email-input'>
                                <InputLabel 
                                    htmlFor="email" 
                                    variant='standard'
                                    style={{color: 'gray'}}
                                >Email</InputLabel>
                                <Input 
                                    id='email' 
                                    name='email' 
                                    type='email' 
                                    autoComplete='off' 
                                    autoFocus 
                                />
                            </FormControl>
                            <FormControl fullWidth required margin='normal' className='password-input'>
                                <InputLabel 
                                    htmlFor='password' 
                                    variant='standard' 
                                    style={{color: 'gray'}}
                                >Password</InputLabel>
                                <Input 
                                    id='password' 
                                    name='password' 
                                    type='password' 
                                    autoComplete='off' 
                                />
                            </FormControl>
                            <Button 
                                className='login-submit'
                                type='submit' 
                                fullWidth 
                                disabled
                                variant='contained'>
                                <Typography>Log In</Typography>
                            </Button>

                            <div className="xgroup">
                                <Link to='/forgot'>Forgot Password?</Link>
                                <div className='register-account'>
                                    <p>Don't have an account?&nbsp;</p>
                                    <Link to='/register'>SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Login
