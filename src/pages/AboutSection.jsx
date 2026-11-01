import { 
  LuGraduationCap, LuShieldCheck, LuLayers, LuCircleCheck, LuTerminal 
} from 'react-icons/lu';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, education } from '../data/portfolioData';

export const AboutSection = () => {
  const { isDark } = useTheme();

  return (
    <SectionWrapper id="about">
      <SectionHeader
        badge="Engineer Profile"
        title="Engineering With"
        highlight="Precision"
        subtitle="Bridging business logic, secure backend architecture, and high-performance user interfaces."
      />

      {/* OriginKit Bento Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}
      >

        {/* ─── BENTO CARD 1: Core Bio & Professional Statement ─── */}
        <SpotlightCard style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '5px 12px',
                  borderRadius: 99,
                  fontSize: 12,
                  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                  fontWeight: 600,
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                }}
              >
                <LuTerminal size={13} />
                Full Stack Developer
              </span>
              <span style={{ fontSize: 12, fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#94a3b8' }}>
                {personalInfo.location}
              </span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: isDark ? '#ffffff' : '#0f172a',
              }}
            >
              Building Production-Ready Systems from Database to Interface
            </h3>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: isDark ? '#cbd5e1' : '#475569', margin: 0 }}>
              I am a Full Stack Developer with real-world production experience designing, building, and deploying 
              web applications, ERP/CRM platforms, and client business management systems. My primary focus lies in 
              combining scalable backend engineering in <strong style={{ color: '#818cf8' }}>Laravel, PHP, and Node.js</strong> with responsive, dynamic frontend 
              applications in <strong style={{ color: '#818cf8' }}>React.js and Next.js</strong>.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: isDark ? '#cbd5e1' : '#475569', margin: 0 }}>
              At <strong>Uinfo Technology</strong>, I engineer client platforms delivering 50+ responsive pages, 
              50+ RESTful APIs, and 6+ admin dashboards with 4-role RBAC, while integrating payment gateways like 
              Razorpay and WhatsApp notification workflows. Previously at <strong>ExecuteHub Technologies</strong>, 
              I built customer and franchise portals for over 500+ users and cut administrative overhead by 30% with reusable workflow engines.
            </p>
          </div>

          {/* Quick Specs Matrix */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 12,
              paddingTop: 24,
              marginTop: 24,
              borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            }}
          >
            {[
              { label: "Core Specialties", value: "ERP, CRM & APIs" },
              { label: "Architecture", value: "RBAC & RESTful" },
              { label: "Active Stacks", value: "Laravel + MERN" },
              { label: "Work Style", value: "On-Site & Agile" },
              { label: "Academic CGPA", value: "8.24 / 10" },
              { label: "Client Sites", value: "8+ Shipped" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                }}
              >
                <div style={{ fontSize: 10, fontFamily: 'ui-monospace, SFMono-Regular, monospace', textTransform: 'uppercase', color: '#94a3b8' }}>{label}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: isDark ? '#ffffff' : '#0f172a', marginTop: 2 }}>{value}</div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* ─── BENTO CARD 2: Business Domains & Enterprise Scope ─── */}
        <SpotlightCard style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 12px',
                borderRadius: 99,
                fontSize: 12,
                fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                fontWeight: 600,
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                color: '#38bdf8',
                border: '1px solid rgba(14, 165, 233, 0.25)',
                width: 'fit-content',
              }}
            >
              <LuLayers size={13} />
              Domains &amp; Real-World Solutions
            </span>

            <h3
              className="font-display"
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: isDark ? '#ffffff' : '#0f172a',
              }}
            >
              Business Domains Delivered
            </h3>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: isDark ? '#94a3b8' : '#64748b', margin: 0 }}>
              Proven ability to analyze business requirements, model relational database schemas, and deliver tailored software suites across diverse industries:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
              {[
                { domain: "Sports Portals", eg: "Dhanbad Cricket live website & media pages" },
                { domain: "Construction & Real Estate ERP", eg: "99Builders project management" },
                { domain: "Industrial Supply Catalog", eg: "DVRS Electrical responsive portal" },
                { domain: "Citizen & Franchise Services", eg: "OneSeva portal for 500+ franchise accounts" },
                { domain: "Custom Tailoring ERP", eg: "Collibet apparel manufacturing & measurements" },
                { domain: "Education & School CMS", eg: "Bright Future School 20+ responsive pages" },
              ].map(({ domain, eg }, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                  }}
                >
                  <LuCircleCheck size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#ffffff' : '#0f172a' }}>{domain}</div>
                    <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 1 }}>{eg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* ─── BENTO CARD 3: Education & Academic Credentials ─── */}
        <SpotlightCard style={{ padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LuGraduationCap size={22} color="#818cf8" />
              <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a' }}>
                Education &amp; Credentials
              </h3>
            </div>
            <span
              style={{
                fontSize: 12,
                fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                padding: '4px 12px',
                borderRadius: 99,
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                fontWeight: 600,
              }}
            >
              CGPA: 8.24
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {education.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: 16,
                  borderRadius: 14,
                  border: `1px solid ${idx === 0 ? 'rgba(99, 102, 241, 0.3)' : (isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,0.06)')}`,
                  backgroundColor: idx === 0 ? (isDark ? 'rgba(99, 102, 241, 0.08)' : '#f0fdf4') : (isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc'),
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                  <h4 style={{ fontSize: 14.5, fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a' }}>
                    {item.degree}
                  </h4>
                  <span style={{ fontSize: 12, fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontWeight: 600, color: '#818cf8' }}>
                    {item.grade}
                  </span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: isDark ? '#cbd5e1' : '#475569', marginTop: 4 }}>
                  {item.institution} · <span style={{ color: '#94a3b8' }}>{item.location}</span>
                </div>
                <div style={{ fontSize: 11.5, fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#94a3b8', marginTop: 3 }}>
                  {item.period} · {item.status}
                </div>
                {item.highlights && (
                  <p style={{ fontSize: 12, color: isDark ? '#94a3b8' : '#64748b', marginTop: 8, lineHeight: 1.6, margin: '8px 0 0' }}>
                    {item.highlights}
                  </p>
                )}
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* ─── BENTO CARD 4: Engineering Standards & Rigor ─── */}
        <SpotlightCard style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LuShieldCheck size={22} color="#34d399" />
              <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a' }}>
                Engineering Principles
              </h3>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: isDark ? '#94a3b8' : '#64748b', margin: 0 }}>
              Writing reliable software that survives production scale, high concurrency, and changing business requirements:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 6 }}>
              {[
                { title: "Strict Data Validation & DTOs", desc: "Never trusting client payload; sanitize and validate all REST parameters." },
                { title: "Role-Based Access Control", desc: "Granular capability checks across Super Admin, Manager, Franchise, and User roles." },
                { title: "Database Query Optimization", desc: "Compound indexing, efficient eager loading to prevent N+1 queries, Redis caching." },
                { title: "Defensive Error Handling", desc: "Structured try/catch blocks, localized fail-safes, and descriptive error logging." },
              ].map(({ title, desc }, i) => (
                <div key={i}>
                  <div style={{ fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, color: isDark ? '#e2e8f0' : '#0f172a' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6366f1' }} />
                    {title}
                  </div>
                  <p style={{ fontSize: 12, color: '#94a3b8', paddingLeft: 14, marginTop: 2, margin: '2px 0 0' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              paddingTop: 16,
              borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 12,
              fontFamily: 'ui-monospace, SFMono-Regular, monospace',
              color: '#94a3b8',
            }}
          >
            <span>Codebase Architecture</span>
            <span style={{ color: '#34d399', fontWeight: 600 }}>Production Standard ✓</span>
          </div>
        </SpotlightCard>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
