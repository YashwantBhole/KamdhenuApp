
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ProductPage.css';

function ProductPage() {
  const location = useLocation();
  const { image, title, price, description } = location.state;
  const handleBuyNow = () => {
    window.location.href = 'tel:+919356900563'; 
  };

  return (
    <div className="product-container">
      <Navbar />
      <div className="product-details">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{title}</h1>
          <p className="product-price"> Rs.{price}</p>
          <p className="product-description">{description}</p>
          <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
