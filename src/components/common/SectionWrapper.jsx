import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ id, children, alternate = false }) => {
  const { isDark } = useTheme();
  const bg = alternate
    ? isDark ? '#0c0d17' : '#f9fafb'
    : isDark ? '#07080f' : '#ffffff';

  return (
    <section id={id} style={{ background: bg, padding:'80px 0 96px', position:'relative', overflow:'hidden' }}>
      {children}
    </section>
  );
};

export const SectionHeader = ({ badge, title, highlight, subtitle }) => {
  const { isDark } = useTheme();
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ duration:0.55 }}
      style={{ textAlign:'center', marginBottom:64 }}>
      {badge && (
        <span style={{
          display:'inline-block', padding:'5px 16px', borderRadius:99,
          fontSize:11, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
          marginBottom:14, background:'rgba(99,102,241,0.1)',
          border:'1px solid rgba(99,102,241,0.22)', color:'#818cf8',
        }}>{badge}</span>
      )}
      <h2 className="font-display" style={{
        fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:800, marginBottom:14,
        color: isDark ? '#ffffff' : '#111827',
      }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ maxWidth:520, margin:'0 auto', fontSize:'0.975rem', lineHeight:1.7,
          color: isDark ? '#9ca3af' : '#6b7280' }}>{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionWrapper;
