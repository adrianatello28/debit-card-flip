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
      {/* Status bar */}
      <div className="status-bar">
        <span className="time">9:30</span>
        <div className="status-icons">
          <div className="signal-icon"></div>
          <div className="wifi-icon"></div>
          <div className="battery-icon"></div>
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
    </div>
  );
};

export default DebitCardScreen;

