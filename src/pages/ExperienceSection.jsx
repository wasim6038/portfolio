import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiStar } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { experience } from '../data/portfolioData';

const ExperienceSection = () => {
  const { isDark } = useTheme();
  const textMain  = isDark ? '#fff'     : '#0f172a';
  const textSub   = isDark ? '#94a3b8'  : '#64748b';
  const textMuted = isDark ? '#475569'  : '#94a3b8';

  return (
    <SectionWrapper id="experience" alternate>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader badge="Work Experience" title="My" highlight="Journey"
          subtitle="From intern to full-time — building real products at Executehub Technologies." />

        {/* Company banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            padding: '20px 24px', borderRadius: 16, marginBottom: 36,
            background: isDark ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.05)',
            border: '1px solid rgba(99,102,241,0.25)',
            display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FiStar size={22} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <p className="font-display" style={{ fontWeight: 700, fontSize: '1rem', color: textMain, marginBottom: 3 }}>
              Executehub Technologies
            </p>
            <p style={{ fontSize: '0.85rem', color: textSub }}>
              Started as an intern · Promoted to Junior Developer · Still growing 🚀
            </p>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600,
            background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399',
              boxShadow: '0 0 8px #34d399', animation: 'pulse 2s infinite' }} />
            Currently Working
          </span>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {experience.map((exp, i) => {
            const isLast   = i === experience.length - 1;
            const dotColor = exp.isCurrent
              ? 'linear-gradient(135deg,#10b981,#14b8a6)'
              : 'linear-gradient(135deg,#6366f1,#8b5cf6)';
            const cardBorder = exp.isCurrent
              ? 'rgba(16,185,129,0.28)'
              : isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)';
            const cardBg = isDark ? 'rgba(255,255,255,0.03)' : '#fff';

            return (
              <motion.div key={exp.id}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.55 }}
                className={!isLast ? 'timeline-line' : ''}
                style={{ position: 'relative', paddingLeft: 60, paddingBottom: isLast ? 0 : 36 }}>

                {/* Dot */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, width: 40, height: 40,
                  borderRadius: '50%', background: dotColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: exp.isCurrent ? '0 4px 16px rgba(16,185,129,0.45)' : '0 4px 16px rgba(99,102,241,0.4)',
                }}>
                  <FiBriefcase size={16} color="#fff" />
                </div>

                {/* Card */}
                <div style={{
                  padding: '24px 28px', borderRadius: 20,
                  border: `1px solid ${cardBorder}`,
                  background: cardBg,
                  boxShadow: exp.isCurrent
                    ? (isDark ? '0 4px 24px rgba(16,185,129,0.08)' : '0 4px 24px rgba(16,185,129,0.05)')
                    : 'none',
                }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: textMain }}>
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span style={{
                            padding: '2px 10px', borderRadius: 99, fontSize: 10, fontWeight: 700,
                            background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)', color: '#34d399',
                          }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#818cf8', marginTop: 4 }}>{exp.company}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '4px 12px', borderRadius: 99, fontSize: 11, fontWeight: 600,
                        background: exp.isCurrent ? 'rgba(16,185,129,0.1)' : 'rgba(99,102,241,0.1)',
                        border: `1px solid ${exp.isCurrent ? 'rgba(16,185,129,0.25)' : 'rgba(99,102,241,0.22)'}`,
                        color: exp.isCurrent ? '#34d399' : '#818cf8',
                      }}>
                        <FiCalendar size={11} /> {exp.duration}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: textMuted }}>
                        <FiMapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: textSub, marginBottom: 16 }}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {exp.responsibilities.map((r, ri) => (
                      <motion.li key={ri}
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.2 + ri * 0.07 }}
                        style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <FiCheckCircle size={14} color={exp.isCurrent ? '#34d399' : '#818cf8'}
                          style={{ flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: '0.855rem', lineHeight: 1.65, color: isDark ? '#e2e8f0' : '#334155' }}>{r}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Footer tag */}
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '3px 12px', borderRadius: 99,
                      background: exp.isCurrent ? 'rgba(16,185,129,0.1)' : 'rgba(99,102,241,0.08)',
                      border: `1px solid ${exp.isCurrent ? 'rgba(16,185,129,0.22)' : 'rgba(99,102,241,0.18)'}`,
                      color: exp.isCurrent ? '#34d399' : '#818cf8',
                    }}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
