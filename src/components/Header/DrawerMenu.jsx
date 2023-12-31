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
    const { user, isLoggedIn, logout, credential } = useAuth();
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    const handleDrawerClose = (path) => {
        setOpenDrawer(false);
    }
    const handleDrawerToLogin = () => {
        setOpenDrawer(false);
        navigate('/login');
    }

    const productTabs = [
        {id: 1, name: 'Men', link: '/men-clothing'},
        {id: 2, name: 'Women', link: '/women-clothing'},
        {id: 3, name: 'Mobile Covers', link: '/mobile-covers'},
    ];
    const accountListRoutes = [
        {id: 1, name: 'My Orders', link: '/myaccount/orders'},
        {id: 2, name: 'My Wishlist', link: '/wishlist'},
        {id: 3, name: 'My Cart', link: '/cart'},
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
                {(isLoggedIn && user) || credential ? 
                    <ListItem>
                        <ListItemText>
                            <Typography>
                                <strong>Hi, {user.name || credential.data.name}</strong>
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
                        <ListItem disableGutters key={tab.id}>
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
                        <ListItem disableGutters>
                            <ListItemButton 
                                LinkComponent={Link} 
                                to='/myaccount'
                                onClick={() => setOpenDrawer(false)}
                            >
                                <ListItemText disableTypography>
                                    My Account
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        {accountListRoutes.map(tab => (
                            <ListItem disableGutters key={tab.id}>
                                <ListItemButton 
                                    LinkComponent={Link} 
                                    to={tab.link}
                                    onClick={() => handleDrawerClose(tab.link)}
                                >
                                    <ListItemText disableTypography>
                                        {tab.name}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem disableGutters>
                            <ListItemButton
                                divider 
                                onClick={() => {
                                    setOpenDrawer(false)
                                    logout();
                                    // navigate('/login')
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
                        <ListItem disableGutters key={contact.id}>
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
                        <ListItem disableGutters key={about.id}>
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
