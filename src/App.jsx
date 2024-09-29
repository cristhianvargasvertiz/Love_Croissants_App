import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  const handleReturnClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}> {/* comentario: React elimina gradualmente el contenido de landing-page debido a que no existe la  y renderiza el nuevo contenido de product-list-container en su lugar. */}
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <img
              src="/Love_Croissants_App/Logo1.png" // Asegúrate que la imagen esté en public
              alt="logo1"
              style={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                margin: '0 auto',
                overflow: 'visible',
              }}
            />
            <div className="divider"></div>
            <p>"Love is hot-from the oven daily 7am-2pm"</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList toLanding={handleReturnClick} />
      </div>
    </div>
  );
}

export default App;
