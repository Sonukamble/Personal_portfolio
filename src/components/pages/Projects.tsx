import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import '../../css/Projects.css';
import { AspectRatio, CardContent, Typography, Link, CardOverflow, CardCover } from '@mui/joy';
import { Box, useMediaQuery } from '@mui/material';
import Button from '@mui/joy/Button';
import ResumeProject from '../../assets/Projects/Resume_filter.png';
import FoodProject from '../../assets/Projects/Food_recipe.png';


const projects_details = [
    {
        name: "Resume Filter Project",
        description: "A fully functional e-commerce platform with product listings and user authentication.",
        technologies: "ReactJS, TypeScript, HTML, CSS, FastAPI, MySQL, JWT Authentication",
        image: ResumeProject,
        github: "https://github.com/Sonukamble/Resume_filter_project",
        liveDemo: "https://sonukamble.github.io/Resume_filter_project/"
    }
    ,
    {
        name: "Food Recipe App",
        description:
            "A web application that allows users to search for recipes based on ingredients, dietary preferences, and cuisines.",
        technologies: "ReactJS, TypeScript, External Recipe API",
        image: FoodProject,
        github: "https://github.com/Sonukamble/Food_Recipe",
        liveDemo: "https://sonukamble.github.io/Food_Recipe/",
    }
];

const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [activeTransition, setActiveTransition] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
    const isLaptop = useMediaQuery('(min-width: 1025px)');

    // Card visibility
    const showPersonalImageCard = isLaptop;


    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleNext = () => {
        setActiveTransition(true);
        setPrevIndex(activeIndex);
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects_details.length);
        triggerTransition();
    };

    const handlePrevious = () => {
        setActiveTransition(true);
        setPrevIndex(activeIndex);
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + projects_details.length) % projects_details.length
        );
        triggerTransition();
    };

    const triggerTransition = () => {
        setActiveTransition(true);
        setTimeout(() => {
            setActiveTransition(false); // Reset after 1 second
        }, 1000); // Match your transition duration in CSS
    };
    return (
        <div id="projects" className="projects-container">
            <Typography level="h4" component="h1" className="projects-title">
                Projects
            </Typography>
            <Box className="display-box">
                <div className='centered-button'>
                    <Button color="primary" variant="solid" onClick={handlePrevious} className="carousel-button button-style">Previous</Button>
                </div>
                <div className="projects-grid">
                    {/* {showPersonalImageCard && <Card color="neutral" variant="soft"
                        className={`card-structure-prev ${activeTransition ? 'active' : ''}`}
                    >
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src=""
                                    loading="lazy"
                                // alt={`Thumbnail`}
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                border: '1px solid',
                                borderColor: '#777',
                                backdropFilter: 'blur(1px)',
                            }}
                        >
                            <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg' }}>
                                Project Cover
                            </Typography>
                        </CardCover>
                    </Card>} */}

                    {/* Display only the active project */}
                    {projects_details.map((project, index) =>
                        index === activeIndex ? (
                            <Card
                                sx={{ width: 500 }}
                                key={index}
                                color="neutral"
                                variant="soft"
                                className={`card-structure ${index === activeIndex ? 'active' : ''}`}
                            // className="card-structure"
                            >
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
                        ) : null
                    )}
                    {/* {showPersonalImageCard && <Card color="neutral" variant="soft"
                        className={`card-structure-prev ${activeTransition ? 'active' : ''}`}
                    >
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src=""
                                    loading="lazy"
                                // alt={`Thumbnail`}
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                border: '1px solid',
                                borderColor: '#777',
                                backdropFilter: 'blur(1px)',
                            }}
                        >
                            <Typography level="h2" textColor="#fff" sx={{ fontSize: 'lg' }}>
                                Project Cover
                            </Typography>
                        </CardCover>
                    </Card>} */}
                </div>
                <div className='centered-button' >
                    <Button color="primary" variant="solid" onClick={handleNext} className="carousel-button button-style">Next</Button>
                </div>
            </Box>


            <div className="dots-container">
                {projects_details.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>

        </div>
    );
};

export default Projects;
