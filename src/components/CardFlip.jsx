import { motion } from 'framer-motion';
import './CardFlip.css';

const CardFlip = ({ isFlipped }) => {
  // Variantes de animación con anticipation
  const cardVariants = {
    initial: {
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
    },
    anticipation: {
      rotateY: -5,
      rotateZ: -2,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1],
      }
    },
    flipped: {
      rotateY: 180,
      rotateZ: 0,
      opacity: 0,
      transition: {
        rotateY: {
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1],
        },
        opacity: {
          duration: 0.25,
          delay: 0.55,
          ease: 'easeOut',
        }
      }
    }
  };

  return (
    <div className="card-flip-container">
      <motion.div
        className="card-flip-inner"
        initial="initial"
        animate={isFlipped ? "flipped" : "initial"}
        variants={cardVariants}
        style={{
          filter: isFlipped ? 'blur(2px)' : 'blur(0px)',
        }}
      >
        {/* Frente de la tarjeta */}
        <div className="card-face card-front">
          <img 
            src="/card-image.png" 
            alt="Tarjeta de débito" 
            className="card-image-real"
          />
        </div>

        {/* Reverso de la tarjeta - Vacío, solo flip */}
        <div className="card-face card-back">
          {/* El check ahora aparece en el feedback, no en la tarjeta */}
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
