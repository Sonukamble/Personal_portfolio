// src/pages/Skills.tsx

import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

import '../../css/Skills.css';
import { Avatar, Card, Tooltip } from '@mui/joy';
import { FaGithub, FaPython } from 'react-icons/fa';
import { SiFastapi, SiReact, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiMysql, SiFlask, SiDjango } from 'react-icons/si';

const Skills: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Modified skills_details array with documentation links
    const skills_details = [
        { name: 'Python', icon: <FaPython size={50} color="#3776AB" />, docsLink: 'https://docs.python.org/3/' },
        { name: 'FastAPI', icon: <SiFastapi size={50} color="#009688" />, docsLink: 'https://fastapi.tiangolo.com/' },
        { name: 'React', icon: <SiReact size={50} color="#61DBFB" />, docsLink: 'https://reactjs.org/docs/getting-started.html' },
        { name: 'TypeScript', icon: <SiTypescript size={50} color="#3178C6" />, docsLink: 'https://www.typescriptlang.org/docs/' },
        { name: 'HTML5', icon: <SiHtml5 size={50} color="#E34F26" />, docsLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS3', icon: <SiCss3 size={50} color="#1572B6" />, docsLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', icon: <SiJavascript size={50} color="#F7DF1E" />, docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'MySQL', icon: <SiMysql size={50} color="#4479A1" />, docsLink: 'https://dev.mysql.com/doc/' },
        { name: 'Flask', icon: <SiFlask size={50} color="#000000" />, docsLink: 'https://flask.palletsprojects.com/en/2.1.x/' },
        { name: 'Django', icon: <SiDjango size={50} color="#092E20" />, docsLink: 'https://docs.djangoproject.com/en/stable/' },
        { name: 'GitHub', icon: <FaGithub size={50} color="#181717" />, docsLink: 'https://docs.github.com/en/github' },
    ];
    const filteredSkills = skills_details.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Open documentation URL when skill is clicked
    const openDocs = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div id="skills" style={{ height: '87vh', backgroundColor: '#E2E4DC', marginTop: '1px' }} className='skills-container'>
            <Grid className="skills-text-container">
                <Typography variant="h4">
                    Backend Expertise
                </Typography>
                <Typography variant="body1">
                    I build scalable RESTful APIs with FastAPI, Django, and Flask, focusing on performance and security, and optimize MySQL databases for high-performance apps.
                </Typography>
                <Typography variant="body1">
                    I also integrate GenAI technologies, including LLMs, prompt generation, token management, and API integration.
                </Typography>
                <Typography variant="body1">
                    While specializing in backend, I’ve developed full-stack apps using React and TypeScript, integrating frontend and backend seamlessly.
                </Typography>
            </Grid>

            <Card className="card-of-skill">
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
                    {filteredSkills.map((skill, index) => (
                        <Tooltip key={index} title={skill.name}>
                            <Avatar color="neutral" variant="soft" onClick={() => openDocs(skill.docsLink)}
                                className="avater-skills"
                                sx={{
                                    width: 60, // Increase width to 60px (adjust as needed)
                                    height: 60, // Increase height to 60px (adjust as needed)
                                    fontSize: '1.5rem', // Increase icon size within the avatar
                                }}
                            >
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

