import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import "./Dashboard.css"
export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard container py-5">
      <div className="glass-card p-4 p-md-5">
        <h1 className="mb-4">Dashboard</h1>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="stats-card glass-card p-4 h-100">
              <h3>Welcome back, {user?.username}</h3>
              <p className="text-secondary">Here's what's happening with your blog</p>
              
              <div className="mt-4">
                <Link to="/my-posts" className="btn btn-primary me-3">
                  View Your Posts
                </Link>
                <Link to="/create-post" className="btn btn-outline">
                  Create New Post
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="stats-card glass-card p-4 h-100">
              <h4>Quick Stats</h4>
              <div className="stats-grid mt-3">
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Total Posts</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">1.2K</div>
                  <div className="stat-label">Total Views</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">56</div>
                  <div className="stat-label">Comments</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">4</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="recent-activity mt-5">
          <h3 className="mb-4">Recent Activity</h3>
          <div className="activity-list">
            {[1, 2, 3].map((item) => (
              <div key={item} className="activity-item glass-card p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>Post Title {item}</strong> was updated
                  </div>
                  <small className="text-secondary">2 days ago</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}