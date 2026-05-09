import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScroll';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const sectionIds = navLinks.map(n => n.href.replace('#', ''));
  const activeId   = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = href => {
    setMenuOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── tokens ── */
  const navBg     = scrolled ? (isDark ? 'rgba(7,8,15,0.88)' : 'rgba(255,255,255,0.88)') : 'transparent';
  const navBorder = scrolled ? (isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)')   : 'transparent';
  const navShadow = scrolled ? '0 8px 32px rgba(0,0,0,0.18)' : 'none';

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          background: navBg,
          borderBottom: `1px solid ${navBorder}`,
          boxShadow: navShadow,
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

            {/* ── Logo ── */}
            <button onClick={() => go('#hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span className="font-display" style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                <span className="gradient-text">W</span>
                <span style={{ color: isDark ? '#fff' : '#111827' }}>asim</span>
                <span style={{ color: '#6366f1' }}>.</span>
              </span>
            </button>

            {/* ── Desktop links ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hide-mobile">
              {navLinks.map(({ label, href }) => {
                const id     = href.replace('#', '');
                const active = activeId === id;
                return (
                  <button key={href} onClick={() => go(href)} style={{
                    position: 'relative', padding: '8px 14px', border: 'none', cursor: 'pointer',
                    background: 'transparent', borderRadius: 10,
                    fontSize: '0.875rem', fontWeight: 500, fontFamily: 'inherit',
                    color: active
                      ? '#818cf8'
                      : isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = isDark ? '#fff' : '#111827'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'; }}
                  >
                    {active && (
                      <motion.span layoutId="nav-pill"
                        style={{
                          position: 'absolute', inset: 0, borderRadius: 10,
                          background: 'rgba(99,102,241,0.1)',
                          border: '1px solid rgba(99,102,241,0.22)',
                        }}
                        transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                      />
                    )}
                    <span style={{ position: 'relative' }}>{label}</span>
                  </button>
                );
              })}
            </div>

            {/* ── Right controls ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Theme toggle */}
              <button onClick={toggleTheme} style={{
                width: 38, height: 38, borderRadius: 10, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: isDark ? '#9ca3af' : '#6b7280',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = isDark ? '#fff' : '#111'; e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280'; e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'; }}
              >
                {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
              </button>

              {/* Hire Me */}
              <motion.a href="mailto:anassaifi6038@gmail.com"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="hide-mobile"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 20px', borderRadius: 10,
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  color: '#fff', fontWeight: 600, fontSize: '0.85rem',
                  textDecoration: 'none', fontFamily: 'inherit',
                  boxShadow: '0 4px 18px rgba(99,102,241,0.38)',
                  border: 'none', cursor: 'pointer',
                }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#86efac', boxShadow: '0 0 6px #86efac' }} />
                Hire Me
              </motion.a>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(o => !o)}
                className="show-mobile"
                style={{
                  width: 38, height: 38, borderRadius: 10, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  display: 'none', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: isDark ? '#d1d5db' : '#374151',
                }}>
                {menuOpen ? <HiX size={19} /> : <HiMenuAlt3 size={19} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0, zIndex: 40,
              padding: '8px 12px 12px',
              background: isDark ? 'rgba(7,8,15,0.97)' : 'rgba(255,255,255,0.97)',
              borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              backdropFilter: 'blur(20px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
            }}>
            {navLinks.map(({ label, href }, i) => {
              const active = activeId === href.replace('#', '');
              return (
                <motion.button key={href} onClick={() => go(href)}
                  initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '11px 16px', borderRadius: 10, marginBottom: 2,
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    fontSize: '0.9rem', fontWeight: 500,
                    background: active ? 'rgba(99,102,241,0.1)' : 'transparent',
                    color: active ? '#818cf8' : isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                    transition: 'all 0.15s',
                  }}>
                  {label}
                </motion.button>
              );
            })}
            <div style={{ padding: '10px 12px 4px', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`, marginTop: 6 }}>
              <a href="mailto:anassaifi6038@gmail.com"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '11px', borderRadius: 10, textDecoration: 'none',
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  color: '#fff', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'inherit',
                }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#86efac' }} />
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
