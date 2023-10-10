import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

const MobileCovers = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  let imageSize = '100%';

  if (isLargeScreen) {
    imageSize = '50%';
  } else if (isMediumScreen) {
    imageSize = '70%';
  } else if (isSmallScreen) {
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

export default MobileCovers
