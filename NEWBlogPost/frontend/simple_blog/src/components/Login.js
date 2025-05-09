// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login({ setIsAuthenticated }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/login', { username, password })
//       .then((res) => {
//         alert('Login successful');
//         localStorage.setItem('user', JSON.stringify(res.data));
//         setIsAuthenticated(true);
//         navigate('/dashboard');
//       })
//       .catch((err) => {
//         alert('Invalid username or password');
//         console.error(err);
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="form-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-input"
//         />
//         <button type="submit" className="btn">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;





// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then((res) => {
        alert('Login successful');
        localStorage.setItem('user', JSON.stringify(res.data));
        setIsAuthenticated(true);
        navigate('/dashboard');
      })
      .catch((err) => {
        alert('Invalid username or password');
        console.error(err);
      });
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

// Styles
const formContainerStyle = {
  maxWidth: '500px',
  margin: '50px auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '28px',
  color: '#333',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Login;
