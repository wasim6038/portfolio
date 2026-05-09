import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/portfolioData';

const accentMap = {
  'border-violet-500/30': 'rgba(139,92,246,0.25)',
  'border-blue-500/30':   'rgba(59,130,246,0.25)',
  'border-emerald-500/30':'rgba(16,185,129,0.25)',
  'border-orange-500/30': 'rgba(249,115,22,0.25)',
  'border-pink-500/30':   'rgba(236,72,153,0.25)',
  'border-indigo-500/30': 'rgba(99,102,241,0.25)',
};

const ServicesSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="services" alternate>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 20px' }}>
        <SectionHeader badge="What I Do" title="My" highlight="Services"
          subtitle="Comprehensive development services tailored to your needs." />

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}
             className="max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((svc, i) => {
            const accent = accentMap[svc.border] || 'rgba(99,102,241,0.2)';
            return (
              <motion.div key={svc.title}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.09 }}
                whileHover={{ y:-5, boxShadow:`0 20px 40px -10px ${accent}` }}
                style={{ padding:28, borderRadius:20,
                  border:`1px solid ${isDark ? accent : 'rgba(0,0,0,0.08)'}`,
                  background: isDark ? `rgba(255,255,255,0.02)` : '#fff',
                  transition:'all 0.22s ease', cursor:'default' }}>
                <div style={{ fontSize:'2.2rem', marginBottom:16 }}>{svc.icon}</div>
                <h3 className="font-display" style={{ fontSize:'1rem', fontWeight:700,
                  color: isDark ? '#fff' : '#111827', marginBottom:10 }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize:'0.855rem', lineHeight:1.7,
                  color: isDark ? '#9ca3af' : '#6b7280' }}>
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
