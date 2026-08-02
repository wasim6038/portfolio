import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolioData';

const ROLES = ['Full Stack Developer','MERN Stack Expert','React.js Developer','Node.js Developer','API Developer'];

const CODE = `const wasim = {
  role: "Junior Developer",
  stack: ["React","Node","Express", "MongoDB"],
  status: "Currently Working 💼",
  passion: "Building cool apps 🚀"
};`;

const HeroSection = () => {
  const { isDark } = useTheme();
  const typed = useTypingEffect(ROLES, 72, 2200);

  const bg      = isDark ? '#07080f' : '#f8fafc';
  const textMain = isDark ? '#ffffff'  : '#0f172a';
  const textSub  = isDark ? '#94a3b8'  : '#64748b';
  const cardBg   = isDark ? 'rgba(15,16,28,0.95)' : 'rgba(255,255,255,0.95)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.09)';

  const socials = [
    { icon: FiGithub,   href: personalInfo.github,             label: 'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin,           label: 'LinkedIn' },
    { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
  ];

  const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
  const fadeUp  = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

  /* right-side tech stack cards */
  const stackCards = [
    { icon: FiCode,     label: 'Frontend',  items: ['React.js','Next.js','Tailwind'], color: '#6366f1', glow: 'rgba(99,102,241,0.25)' },
    { icon: FiServer,   label: 'Backend',   items: ['Node.js','Express.js','REST API'], color: '#a855f7', glow: 'rgba(168,85,247,0.25)' },
    { icon: FiDatabase, label: 'Database',  items: ['MongoDB','Mongoose'], color: '#10b981', glow: 'rgba(16,185,129,0.25)' },
  ];

  return (
    <section id="hero" style={{ background: bg, minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

      {/* ── Background effects ── */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position:'absolute', top:'10%', left:'-10%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'-5%',  width:440, height:440, borderRadius:'50%', background:'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 65%)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 24px 72px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}
             className="max-lg:grid-cols-1">

          {/* ══════════ LEFT ══════════ */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Status badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: 22 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 16px', borderRadius: 99, fontSize: 12, fontWeight: 600,
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399',
                  boxShadow: '0 0 8px #34d399', animation: 'pulse 2s infinite' }} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <p className="font-display" style={{ fontSize: '1rem', fontWeight: 600, color: '#818cf8', marginBottom: 6, letterSpacing: '0.05em' }}>
                Hey there 👋, I'm
              </p>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.6rem,5.5vw,4rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: 16, color: textMain }}>
                Wasim<br />
                <span className="gradient-text">Ansari</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div variants={fadeUp} style={{ marginBottom: 18, minHeight: 34 }}>
              <span className="font-display" style={{ fontSize: '1.15rem', fontWeight: 600, color: isDark ? '#e2e8f0' : '#334155' }}>
                <span style={{ color: '#6366f1' }}>&lt;</span>
                <span className="typing-cursor">{typed}</span>
                <span style={{ color: '#6366f1' }}> /&gt;</span>
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p variants={fadeUp} style={{ fontSize: '0.925rem', lineHeight: 1.8, color: textSub, marginBottom: 28, maxWidth: 460 }}>
              {personalInfo.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 26 }}>
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 10px 32px rgba(99,102,241,0.5)' }} whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '11px 22px', borderRadius: 11,
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  color: '#fff', fontWeight: 600, fontSize: '0.875rem',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  boxShadow: '0 6px 22px rgba(99,102,241,0.38)',
                }}>
                View Projects <FiArrowRight size={14} />
              </motion.button>

              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/12XsI5d4VxFlyH2JPQ69FJNJOpaZo-xIQ/view?usp=sharing"
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '11px 22px', borderRadius: 11,
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.14)'}`,
                  color: textMain, fontWeight: 600, fontSize: '0.875rem',
                  textDecoration: 'none', fontFamily: 'inherit',
                  background: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                }}>
                <FiDownload size={14} /> Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: isDark ? '#475569' : '#94a3b8', letterSpacing: '0.04em' }}>FIND ME ON</span>
              <div style={{ height: 1, width: 28, background: isDark ? '#1e293b' : '#e2e8f0' }} />
              <div style={{ display: 'flex', gap: 8 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.92 }}
                    aria-label={label}
                    style={{
                      width: 36, height: 36, borderRadius: 9, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isDark ? '#94a3b8' : '#64748b', textDecoration: 'none',
                      background: isDark ? 'rgba(255,255,255,0.04)' : '#fff',
                      transition: 'all 0.18s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'; e.currentTarget.style.color = '#818cf8'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = isDark ? '#94a3b8' : '#64748b'; e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.04)' : '#fff'; }}>
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ══════════ RIGHT ══════════ */}
          <motion.div initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* ── Profile card (top) ── */}
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                padding: '22px 24px', borderRadius: 20,
                background: cardBg, border: `1px solid ${cardBorder}`,
                boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.4)' : '0 20px 60px rgba(0,0,0,0.08)',
                display: 'flex', alignItems: 'center', gap: 18,
              }}>
              {/* Avatar */}
              <div style={{
                width: 68, height: 68, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(145deg,#6366f1,#a855f7,#ec4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 0 3px rgba(99,102,241,0.25), 0 8px 24px rgba(99,102,241,0.35)',
              }}>
                <span className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>W</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="font-display" style={{ fontWeight: 700, fontSize: '1rem', color: textMain, marginBottom: 2 }}>Md Wasim Ansari</p>
                <p style={{ fontSize: '0.8rem', color: '#818cf8', marginBottom: 8 }}>Junior Developer · Executehub Technologies</p>
                {/* Status pill */}
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '3px 10px', borderRadius: 99, fontSize: 11, fontWeight: 600,
                  background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
                  Currently Working
                </span>
              </div>
              {/* Exp badge */}
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <p className="gradient-text font-display" style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>6+</p>
                <p style={{ fontSize: 10, color: textSub, marginTop: 2 }}>months</p>
              </div>
            </motion.div>

            {/* ── Tech stack cards (row) ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
              {stackCards.map(({ icon: Icon, label, items, color, glow }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  whileHover={{ y: -4, boxShadow: `0 16px 40px ${glow}` }}
                  style={{
                    padding: '16px 14px', borderRadius: 16,
                    background: cardBg, border: `1px solid ${cardBorder}`,
                    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.25)' : '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.22s ease',
                  }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, marginBottom: 10,
                    background: `${color}18`, border: `1px solid ${color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color={color} />
                  </div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, color: textMain, marginBottom: 6 }}>{label}</p>
                  {items.map(it => (
                    <p key={it} style={{ fontSize: 11, color: textSub, lineHeight: 1.5 }}>· {it}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* ── Code snippet ── */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.55 }}
              style={{
                borderRadius: 16, overflow: 'hidden',
                border: `1px solid ${cardBorder}`,
                boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.35)' : '0 8px 32px rgba(0,0,0,0.06)',
              }}>
              {/* Terminal header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', background: isDark ? '#0d1117' : '#1e293b' }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ marginLeft: 8, fontSize: 11, color: '#64748b' }}>wasim.js</span>
              </div>
              {/* Code body */}
              <div style={{ background: isDark ? '#0a0c14' : '#0f172a', padding: '14px 18px' }}>
                <pre style={{ fontFamily: "'Fira Code','Courier New',monospace", fontSize: 11.5, color: '#94a3b8', lineHeight: 1.75, margin: 0 }}>
                  {CODE.split('\n').map((line, i) => {
                    const key = line.includes('role')   ? '#818cf8'
                              : line.includes('stack')  ? '#34d399'
                              : line.includes('status') ? '#fbbf24'
                              : line.includes('passion')? '#f472b6'
                              : '#94a3b8';
                    return (
                      <div key={i}>
                        {line.includes(':') && !line.startsWith('const') ? (
                          <>
                            <span style={{ color: '#64748b' }}>{line.split(':')[0]}:</span>
                            <span style={{ color: key }}>{line.split(':').slice(1).join(':')}</span>
                          </>
                        ) : (
                          <span style={{ color: line.startsWith('const') ? '#818cf8' : '#94a3b8' }}>{line}</span>
                        )}
                      </div>
                    );
                  })}
                </pre>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          style={{ textAlign: 'center', marginTop: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: isDark ? '#334155' : '#94a3b8',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Scroll down</p>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
              width: 22, height: 36, borderRadius: 99,
              border: `2px solid ${isDark ? '#1e293b' : '#e2e8f0'}`, justifyContent: 'flex-start', paddingTop: 6 }}>
            <div style={{ width: 4, height: 7, borderRadius: 99, background: '#6366f1' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
