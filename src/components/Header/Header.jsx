import React, { useRef, useState } from 'react'
import './styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { 
    AppBar, Badge, Box, Button, Divider,   
    InputBase, Menu, MenuItem, Tabs, Tab, Toolbar, 
    alpha, styled, useMediaQuery, useTheme 
} from '@mui/material';
import { Favorite, PersonOutline, SearchOutlined, ShoppingBag } from '@mui/icons-material'
import { useAuth } from '../utils/AuthProvider'
import DrawerMenu from './DrawerMenu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductsBySearch } from '../utils/Apis';

const Header = () => {
    const { user, isLoggedIn, logout, cart, wishlist } = useAuth();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const searchInputRef = useRef(null);
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isExtraSmall = useMediaQuery('(max-width:400px)');
    const navigate = useNavigate();

    // Check if cart or cart.items is undefined before accessing its properties
    const cartItemCount = cart && cart.items ? cart.items.length : 0;


    const handleAvatarClick = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorElUser(null);
    }
    const handleLogout = () => {
        logout();
        handleClose();
        navigate('/login');
    }
     
    const handleSearch = async () => {
        const searchTerm = searchInputRef.current.value.toLowerCase();
        if(searchTerm) {
            try {
                const products = await getProductsBySearch(searchTerm, 'name');
                // console.log('products', products);
                if(products.length === 0) {
                    toast.warn('No products found');
                }
                else {
                    navigate(`/search/?name=${searchTerm}`);
                }
            } catch (error) {
                toast.warn(error);
            }
        }
        else {
            toast.warn('Please enter a search term.');
        }
    }

    const productTabs = [
        {id: 1, name: 'MEN', link: '/mens-clothing'},
        {id: 2, name: 'WOMEN', link: '/womens-clothing'},
        {id: 3, name: 'MOBILE COVERS', link: '/mobile-covers'},
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
            paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
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
                                LinkComponent={Link} 
                                to={tab.link}
                                label={tab.name} 
                                style={{color: 'black', fontWeight: '600'}}
                            />
                        ))}
                    </Tabs>
                )}
                <div className='searchAndMenuWrapper'>
                    {isSmallScreen ? ( null
                        // <>
                        //     <Button>
                        //         <SearchOutlined style={{color: '#000'}} />
                        //     </Button>
                        //     <StyledInputBase 
                        //         className='openedSearchInput'
                        //         placeholder='Search...' 
                        //         inputProps={{ 'aria-label': 'search' }} 
                        //         sx={{color: '#979797'}}
                        //     />
                        // </>
                    ) : (
                        <Search>
                            <Button onClick={handleSearch}>
                                <SearchIconWrapper>
                                    <SearchOutlined style={{color: '#979797'}} />
                                </SearchIconWrapper>
                            </Button>
                            <StyledInputBase 
                                placeholder='Search...' 
                                inputProps={{ 'aria-label': 'search' }} 
                                inputRef={searchInputRef} 
                                sx={{color: '#979797'}}
                            />
                        </Search>
                    )}
                    
                    {isLargeScreen ? null : (
                        <Divider orientation='vertical' variant='middle' flexItem style={{padding: '10px', color: '#979797'}} />
                    )}
                    {isExtraSmall ? null : (
                        <>
                            <Button 
                                LinkComponent={Link} 
                                to='/wishlist'
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
                            >
                                { isLoggedIn && user ? (
                                    <Badge badgeContent={cartItemCount} color='error'>
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
