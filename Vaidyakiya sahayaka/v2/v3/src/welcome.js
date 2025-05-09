import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    // const navigate=useNavigate()
    return (
      <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      background: 'linear-gradient(135deg, #74ebd5, #acb6e5)', 
      fontFamily: `'Poppins', sans-serif`, 
      color: '#fff', 
      textAlign: 'center', 
      padding: '20px' 
      }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        Welcome to Vaidyakiya Sahayaka
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        maxWidth: '700px', 
        lineHeight: '1.8', 
        marginTop: '20px', 
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' 
      }}>
        Your trusted companion for all medical assistance. Discover innovative features and personalized services designed to make your healthcare journey effortless and stress-free.
      </p>
      <button style={{ 
        marginTop: '30px', 
        padding: '15px 30px', 
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        color: '#fff', 
        backgroundColor: '#ff6f61', 
        border: 'none', 
        borderRadius: '50px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
        cursor: 'pointer', 
        transition: 'transform 0.2s, box-shadow 0.2s' 
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.3)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
      }}
      onClick={() => alert('Let\'s Explore!')

      }>
        Let's Explore
      </button>
      </div>
    )
  }
}
