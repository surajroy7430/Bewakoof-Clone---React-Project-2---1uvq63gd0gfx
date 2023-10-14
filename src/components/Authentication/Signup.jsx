import React, { useState } from 'react';
import './styles/LoginAndSignup.css'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../utils/Apis';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo, 
            [name]: value
        });
        // Check if all fields are filled and update form validity
        setFormValid(Object.values(userInfo).every((field) => field.trim() !== ''));
    }

    const handleSignUp = async(e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@gmail\.com$/;

        let newErrors = {
            name: userInfo.name.length < 5,
            email: !userInfo.email.match(emailRegex),
            password: !userInfo.password.match(passwordRegex),
            confirmPassword: userInfo.password !== userInfo.confirmPassword,
        };
      
        setErrors(newErrors);
      
        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        try {
            await registerUser(userInfo, navigate);
            setUserInfo({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            toast.error(error);
        }
    }

  return (
    <Box sx={{marginTop: '150px'}}>
        <ToastContainer />
        <Box sx={{display: 'flex'}}>
            <Box className='form-container'>
                <Avatar className='avatar' />
                <Typography variant='h2'>Register an Account</Typography>
                <form className='main-form' onSubmit={handleSignUp}>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        id="name"
                        name='name'
                        label="Name"
                        className='name-input'
                        variant="standard"
                        autoComplete="off"
                        autoFocus
                        value={userInfo.name}
                        onChange={handleInputChange}
                        error={errors.name}
                        helperText={errors.name && 'Name must be at least 5 characters'}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        id="email"
                        name='email'
                        label="Email"
                        className='email-input'
                        type="email"
                        variant="standard"
                        autoComplete="off"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        helperText={errors.email && 'Invalid email format (must be @gmail.com)'}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        id="password"
                        name='password'
                        label="Password"
                        type="password"
                        className='password-input'
                        variant="standard"
                        autoComplete="off"
                        value={userInfo.password}
                        onChange={handleInputChange}
                        error={errors.password}
                        helperText={
                          errors.password &&
                          'Password must be at least 8 characters with 1 uppercase and 1 lowercase, 1 number and 1 special character'
                        }
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        id="confirmPassword"
                        name='confirmPassword'
                        label="Confirm Password"
                        className='confirmPassword-input'
                        type="password"
                        variant="standard"
                        autoComplete="off"
                        value={userInfo.confirmPassword}
                        onChange={handleInputChange}
                        error={errors.confirmPassword}
                        helperText={errors.confirmPassword && 'Passwords not matched'}
                    />
                  
                    <Button 
                        className='submit_button'
                        type='submit' 
                        fullWidth 
                        variant='contained'
                        disabled={!formValid}
                    >
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
