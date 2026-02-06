
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import Footer from './Footer';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <span className="welcome-badge">Welcome to</span>
            <h1>Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="tagline">Where Green Meets Serenity</p>
            <p className="description">
              We are passionate about bringing nature closer to you with high-quality plants 
              that enhance your surroundings and promote a healthier lifestyle.
            </p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span>Air Purifying</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌸</span>
                <span>Aromatic</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <span>Low Maintenance</span>
              </div>
            </div>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Explore Plants
            </button>
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;



