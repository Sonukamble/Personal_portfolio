import React from 'react';
import './../../css/Home.css';
import backgroundImage from '../../assets/Home_background/pexels-jeshoots-218863.jpg';
import { Box, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div
            id="home"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'left',
                padding: '0 20px',
            }}
        >
            <Box className="home-content" sx={{ maxWidth: '600px' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
                        marginBottom: '1rem'
                    }}
                >
                    {/* Welcome to My Portfolio */}
                    Hi, I'm Dipa
                    {/* <br /> Experienced Software Developer */}

                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '400',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                        marginBottom: '2rem',
                    }}
                >
                    I’m a passionate developer who loves creating innovative solutions with code.
                    Explore my projects, skills, and experience!
                </Typography>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#009688',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                            textTransform: 'none',
                        }}
                        onClick={() =>
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Learn More About Me
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        sx={{
                            border: '2px solid #fff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                        onClick={() =>
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        View My Work
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
