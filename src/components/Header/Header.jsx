import React, { useState } from 'react';
import './styles/Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
    AppBar, Badge, Box, Button, Divider, 
    Menu, MenuItem, Tabs, Tab, Toolbar, 
    useMediaQuery, useTheme, Avatar 
} from '@mui/material';
import { Favorite, PersonOutline, ShoppingBag } from '@mui/icons-material';
import { useAuth } from '../utils/AuthProvider';
import DrawerMenu from './DrawerMenu';
import SearchInput from './SearchInput';
import { googleLogout } from '@react-oauth/google';

const Header = () => {
    const { user, isLoggedIn, credential, logout, cart, wishlist } = useAuth();
    const cartLength = sessionStorage.getItem('cartLength') || 0;
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    // Check if cart or cart.items is undefined before accessing its properties
    // const cartLength = cart && cart.items ? cartLength : 0;
    // console.log('credential', credential);

    const handleAvatarClick = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorElUser(null);
    }
    const handleLogout = () => {
        if(credential) {
            googleLogout();
            window.location.replace('/login');
        } else {
            logout();
            handleClose();
            // navigate('/login');
        }
    }

    const productTabs = [
        {id: 1, name: 'MEN', link: '/mens-clothing'},
        {id: 2, name: 'WOMEN', link: '/womens-clothing'},
        {id: 3, name: 'MOBILE COVERS', link: '/mobile-covers'},
    ];

    const fullScreenTabs = (
        <>
            {(isLoggedIn && user) || credential ? (
                <>
                    <Button onClick={handleAvatarClick}>
                    {credential ? ( // Check if credential is available
                        <Avatar src={credential.data.picture} alt="avatar" style={{ width: '35px', height: '35px' }} />
                    ) : (
                        <PersonOutline style={{ color: 'black', width: '35px', height: '35px' }} />
                    )}
                        {/* <PersonOutline style={{color: 'black', width: '35px', height: '35px'}} /> */}
                    </Button>
                    <Menu 
                        sx={{mt: '5px', zIndex: '2'}}
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)} 
                        onClose={handleClose} 
                    >
                        <MenuItem style={{backgroundColor: 'rgba(0,0,0,.05)'}}>
                            <i style={{color: 'rgba(0,0,0,.5)'}}>
                                Hi, {credential ? credential.data.name : user.name}
                            </i>
                        </MenuItem>
                        <MenuItem component={Link} to='/myaccount'>My Account</MenuItem>
                        <MenuItem 
                            component={Link} 
                            to='/wishlist'
                            onClick={() => window.location.replace('/wishlist')}
                        >My Wishlist</MenuItem>
                        <MenuItem 
                            component={Link} 
                            to='/myaccount/orders'
                            onClick={() => window.location.replace('/myaccount/orders')}
                        >My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            ) : (
                <>
                    <Button 
                        variant='text' 
                        style={{color: 'black'}}
                        LinkComponent={Link} 
                        to='/login' 
                    >Login</Button>
                </>
            )}
            
            {isLargeScreen ? null : (
                <Button>
                    <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" 
                        alt="countryIcon" 
                        height="30" 
                        width="30" 
                        className="countryIcon" 
                    />
                </Button>
            )}
        </>
    );

  return (
    <Box>
        <AppBar 
            position='fixed' 
            style={{
                zIndex: '1', 
                backgroundColor: 'white',
            }}
        >
            
            <Toolbar className='headerDiv' disableGutters>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {isLargeScreen ? <DrawerMenu /> : null}
                    <Link to="/" className='bewakoofLogo'>
                        <img 
                            src={ isLargeScreen ? 
                                    'https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg' : 
                                    'https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'
                                }
                            alt="bewakoof_logo" 
                            title="Bewakoof.com" 
                        /> 
                    </Link>
                </div>
                {isLargeScreen ? null : (
                    <Tabs 
                        value={tabValue} 
                        indicatorColor=''
                        // TabIndicatorProps={{style: {backgroundColor: "#fdd835", height: 4}}}
                        onChange={(event, newValue) => setTabValue(newValue)}
                    >
                        {productTabs.map(tab => (
                            <Tab 
                                key={tab.id}
                                LinkComponent={NavLink} 
                                to={tab.link}
                                label={tab.name} 
                                style={{color: 'black', fontWeight: '600'}}
                            />
                        ))}
                    </Tabs>
                )}
                <div className='searchAndMenuWrapper'>
                    <SearchInput />
                    
                    {isLargeScreen ? null : (
                        <Divider orientation='vertical' variant='middle' flexItem style={{padding: '10px', color: '#979797'}} />
                    )}
                    {isSmallScreen ? null : (
                        <>
                            <Button 
                                LinkComponent={Link} 
                                to='/wishlist'
                                onClick={() => window.location.replace('/wishlist')}
                            >
                                { isLoggedIn && user ? (
                                    <Favorite style={{color: wishlist.length > 0 ? 'red' : 'black'}} />
                                ) : (
                                    <Favorite style={{color: 'black'}} />
                                )}
                            </Button>
                            <Button
                                LinkComponent={Link} 
                                to='/cart'
                                onClick={() => window.location.replace('/cart')}
                            >
                                { isLoggedIn && user ? (
                                    <Badge badgeContent={cartLength} color='error'>
                                        <ShoppingBag style={{color: 'black'}} />
                                    </Badge>
                                ) : (
                                    <ShoppingBag style={{color: 'black'}} />
                                )}
                            </Button>
                        </>
                    )}
                    {isLargeScreen ? null : fullScreenTabs}
                </div>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
