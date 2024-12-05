import React from 'react';
import Card from '@mui/joy/Card';
import '../../css/Projects.css';
import { AspectRatio, CardContent, Typography, Link, CardOverflow } from '@mui/joy';
import { Box } from '@mui/material';

const projects_details = [
    {
        name: "Food Recipe App",
        description:
            "A web application that allows users to search for recipes based on ingredients, dietary preferences, and cuisines.",
        technologies: "ReactJS, TypeScript, FastAPI, External Recipe API",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/food-recipe-app",
        liveDemo: "https://live-demo-link.com",
    },
    {
        name: "E-Commerce Platform",
        description:
            "A fully functional e-commerce platform with product listings, user authentication, and a payment gateway.",
        technologies: "ReactJS, Redux, Node.js, Express, MongoDB",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/e-commerce-platform",
        liveDemo: "https://live-demo-link.com",
    },
    {
        name: "Portfolio Website",
        description:
            "A personal portfolio website to showcase projects, skills, and experience in a professional layout.",
        technologies: "HTML, CSS, JavaScript, React",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/portfolio-website",
        liveDemo: "https://live-demo-link.com",
    },
    {
        name: "Portfolio Website4",
        description:
            "A personal portfolio website to showcase projects, skills, and experience in a professional layout.",
        technologies: "HTML, CSS, JavaScript, React",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/portfolio-website",
        liveDemo: "https://live-demo-link.com",
    },
    {
        name: "Portfolio Website3",
        description:
            "A personal portfolio website to showcase projects, skills, and experience in a professional layout.",
        technologies: "HTML, CSS, JavaScript, React",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/portfolio-website",
        liveDemo: "https://live-demo-link.com",
    },
    {
        name: "Portfolio Website2",
        description:
            "A personal portfolio website to showcase projects, skills, and experience in a professional layout.",
        technologies: "HTML, CSS, JavaScript, React",
        image:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
        github: "https://github.com/username/portfolio-website",
        liveDemo: "https://live-demo-link.com",
    }
    // Add more project objects as needed
];

const Projects: React.FC = () => {
    return (
        <div id="projects" className="projects-container">
            <Typography level="h4" component="h1" className="projects-title">
                My Projects
            </Typography>
            <Box className="projects-grid">
                {projects_details.map((project, index) => (
                    <Card key={index} color="neutral" variant="soft" className="card-structure">
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src={project.image}
                                    loading="lazy"
                                    alt={`${project.name} Thumbnail`}
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent className="card-content-text">
                            <Typography level="h4" component="h2" className="project-name">
                                {project.name}
                            </Typography>

                            <Typography component="p" className="project-description">
                                {project.description}
                            </Typography>

                            <Typography className="project-technologies">
                                <strong>Technologies Used:</strong> {project.technologies}
                            </Typography>

                            <div className="project-links">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    GitHub Repository
                                </Link>
                                <Link
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Live Demo
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </div>
    );
};

export default Projects;
