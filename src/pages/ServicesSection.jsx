import { motion } from 'framer-motion';
import { 
  LuLayoutDashboard, LuShieldCheck, LuNetwork, 
  LuCreditCard, LuDatabase, LuZap, LuCircleCheck, LuArrowRight 
} from 'react-icons/lu';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/portfolioData';

const ICON_MAP = {
  LuLayoutDashboard,
  LuShieldCheck,
  LuNetwork,
  LuCreditCard,
  LuDatabase,
  LuZap,
};

export const ServicesSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="services">
      <SectionHeader
        badge="What I Deliver"
        title="Engineering Services &amp;"
        highlight="Solutions"
        subtitle="End-to-end technical capabilities tailored for businesses, high-growth startups, and client platforms."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {services.map((svc, i) => {
          const IconComponent = ICON_MAP[svc.icon] || LuLayoutDashboard;

          return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <SpotlightCard
                style={{
                  padding: 26,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: isDark ? '#0f172a' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  borderRadius: 18,
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        color: '#818cf8',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontFamily: 'ui-monospace, monospace',
                        padding: '3px 8px',
                        borderRadius: 6,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
                        color: '#94a3b8',
                        border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                      }}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: isDark ? '#ffffff' : '#0f172a',
                      marginBottom: 4,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      fontFamily: 'ui-monospace, monospace',
                      color: '#818cf8',
                      marginBottom: 12,
                    }}
                  >
                    {svc.category}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: isDark ? '#94a3b8' : '#64748b',
                      marginBottom: 16,
                    }}
                  >
                    {svc.description}
                  </p>

                  {/* Key Deliverables */}
                  <div
                    style={{
                      paddingTop: 12,
                      borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    <div style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8' }}>
                      Key Deliverables:
                    </div>
                    {svc.deliverables.map((del, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <LuCircleCheck size={13} color="#10b981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: isDark ? '#cbd5e1' : '#334155' }}>
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div style={{ paddingTop: 16, marginTop: 16, borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0' }}>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      fontFamily: 'ui-monospace, monospace',
                      fontWeight: 600,
                      color: '#818cf8',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span>Request this service</span>
                    <LuArrowRight size={13} />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
