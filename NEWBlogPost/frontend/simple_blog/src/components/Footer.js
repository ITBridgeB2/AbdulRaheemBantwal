// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
//       <p>&copy; 2025 Blog App. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;




// src/components/Footer.js
import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'relative',
  bottom: '0',
  width: '100%',
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)',
  fontSize: '16px',
  transition: 'all 0.3s ease-in-out',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, letterSpacing: '1px' }}>
        &copy; 2025 <strong>Blog App</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
