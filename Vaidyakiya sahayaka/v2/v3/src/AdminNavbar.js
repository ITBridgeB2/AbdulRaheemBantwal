import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AdminNavbar() {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          Admin Dashboard
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
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">Manage Users</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={() => {
                localStorage.removeItem("isAdminLoggedIn");
                logout();
              }}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
