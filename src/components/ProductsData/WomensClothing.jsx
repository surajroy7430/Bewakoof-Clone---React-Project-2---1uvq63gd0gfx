import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const WomensClothing = () => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  const isSM = useMediaQuery(theme.breakpoints.up('sm'));

  let imageSize = '100%';

  if (isLG) {
    imageSize = '50%';
  } else if (isMD) {
    imageSize = '70%';
  } else if (isSM) {
    imageSize = '80%';
  }
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img 
            src='http://anjalihospital.com/wp-content/uploads/2019/01/under-construction.jpg' 
            alt='coming_soon' 
            style={{width: imageSize, height: 'auto'}}
        />
    </div>
  )
}

export default WomensClothing
