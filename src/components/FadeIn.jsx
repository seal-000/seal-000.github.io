import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      whileInView={{ opacity: 1 }} // Fade in when in view
      transition={{ duration: 1.5 }} // Duration of the fade-in effect
      viewport={{ once: true }} // Only animate once
      
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
