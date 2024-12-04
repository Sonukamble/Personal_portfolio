// src/components/Header.tsx
import React, { useState } from 'react';
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
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Get the theme and check screen size
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust for tablets and smaller

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* Logo or Title */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>

                {/* Desktop View (Buttons) */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item) => (
                            <Button key={item} color="inherit" 
                                variant="outlined" 
                                component={Link} // Use Link component from react-router-dom
                                to={`/${item.toLowerCase()}`} // Set the link path dynamically
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Mobile/Tablet View (Menu Icon and Drawer) */}
                {isMobile && (
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
                                            component={Link} // Use Link component from react-router-dom
                                            to={`/${item.toLowerCase()}`} // Set the link path dynamically    
                                        >
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
