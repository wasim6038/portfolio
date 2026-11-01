import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuMenu, LuX, LuSun, LuMoon, 
  LuTerminal, LuArrowUpRight 
} from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScroll';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navLinks.map((n) => n.href.replace('#', ''));
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? (isDark ? 'rgba(9, 13, 22, 0.88)' : 'rgba(255, 255, 255, 0.9)')
    : 'transparent';
  const navBorder = scrolled
    ? (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)')
    : 'transparent';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: navBg,
          borderBottom: `1px solid ${navBorder}`,
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 8px 30px rgba(0, 0, 0, 0.25)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>
            
            {/* Logo */}
            <button
              onClick={() => navigateTo('#hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  color: '#818cf8',
                }}
              >
                <LuTerminal size={18} />
              </div>
              <div>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    display: 'block',
                    lineHeight: 1.1,
                    color: isDark ? '#ffffff' : '#0f172a',
                  }}
                >
                  Wasim <span style={{ color: '#818cf8' }}>Ansari</span>
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                    color: '#94a3b8',
                    display: 'block',
                    marginTop: 2,
                  }}
                >
                  Full Stack Engineer
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav
              className="desktop-nav"
              style={{
                alignItems: 'center',
                gap: 4,
                padding: '5px 8px',
                borderRadius: 99,
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.75)' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeId === id;

                return (
                  <button
                    key={href}
                    onClick={() => navigateTo(href)}
                    style={{
                      padding: '7px 15px',
                      borderRadius: 99,
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 500,
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? '#6366f1' : 'transparent',
                      color: isActive ? '#ffffff' : (isDark ? '#cbd5e1' : '#475569'),
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                      boxShadow: isActive ? '0 2px 10px rgba(99, 102, 241, 0.4)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569';
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons (Theme Toggle + GitHub + Contact CTA) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  color: isDark ? '#cbd5e1' : '#334155',
                  cursor: 'pointer',
                }}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle theme"
              >
                {isDark ? <LuSun size={16} color="#fbbf24" /> : <LuMoon size={16} />}
              </button>

              {/* GitHub Shortcut */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  color: isDark ? '#cbd5e1' : '#334155',
                  textDecoration: 'none',
                }}
                title="GitHub Repository"
                aria-label="GitHub Profile"
              >
                <SiGithub size={16} />
              </a>

              {/* Get in Touch CTA */}
              <button
                onClick={() => navigateTo('#contact')}
                className="btn-shine"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
                }}
              >
                <span>Hire Wasim</span>
                <LuArrowUpRight size={14} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="mobile-toggle"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  color: isDark ? '#ffffff' : '#0f172a',
                  cursor: 'pointer',
                }}
                aria-label="Open navigation menu"
              >
                {menuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 74,
              left: 0,
              right: 0,
              zIndex: 40,
              padding: 20,
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.98)' : '#ffffff',
              borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => navigateTo(href)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 10,
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: isDark ? '#e2e8f0' : '#1e293b',
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}

              <div style={{ paddingTop: 12, marginTop: 6, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => navigateTo('#contact')}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Contact Wasim
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
