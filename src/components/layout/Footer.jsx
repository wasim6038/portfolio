import { LuTerminal, LuArrowUp } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personalInfo } from '../../data/portfolioData';

export const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: isDark ? '#080c14' : '#f8fafc',
        borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
        color: isDark ? '#94a3b8' : '#64748b',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '56px 24px 32px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 40,
            paddingBottom: 40,
            borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(99, 102, 241, 0.12)',
                  color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                }}
              >
                <LuTerminal size={17} />
              </div>
              <span
                className="font-display"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: isDark ? '#ffffff' : '#0f172a',
                }}
              >
                {personalInfo.name}
              </span>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 360, margin: 0 }}>
              Full Stack Developer specializing in production web systems, ERP/CRM business modules, 
              and RESTful APIs across Laravel, PHP, React.js, and Node.js.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontFamily: 'ui-monospace, monospace', color: '#34d399' }}>
                Active at Uinfo Technology · Open for Opportunities
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              className="font-display"
              style={{
                fontSize: 11,
                fontFamily: 'ui-monospace, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
                color: isDark ? '#f1f5f9' : '#0f172a',
              }}
            >
              Navigation Index
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: isDark ? '#94a3b8' : '#64748b',
                    fontSize: 12.5,
                    fontFamily: 'ui-monospace, monospace',
                    cursor: 'pointer',
                    padding: '3px 0',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#818cf8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#94a3b8' : '#64748b')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Contact & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              className="font-display"
              style={{
                fontSize: 11,
                fontFamily: 'ui-monospace, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
                color: isDark ? '#f1f5f9' : '#0f172a',
              }}
            >
              Direct Contacts
            </div>
            <p style={{ margin: 0, fontSize: 12.5, fontFamily: 'ui-monospace, monospace', color: '#818cf8' }}>
              {personalInfo.email}
            </p>
            <p style={{ margin: 0, fontSize: 12.5, fontFamily: 'ui-monospace, monospace' }}>
              {personalInfo.phone}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: 8,
                  borderRadius: 8,
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                  color: isDark ? '#cbd5e1' : '#334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="GitHub"
              >
                <SiGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: 8,
                  borderRadius: 8,
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            paddingTop: 28,
            fontSize: 12,
            fontFamily: 'ui-monospace, monospace',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Tailwind &amp; Framer Motion.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              color: isDark ? '#94a3b8' : '#64748b',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'ui-monospace, monospace',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#818cf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#94a3b8' : '#64748b')}
          >
            <span>Back to top</span>
            <LuArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
