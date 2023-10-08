import { 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    Typography 
} from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../utils/AuthProvider'
import { MenuSharp } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const DrawerMenu = () => {
    const { user, isLoggedIn, logout} = useAuth();
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }
    const handleDrawerToLogin = () => {
        setOpenDrawer(false);
        navigate('/login');
    }

    const productTabs = [
        {id: 1, name: 'MEN', link: '/products'},
        {id: 2, name: 'WOMEN', link: '/products'},
        {id: 3, name: 'MOBILE COVERS', link: '/products'},
    ];
    const accountListRoutes = [
        {id: 1, name: 'My Account', link: '/myaccount'},
        {id: 2, name: 'My Orders', link: '/myaccount/orders'},
        {id: 3, name: 'My Wishlist', link: '/wishlist'},
    ];
    const contactUs = [
        {id: 1, name: 'help & Support'},
        {id: 2, name: 'Feedback & Suggestions'},
        {id: 3, name: 'Become a Seller'},
    ];
    const aboutUs = [
        {id: 1, name: 'Our Story'},
        {id: 2, name: 'Fanbook'},
        {id: 3, name: 'Blog'},
    ];

  return (
    <>
        <Drawer 
            open={openDrawer} 
            onClose={handleDrawerClose} 
        >
            <List>
                {isLoggedIn && user ? 
                    <ListItem>
                        <ListItemText>
                            <Typography>
                                <strong>Hi, {user.name}</strong>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    : 
                    <ListItem>
                        <ListItemText 
                            onClick={handleDrawerToLogin} 
                            style={{cursor: 'pointer'}}
                        >
                            <Typography>
                                <strong>Login</strong>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                }
                <Divider />
                <ListItem>
                    <img 
                        src='https://images.bewakoof.com/web/india-flag-round-1639566913.png' 
                        alt='countryIcon' 
                        width='35' 
                        height='35'
                    />&nbsp;&nbsp;
                    <ListItemText disableTypography>India</ListItemText>
                </ListItem>
                <>
                    <ListItem style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                        <ListItemText>
                            <Typography style={{color: 'rgba(0,0,0,0.3)', fontWeight: '600'}}>
                                SHOP IN
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    {productTabs.map(tab => (
                        <ListItem disableGutters>
                            <ListItemButton
                                LinkComponent={Link} 
                                to={tab.link}
                                onClick={handleDrawerClose}
                            >
                                <ListItemText disableTypography>
                                    {tab.name}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))};
                </>
                {isLoggedIn && user ? (
                    <>
                        <ListItem style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                            <ListItemText>
                                <Typography style={{color: 'rgba(0,0,0,0.3)', fontWeight: '600'}}>
                                    MY PROFILE
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {accountListRoutes.map(route => (
                            <ListItem disableGutters>
                                <ListItemButton
                                    LinkComponent={Link} 
                                    to={route.link}
                                    onClick={handleDrawerClose}
                                >
                                    <ListItemText disableTypography>
                                        {route.name}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))};
                        <ListItem disableGutters>
                            <ListItemButton
                                divider 
                                onClick={() => {
                                    setOpenDrawer(false)
                                    logout();
                                }}
                            >
                                <ListItemText disableTypography>
                                    Logout
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </>
                ) : null
                }
                <>
                    <ListItem style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                        <ListItemText>
                            <Typography style={{color: 'rgba(0,0,0,0.3)', fontWeight: '600'}}>
                                CONTACT US
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    {contactUs.map(contact => (
                        <ListItem disableGutters>
                            <ListItemButton
                                onClick={handleDrawerClose}
                            >
                                <ListItemText disableTypography>
                                    {contact.name}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))};
                    <Divider style={{marginBottom: '10px'}} />
                    <ListItem style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                        <ListItemText>
                            <Typography 
                                style={{color: 'rgba(0,0,0,0.3)', fontWeight: '600'}}
                            >
                                ABOUT US
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    {aboutUs.map(about => (
                        <ListItem disableGutters>
                            <ListItemButton
                                onClick={handleDrawerClose}
                            >
                                <ListItemText disableTypography>
                                    {about.name}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))};
                </>
            </List>
        </Drawer>
        <IconButton 
            edge="start"
            aria-label="menu"
            sx={{ml: 2, mt: 1, color: 'black' }}
            className='drawerMenu'
            onClick={() => setOpenDrawer(!openDrawer)}
        >
            <MenuSharp style={{width: '35px', height: '35px'}} />
        </IconButton>
    </>
  )
}

export default DrawerMenu
