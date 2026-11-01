import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const SectionWrapper = ({ id, children, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <section
      id={id}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 0',
        backgroundColor: isDark ? '#090d16' : '#f8fafc',
        transition: 'background-color 0.3s ease',
      }}
      className={className}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 radial-mask opacity-60 originkit-grid"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ badge, title, highlight, subtitle, align = 'center' }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        textAlign: align,
        maxWidth: 720,
        margin: align === 'center' ? '0 auto 60px' : '0 0 60px',
      }}
    >
      {badge && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 14,
            padding: '6px 16px',
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 600,
            fontFamily: 'ui-monospace, SFMono-Regular, monospace',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            color: '#818cf8',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6366f1' }} />
          {badge}
        </div>
      )}
      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: 14,
          color: isDark ? '#ffffff' : '#0f172a',
        }}
      >
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: isDark ? '#94a3b8' : '#64748b',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionWrapper;
