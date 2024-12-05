
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../../css/Footer.css';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                bottom: 0,
            }}
            className="footer-box"
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Dipa Dattu Kamble. All rights reserved.
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <Link href="https://www.linkedin.com/in/your-linkedin/" color="inherit" sx={{ marginRight: '15px' }}>
                    LinkedIn
                </Link>
                <Link href="https://github.com/your-github-username" color="inherit" sx={{ marginRight: '15px' }}>
                    GitHub
                </Link>
                <Link href="https://twitter.com/your-twitter-handle" color="inherit">
                    Twitter
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
