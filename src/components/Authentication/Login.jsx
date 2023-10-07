import React, { useState } from 'react';
import './styles/LoginAndSignup.css';
import { 
    Typography, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button,
    InputAdornment,
    IconButton,
    Box
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { getHeaderWithProjectIDAndBody } from '../utils/configs.js';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../utils/AuthProvider';

const Login = () => {
    const { login } = useAuth();
    const [userInfo, setUserInfo] = useState({
        email: '', 
        password: '',
    });

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
        setUserInfo({ ...userInfo, [name]: value });
    }

    const signIn = async(userInfo) => {
        userInfo.appType = 'ecommerce';
        const configs = getHeaderWithProjectIDAndBody();

        try {
            const res = await axios.post(
                'https://academics.newtonschool.co/api/v1/user/login',
                userInfo, configs
            )
            login(res.data.data)
            // console.log('response', res); 
            toast.success('Login Successful', {
                position: 'top-left'
            });
            navigate('/')
        } 
        catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(userInfo);
    }

    return (
        <Box sx={{marginTop: '150px'}}>
            <ToastContainer />
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
                            <Link to='/forgot' style={{float: 'right'}}>Forgot Password?</Link>
                        </div>
                        
                        <Button 
                            className='submit_button'
                            type='submit' 
                            fullWidth 
                            variant='contained'>
                            <Typography>Log In</Typography>
                        </Button>
                        <div className="xgroup">
                            <p>Don't have an account?&nbsp;
                                <Link to='/signup'>SignUp</Link>
                            </p>
                        </div>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
