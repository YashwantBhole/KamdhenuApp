
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const appName = "Kamdhenu Organics".split("");

  return (
    <nav className="navbar">
      <div className="logo">🌾</div>
      <div className="app-title">
        {appName.map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </div>
      <Link to="/about" className="about-link">
        <span className="about-icon">ℹ️</span> About
      </Link>
    </nav>
  );
}

export default Navbar;
