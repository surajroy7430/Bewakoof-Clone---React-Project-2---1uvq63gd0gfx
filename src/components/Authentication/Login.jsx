import React, { useState } from 'react';
import './styles/LoginAndSignup.css';
import { useGoogleLogin } from '@react-oauth/google';
import { 
    Typography, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button,
    InputAdornment,
    IconButton,
    Box,
    Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../utils/AuthProvider';
import { signInUser } from '../utils/Apis';
import axios from 'axios';

const Login = () => {
    const { loginUser, setCredentialData } = useAuth();
    const [userInfo, setUserInfo] = useState({
        email: '', 
        password: '',
    });
    // const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ 
            ...userInfo, 
            [name]: value 
        });
        // Check if all fields are filled and update form validity
        // setFormValid(Object.values(userInfo).every((field) => field.trim() !== ''));
    }
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const userInfo = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`
                        }
                    }
                )
                setCredentialData(userInfo);
                console.log('Google User Info', userInfo);
            } catch (error) {
                console.error('Login Failed')
            }
        },
    })

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const userData = await signInUser(userInfo);
            loginUser(userData);

            toast.success('Login Successful', {
                position: 'top-left'
            });
            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <Box sx={{marginTop: '150px'}}>
            <Box sx={{display: 'flex'}}>
                <Box className='form-container'>
                    <Avatar className='avatar' />
                    <Typography variant='h2'>Log in to your account</Typography>
                    <form className='main-form' onSubmit={handleSubmit}>
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
                                value={userInfo.email} 
                                onChange={handleInputChange}
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
                                autoComplete="off"
                                value={userInfo.password} 
                                onChange={handleInputChange}
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
                        <div className="forgotPassword">
                            <Link to='/forgotpassword' style={{float: 'right'}}>Forgot Password?</Link>
                        </div>
                        
                        <Button 
                            className='submit_button'
                            type='submit' 
                            fullWidth 
                            variant='contained'
                        >
                            <Typography>Log In</Typography>
                        </Button>

                        <div className="xgroup">
                            <p>Don't have an account?&nbsp;
                                <Link to='/signup'>SignUp</Link>
                            </p>
                        </div>

                        {/* <Divider>OR</Divider>

                        <div className='xgroup'>
                            <Button onClick={() => loginWithGoogle()}>
                                Sign in with Google
                            </Button>
                        </div> */}
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
