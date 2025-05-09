import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.success) {

        navigate('/products');
      } else {

        alert('Invalid username or password!')
      }



    } catch (error) {
      console.error('Login Error:', error);
      alert('Server Error');
    }
  }


  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <br />

      <button onClick={handleLogin} className="login-button">Login</button>
      
    </div>
  );
}

export default LoginPage;