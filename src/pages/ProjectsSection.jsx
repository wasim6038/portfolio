import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolioData';

const CATS = ['All', 'Full Stack', 'Frontend', 'Backend'];

const gradMap = {
  'from-violet-500 to-purple-700':  'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  'from-blue-500 to-cyan-600':      'linear-gradient(135deg,#3b82f6,#0891b2)',
  'from-emerald-500 to-teal-600':   'linear-gradient(135deg,#10b981,#0d9488)',
  'from-orange-500 to-red-500':     'linear-gradient(135deg,#f97316,#ef4444)',
  'from-pink-500 to-rose-600':      'linear-gradient(135deg,#ec4899,#e11d48)',
  'from-indigo-500 to-blue-600':    'linear-gradient(135deg,#6366f1,#2563eb)',
};

const ProjectCard = ({ project, isDark, index }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const grad = gradMap[project.color] || 'linear-gradient(135deg,#6366f1,#8b5cf6)';

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 240, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 240, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(260px circle at ${useTransform(px, v => `${v * 100}%`)} ${useTransform(py, v => `${v * 100}%`)}, rgba(255,255,255,0.10), transparent 70%)`;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => { px.set(0.5); py.set(0.5); setHovered(false); };

  const border = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? 'rgba(255,255,255,0.03)' : '#fff';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', overflow: 'hidden',
          borderRadius: 20, border: `1px solid ${border}`, background: bg, display: 'flex', flexDirection: 'column',
          boxShadow: isDark ? '0 24px 50px -24px rgba(0,0,0,0.6)' : '0 24px 50px -28px rgba(15,23,42,0.28)',
          willChange: 'transform',
        }}
      >
        {/* Cover panel */}
        <div style={{ position: 'relative', height: 128, background: grad, overflow: 'hidden', transform: 'translateZ(0)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255,255,255,0.15), transparent 40%)',
          }} />
          <motion.div style={{
            position: 'absolute', bottom: -14, left: 20, width: 56, height: 56, borderRadius: 16,
            background: isDark ? '#111827' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', boxShadow: '0 10px 24px rgba(0,0,0,0.3)', transform: 'translateZ(50px)',
          }}>
            {project.icon}
          </motion.div>

          {project.featured && (
            <span style={{
              position: 'absolute', top: 12, right: 12, padding: '3px 10px', borderRadius: 99, fontSize: 10, fontWeight: 700,
              background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(255,255,255,0.35)', color: '#fff',
              backdropFilter: 'blur(4px)', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 4,
            }}>
              ⭐ Featured
              <motion.span aria-hidden animate={{ x: ['-120%', '220%'] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)' }} />
            </span>
          )}

          {/* Hover-reveal action links */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.22 }}
            style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6, pointerEvents: hovered ? 'auto' : 'none' }}
          >
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.35)', color: '#fff', backdropFilter: 'blur(4px)' }}>
              <FiGithub size={14} />
            </a>
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noreferrer"
                style={{ width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.35)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                <FiExternalLink size={14} />
              </a>
            )}
          </motion.div>
        </div>

        {/* Body */}
        <div style={{ padding: '26px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(20px)' }}>
          <h3 className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: isDark ? '#fff' : '#111827', marginBottom: 8 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.835rem', lineHeight: 1.7, color: isDark ? '#9ca3af' : '#6b7280', marginBottom: 18, flex: 1 }}>
            {project.description}
          </p>

          <motion.div
            initial="rest" animate={hovered ? 'hover' : 'rest'}
            variants={{ rest: {}, hover: { transition: { staggerChildren: 0.03 } } }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
          >
            {project.techStack.map(t => (
              <motion.span key={t}
                variants={{ rest: { y: 0 }, hover: { y: -2 } }}
                style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500,
                  background: isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6',
                  color: isDark ? '#d1d5db' : '#374151',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Cursor spotlight */}
        <motion.div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: glow, mixBlendMode: isDark ? 'screen' : 'multiply' }} />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const blobOneY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [50, -70]);

  return (
    <SectionWrapper id="projects">
      <div ref={sectionRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', position: 'relative' }}>

        {/* Parallax background blobs */}
        <motion.div aria-hidden style={{
          position: 'absolute', top: -40, left: -80, width: 340, height: 340, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)', y: blobOneY,
          pointerEvents: 'none', filter: 'blur(10px)', zIndex: 0,
        }} />
        <motion.div aria-hidden style={{
          position: 'absolute', bottom: 0, right: -60, width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)', y: blobTwoY,
          pointerEvents: 'none', filter: 'blur(10px)', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeader badge="Portfolio" title="Featured" highlight="Projects"
            subtitle="A selection of real-world applications I've built." />

          {/* Filter — animated sliding pill */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {CATS.map(cat => {
              const sel = cat === filter;
              return (
                <button key={cat} onClick={() => setFilter(cat)}
                  style={{ position: 'relative', padding: '8px 22px', borderRadius: 99, fontSize: '0.85rem', fontWeight: 600,
                    cursor: 'pointer', border: 'none', background: sel ? 'transparent' : isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6',
                    color: sel ? '#fff' : isDark ? '#9ca3af' : '#6b7280', overflow: 'hidden' }}>
                  {sel && (
                    <motion.span layoutId="projectFilterPill" transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      style={{ position: 'absolute', inset: 0, borderRadius: 99, background: '#6366f1', boxShadow: '0 6px 20px rgba(99,102,241,0.35)', zIndex: 0 }} />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{cat}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}
            className="max-lg:grid-cols-2 max-md:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => <ProjectCard key={p.id} project={p} isDark={isDark} index={i} />)}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: isDark ? '#6b7280' : '#9ca3af', marginBottom: 16 }}>
              Explore all my repositories on GitHub
            </p>
            <motion.a href="https://github.com/wasim6038" target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 24px', borderRadius: 12,
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`, overflow: 'hidden',
                color: isDark ? '#fff' : '#111827', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                background: isDark ? 'rgba(255,255,255,0.03)' : '#fff' }}>
              <FiGithub size={17} /> View GitHub Profile →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
