import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolioData';

const CATS = ['All','Full Stack','Frontend','Backend'];

const gradMap = {
  'from-violet-500 to-purple-700':  'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  'from-blue-500 to-cyan-600':      'linear-gradient(135deg,#3b82f6,#0891b2)',
  'from-emerald-500 to-teal-600':   'linear-gradient(135deg,#10b981,#0d9488)',
  'from-orange-500 to-red-500':     'linear-gradient(135deg,#f97316,#ef4444)',
  'from-pink-500 to-rose-600':      'linear-gradient(135deg,#ec4899,#e11d48)',
  'from-indigo-500 to-blue-600':    'linear-gradient(135deg,#6366f1,#2563eb)',
};

const ProjectCard = ({ project, isDark, index }) => {
  const card = isDark ? { bg:'rgba(255,255,255,0.03)', border:'rgba(255,255,255,0.07)' } : { bg:'#fff', border:'rgba(0,0,0,0.08)' };
  const grad = gradMap[project.color] || 'linear-gradient(135deg,#6366f1,#8b5cf6)';

  return (
    <motion.div layout initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
      exit={{ opacity:0, scale:0.93 }} transition={{ delay:index*0.07, duration:0.38 }}
      className="card-hover"
      style={{ padding:24, borderRadius:20, border:`1px solid ${card.border}`, background:card.bg,
        position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', gap:0 }}>

      {/* Top accent bar */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:grad, opacity:0.7 }} />

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16, marginTop:8 }}>
        <div style={{ width:48, height:48, borderRadius:14, background:grad,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem',
          boxShadow:'0 4px 14px rgba(0,0,0,0.25)' }}>
          {project.icon}
        </div>
        <div style={{ display:'flex', gap:6 }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ padding:8, borderRadius:8, display:'flex', alignItems:'center', textDecoration:'none',
              color: isDark ? '#9ca3af' : '#6b7280',
              background: isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6',
              transition:'all 0.15s' }}>
            <FiGithub size={15} />
          </a>
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ padding:8, borderRadius:8, display:'flex', alignItems:'center', textDecoration:'none',
                color: isDark ? '#9ca3af' : '#6b7280',
                background: isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6' }}>
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display" style={{ fontSize:'1rem', fontWeight:700, color: isDark ? '#fff' : '#111827', marginBottom:8 }}>
        {project.title}
      </h3>
      <p style={{ fontSize:'0.835rem', lineHeight:1.7, color: isDark ? '#9ca3af' : '#6b7280', marginBottom:16, flex:1 }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {project.techStack.map(t => (
          <span key={t} style={{ padding:'4px 10px', borderRadius:6, fontSize:11, fontWeight:500,
            background: isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6',
            color: isDark ? '#d1d5db' : '#374151',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
            {t}
          </span>
        ))}
      </div>

      {project.featured && (
        <span style={{ position:'absolute', top:14, right:14, padding:'3px 10px', borderRadius:99, fontSize:10, fontWeight:700,
          background:'rgba(245,158,11,0.12)', border:'1px solid rgba(245,158,11,0.28)', color:'#fbbf24' }}>
          ⭐ Featured
        </span>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 20px' }}>
        <SectionHeader badge="Portfolio" title="Featured" highlight="Projects"
          subtitle="A selection of real-world applications I've built." />

        {/* Filter */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10, marginBottom:40 }}>
          {CATS.map(cat => {
            const sel = cat === filter;
            return (
              <button key={cat} onClick={() => setFilter(cat)}
                style={{ padding:'8px 22px', borderRadius:99, fontSize:'0.85rem', fontWeight:600,
                  cursor:'pointer', border:'none', transition:'all 0.18s',
                  background: sel ? '#6366f1' : isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6',
                  color: sel ? '#fff' : isDark ? '#9ca3af' : '#6b7280',
                  boxShadow: sel ? '0 6px 20px rgba(99,102,241,0.35)' : 'none' }}>
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}
          className="max-lg:grid-cols-2 max-md:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} isDark={isDark} index={i} />)}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} style={{ marginTop:48, textAlign:'center' }}>
          <p style={{ fontSize:'0.875rem', color: isDark ? '#6b7280' : '#9ca3af', marginBottom:16 }}>
            Explore all my repositories on GitHub
          </p>
          <motion.a href="https://github.com/wasim6038" target="_blank" rel="noreferrer"
            whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'11px 24px', borderRadius:12,
              border:`1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
              color: isDark ? '#fff' : '#111827', fontWeight:600, fontSize:'0.875rem', textDecoration:'none',
              background: isDark ? 'rgba(255,255,255,0.03)' : '#fff' }}>
            <FiGithub size={17}/> View GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
