// src/pages/Skills.tsx

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Skills: React.FC = () => {
    // Define your skills here
    const backendSkills = ['Python', 'FastAPI', 'SQL', 'REST API'];
    const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];
    const aiSkills = ['GenAI', 'Tokens', 'AI Integrations'];

    return (
        <div id="skills" style={{ height: '87vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', marginTop: '1px' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid style={{ textAlign: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: '2rem' }}>
                        My Skills
                    </Typography>

                    {/* Backend Skills */}
                    <Typography variant="h6" style={{ marginBottom: '1rem' }}>
                        Backend Technologies:
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        {backendSkills.map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                variant="outlined"
                                color="primary"
                                style={{
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        ))}
                    </Box>

                    {/* Frontend Skills */}
                    <Typography variant="h6" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        Frontend Technologies:
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        {frontendSkills.map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                variant="outlined"
                                color="secondary"
                                style={{
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        ))}
                    </Box>

                    {/* AI & GenAI Skills */}
                    <Typography variant="h6" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        GenAI and AI Integrations:
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        {aiSkills.map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                variant="outlined"
                                color="success"
                                style={{
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Skills;
