import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { useScrollTop } from '../../hooks/useScroll';

const ScrollToTop = () => {
  const show = useScrollTop(500);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }}
          exit={{ opacity:0, scale:0.5 }} whileHover={{ scale:1.1, y:-2 }} whileTap={{ scale:0.9 }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          style={{ position:'fixed', bottom:24, right:24, zIndex:50,
            width:44, height:44, borderRadius:'50%', border:'none', cursor:'pointer',
            background:'#6366f1', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 6px 24px rgba(99,102,241,0.45)', transition:'background 0.18s' }}>
          <HiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
