import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import "./Navbar.css"

export default function Navbar() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          <span className="brand-logo">BS</span>
          <span className="brand-text">BlogSphere</span>
        </Link>
        
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          {isAuthenticated && (
            <>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <Link className="nav-link" to="/my-posts">My Posts</Link>
              <Link className="nav-link" to="/create-post">Create Post</Link>
            </>
          )}
        </div>
        
        <div className="navbar-actions">
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="username">Hi, {user.username}</span>
              <button className="btn btn-outline logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link className="btn btn-outline" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}