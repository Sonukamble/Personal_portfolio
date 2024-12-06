import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import photo from '../../assets/Home_background/pexels-adrienne-andersen-1174503-2351844.jpg';
import Grid from '@mui/material/Grid2';
import './../../css/About.css';
import { Card, CardCover } from '@mui/joy';
import { useTheme } from '@mui/material/styles';

const About: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <div id="about" style={{ backgroundColor: '#E2E4DC', padding: '2rem 0' }}>
            <Box className="container-about" sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr',
                gap: 4,
                margin: '0 auto',
                padding: '20px',
                alignItems: 'center',
            }}>
                <Card className="personal-image-card" sx={{
                    width: isMobile ? '90%' : isTablet ? '55%' : '60%',
                    margin: isMobile ? '0 auto' : '0 90px',
                }}>
                    <CardCover>
                        <img
                            src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                            loading="lazy"
                            alt="Dipa Dattu Kamble"
                            className='personal-photo'
                        />
                    </CardCover>
                </Card>

                {/* Info */}
                <Grid className="display-about-text" sx={{
                    textAlign: isMobile ? 'center' : 'left',
                    marginTop: isMobile ? '20px' : '0',
                }}>
                    <Typography variant="h4" className="about-title" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        About Me
                    </Typography>
                    <Typography variant="h6" className="about-subtitle" sx={{ marginBottom: '1rem' }}>
                        I am Dipa Dattu Kamble
                    </Typography>
                    <Typography variant="body1" className="about-text" sx={{ marginBottom: '1rem' }}>
                        I am a 2023 B.E. Computer Engineering graduate. I am an ex-employee of Cerelabs, where I worked on backend technologies, specializing in Python, FastAPI, SQL, and RestAPI. I also gained frontend experience with HTML, CSS, JavaScript, React, and TypeScript.
                    </Typography>
                    <Typography variant="body1" className="about-text">
                        I have also worked with GenAI, where I learned how to write tokens and handle AI integrations.
                    </Typography>
                </Grid>
            </Box>
        </div>
    );
};

export default About;
