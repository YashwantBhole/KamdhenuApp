
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/home');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Kamdhenu Organics</h1>
        <p className="landing-description">
          Put your health at the forefront without missing out on taste by adding Organic Food Products to your everyday diet. The right meal will help your body heal and be healthy. That is why Kamdhenu Organic Farms offers you only authentic Organic Food Products that are natural and nutritious.
        </p>
        <button className="enter-button" onClick={goToHomePage}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
