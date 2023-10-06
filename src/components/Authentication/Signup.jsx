import React, { useState } from 'react';
import './styles/SignUp.css'
import { Avatar, Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getHeaderWithProjectIDAndBody } from '../utils/configs';
import axios from 'axios';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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
            window.alert('Password Not Matched!')
        }else {
            try {
                const res = await axios.post(
                    'https://academics.newtonschool.co/api/v1/user/signup',
                    userInfo, config
                );
                console.log('response', res);
    
                if(res.data.token) {
                    sessionStorage.setItem('authToken', res.data.token);
                    sessionStorage.setItem('userInfo', JSON.stringify(res.data.data.user))
                }
            } catch (error) {
                if(error) {
                    console.error(error.response.data.message);
                }
            }
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        register(userInfo);
    }
    
  return (
    <div id='main-signup-form'>
      <div className='body-container'>
          <div className='signup-form-container'>
              <Avatar className='avatar' />
              <Typography variant='h2'>Register an Account</Typography>
              <form className='signup-form' onSubmit={handleSignUp}>
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
                      className='signup-submit'
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
          </div>
      </div>
    </div>
  )
}

export default SignUp
