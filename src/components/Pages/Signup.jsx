import React from 'react';
import '../../styles/SignUp.css'
import { Avatar, Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id='main-signup-form'>
      <div className='body-container'>
          <div className='signup-form-container'>
              <Avatar className='avatar' />
              <Typography variant='h2'>Register an Account</Typography>
              <form className='signup-form'>
                  <FormControl fullWidth required margin='normal' className='name-input'>
                      <InputLabel 
                          htmlFor="username" 
                          variant='standard' 
                          autoComplete='off' 
                          style={{color: 'gray'}}
                      >
                        Name
                      </InputLabel>
                      <Input 
                          id='username' 
                          name='username' 
                          type='text' 
                          autoComplete='off' 
                          autoFocus
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

export default Signup
