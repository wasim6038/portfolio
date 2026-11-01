import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuExternalLink, LuLayers, LuChevronDown, LuChevronUp, 
  LuCircleCheck 
} from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolioData';

const CATEGORIES = [
  { id: 'All', label: 'All Projects' },
  { id: 'Full Stack', label: 'Full Stack & MERN' },
  { id: 'Enterprise Systems', label: 'Enterprise & ERP' },
  { id: 'AI & Full Stack', label: 'AI & Analytics' },
];

export const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedArchitecture, setExpandedArchitecture] = useState({});

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  const toggleArchitecture = (id) => {
    setExpandedArchitecture((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        badge="Engineered Systems"
        title="Featured Production"
        highlight="Projects"
        subtitle="Full-stack web applications, multi-role CMS platforms, and scalable API services deployed to production."
      />

      {/* OriginKit Animated Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 48,
        }}
      >
        {CATEGORIES.map(({ id, label }) => {
          const isActive = selectedCategory === id;
          return (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              style={{
                position: 'relative',
                padding: '8px 18px',
                borderRadius: 99,
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                fontFamily: 'inherit',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: isActive ? '#6366f1' : (isDark ? 'rgba(15, 23, 42, 0.6)' : '#ffffff'),
                color: isActive ? '#ffffff' : (isDark ? '#94a3b8' : '#64748b'),
                boxShadow: isActive ? '0 4px 16px rgba(99, 102, 241, 0.35)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 28,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const isExpanded = !!expandedArchitecture[project.id];

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SpotlightCard
                  style={{
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    backgroundColor: isDark ? '#0f172a' : '#ffffff',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                    borderRadius: 18,
                  }}
                >
                  
                  {/* Top Header Row */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span
                          style={{
                            padding: '3px 10px',
                            borderRadius: 6,
                            fontSize: 11,
                            fontFamily: 'ui-monospace, monospace',
                            fontWeight: 600,
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            color: '#818cf8',
                            border: '1px solid rgba(99, 102, 241, 0.25)',
                          }}
                        >
                          {project.badge || project.category}
                        </span>
                        {project.featured && (
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: 4,
                              fontSize: 10,
                              fontFamily: 'ui-monospace, monospace',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              backgroundColor: 'rgba(245, 158, 11, 0.12)',
                              color: '#fbbf24',
                              border: '1px solid rgba(245, 158, 11, 0.25)',
                            }}
                          >
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {/* External Links */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              padding: 6,
                              borderRadius: 8,
                              color: isDark ? '#94a3b8' : '#64748b',
                              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'color 0.15s ease',
                            }}
                            title="View Source on GitHub"
                          >
                            <SiGithub size={15} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              padding: 6,
                              borderRadius: 8,
                              color: isDark ? '#94a3b8' : '#64748b',
                              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'color 0.15s ease',
                            }}
                            title="Open Live Deployment"
                          >
                            <LuExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        letterSpacing: '-0.015em',
                        color: isDark ? '#ffffff' : '#0f172a',
                        marginBottom: 10,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.65,
                        color: isDark ? '#94a3b8' : '#64748b',
                        marginBottom: 18,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Key Metrics / Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div
                        style={{
                          marginBottom: 18,
                          padding: '12px 14px',
                          borderRadius: 12,
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                          border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #e2e8f0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 8,
                        }}
                      >
                        {project.highlights.map((item, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <LuCircleCheck size={14} color="#10b981" style={{ flexShrink: 0, marginTop: 2.5 }} />
                            <span style={{ fontSize: 12, lineHeight: 1.5, color: isDark ? '#cbd5e1' : '#334155' }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Architecture Accordion & Footer Tech Stack */}
                  <div>
                    {/* Architecture Drawer Trigger */}
                    {project.architecture && (
                      <div style={{ marginBottom: 14 }}>
                        <button
                          onClick={() => toggleArchitecture(project.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '8px 12px',
                            borderRadius: 8,
                            fontSize: 11.5,
                            fontFamily: 'ui-monospace, monospace',
                            backgroundColor: isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.05)',
                            color: '#818cf8',
                            border: isDark ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(99, 102, 241, 0.15)',
                            cursor: 'pointer',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
                            <LuLayers size={13} />
                            Engineering Architecture
                          </span>
                          {isExpanded ? <LuChevronUp size={14} /> : <LuChevronDown size={14} />}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div
                                style={{
                                  marginTop: 8,
                                  padding: 12,
                                  borderRadius: 8,
                                  fontSize: 11,
                                  fontFamily: 'ui-monospace, monospace',
                                  backgroundColor: isDark ? '#080c14' : '#f1f5f9',
                                  color: isDark ? '#94a3b8' : '#475569',
                                  border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
                                  lineHeight: 1.6,
                                }}
                              >
                                {project.architecture}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        paddingTop: 14,
                        borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '3px 8px',
                            borderRadius: 6,
                            fontSize: 11,
                            fontFamily: 'ui-monospace, monospace',
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f1f5f9',
                            color: isDark ? '#cbd5e1' : '#475569',
                            border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
