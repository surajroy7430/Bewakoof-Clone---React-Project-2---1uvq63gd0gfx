import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { AppBar, Box, Button, Divider, InputBase, Toolbar, alpha, styled } from '@mui/material'
import { Favorite, SearchOutlined, ShoppingBag } from '@mui/icons-material'

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.2),
        '&:focus': {
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
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'gray',
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
  return (
    <Box>
        <AppBar position='fixed' className='header' style={{zIndex: '9999', backgroundColor: 'white'}}>
            <Toolbar>
                <Link to="/">
                    <img 
                        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" 
                        alt="bewakoof_logo" 
                        title="Bewakoof.com" 
                        className='bewakoofLogo'
                    /> 
                </Link>
                <Button 
                    variant='text' 
                    style={{color: 'black'}}
                    LinkComponent={Link} 
                    to='/products'
                >Products</Button>
                <div style={{display: 'flex'}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchOutlined style={{color: 'black'}} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search...' inputProps={{ 'aria-label': 'search' }} />
                    </Search>

                    <Divider orientation='vertical' variant='middle' flexItem style={{padding: '10px', color: 'white'}} />
                    
                    <Button 
                        variant='text' 
                        style={{color: 'black'}}
                        LinkComponent={Link} 
                        to='/login' 
                    >Login</Button>

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
                        <ShoppingBag style={{color: 'black'}} />
                    </Button>
                    
                    <Button>
                        <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" 
                            alt="country" 
                            height="30" 
                            width="30" 
                            className="countryIcon" 
                        />
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
