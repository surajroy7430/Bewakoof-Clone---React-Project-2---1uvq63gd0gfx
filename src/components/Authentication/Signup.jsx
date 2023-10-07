import React, { useState } from 'react';
import './styles/LoginAndSignup.css'
import { Avatar, Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { getHeaderWithProjectIDAndBody } from '../utils/configs';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const register = async (userInfo) => {
        userInfo.appType = 'ecommerce';
        const config = getHeaderWithProjectIDAndBody();

        if(userInfo.password !== userInfo.confirmPassword){
            toast.warn('Password Not Matched!', {
                position: 'top-right'
            })
        }else {
            try {
                const res = await axios.post(
                    'https://academics.newtonschool.co/api/v1/user/signup',
                    userInfo, config
                );
                const {name, email} = res.data.data.user
                console.log({Name: name, Email: email});
    
                if(res.data.token) {
                    sessionStorage.setItem('authToken', res.data.token);
                    sessionStorage.setItem('userInfo', JSON.stringify({Name: name, Email: email}));

                    toast.success('Account Created Succesfully, Now login', {
                        position: 'top-left'
                    });

                    navigate('/login');
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        register(userInfo);
    }

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
