import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuArrowRight, LuCopy, LuCheck, LuTerminal, 
  LuServer, LuLayers, LuBriefcase
} from 'react-icons/lu';
import { SiGithub, SiReact, SiLaravel, SiPhp, SiNodedotjs, SiMysql, SiMongodb } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, stats } from '../data/portfolioData';

export const HeroSection = () => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'deployments' | 'api'
  const [selectedApiIndex, setSelectedApiIndex] = useState(0);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const apis = [
    {
      method: 'POST',
      endpoint: '/api/v1/rbac/authorize',
      desc: 'Verify 4-role permissions & issue signed JWT',
      response: {
        statusCode: 200,
        authenticated: true,
        user: { id: "usr_9981", role: "SUPER_ADMIN" },
        permissions: ["dashboard:read", "crud:manage", "erp:export", "crm:approve"],
        sessionExpiresIn: "24h"
      }
    },
    {
      method: 'POST',
      endpoint: '/api/v1/payments/razorpay/order',
      desc: 'Generate order token with server-side validation',
      response: {
        statusCode: 201,
        orderId: "order_Kz827Nx901L",
        currency: "INR",
        amount: 2499900,
        status: "created",
        webhookTarget: "/api/v1/webhooks/razorpay"
      }
    },
    {
      method: 'GET',
      endpoint: '/api/v1/franchise/metrics',
      desc: 'Query real-time franchise activity & service logs',
      response: {
        statusCode: 200,
        franchisesActive: 500,
        complaintResolutionRate: "98.4%",
        avgResponseLatencyMs: 42,
        cacheStatus: "HIT (Redis)"
      }
    }
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 110,
        paddingBottom: 80,
        overflow: 'hidden',
        backgroundColor: isDark ? '#090d16' : '#f8fafc',
      }}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 radial-mask opacity-60 originkit-grid"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* OriginKit Ambient Subtle Radial Glow */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 380,
          borderRadius: '50%',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          background: isDark
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.15) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(56, 189, 248, 0.08) 60%, transparent 100%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
          
          {/* ─── LEFT COLUMN: Brand, Role & Value Proposition ─── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, textAlign: 'left' }}>
            
            {/* Status Pill with OriginKit Ping Glow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 16px',
                borderRadius: 99,
                fontSize: 12,
                fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                fontWeight: 600,
                border: '1px solid rgba(99, 102, 241, 0.25)',
                backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                color: isDark ? '#a5b4fc' : '#4f46e5',
                width: 'fit-content',
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
                <span className="pulse-beacon" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.75 }}></span>
                <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }}></span>
              </span>
              <span style={{ color: isDark ? '#ffffff' : '#0f172a' }}>Software Developer</span>
              <span style={{ color: '#64748b' }}>•</span>
              <span>Uinfo Technology</span>
              <span style={{ color: '#64748b' }}>•</span>
              <span style={{ color: '#34d399' }}>Available for Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5.2vw, 3.8rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.14,
                  color: isDark ? '#ffffff' : '#0f172a',
                  marginBottom: 12,
                }}
              >
                Hi, I'm <span className="gradient-text font-extrabold">Wasim Ansari</span>
                <span
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                    fontWeight: 500,
                    display: 'block',
                    marginTop: 8,
                    color: isDark ? '#cbd5e1' : '#475569',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Full Stack &amp; Backend Developer
                </span>
              </h1>
            </motion.div>

            {/* Concise Value Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: isDark ? '#94a3b8' : '#64748b',
                maxWidth: 580,
                margin: 0,
              }}
            >
              Engineering production web applications, enterprise ERP/CRM business modules, and 
              high-throughput RESTful APIs. Hands-on experience delivering{' '}
              <strong style={{ color: isDark ? '#ffffff' : '#0f172a' }}>8+ client platforms</strong>,{' '}
              <strong style={{ color: isDark ? '#ffffff' : '#0f172a' }}>50+ APIs</strong>, and 
              multi-role RBAC dashboards with <span style={{ color: '#818cf8', fontWeight: 600 }}>Laravel, PHP, React.js, Node.js &amp; MySQL</span>.
            </motion.p>

            {/* Core Tech Stack Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}
            >
              {[
                { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
                { name: 'PHP', icon: SiPhp, color: '#777BB4' },
                { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
                { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
              ].map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                    fontWeight: 500,
                    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#ffffff',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                    color: isDark ? '#cbd5e1' : '#334155',
                    boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                >
                  <Icon size={14} style={{ color }} />
                  {name}
                </span>
              ))}
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', paddingTop: 8 }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shine"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.35)',
                }}
              >
                <span>View Production Work</span>
                <LuArrowRight size={16} />
              </button>

              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 22px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                  color: isDark ? '#f1f5f9' : '#0f172a',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <LuBriefcase size={16} color="#818cf8" />
                <span>Work Experience</span>
              </button>

              {/* Direct Quick-Copy Email Pill */}
              <button
                onClick={copyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 18px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                  fontWeight: 500,
                  backgroundColor: copied ? 'rgba(16, 185, 129, 0.12)' : (isDark ? 'rgba(15, 23, 42, 0.5)' : '#ffffff'),
                  border: `1px solid ${copied ? 'rgba(16, 185, 129, 0.35)' : (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)')}`,
                  color: copied ? '#34d399' : (isDark ? '#94a3b8' : '#475569'),
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                title="Click to copy email address"
              >
                {copied ? <LuCheck size={14} color="#34d399" /> : <LuCopy size={14} />}
                <span>{copied ? 'Email Copied!' : personalInfo.email}</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 4, fontSize: 13, color: '#94a3b8' }}
            >
              <span>Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  color: isDark ? '#cbd5e1' : '#334155',
                  textDecoration: 'none',
                }}
                aria-label="GitHub Profile"
              >
                <SiGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  color: isDark ? '#cbd5e1' : '#334155',
                  textDecoration: 'none',
                }}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={16} color="#0a66c2" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                  fontSize: 12,
                  color: isDark ? '#cbd5e1' : '#475569',
                  textDecoration: 'none',
                  marginLeft: 4,
                }}
              >
                {personalInfo.phone}
              </a>
            </motion.div>

          </div>

          {/* ─── RIGHT COLUMN: OriginKit Interactive Engineering Telemetry Console ─── */}
          <div style={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderRadius: 20,
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                boxShadow: isDark ? '0 20px 50px rgba(0, 0, 0, 0.5)' : '0 16px 40px rgba(15, 23, 42, 0.08)',
                overflow: 'hidden',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  padding: '12px 18px',
                  borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 11,
                      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                      color: '#94a3b8',
                      fontWeight: 500,
                    }}
                  >
                    system://wasim-ansari/core-telemetry
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 10,
                      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }}></span> LIVE
                  </span>
                </div>
              </div>

              {/* OriginKit Interactive Tabs Bar */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : '#f1f5f9',
                }}
              >
                {[
                  { id: 'architecture', label: 'Architecture', icon: LuLayers },
                  { id: 'deployments', label: 'Client Sites', icon: LuServer },
                  { id: 'api', label: 'API Simulator', icon: LuTerminal },
                ].map(({ id, label, icon: Icon }) => {
                  const isActive = activeTab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      style={{
                        flex: 1,
                        padding: '12px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        fontSize: 12,
                        fontWeight: isActive ? 600 : 500,
                        fontFamily: 'inherit',
                        border: 'none',
                        borderBottom: `2px solid ${isActive ? '#6366f1' : 'transparent'}`,
                        backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                        color: isActive ? '#818cf8' : (isDark ? '#94a3b8' : '#64748b'),
                        cursor: 'pointer',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div style={{ padding: 22, minHeight: 320 }}>
                <AnimatePresence mode="wait">
                  
                  {/* TAB 1: System Architecture */}
                  {activeTab === 'architecture' && (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: 12 }}
                    >
                      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>
                        Production Engineering Blueprint
                      </div>

                      <div
                        style={{
                          padding: 14,
                          borderRadius: 12,
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#818cf8', fontWeight: 600, marginBottom: 4 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SiReact size={14} /> Frontend &amp; Admin CMS</span>
                          <span style={{ fontSize: 10, color: '#94a3b8' }}>React 19 / Next.js / Redux</span>
                        </div>
                        <p style={{ fontSize: 11.5, lineHeight: 1.6, color: isDark ? '#cbd5e1' : '#475569', margin: 0 }}>
                          50+ responsive pages, lazy code splitting, dynamic CRUD tables, 4-role RBAC UI.
                        </p>
                      </div>

                      <div
                        style={{
                          padding: 14,
                          borderRadius: 12,
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38bdf8', fontWeight: 600, marginBottom: 4 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SiLaravel size={14} /> Backend &amp; APIs</span>
                          <span style={{ fontSize: 10, color: '#94a3b8' }}>Laravel / PHP / Node / Express</span>
                        </div>
                        <p style={{ fontSize: 11.5, lineHeight: 1.6, color: isDark ? '#cbd5e1' : '#475569', margin: 0 }}>
                          50+ RESTful APIs, strict DTO validation, JWT authentication, error handling pipelines.
                        </p>
                      </div>

                      <div
                        style={{
                          padding: 14,
                          borderRadius: 12,
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fbbf24', fontWeight: 600, marginBottom: 4 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SiMysql size={14} /> Data &amp; Integrations</span>
                          <span style={{ fontSize: 10, color: '#94a3b8' }}>MySQL / MongoDB / Redis</span>
                        </div>
                        <p style={{ fontSize: 11.5, lineHeight: 1.6, color: isDark ? '#cbd5e1' : '#475569', margin: 0 }}>
                          Razorpay payments, WhatsApp automation, Cloudinary media CDN, indexing optimization.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: Client Sites & Deployments */}
                  {activeTab === 'deployments' && (
                    <motion.div
                      key="deployments"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: 12 }}
                    >
                      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600, marginBottom: 2 }}>
                        Active Client Platforms Developed
                      </div>

                      {[
                        { name: "Dhanbad Cricket", type: "Sports Management & Live Portal", status: "Production Live", stack: "Laravel · React · MySQL" },
                        { name: "99Builders", type: "Real Estate & Construction ERP", status: "Production Live", stack: "PHP · Laravel · REST APIs" },
                        { name: "DVRS Electrical", type: "Industrial Supply Catalog & CMS", status: "Production Live", stack: "Laravel · MySQL" },
                        { name: "DevRaaga", type: "Media, Audio & Event System", status: "Production Live", stack: "React · Node · Express" },
                        { name: "OneSeva", type: "500+ Franchise Citizen Portal", status: "Production Platform", stack: "React · Node · RBAC Auth" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '10px 14px',
                            borderRadius: 10,
                            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : '#f8fafc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 600, color: isDark ? '#ffffff' : '#0f172a' }}>{item.name}</div>
                            <div style={{ fontSize: 10.5, color: '#94a3b8' }}>{item.type}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <span
                              style={{
                                fontSize: 10,
                                padding: '2px 8px',
                                borderRadius: 4,
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: '#34d399',
                                border: '1px solid rgba(16, 185, 129, 0.25)',
                              }}
                            >
                              {item.status}
                            </span>
                            <div style={{ fontSize: 9.5, color: '#64748b', marginTop: 3 }}>{item.stack}</div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* TAB 3: Interactive REST API Simulator */}
                  {activeTab === 'api' && (
                    <motion.div
                      key="api"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: 12 }}
                    >
                      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
                        {apis.map((api, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedApiIndex(idx)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: 6,
                              fontSize: 11,
                              whiteSpace: 'nowrap',
                              border: 'none',
                              backgroundColor: selectedApiIndex === idx ? '#6366f1' : (isDark ? 'rgba(15, 23, 42, 0.8)' : '#e2e8f0'),
                              color: selectedApiIndex === idx ? '#ffffff' : (isDark ? '#94a3b8' : '#475569'),
                              cursor: 'pointer',
                              fontWeight: selectedApiIndex === idx ? 600 : 500,
                            }}
                          >
                            {api.method} {api.endpoint.split('/').slice(-1)[0]}
                          </button>
                        ))}
                      </div>

                      <div
                        style={{
                          padding: 14,
                          borderRadius: 10,
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                          backgroundColor: isDark ? '#080c14' : '#0f172a',
                          color: '#f8fafc',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6, marginBottom: 8 }}>
                          <span style={{ color: '#818cf8', fontWeight: 700 }}>{apis[selectedApiIndex].method}</span>
                          <span style={{ color: '#cbd5e1' }}>{apis[selectedApiIndex].endpoint}</span>
                          <span style={{ color: '#34d399' }}>200 OK</span>
                        </div>
                        <div style={{ fontSize: 10.5, color: '#94a3b8', marginBottom: 8 }}>{apis[selectedApiIndex].desc}</div>
                        <pre style={{ fontSize: 11, lineHeight: 1.6, color: '#38bdf8', overflowX: 'auto', margin: 0 }}>
                          {JSON.stringify(apis[selectedApiIndex].response, null, 2)}
                        </pre>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Console Footer Status */}
              <div
                style={{
                  padding: '10px 18px',
                  borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 11,
                  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                  color: '#94a3b8',
                }}
              >
                <span>Stack: Laravel + MERN</span>
                <span style={{ color: '#34d399', fontWeight: 600 }}>Production Ready ✓</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ─── BOTTOM METRICS BAR ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            marginTop: 64,
            paddingTop: 40,
            borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}
        >
          {stats.map(({ value, label, detail }) => (
            <div
              key={label}
              style={{
                padding: '20px 24px',
                borderRadius: 16,
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              <div className="gradient-text font-display" style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#ffffff' : '#0f172a', marginTop: 8 }}>
                {label}
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>
                {detail}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
