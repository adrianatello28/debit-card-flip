import { useState } from 'react';
import CardFlip from './CardFlip';
import './DebitCardScreen.css';

const DebitCardScreen = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRequestCard = () => {
    setIsFlipped(true);
  };

  return (
    <div className="debit-card-screen">
      {/* Status bar iOS */}
      <div className="status-bar-ios">
        <div className="status-left">
          <span className="time">9:30</span>
        </div>
        <div className="camera-notch"></div>
        <div className="status-right">
          <svg className="cellular-icon" viewBox="0 0 18 12" fill="none">
            <rect x="0" y="8" width="2" height="4" rx="0.5" fill="currentColor"/>
            <rect x="4" y="6" width="2" height="6" rx="0.5" fill="currentColor"/>
            <rect x="8" y="3" width="2" height="9" rx="0.5" fill="currentColor"/>
            <rect x="12" y="0" width="2" height="12" rx="0.5" fill="currentColor"/>
          </svg>
          <svg className="wifi-icon" viewBox="0 0 16 12" fill="none">
            <path d="M1 8C3.76 5.24 7.24 4 8 4C8.76 4 12.24 5.24 15 8M3 10.5C4.79 8.71 6.79 8 8 8C9.21 8 11.21 8.71 13 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg className="battery-icon" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor" fill="none"/>
            <rect x="2" y="2" width="17" height="8" rx="1" fill="currentColor"/>
            <path d="M22 4C22 3.44772 22.4477 3 23 3V3C23.5523 3 24 3.44772 24 4V8C24 8.55228 23.5523 9 23 9V9C22.4477 9 22 8.55228 22 8V4Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar active"></div>
        <div className="progress-bar"></div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Card flip component */}
        <CardFlip isFlipped={isFlipped} />

        {/* Title */}
        <h1 className="title">
          Peça seu cartão de débito físico grátis
        </h1>

        {/* Address section */}
        <div className="address-section">
          <div className="address-content">
            <div className="truck-icon">
              <img src="/camion.png" alt="Camión de entrega" />
            </div>
            <div className="address-details">
              <div className="address-label">Endereço de entrega</div>
              <div className="address-text">
                Rua General Artigas, 67, Cobertura 01, Leblon, CEP: 2...
              </div>
            </div>
          </div>
          <button className="alter-button">Alterar</button>
        </div>

        {/* Terms text */}
        <div className="terms-text">
          Ao continuar, você aceita os{' '}
          <a href="#" className="terms-link">
            Termos e Condições
          </a>{' '}
          do cartão de débito.
        </div>

        {/* Action buttons */}
        <button 
          className="request-button"
          onClick={handleRequestCard}
          disabled={isFlipped}
        >
          Pedir cartão grátis
        </button>

        <button className="cancel-button">Agora não</button>
      </div>

      {/* Bottom navigation iOS */}
      <div className="bottom-navigation">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
};

export default DebitCardScreen;

