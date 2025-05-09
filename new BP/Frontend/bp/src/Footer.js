import "./Footer.css"

export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="brand-logo">BS</span>
              <span className="brand-text">BlogSphere</span>
            </div>
            
            <div className="footer-links">
              <div className="links-column">
                <h4>Explore</h4>
                <a href="/">Home</a>
                <a href="/category/technology">Technology</a>
                <a href="/category/travel">Travel</a>
                <a href="/category/food">Food</a>
              </div>
              
              <div className="links-column">
                <h4>Account</h4>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/dashboard">Dashboard</a>
              </div>
              
              <div className="links-column">
                <h4>Legal</h4>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BlogSphere. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }