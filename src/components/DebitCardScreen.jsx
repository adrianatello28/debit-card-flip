import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import CardFlip from './CardFlip';
import checkAnimation from '../assets/congrats-andes-x.json';
import './DebitCardScreen.css';

// Constantes de timing para animaciones
const ANIMATION_TIMING = {
  // Desaparición jerárquica del contenido
  secondaryTextFade: { duration: 0.2, delay: 0 },           // Texto secundario primero
  titleFadeUp: { duration: 0.3, delay: 0.1 },               // Título después
  buttonTransform: { duration: 0.35, delay: 0.2 },          // Botón al final
  
  // Flip de la tarjeta
  cardFlip: { duration: 0.8, delay: 0 },
  
  // Aparición del feedback
  feedbackDelay: 0.9,                                        // Delay antes del feedback
  checkAppear: { duration: 0.5, delay: 0.2 },               // Check con bounce
  textAppear: { duration: 0.4, delay: 0.3 },
};

// Curvas de animación personalizadas
const EASING = {
  smoothOut: [0.16, 1, 0.3, 1],                             // ease-out suave
  bounce: [0.34, 1.56, 0.64, 1],                            // bounce sutil
  inOut: [0.65, 0, 0.35, 1],                                // ease-in-out
};

const DebitCardScreen = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRequestCard = () => {
    // Haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    setIsFlipped(true);
  };

  return (
    <div className="debit-card-screen">
      {/* Status bar iOS - Always visible */}
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

      {/* Content container */}
      <div className="content-container">
        {/* Progress bar */}
        <motion.div 
          className="progress-container"
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="progress-bar active"></div>
          <div className="progress-bar"></div>
        </motion.div>

        {/* Main content */}
        <div className="main-content">
          {/* Card flip component - Siempre presente, controla su propia animación */}
          <div className="card-and-feedback">
            <AnimatePresence>
              {!isFlipped && (
                <motion.div
                  key="card-wrapper"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <CardFlip isFlipped={isFlipped} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Feedback completo - Aparece después del flip */}
          {isFlipped && (
            <motion.div
              className="feedback-complete-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: ANIMATION_TIMING.feedbackDelay }}
            >
              {/* Check animation */}
              <div className="feedback-lottie">
                <Lottie
                  animationData={checkAnimation}
                  loop={false}
                  style={{ width: '96px', height: '96px' }}
                />
              </div>
              
              {/* Texto */}
              <div className="feedback-text-container">
                <h1 className="feedback-title">Listo!</h1>
                <p className="feedback-message">
                  Vamos te avisar quando o cartão for enviado
                </p>
              </div>
            </motion.div>
          )}

          {/* Title - Se desvanece con movimiento hacia arriba */}
          <motion.h1 
            className="title"
            animate={{ 
              opacity: isFlipped ? 0 : 1, 
              y: isFlipped ? -12 : 0 
            }}
            transition={{ 
              ...ANIMATION_TIMING.titleFadeUp,
              ease: EASING.smoothOut 
            }}
          >
            Peça seu cartão de débito físico grátis
          </motion.h1>

          {/* Address section - Texto secundario, se desvanece primero */}
          <motion.div 
            className="address-section"
            animate={{ 
              opacity: isFlipped ? 0 : 1, 
              y: isFlipped ? -8 : 0 
            }}
            transition={{ 
              ...ANIMATION_TIMING.secondaryTextFade,
              ease: EASING.smoothOut 
            }}
          >
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
          </motion.div>

          {/* Terms text - Texto secundario, se desvanece primero */}
          <motion.div 
            className="terms-text"
            animate={{ 
              opacity: isFlipped ? 0 : 1 
            }}
            transition={{ 
              ...ANIMATION_TIMING.secondaryTextFade,
              ease: EASING.smoothOut 
            }}
          >
            Ao continuar, você aceita os{' '}
            <a href="#" className="terms-link">
              Termos e Condições
            </a>{' '}
            do cartão de débito.
          </motion.div>

          {/* Action buttons - Se transforman al final */}
          <motion.button 
            className="request-button"
            onClick={handleRequestCard}
            disabled={isFlipped}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              opacity: isFlipped ? 0 : 1, 
              scale: isFlipped ? 0.85 : 1 
            }}
            transition={{ 
              ...ANIMATION_TIMING.buttonTransform,
              ease: EASING.smoothOut 
            }}
          >
            Pedir cartão grátis
          </motion.button>

          <motion.button 
            className="cancel-button"
            animate={{ 
              opacity: isFlipped ? 0 : 1, 
              scale: isFlipped ? 0.9 : 1 
            }}
            transition={{ 
              ...ANIMATION_TIMING.buttonTransform,
              ease: EASING.smoothOut 
            }}
          >
            Agora não
          </motion.button>
        </div>
      </div>

      {/* Bottom navigation iOS - Always visible */}
      <div className="bottom-navigation">
        <div className="home-indicator"></div>
      </div>
    </div>
  );
};

export default DebitCardScreen;
