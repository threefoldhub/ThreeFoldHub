// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, className = '', y = 40 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // cubic-bezier smooth
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
