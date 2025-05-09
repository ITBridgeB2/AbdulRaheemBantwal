// // import './App.css';
// // import { Link, Route, Routes } from 'react-router-dom';
// // import Register from './register';

// // // Import Bootstrap CSS and JS
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import Home from './home';
// // import Login from './login';

// // function App() {
// //   return (
// //     <div>
// //       {/* Bootstrap Navbar */}
// //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //         <div className="container">
// //           <Link className="navbar-brand" to="/">Vaidyakiya Sahayaka 2</Link>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarNav"
// //             aria-controls="navbarNav"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >


// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNav">
// //             <ul className="navbar-nav ms-auto">
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/">Home</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/register">Register</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/login">Login</Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Routes */}

      

// //       <div className="container mt-4">

// //         <Routes>

// //           <Route path="/" element={<Home />} />
          
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/login" element={<Login />} />
// //         </Routes>
// //       </div>

      
// //     </div>
// //   );
// // }

// // export default App;





// import './App.css';
// import { Link, Route, Routes } from 'react-router-dom';
// import Register from './register';
// import Home from './home';
// import Login from './login';
// import { AuthProvider, useAuth } from './AuthContext';  // Import AuthContext
// import ProtectedRoute from './ProtectedRoute';  // The ProtectedRoute component
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import UserDashboard1 from './userDashboard';
// import Welcome from './welcome';
// import AdminDashboard from './adminPage';
// import Users from './users';
// import UserDetails from './userDetails';

// function App() {
//   return (
//     <AuthProvider>  {/* Wrap your app with AuthProvider */}

//       <Navbar />

//       <div className="container mt-4">

//         <Routes>
//           <Route path='/admin' element={<AdminDashboard/>}/>

//           <Route path='/admin/users' element={<Users/>}/>
          

//           <Route path="/admin/user/:id" element={<UserDetails />} />
          

//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Route: Only accessible if logged in */}

//           <Route element={<ProtectedRoute />}>
//             <Route path="/userdashboard" element={<UserDashboard1 />} />
//             <Route path="/Welcome" element={<Welcome/>} />
//           </Route>
            
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// function Navbar() {
//   const { isAuthenticated, logout } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link 
//           className="navbar-brand" 
//           to={isAuthenticated ? "/userdashboard" : "/"}
//         >
//           Vaidyakiya Sahayaka 2
//         </Link>
        


//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
            

//             {!isAuthenticated && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//               </>
//             )}

//             {isAuthenticated && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/userdashboard">Patient Registration</Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default App; // Ensure App is exported as the default export




// -------------

// import './App.css';
// import { Link, Route, Routes } from 'react-router-dom';
// import Register from './register';
// import Home from './home';
// import Login from './login';
// import { AuthProvider, useAuth } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import UserDashboard1 from './userDashboard';
// import Welcome from './welcome';
// import AdminDashboard from './adminPage';
// import Users from './users';
// import UserDetails from './userDetails';

// // Regular Navbar for users
// function Navbar() {
//   const { isAuthenticated, logout } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link 
//           className="navbar-brand" 
//           to={isAuthenticated ? "/userdashboard" : "/"}>
//           Vaidyakiya Sahayaka 2
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {!isAuthenticated ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/userdashboard">Patient Registration</Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Admin Navbar for admin users
// function AdminNavbar() {
//   const { logout } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/admin/users">Manage Users</Link>
//             </li>
//             <li className="nav-item">
//               <button className="btn btn-link nav-link" onClick={() => {
//                 localStorage.removeItem("isAdminLoggedIn");
//                 logout();
//               }}>Logout</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function App() {
//   const { isAuthenticated } = useAuth();
//   const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true"; // Check if admin is logged in

//   return (
//     <AuthProvider>  {/* Wrap your app with AuthProvider */}
//       {isAdminLoggedIn ? <AdminNavbar /> : <Navbar />}  {/* Conditionally render AdminNavbar or regular Navbar */}
      
//       <div className="container mt-4">
//         <Routes>
//           <Route path='/admin' element={<AdminDashboard />} />
//           <Route path='/admin/users' element={<Users />} />
//           <Route path="/admin/user/:id" element={<UserDetails />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
          
//           {/* Protected Route: Only accessible if logged in */}
//           <Route element={<ProtectedRoute />}>
//             <Route path="/userdashboard" element={<UserDashboard1 />} />
//             <Route path="/Welcome" element={<Welcome />} />
//           </Route>
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;




// --------------





import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';  // Import useNavigate
import Register from './register';
import Home from './home';
import Login from './login';
import { AuthProvider, useAuth } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserDashboard1 from './userDashboard';
import Welcome from './welcome';
import AdminDashboard from './adminPage';
import Users from './users';
import UserDetails from './userDetails';
import AboutUs from './aboutus';

// Regular Navbar for users
function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleLogout = () => {
    logout();
    navigate('/');  // Redirect to Home page after logout
  };

  const aboutus=()=>{
    navigate("/aboutus")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link 
          className="navbar-brand" 
          to={isAuthenticated ? "/userdashboard" : "/"}>
          Vaidyakiya Sahayaka 2
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/userdashboard">Patient Registration</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>  {/* Call the handleLogout function */}
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={aboutus}>About Us</button>  {/* Call the handleLogout function */}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Admin Navbar for admin users
function AdminNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    logout();
    navigate('/');  // Redirect to Home page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">Manage Users</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>  {/* Call the handleLogout function */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const { isAuthenticated } = useAuth();
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true"; // Check if admin is logged in

  return (
    <AuthProvider>  {/* Wrap your app with AuthProvider */}
      {isAdminLoggedIn ? <AdminNavbar /> : <Navbar />}  {/* Conditionally render AdminNavbar or regular Navbar */}
      
      <div className="container mt-4">
        <Routes>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path="/admin/user/:id" element={<UserDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs/>} />
          
          {/* Protected Route: Only accessible if logged in */}
          <Route element={<ProtectedRoute />}>
            <Route path="/userdashboard" element={<UserDashboard1 />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
