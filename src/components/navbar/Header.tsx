// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './../../css/Header.css';
import { AccountCircle } from '@mui/icons-material'; // You can import any icon you want
import { Avatar } from '@mui/joy';


const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isHome, setIsHome] = useState(true); // Track if the user is on the "Home" section

    // Get the theme and check screen size
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust for tablets and smaller

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const { top, bottom } = homeSection.getBoundingClientRect();
                setIsHome(top <= 0 && bottom > 0); // True if the header overlaps with the Home section
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <AppBar position="sticky" color="primary"
            sx={{
                backgroundColor: isHome ? 'transparent' : '#3f51b5', // Light background for "Home", default for others
                color: isHome ? '#fff' : '#fff', // Change text color based on section
                top: 0,
                zIndex: 1200
            }}
        >
            <Toolbar>
                {/* Logo or Title */}
                {/* <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    DDK
                </Typography> */}

                <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', curser: 'pointer' }}>
                    {/* Logo Icon */}
                    <Avatar sx={{ width: 40, height: 40, marginRight: 1 }}>
                        <AccountCircle />
                    </Avatar>
                    DDK
                </Typography>

                {/* Desktop View (Buttons) */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item) => (
                            <Button key={item} color="inherit"
                                variant="outlined"
                                component="a" // Change Link to a regular anchor tag
                                href={`#${item.toLowerCase()}`} // Directly link to the section using IDs
                                className={isHome ? 'header-button' : ''}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Mobile/Tablet View (Menu Icon and Drawer) */}
                {/* {isMobile && (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box sx={{ width: 250 }} role="presentation">
                                <List className='header-drawer-list'>
                                    {menuItems.map((item) => (
                                        <ListItem key={item} disablePadding
                                            component="a" // Use a regular anchor tag
                                            href={`#${item.toLowerCase()}`} // Directly link to the section using IDs    
                                        >
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                )} */}
                {isMobile && (
                    <div>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            style={{ backgroundColor:'D6E2EB' }}
                            
                        >
                            <Box sx={{ width: 250 }} role="presentation" className='color-for-side'>
                                <List className="header-drawer-list">
                                    {menuItems.map((item) => (
                                        <ListItem
                                            key={item}
                                            disablePadding
                                            component="a"
                                            href={`#${item.toLowerCase()}`}
                                            tabIndex={0} // Enable keyboard navigation
                                            onClick={toggleDrawer(false)}
                                            className='sider-main'
                                        >
                                            <ListItemText primary={item} sx={{ padding: 2, textAlign: 'center' }} />
                                        </ListItem>

                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </div>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default Header;
