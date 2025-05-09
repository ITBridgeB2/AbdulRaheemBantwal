// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Header from './components/Header'; // Import Header
// import Footer from './components/Footer'; // Import Footer

// import axios from 'axios';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import BlogUpdate from './components/BlogUpdate';
// import Dashboard from './components/Dashboard';


// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('user')) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <div className="container">
//       <header>
//         <nav>
//           {/* <ul className="nav">
//             <li><Link to="/" className="nav-link">Home</Link></li>
//             {!isAuthenticated ? (
//               <>
//                 <li><Link to="/login" className="nav-link">Login</Link></li>
//                 <li><Link to="/register" className="nav-link">Register</Link></li>
//               </>
//             ) : (
//               <>
//                 <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
//                 <li><button onClick={handleLogout} className="btn logout-btn">Logout</button></li>
//               </>
//             )}
//           </ul> */}
//           <Header></Header>
//         </nav>
//       </header>

//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/blog/update/:id" element={<BlogUpdate />} />
//         </Routes>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;


// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom'; // Remove BrowserRouter here
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CreateBlog from './components/CreateBlog';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import BlogUpdate from './components/BlogUpdate';
// import Dashboard from './components/Dashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('user')) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <div className="container">
//       <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/dashboard"
//             element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />}
            
//           />
//           <Route path="/blog/update/:id" element={<BlogUpdate />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BlogUpdate from './components/BlogUpdate';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="container">
      <Header 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleLogout} 
        // Pass isAuthenticated to Header component to conditionally render the Create Blog link
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/create" 
            element={isAuthenticated ? <CreateBlog /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route path="/blog/update/:id" element={<BlogUpdate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
