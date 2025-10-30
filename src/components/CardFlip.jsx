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
          <div className="card-image placeholder">
            {/* Placeholder temporal - se reemplazará con la imagen real */}
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

