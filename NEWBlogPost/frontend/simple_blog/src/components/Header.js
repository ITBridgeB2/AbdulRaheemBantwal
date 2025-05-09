// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header style={{ backgroundColor: '#333', padding: '20px', textAlign: 'center' }}>
//       <nav>
//         <Link to="/" style={headerLinkStyle}>Home</Link>
//         <Link to="/register" style={headerLinkStyle}>Register</Link>
//         <Link to="/login" style={headerLinkStyle}>Login</Link>
//         <Link to="/dashboard" style={headerLinkStyle}>Dashboard</Link>
//       </nav>
//     </header>
//   );
// };

// const headerLinkStyle = {
//   color: '#fff',
//   textDecoration: 'none',
//   margin: '0 15px',
//   fontSize: '18px',
//   padding: '10px',
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleLogout }) => {
  const headerStyle = {
    backgroundColor: '#333',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  };

  const headerLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
  };

  const buttonStyle = {
    ...headerLinkStyle,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={headerLinkStyle}>Home</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/register" style={headerLinkStyle}>Register</Link>
            <Link to="/login" style={headerLinkStyle}>Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={headerLinkStyle}>Dashboard</Link>
            <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
