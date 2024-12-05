import React from 'react';
import { Box, Typography, Link, TextField, Button } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material'; // Import icons
import '../../css/Contact.css';
import { Card } from '@mui/joy';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Your message has been sent!');
    };

    return (
        <div id="contact" style={{ minHeight: '87vh', padding: '40px', backgroundColor: '#f5f5f5' }}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={4}>
                <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }}>
                    Contact
                </Typography>

                {/* Contact Form */}
                <Card component="form" onSubmit={handleSubmit} className='contact-form' >
                    <Typography variant="body1" component="p">
                        Feel free to reach out to me at:{' '}
                        <Link href="mailto:your-email@example.com" target="_blank" style={{ fontWeight: 'bold' }}>
                            your-email@example.com
                        </Link>
                    </Typography>
                    <div className='contact-form-submission'>
                        <Card className="cards-field">
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                            />
                            <TextField
                                label="Your Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                            />
                        </Card>
                        <Card className="cards-field">
                            <TextField
                                label="Your Message"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            // style={{ marginTop: '20px' }}
                            >
                                Submit
                            </Button>
                        </Card>
                    </div>
                </Card>

                <Box display="flex" justifyContent="center" gap={3} marginBottom="20px">
                    <Link
                        href="https://www.linkedin.com/in/your-linkedin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                        <LinkedIn style={{ color: '#0A66C2' }} />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                        <GitHub style={{ color: '#000' }} />
                        GitHub
                    </Link>
                    <Link
                        href="https://twitter.com/your-twitter-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                        <Twitter style={{ color: '#1DA1F2' }} />
                        Twitter
                    </Link>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;
