import React, { useState } from 'react';
import {
    Typography,
    Button,
    Box,
    Avatar,
    TextField
} from '@mui/material';
import './styles/LoginAndSignup.css';
import { forgotPassword } from '../utils/Apis';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await forgotPassword(email);
            setResetSuccess(true);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <Box sx={{marginTop: '150px'}}>
            <ToastContainer />
            <Box sx={{display: 'flex'}}>
                <Box className='form-container'>
                    <Avatar className='avatar' />
                    <Typography variant='h2'>Forgot your password</Typography>
                    {resetSuccess ? (
                      <Typography variant='body1'>
                        Password reset instructions have been sent to your email.
                      </Typography>
                    ) : (
                      <form className='main-form' onSubmit={handleResetPassword}>
                          <TextField
                            label='Email'
                            variant='outlined'
                            fullWidth
                            margin='normal'
                            value={email}
                            onChange={handleEmailChange}
                            required
                          />
                          <Button
                            type='submit'
                            variant='contained'
                            className='forgotPassword_button'
                          >
                            Reset Password
                          </Button>
                      </form>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ForgotPassword;
