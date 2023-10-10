import { Skeleton } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Loader.css';

export const Loader = ({width, height}) => {
  return (
    <Skeleton variant='rectangular' width={width} height={height} />
  )
}

export const CustomLoader = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={false}
            hideProgressBar={false}
            closeOnClick={false}
            draggable={false}
            closeButton={false}
            className="custom-toast-container"
        />
    );
};

