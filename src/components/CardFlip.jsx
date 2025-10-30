import { motion } from 'framer-motion';
import './CardFlip.css';

const CardFlip = ({ isFlipped }) => {
  return (
    <div className="card-flip-container">
      <motion.div
        className="card-flip-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Frente de la tarjeta */}
        <div className="card-face card-front">
          <div className="card-image">
            <div className="card-content">
              <div className="card-text">
                <span className="card-text-large">MEU</span>
                <span className="card-text-large">CARTÃO</span>
                <span className="card-text-large">DE PAGO</span>
              </div>
              <div className="card-footer">
                <div className="card-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M16 24C16 24 18 20 24 20C30 20 32 24 32 24M18 28L24 24L30 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-logo">VISA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="card-face card-back">
          <div className="card-success">
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;

