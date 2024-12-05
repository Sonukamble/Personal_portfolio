import React from 'react';
import { Box, Typography, Link, TextField, Button } from '@mui/material';
import '../../css/Contact.css';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Your message has been sent!');
    };

    return (
        <div id="contact" style={{ minHeight: '87vh', padding: '40px', backgroundColor: '#f5f5f5' }}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={4}>
                <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }}>
                    Contact Me
                </Typography>

                {/* Email Section */}
                <Typography variant="body1" component="p">
                    Feel free to reach out to me at:{' '}
                    <Link href="mailto:your-email@example.com" target="_blank" style={{ fontWeight: 'bold' }}>
                        your-email@example.com
                    </Link>
                </Typography>

                {/* Social Media Links */}
                <Box display="flex" justifyContent="center" gap={3} marginBottom="20px">
                    <Link href="https://www.linkedin.com/in/your-linkedin/" target="_blank">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/your-github-username" target="_blank">
                        GitHub
                    </Link>
                    <Link href="https://twitter.com/your-twitter-handle" target="_blank">
                        Twitter
                    </Link>
                </Box>

                {/* Contact Form */}
                <Box component="form" onSubmit={handleSubmit} maxWidth="500px" width="100%">
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
                        style={{ marginTop: '20px' }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;
