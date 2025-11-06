import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import checkAnimation from '../assets/congrats-andes-x.json';
import './DebitCardScreen.css';

// Constantes para animación con sensación de scroll
const SCROLL_ANIMATION = {
  // Fase 1: Compresión del botón
  buttonPress: { duration: 0.15 },
  
  // Fase 2: Morph + movimiento paralelo
  buttonToCircle: { duration: 0.5 },
  contentSlideUp: { distance: 48, duration: 0.5 },     // Contenido sube 48px
  cardParallax: { distance: 12, duration: 0.5 },       // Tarjeta sube 12px (parallax)
  
  // Fase 3: Check aparece
  checkAppear: { duration: 0.4, delay: 0.6 },
  
  // Fase 4: Feedback desde abajo
  feedbackAppear: { duration: 0.5, delay: 1.1, distance: 24 },
};

// Easing principal: ease-in-out-quint
const EASING = {
  quintInOut: [0.83, 0, 0.17, 1],
  smooth: [0.16, 1, 0.3, 1],
};

const DebitCardScreen = () => {
  const [showCheck, setShowCheck] = useState(false);

  const handleRequestCard = () => {
    // Haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    setShowCheck(true);
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
        <div className="progress-container">
          <div className="progress-bar active"></div>
          <div className="progress-bar"></div>
        </div>

        {/* Main content */}
        <div className="main-content">
          {/* Card image - Con parallax sutil (sube 12px) */}
          <motion.div 
            className="card-container"
            animate={{
              y: showCheck ? -SCROLL_ANIMATION.cardParallax.distance : 0
            }}
            transition={{
              duration: SCROLL_ANIMATION.cardParallax.duration,
              ease: EASING.quintInOut
            }}
          >
            <img 
              src="/card-image.png" 
              alt="Tarjeta de débito" 
              className="card-static"
            />
          </motion.div>

          {/* Contenedor de contenido que sube y desaparece */}
          <motion.div
            animate={{
              y: showCheck ? -SCROLL_ANIMATION.contentSlideUp.distance : 0,
              opacity: showCheck ? 0 : 1
            }}
            transition={{
              duration: SCROLL_ANIMATION.contentSlideUp.duration,
              ease: EASING.quintInOut
            }}
          >
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
          </motion.div>

          {/* Botón principal con morph a círculo */}
          {!showCheck ? (
            <motion.button 
              className="request-button"
              onClick={handleRequestCard}
              whileTap={{ 
                scale: 0.96,
                transition: { duration: SCROLL_ANIMATION.buttonPress.duration }
              }}
            >
              Pedir cartão grátis
            </motion.button>
          ) : (
            <motion.div
              className="button-circle-check"
              initial={{ borderRadius: 12, width: '100%' }}
              animate={{ 
                borderRadius: '50%',
                width: 120,
                marginLeft: 0
              }}
              transition={{ 
                duration: SCROLL_ANIMATION.buttonToCircle.duration,
                ease: EASING.quintInOut
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: SCROLL_ANIMATION.checkAppear.delay,
                  duration: SCROLL_ANIMATION.checkAppear.duration,
                  ease: EASING.smooth
                }}
              >
                <Lottie
                  animationData={checkAnimation}
                  loop={false}
                  style={{ width: '64px', height: '64px' }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Botón secundario - Desaparece rápido */}
          <motion.button 
            className="cancel-button"
            animate={{ 
              opacity: showCheck ? 0 : 1,
              y: showCheck ? -20 : 0
            }}
            transition={{ 
              duration: 0.3,
              ease: EASING.quintInOut
            }}
          >
            Agora não
          </motion.button>

          {/* Feedback aparece desde abajo */}
          {showCheck && (
            <motion.div
              className="feedback-scroll-container"
              initial={{ opacity: 0, y: SCROLL_ANIMATION.feedbackAppear.distance }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: SCROLL_ANIMATION.feedbackAppear.delay,
                duration: SCROLL_ANIMATION.feedbackAppear.duration,
                ease: EASING.quintInOut
              }}
            >
              <h1 className="feedback-title-scroll">Listo!</h1>
              <p className="feedback-message-scroll">
                Vamos te avisar quando o cartão for enviado
              </p>
            </motion.div>
          )}
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
