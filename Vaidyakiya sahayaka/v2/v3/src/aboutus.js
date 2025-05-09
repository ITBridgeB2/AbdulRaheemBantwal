import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div style={styles.page}>
                <div style={styles.container}>
                    <h1 style={styles.heading}>About Us</h1>
                    <p style={styles.text}>
                        Welcome to our platform! We are committed to providing quality healthcare services
                        through innovative technology. Our mission is to ensure every patient receives timely
                        support and hospital assignments based on their needs.
                    </p>
                    <p style={styles.text}>
                        Our dedicated team of developers, healthcare professionals, and administrators work
                        together to create a seamless experience for both patients and hospitals.
                    </p>
                    <p style={styles.text}>
                        Thank you for trusting us!
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #74ebd5 20%, #9face6 80%)', // Adjusted gradient spread
        animation: 'fadeIn 2s ease-in-out',
    },
    container: {
        padding: '50px', // Increased padding for a larger card
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        maxWidth: '1000px', // Increased max width for a larger card
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px', // Slightly larger border radius
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Enhanced shadow for better emphasis
        animation: 'fadeInUp 2s ease-in-out',
    },
    heading: {
        fontSize: '36px', // Slightly larger font size for the heading
        color: '#333',
        marginBottom: '25px',
        textAlign: 'center',
        animation: 'slideIn 1.5s ease-in-out',
    },
    text: {
        fontSize: '20px', // Slightly larger font size for the text
        color: '#555',
        marginBottom: '20px',
        animation: 'fadeInUp 2s ease-in-out',
    },
};

// Add keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    @keyframes fadeInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, styleSheet.cssRules.length);

export default AboutUs;
