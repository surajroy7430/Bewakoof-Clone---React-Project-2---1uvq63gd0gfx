import { Skeleton } from '@mui/material';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const Loader = ({width, height}) => {
  return (
    <Skeleton variant='rectangular' width={width} height={height} />
  )
}


