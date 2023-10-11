import React, { useEffect, useState } from 'react';
import './styles/LoginAndSignup.css'
import { Avatar, Box, Button, Divider, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../utils/Apis';
import { Google } from '@mui/icons-material';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo, 
            [name]: value
        });
    }

    const handleSignUp = async(e) => {
        e.preventDefault();

        try {
            if(userInfo.password !== userInfo.confirmPassword){
                toast.warn('Password Not Matched!', {
                    position: 'top-right'
                })
            }
            else {
                await registerUser(userInfo, navigate);
                setUserInfo({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            }
        } catch (error) {
            toast.error(error);
        }
    }

    // useEffect(() => {
    //     window.gapi.load('auth2', () => {
    //         window.gapi.auth2.init({
    //             client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google API Client ID
    //         });
    //     });
    // }, []);
    
    // const handleGoogleSignIn = async () => {
    //     const auth = window.gapi.auth2.getAuthInstance();
    //     try {
    //         const googleUser = await auth.signIn();
    //         const profile = googleUser.getBasicProfile();
    //         const userData = {
    //             name: profile.getName(),
    //             email: profile.getEmail(),
    //             // add other data as needed
    //         };
    //         // Handle the userData object (e.g., send it to your server or perform a login operation)
    //     } catch (error) {
    //         console.error('Google Sign-In Error:', error);
    //     }
    // };

  return (
    <Box sx={{marginTop: '150px'}}>
        <ToastContainer />
        <Box sx={{display: 'flex'}}>
            <Box className='form-container'>
                <Avatar className='avatar' />
                <Typography variant='h2'>Register an Account</Typography>
                <form className='main-form' onSubmit={handleSignUp}>
                    <FormControl fullWidth required margin='normal' className='name-input'>
                        <InputLabel 
                            htmlFor="name" 
                            variant='standard' 
                            autoComplete='off' 
                            style={{color: 'gray'}}
                        >
                            Name
                        </InputLabel>
                        <Input 
                            id='name' 
                            name='name' 
                            type='text' 
                            autoComplete='off' 
                            autoFocus 
                            value={userInfo.name} 
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl fullWidth required margin='normal' className='email-input'>
                        <InputLabel 
                            htmlFor="email" 
                            variant='standard'
                            style={{color: 'gray'}}
                        >
                            Email
                        </InputLabel>
                        <Input 
                            id='email' 
                            name='email' 
                            type='email' 
                            autoComplete='off' 
                            value={userInfo.email} 
                            onChange={handleInputChange}
                        />
                      
                    </FormControl>
                    <FormControl fullWidth required margin='normal' className='password-input'>
                        <InputLabel 
                            htmlFor='password' 
                            variant='standard' 
                            style={{color: 'gray'}}
                        >
                            Password
                        </InputLabel>
                        <Input 
                            id='password' 
                            name='password' 
                            type='text' 
                            value={userInfo.password} 
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl fullWidth required margin='normal' className='confirmPassword-input'>
                        <InputLabel 
                            htmlFor='confirmPassword' 
                            variant='standard' 
                            style={{color: 'gray'}}
                        >
                            Confirm Password
                        </InputLabel>
                        <Input 
                            id='confirmPassword' 
                            name='confirmPassword' 
                            type='text' 
                            value={userInfo.confirmPassword} 
                            onChange={handleInputChange}
                        />
                    </FormControl>
                  
                    <Button 
                        className='submit_button'
                        type='submit' 
                        fullWidth 
                        variant='contained'>
                        <Typography>Sign Up</Typography>
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
                        <p>Already Have an Account?&nbsp;
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </div>
                </form>
            </Box>
        </Box>
    </Box>
  )
}

export default SignUp
