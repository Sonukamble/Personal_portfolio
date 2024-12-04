// src/pages/Home.tsx
import React from 'react';
import './../../css/Home.css'
import backgroundImage from '../../assets/Home_background/pexels-danbuilds-633409.jpg'

const Home: React.FC = () => {

    return (
        <div id="home" style={{
            backgroundImage: `url(${backgroundImage})`,
            display: 'flex',
            justifyContent: 'flex-start', // Align content to the left
            alignItems: 'center',
            paddingLeft: '20px', // Add padding to the left side
            paddingRight: '20px', // Optional: add some padding on the right as well
        }}>
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a passionate developer who loves creating innovative solutions with code. Explore my work and experience below!</p>
            </div>
        </div>
    );
};

export default Home;
