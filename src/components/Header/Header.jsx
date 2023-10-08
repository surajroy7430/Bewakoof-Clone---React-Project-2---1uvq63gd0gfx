import React, { useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'
import { 
    AppBar, Badge, Box, Button, Divider,   
    InputBase, Menu, MenuItem, Tabs, Tab, Toolbar, 
    alpha, styled, useMediaQuery, useTheme 
} from '@mui/material';
import { Favorite, PersonOutline, SearchOutlined, ShoppingBag } from '@mui/icons-material'
import { useAuth } from '../utils/AuthProvider'
import DrawerMenu from './DrawerMenu';

const Header = () => {
    const { user, isLoggedIn, logout} = useAuth();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const theme = useTheme();
    const isTab = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleAvatarClick = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorElUser(null);
    }
    const handleLogout = () => {
        logout();
        handleClose();
    }
    const openSearchInput = () => {}

    const productTabs = [
        {id: 1, name: 'MEN', link: '/products'},
        {id: 2, name: 'WOMEN', link: '/products'},
        {id: 3, name: 'MOBILE COVERS', link: '/products'},
    ];
    
    const Search = styled('div')(({ theme }) => ({
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #979797',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.2)
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#979797',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const fullScreenTabs = (
        <>
            {isLoggedIn && user ? (
                <>
                    <Button onClick={handleAvatarClick}>
                        <PersonOutline style={{color: 'black', width: '35px', height: '35px'}} />
                    </Button>
                    <Menu 
                        sx={{mt: '5px', zIndex: '2'}}
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)} 
                        onClose={handleClose} 
                    >
                        <MenuItem style={{backgroundColor: 'rgba(0,0,0,.05)'}}>
                            <i style={{color: 'rgba(0,0,0,.5)'}}>Hi, {user.name}</i>
                        </MenuItem>
                        <MenuItem component={Link} to='/myaccount'>My Account</MenuItem>
                        <MenuItem component={Link} to='/wishlist'>My Wishlist</MenuItem>
                        <MenuItem component={Link} to='/myaccount/orders'>My Orders</MenuItem>
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
            
            {isTab ? null : (
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
                    {isTab ? <DrawerMenu /> : null}
                    <Link to="/" className='bewakoofLogo'>
                        <img 
                            src={ isTab ? 
                                    'https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg' : 
                                    'https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'
                                }
                            alt="bewakoof_logo" 
                            title="Bewakoof.com" 
                        /> 
                    </Link>
                </div>
                {isTab ? null : (
                    <>
                        {productTabs.map(tab => (
                            <Tabs indicatorColor='rgb(253, 216, 53)'>
                                <Tab 
                                    key={tab.id}
                                    LinkComponent={Link} 
                                    to={tab.link}
                                    label={tab.name} 
                                    style={{fontWeight: '600'}}
                                />
                            </Tabs>
                        ))}
                    </>
                )}
                <div className='searchAndMenuWrapper'>
                    {isMobile ? (
                        <Button onClick={openSearchInput}>
                            <SearchOutlined style={{color: '#000'}} />
                            <StyledInputBase 
                                className='openedSearchInput'
                                placeholder='Search...' 
                                inputProps={{ 'aria-label': 'search' }} 
                                sx={{color: '#979797'}}
                            />
                        </Button>
                    ) : (
                        <Search>
                            <SearchIconWrapper>
                                <SearchOutlined style={{color: '#979797'}} />
                            </SearchIconWrapper>
                            <StyledInputBase 
                                placeholder='Search...' 
                                inputProps={{ 'aria-label': 'search' }} 
                                sx={{color: '#979797'}}
                            />
                        </Search>
                    )}
                    
                    {isTab ? null : (
                        <Divider orientation='vertical' variant='middle' flexItem style={{padding: '10px', color: '#979797'}} />
                    )}
                    <Button 
                        LinkComponent={Link} 
                        to='/wishlist'
                    >
                        <Favorite style={{color: 'black'}} />
                    </Button>
                    <Button
                        LinkComponent={Link} 
                        to='/cart'
                    >
                        <Badge badgeContent={1} color='error'>
                            <ShoppingBag style={{color: 'black'}} />
                        </Badge>
                    </Button>
                    {isTab ? null : fullScreenTabs}
                </div>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
