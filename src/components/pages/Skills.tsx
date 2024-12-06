// src/pages/Skills.tsx

import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

import '../../css/Skills.css';
import { Avatar, Card, Tooltip } from '@mui/joy';
import { FaGit, FaGithub, FaPython } from 'react-icons/fa';
import { SiFastapi, SiReact, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiMysql, SiFlask, SiDjango } from 'react-icons/si';

const Skills: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const skills_details = [
        { name: 'Python', icon: <FaPython size={50} color="#3776AB" /> },
        { name: 'FastAPI', icon: <SiFastapi size={50} color="#009688" /> },
        { name: 'React', icon: <SiReact size={50} color="#61DBFB" /> },
        { name: 'TypeScript', icon: <SiTypescript size={50} color="#3178C6" /> },
        { name: 'HTML5', icon: <SiHtml5 size={50} color="#E34F26" /> },
        { name: 'CSS3', icon: <SiCss3 size={50} color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript size={50} color="#F7DF1E" /> },
        { name: 'MySQL', icon: <SiMysql size={50} color="#4479A1" /> },
        { name: 'Git', icon: <FaGit size={50} color="#F05032" /> },
        { name: 'Flask', icon: <SiFlask size={50} color="#000000" /> },
        { name: 'Django', icon: <SiDjango size={50} color="#092E20" /> },
        { name: 'GitHub', icon: <FaGithub size={50} color="#181717" /> }, // Added GitHub
    ];
    const filteredSkills = skills_details.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div id="skills" style={{ height: '87vh', backgroundColor: '#e0e0e0', marginTop: '1px' }} className='skills-container'>
            <Grid className="skills-text-container">
                <Typography variant="h4" style={{ marginBottom: '1rem' }}>
                    Backend Expertise
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                    I build scalable RESTful APIs with FastAPI, Django, and Flask, focusing on performance and security, and optimize MySQL databases for high-performance apps.
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                    I also integrate GenAI technologies, including LLMs, prompt generation, token management, and API integration.
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '1rem' }}>
                    While specializing in backend, I’ve developed full-stack apps using React and TypeScript, integrating frontend and backend seamlessly.
                </Typography>
            </Grid>
            <Card>
                <div className='search-bar-context'>
                    <Typography variant="h6" style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                        Technical & Core Skills
                    </Typography>
                    <Box style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '80%',
                                padding: '6px',
                                fontSize: '1rem',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                marginBottom: '1rem',
                                right: '0'
                            }}
                        />
                    </Box>

                </div>

                <Divider />
                <Box className="skills-box">
                    {/* {skills_details.map((skill, index) => (
                        <Tooltip key={index} title={skill.name}>
                            <Avatar color="neutral" variant="soft" >
                                {skill.icon}
                            </Avatar>
                        </Tooltip>
                    ))} */}
                    {filteredSkills.map((skill, index) => (
                        <Tooltip key={index} title={skill.name}>
                            <Avatar color="neutral" variant="soft">
                                {skill.icon}
                            </Avatar>
                        </Tooltip>
                    ))}
                </Box>
            </Card>
        </div>
    );
};

export default Skills;

