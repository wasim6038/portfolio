import { motion } from 'framer-motion';
import { 
  LuCpu, LuLayers, LuDatabase, LuTerminal, LuShieldCheck, 
  LuNetwork, LuLayoutDashboard, LuCode, LuCloud, LuZap
} from 'react-icons/lu';
import {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiLaravel, SiNodedotjs, SiExpress, SiSocketdotio,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiCloudinary
} from 'react-icons/si';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { skillCategories } from '../data/portfolioData';

const ICON_MAP = {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiLaravel, SiNodedotjs, SiExpress, SiSocketdotio,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiCloudinary,
  LuLayoutDashboard, LuNetwork, LuShieldCheck, LuCode, LuCloud, LuCpu, LuLayers, LuDatabase, LuTerminal, LuZap
};

export const SkillsSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        badge="Technical Arsenal"
        title="Skills &amp; Engineering"
        highlight="Competencies"
        subtitle="Full-stack technologies and production tools tested across high-concurrency client applications."
      />

      {/* Category Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
          >
            <SpotlightCard
              style={{
                padding: 24,
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
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: 12,
                    borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isDark ? '#ffffff' : '#0f172a',
                        margin: 0,
                      }}
                    >
                      {cat.category}
                    </h3>
                    <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 2, margin: 0 }}>
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Pills / Tiles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {cat.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || LuCode;

                    return (
                      <div
                        key={skill.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: 10,
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                          border: isDark ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid #e2e8f0',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 6,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                              color: '#818cf8',
                            }}
                          >
                            <IconComponent size={15} />
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: isDark ? '#f1f5f9' : '#1e293b',
                                display: 'block',
                                lineHeight: 1.2,
                              }}
                            >
                              {skill.name}
                            </span>
                            <span
                              style={{
                                fontSize: 10.5,
                                fontFamily: 'ui-monospace, monospace',
                                color: '#94a3b8',
                                display: 'block',
                              }}
                            >
                              {skill.specialty}
                            </span>
                          </div>
                        </div>

                        {/* Level Badge */}
                        <span
                          style={{
                            fontSize: 10,
                            fontFamily: 'ui-monospace, monospace',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: 6,
                            backgroundColor: skill.level === 'Advanced' || skill.level === 'Core Specialty'
                              ? 'rgba(99, 102, 241, 0.12)'
                              : 'rgba(255, 255, 255, 0.05)',
                            color: skill.level === 'Advanced' || skill.level === 'Core Specialty'
                              ? '#818cf8'
                              : '#94a3b8',
                            border: skill.level === 'Advanced' || skill.level === 'Core Specialty'
                              ? '1px solid rgba(99, 102, 241, 0.25)'
                              : '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Production Architecture Banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: 40,
          maxWidth: 1200,
          margin: '40px auto 0 auto',
          padding: '24px 28px',
          borderRadius: 16,
          backgroundColor: isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.04)',
          border: isDark ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(99, 102, 241, 0.15)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
              flexShrink: 0,
            }}
          >
            <LuZap size={22} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a' }}>
              Full-Stack System Architecture &amp; Database Design
            </div>
            <div style={{ fontSize: 12.5, color: isDark ? '#94a3b8' : '#64748b', marginTop: 2 }}>
              Hands-on mastery of relational indexing (MySQL), document pipelines (MongoDB), caching (Redis), and 4-role RBAC authorization.
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '10px 20px',
            borderRadius: 10,
            fontSize: 12.5,
            fontWeight: 600,
            fontFamily: 'inherit',
            backgroundColor: '#6366f1',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          Discuss Technical Requirements
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
