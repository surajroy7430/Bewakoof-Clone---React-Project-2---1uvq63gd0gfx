import React, { useState } from 'react';
import '../../styles/Login.css'
import { 
    Typography, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    return (
        <div id='main-login-form' className='centered-flex'>
            <div className='body-container'>
                <div className='login-form-container'>
                    <Avatar className='avatar centered-flex' />
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
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        
                        <Button 
                            className='login-submit'
                            type='submit' 
                            fullWidth 
                            variant='contained'>
                            <Typography>Log In</Typography>
                        </Button>
                        <div className="xgroup">
                            <Link to='/forgot'>Forgot Password?</Link>
                            <div className='register-account'>
                                <p>Don't have an account?&nbsp;
                                    <Link to='/register'>SignUp</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
