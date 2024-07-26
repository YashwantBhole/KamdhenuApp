
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './HomePage.css';

const products = [
  { id: 1, image: './assets/HaladMain.jpg', title: 'Termreic Powder', price: '700/200gm', description: "Organic Turmeric Powder - Limited Time Offer! Elevate your culinary creations with our organic turmeric powder, sourced from the best farms. Full of curcumin and other beneficial compounds, it's perfect for adding a healthful touch to your meals. Our limited-time sale allows you to enjoy this golden spice at an unbeatable price. Stock up now and embrace the natural power of turmeric!" },
  { id: 2, image: './assets/Mustered.jpg', title: 'Mustered', price: '100/kg', description: 'Organic Mustard Seeds - Limited Time Offer! Elevate your cooking with our organic mustard seeds, sourced from the best farms. These aromatic seeds are full of flavor and essential nutrients, ideal for adding a zesty kick to your dishes. Enjoy the limited-time sale and embrace the natural goodness of organic mustard seeds. Stock up now and enhance your recipes!' },
  {
    id: 3, image: 'assets/Jaggery.jpg', title: 'Jaggery', price: '70/kg', description: "Organic Jaggery - Limited Time Offer! Elevate your recipes with our pure, organic jaggery.Sourced from ethically managed farms this nutrient - rich sweetener is full of iron and other vital nutrients.Perfect for adding a wholesome touch to your daily diet or baking projects.Grab this limited - time sale offer and enjoy the genuine taste of nature's best sweetener. Hurry, stock is limited!" },

  { id: 4, image: 'assets/ChanaDal.jpg', title: 'Chana Dal', price: '120/kg', description: 'Organic Chana Dal - Limited Time Offer! Transform your cooking with our organic chana dal, sourced from the finest farms. Packed with protein, fiber, and vital nutrients, this pulse is ideal for adding a wholesome touch to your recipes. Our limited-time sale gives you the perfect opportunity to enjoy this nutritious ingredient at an unbeatable price. Stock up now and enhance your meals with organic goodness!' },
  { id: 5, image: 'assets/Moong Dal.jpg', title: 'Moong Dal', price: '180/kg', description: 'Traditional Moong Dal - Special Sale! Add a healthy and versatile ingredient to your pantry with our traditional moong dal. Known for its rich protein content and digestive benefits, this split green gram is essential for a balanced diet. Enjoy the special sale price and bring home the quality and versatility of premium moong dal. Hurry, this offer won’t last long!' },
  { id: 6, image: 'assets/UdidDal.jpg', title: 'Udid Dal', price: '150/kg', description: 'Organic Black Lentils - Limited Time Offer! Transform your cooking with our organic black lentils, sourced from top-quality farms. These nutrient-rich lentils are ideal for adding a wholesome touch to your recipes, from hearty soups to savory curries. Take advantage of our limited-time sale and embrace the natural goodness of organic black lentils. Stock up now and enhance your dishes!' },
  { id: 7, image: 'assets/Teel.jpg', title: 'Teel', price: '200/kg', description: 'Organic Sesame Seeds - Limited Time Offer! Transform your recipes with our organic sesame seeds, sourced from top-quality farms. These nutrient-rich seeds are perfect for adding a wholesome touch to your dishes, from salads to baked goods. Enjoy our limited-time sale and embrace the natural goodness of organic sesame seeds. Stock up now and enhance your culinary creations!' },
  //   { id: 8, image: 'product8.jpg', title: 'Product 8', price: 450, description: 'Description for product 8.' },
  //   { id: 9, image: 'product9.jpg', title: 'Product 9', price: 500, description: 'Description for product 9.' },
  //   { id: 10, image: 'product10.jpg', title: 'Product 10', price: 550, description: 'Description for product 10.' },
];

function HomePage() {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate('/product', { state: product });
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <button className="know-more-button" onClick={(e) => { e.stopPropagation(); handleProductClick(product); }}>
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
