import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import checkAnimation from '../assets/congrats-andes-x.json';
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
          <img 
            src="/card-image.png" 
            alt="Tarjeta de débito" 
            className="card-image-real"
          />
        </div>

        {/* Reverso de la tarjeta - Con Lottie */}
        <div className="card-face card-back">
          <div className="card-back-lottie">
            <Lottie
              animationData={checkAnimation}
              loop={false}
              style={{ width: '200px', height: '200px' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
