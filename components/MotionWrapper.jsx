'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function MotionWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: fadeInUp.hidden,
        show: {
          ...fadeInUp.show,
          transition: { ...fadeInUp.show.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
