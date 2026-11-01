import { motion } from 'framer-motion';
import { 
  LuCalendar, LuMapPin, LuCircleCheck, LuGlobe, LuBriefcase
} from 'react-icons/lu';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { experience } from '../data/portfolioData';

export const ExperienceSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        badge="Career History"
        title="Professional Work"
        highlight="Experience"
        subtitle="Track record of engineering production-grade web systems, ERP platforms, and APIs in full-time on-site teams."
      />

      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
        {experience.map((job, index) => {
          const isCurrent = job.isCurrent;

          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              <SpotlightCard
                style={{
                  padding: '32px 28px',
                  backgroundColor: isCurrent 
                    ? (isDark ? '#0f172a' : '#ffffff')
                    : (isDark ? '#0c1220' : '#ffffff'),
                  border: isCurrent
                    ? (isDark ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(99, 102, 241, 0.3)')
                    : (isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0'),
                  boxShadow: isCurrent 
                    ? '0 12px 36px -10px rgba(99, 102, 241, 0.18)'
                    : '0 4px 20px rgba(0,0,0,0.06)',
                  borderRadius: 18,
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 16,
                    paddingBottom: 22,
                    borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: isDark ? '#ffffff' : '#0f172a',
                          margin: 0,
                        }}
                      >
                        {job.role}
                      </h3>

                      {isCurrent ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            padding: '4px 12px',
                            borderRadius: 99,
                            fontSize: 11,
                            fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                            fontWeight: 600,
                            backgroundColor: 'rgba(16, 185, 129, 0.12)',
                            color: '#34d399',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                          }}
                        >
                          <span style={{ position: 'relative', display: 'flex', width: 6, height: 6 }}>
                            <span className="pulse-beacon" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.75 }} />
                            <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
                          </span>
                          Current Role · On-Site
                        </span>
                      ) : (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            padding: '4px 12px',
                            borderRadius: 99,
                            fontSize: 11,
                            fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                            fontWeight: 500,
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                            color: isDark ? '#94a3b8' : '#64748b',
                            border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
                          }}
                        >
                          {job.badge} · On-Site
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 500 }}>
                      <span style={{ color: '#818cf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <LuBriefcase size={14} />
                        {job.company}
                      </span>
                      <span style={{ color: '#64748b' }}>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: isDark ? '#94a3b8' : '#64748b' }}>
                        <LuCalendar size={13} />
                        {job.period}
                      </span>
                      <span style={{ color: '#64748b' }}>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: isDark ? '#94a3b8' : '#64748b' }}>
                        <LuMapPin size={13} />
                        {job.employmentType}
                      </span>
                    </div>
                  </div>

                  {/* Impact Summary Pill */}
                  <div
                    style={{
                      padding: '10px 16px',
                      borderRadius: 12,
                      border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#f8fafc',
                      textAlign: 'right',
                    }}
                  >
                    <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', fontFamily: 'ui-monospace, monospace' }}>
                      Scope &amp; Impact
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#818cf8', marginTop: 2, fontFamily: 'ui-monospace, monospace' }}>
                      {isCurrent ? '8+ Websites · 50+ APIs' : '3+ Platforms · 500+ Users'}
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <p
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: isDark ? '#cbd5e1' : '#475569',
                  }}
                >
                  {job.summary}
                </p>

                {/* Client Websites / Platforms Built */}
                {job.clientSites && job.clientSites.length > 0 && (
                  <div style={{ marginBottom: 22, padding: '14px 18px', borderRadius: 12, backgroundColor: isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.03)', border: isDark ? '1px solid rgba(99, 102, 241, 0.15)' : '1px solid rgba(99, 102, 241, 0.12)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#818cf8', fontWeight: 600, marginBottom: 10 }}>
                      <LuGlobe size={14} />
                      Production Client Platforms &amp; Portals:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {job.clientSites.map((site, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 12px',
                            borderRadius: 8,
                            fontSize: 12,
                            fontFamily: 'ui-monospace, monospace',
                            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.9)' : '#ffffff',
                            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #cbd5e1',
                            color: isDark ? '#f1f5f9' : '#0f172a',
                          }}
                        >
                          <span style={{ fontWeight: 600, color: '#818cf8' }}>{site.name}</span>
                          <span style={{ fontSize: 10, color: '#94a3b8' }}>({site.tag})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bulleted Technical Accomplishments */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', fontWeight: 600 }}>
                    Core Technical Accomplishments:
                  </div>
                  {job.highlights.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <LuCircleCheck size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 3 }} />
                      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#cbd5e1' : '#334155' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div
                  style={{
                    paddingTop: 18,
                    borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', color: '#94a3b8', marginRight: 4 }}>
                    Tech Stack:
                  </span>
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 11.5,
                        fontFamily: 'ui-monospace, monospace',
                        fontWeight: 500,
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f1f5f9',
                        color: isDark ? '#cbd5e1' : '#475569',
                        border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
