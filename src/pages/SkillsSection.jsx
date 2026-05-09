import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/portfolioData';

const SkillBar = ({ name, level, isDark, delay }) => (
  <motion.div initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }}
    viewport={{ once:true }} transition={{ delay, duration:0.45 }}
    style={{ marginBottom:14 }}>
    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
      <span style={{ fontSize:'0.85rem', fontWeight:500, color: isDark ? '#d1d5db' : '#374151' }}>{name}</span>
      <span style={{ fontSize:11, fontWeight:700, color:'#818cf8' }}>{level}%</span>
    </div>
    <div style={{ height:6, borderRadius:99, background: isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6', overflow:'hidden' }}>
      <motion.div initial={{ width:0 }} whileInView={{ width:`${level}%` }}
        viewport={{ once:true }} transition={{ duration:1.3, delay:delay+0.2, ease:'easeOut' }}
        style={{ height:'100%', borderRadius:99, background:'linear-gradient(90deg,#6366f1,#a855f7)' }} />
    </div>
  </motion.div>
);

const EXTRA = ['TypeScript','Postman','JWT','Socket.io','Leaflet.js','EJS','REST APIs','ChatGPT API','Vercel','Mongoose'];

const SkillsSection = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState(null);
  const card = isDark ? { bg:'rgba(255,255,255,0.03)', border:'rgba(255,255,255,0.07)' } : { bg:'#fff', border:'rgba(0,0,0,0.08)' };
  const displayed = active ? skills.filter(s => s.category === active) : skills;

  return (
    <SectionWrapper id="skills">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 20px' }}>
        <SectionHeader badge="Technical Skills" title="My" highlight="Skills"
          subtitle="A snapshot of the tools and technologies I work with regularly." />

        {/* Filter pills */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10, marginBottom:48 }}>
          {['All', ...skills.map(s=>s.category)].map(cat => {
            const sel = cat === 'All' ? active===null : active===cat;
            return (
              <button key={cat} onClick={() => setActive(cat==='All' ? null : (active===cat ? null : cat))}
                style={{
                  padding:'8px 20px', borderRadius:99, fontSize:'0.85rem', fontWeight:600,
                  cursor:'pointer', border:'none', transition:'all 0.18s',
                  background: sel ? '#6366f1' : isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6',
                  color: sel ? '#fff' : isDark ? '#9ca3af' : '#6b7280',
                  boxShadow: sel ? '0 6px 20px rgba(99,102,241,0.35)' : 'none',
                }}>
                {cat}
              </button>
            );
          })}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:20 }}
             className="max-lg:grid-cols-1">
          {displayed.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:gi*0.08 }}
              style={{ padding:28, borderRadius:20, border:`1px solid ${card.border}`, background:card.bg }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                <div style={{ width:44, height:44, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem',
                  background:`linear-gradient(135deg,${
                    group.color.includes('violet') ? '#6366f1,#8b5cf6'
                    : group.color.includes('blue') ? '#3b82f6,#06b6d4'
                    : group.color.includes('emerald') ? '#10b981,#14b8a6'
                    : '#f97316,#ef4444'})` }}>
                  {group.icon}
                </div>
                <h3 className="font-display" style={{ fontSize:'1.05rem', fontWeight:700, color: isDark ? '#fff' : '#111827' }}>{group.category}</h3>
              </div>
              {group.items.map((sk, si) => (
                <SkillBar key={sk.name} name={sk.name} level={sk.level} isDark={isDark} delay={gi*0.08+si*0.05} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Extra pills */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.3 }}
          style={{ marginTop:48, textAlign:'center' }}>
          <p style={{ fontSize:12, color: isDark ? '#6b7280' : '#9ca3af', marginBottom:20 }}>Also familiar with</p>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10 }}>
            {EXTRA.map((tech, i) => (
              <motion.span key={tech} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ delay:i*0.04 }} whileHover={{ scale:1.08 }}
                style={{ padding:'8px 16px', borderRadius:99, fontSize:'0.8rem', fontWeight:500, cursor:'default',
                  border:`1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.09)'}`,
                  color: isDark ? '#d1d5db' : '#374151', background: isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb' }}>
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
