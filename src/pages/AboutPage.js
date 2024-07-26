
import Navbar from '../components/Navbar';
import './AboutPage.css';

function AboutPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919356900563', '_blank'); 
  };

  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> 
            <a href="mailto:your-email@example.com" className="email-link">pravinkolhe828@gmail.com</a>
          </p>
          <p>
            <strong>Mobile:</strong>
            <button onClick={handleWhatsAppClick} className="whatsapp-button">
              WhatsApp Us
            </button>
          </p>
        </div>
        <div className="pdf-container">
          <h2 className="pdf-title">Our Brochure</h2>
          <embed src="./assets/certificate.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
