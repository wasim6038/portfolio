import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/portfolioData';

const ICONS = {
  'React.js':        { slug: 'react/react-original',           mono: false },
  'Next.js':          { slug: 'nextjs/nextjs-original',         mono: true },
  'Tailwind CSS':     { slug: 'tailwindcss/tailwindcss-original',  mono: false },
  'TypeScript':       { slug: 'typescript/typescript-original', mono: false },
  'HTML & CSS':       { slug: 'html5/html5-original',           mono: false },
  'JavaScript':       { slug: 'javascript/javascript-original', mono: false },
  'Node.js':          { slug: 'nodejs/nodejs-original',         mono: false },
  'Express.js':       { slug: 'express/express-original',       mono: true },
  'MongoDB':          { slug: 'mongodb/mongodb-original',       mono: false },
  'Mongoose':         { slug: 'mongodb/mongodb-original',       mono: false },
  'Git & GitHub':     { slug: 'git/git-original',                mono: false },
  'Postman':          { slug: 'postman/postman-original',       mono: false },
  'Socket.io':        { slug: 'socketio/socketio-original',     mono: true },
  'Vercel':           { slug: 'vercel/vercel-original',         mono: true },
  'Render':           { slug: 'render/render-original',         mono: true },
  'VsCode':           { slug: 'vscode/vscode-original',         mono: true },
  'Redux':            { slug: 'redux/redux-original',           mono: false },
  'Docker':           { slug: 'docker/docker-original',         mono: false },
  'Vite':             { slug: 'vite/vite-original',             mono: false },
  'Redis':            { slug: 'redis/redis-original',           mono: false },
  'NPM':              { slug: 'npm/npm-original-wordmark',      mono: false },
  'Nginx':            { slug: 'nginx/nginx-original',           mono: false },
  'jQuery':           { slug: 'jquery/jquery-original',         mono: false },
  'Firebase':         { slug: 'firebase/firebase-plain',        mono: false },
  'eslint':           { slug: 'eslint/eslint-original',         mono: false },
  'Bootstrap':        { slug: 'bootstrap/bootstrap-original',     mono: false },
};

const FALLBACK_EMOJI = {
  'REST API': '🔗', 'Authentication': '🔐', 'Database Design': '🗃️',
  'API Integration': '🔌', 'ChatGPT & AI Tools': '🤖', 'Data Structures': '🧩',
  'EJS': '📄', 'REST APIs': '🔗', 'Gemini API': '🤖', 'JWT': '🪪',
};

const TechLogo = ({ name, size = 16 }) => {
  const info = ICONS[name];
  const box = size + 8;
  if (info) {
    return (
      <span style={{
        width: box, height: box, borderRadius: 7, display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0, background: info.mono ? '#fff' : 'transparent',
      }}>
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${info.slug}.svg`}
          alt="" width={size} height={size} loading="lazy"
          onError={(e) => { e.currentTarget.replaceWith(document.createTextNode(FALLBACK_EMOJI[name] || '▹')); }}
        />
      </span>
    );
  }
  return (
    <span style={{ width: box, height: box, fontSize: size - 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {FALLBACK_EMOJI[name] || '▹'}
    </span>
  );
};

const SkillBar = ({ name, level, isDark, delay }) => (
  <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} transition={{ delay, duration: 0.45 }}
    style={{ marginBottom: 14 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <TechLogo name={name} size={15} />
        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#374151' }}>{name}</span>
      </span>
      <span style={{ fontSize: 11, fontWeight: 700, color: '#818cf8' }}>{level}%</span>
    </div>
    <div style={{ height: 6, borderRadius: 99, background: isDark ? 'rgba(255,255,255,0.06)' : '#f3f4f6', overflow: 'hidden' }}>
      <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
        viewport={{ once: true }} transition={{ duration: 1.3, delay: delay + 0.2, ease: 'easeOut' }}
        style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#6366f1,#a855f7)' }} />
    </div>
  </motion.div>
);

const TiltCard = ({ children, isDark, delay = 0 }) => {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), { stiffness: 220, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${useTransform(px, v => `${v * 100}%`)} ${useTransform(py, v => `${v * 100}%`)}, rgba(129,140,248,0.16), transparent 70%)`;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => { px.set(0.5); py.set(0.5); };

  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? 'rgba(255,255,255,0.03)' : '#fff';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.5 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative',
          padding: 28, borderRadius: 20, border: `1px solid ${border}`, background: bg,
          boxShadow: isDark ? '0 20px 45px -20px rgba(0,0,0,0.55)' : '0 20px 45px -25px rgba(15,23,42,0.25)',
          willChange: 'transform',
        }}
      >
        <motion.div aria-hidden style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: glow, opacity: isDark ? 1 : 0.6,
        }} />
        <div style={{ position: 'relative', transform: 'translateZ(24px)' }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* Marquee strip of every tool, scrolling on a loop                  */
const EXTRA = ['VsCode', 'Redux', 'Docker', 'Vite', 'Redis', 'NPM', 'Nginx', 'jQuery', 'Firebase', 'eslint', 'Bootstrap',  'TypeScript', 'Postman', 'JWT', 'Socket.io', 'EJS', 'REST APIs', 'Gemini API', 'Vercel', 'Render','Mongoose'];

const MarqueeRow = ({ isDark }) => {
  const core = skills.flatMap(g => g.items.map(i => i.name));
  const unique = [...new Set([...core, ...EXTRA])];
  const loop = [...unique, ...unique];

  return (
    <div style={{
      marginTop: 48, overflow: 'hidden',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
    }}>
      <div className="skills-marquee-track" style={{ display: 'flex', gap: 14, width: 'max-content' }}>
        {loop.map((name, i) => (
          <div key={`${name}-${i}`} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 99,
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            background: isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb', whiteSpace: 'nowrap',
          }}>
            <TechLogo name={name} size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#374151' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="skills">
      <style>{`
        @keyframes skills-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .skills-marquee-track {
          animation: skills-marquee-scroll 32s linear infinite;
        }
        .skills-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-marquee-track { animation: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
        <SectionHeader badge="Technical Skills" title="My" highlight="Skills"
          subtitle="A snapshot of the tools and technologies I work with regularly." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}
             className="max-lg:grid-cols-1">
          {skills.map((group, gi) => (
            <TiltCard key={group.category} isDark={isDark} delay={gi * 0.08}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
                  background: `linear-gradient(135deg,${
                    group.color.includes('violet') ? '#6366f1,#8b5cf6'
                    : group.color.includes('blue') ? '#3b82f6,#06b6d4'
                    : group.color.includes('emerald') ? '#10b981,#14b8a6'
                    : '#f97316,#ef4444'})`,
                }}>
                  {group.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: isDark ? '#fff' : '#111827' }}>{group.category}</h3>
              </div>
              {group.items.map((sk, si) => (
                <SkillBar key={sk.name} name={sk.name} level={sk.level} isDark={isDark} delay={gi * 0.08 + si * 0.05} />
              ))}
            </TiltCard>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontSize: 12, color: isDark ? '#6b7280' : '#9ca3af', marginTop: 48, marginBottom: 16, textAlign: 'center' }}>
          Also familiar with
        </motion.p>
        <MarqueeRow isDark={isDark} />
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
