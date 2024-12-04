// src/pages/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import photo from '../../assets/Home_background/pexels-adrienne-andersen-1174503-2351844.jpg'
import Grid from '@mui/material/Grid2';
import './../../css/About.css';


const About: React.FC = () => {
    return (
        <div id="about" style={{ height: '87vh', backgroundColor: '#fff', padding: '2rem 0', marginTop: '100px' }}>
            <Box className="container-about" >
                {/* Photo */}
                <Grid style={{ textAlign: 'center' }}>
                    <img src={photo} alt="Dipa Dattu Kamble" className='personal-photo' />
                </Grid>

                {/* Info */}
                <Grid >
                    <Typography variant="h4" style={{ marginBottom: '1rem' }}>
                        About Me
                    </Typography>
                    <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                        I am Dipa Dattu Kamble
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                        I am a 2023 B.E. Computer Engineering graduate. I am an ex-employee of Cerelabs, where I worked on backend technologies, specializing in Python, FastAPI, SQL, and RestAPI. I also gained frontend experience with HTML, CSS, JavaScript, React, and TypeScript.
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                        I have also worked with GenAI, where I learned how to write tokens and handle AI integrations.
                    </Typography>
                </Grid>
            </Box>
        </div>
    );
};

export default About;
