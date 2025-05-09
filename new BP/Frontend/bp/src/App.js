import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import PostDetail from './PostDetail';
import UserPosts from './UserPosts';
import Category from './Category';
import ProtectedRoute from './ProtectedRoute';
import Footer from './Footer';
import './App.css';

function App() {
  const location = useLocation();
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowParticles(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <AuthProvider>
      <div className="app-container">
        {/* Floating Particles Background */}
        {showParticles && (
          <div className="particles-container">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="particle" 
                style={{
                  width: `${Math.random() * 15 + 5}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${Math.random() * 20 + 10}s`
                }}
              />
            ))}
          </div>
        )}

        <div className="content-wrapper">
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-posts" element={<UserPosts />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
              </Route>
              
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;