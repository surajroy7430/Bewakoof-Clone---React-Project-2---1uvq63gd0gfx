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
    Box,
    Divider
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../utils/AuthProvider';
import { signInUser } from '../utils/Apis';

const Login = () => {
    const { loginUser } = useAuth();
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

    // useEffect(() => {
    //     window.gapi.load('auth2', () => {
    //       window.gapi.auth2.init({
    //         client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google API Client ID
    //       });
    //     });
    //   }, []);
    
    //   const handleGoogleSignIn = async () => {
    //     const auth = window.gapi.auth2.getAuthInstance();
    //     try {
    //       const googleUser = await auth.signIn();
    //       const profile = googleUser.getBasicProfile();
    //       const userData = {
    //         email: profile.getEmail(),
    //         // You can handle other data as needed
    //       };
    //       // Handle the userData object (e.g., send it to your server or perform a login operation)
    //     } catch (error) {
    //       console.error('Google Sign-In Error:', error);
    //     }
    //   };

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
                        <Divider style={{margin: '20px 0', whiteSpace: 'nowrap'}}>OR CONTINUE WITH</Divider>

                        <Button
                            className='google-signin-button'
                            // fullWidth
                            variant='filled'
                            // onClick={handleGoogleSignIn}
                        >
                            <Typography>
                                <Google />&nbsp;
                                Gmail
                            </Typography>
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
