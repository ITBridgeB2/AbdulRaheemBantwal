import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landing-container">
        
      <h1 className="landing-title">Welcome to ShopiFY</h1>


      <p className="landing-description">Explore a variety of amazing products!</p>
      <button onClick={() => navigate('/login')} className="landing-button">Login</button>
    
    </div>
  );
}

export default LandingPage;