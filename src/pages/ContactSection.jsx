import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuMail, LuPhone, LuMapPin, LuSend, LuCheck, 
  LuCopy, LuClock, LuCircleCheck, LuCircleAlert 
} from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import SpotlightCard from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export const ContactSection = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please provide your name';
    if (!form.email.trim()) errs.email = 'Please provide your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please provide a valid email';
    if (!form.message.trim()) errs.message = 'Please write a brief message';
    else if (form.message.trim().length < 15) errs.message = 'Message must be at least 15 characters';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        badge="Initiate Contact"
        title="Let's Discuss Your"
        highlight="Project"
        subtitle="Available for full-time software developer roles, high-impact contract engineering, and enterprise system consulting."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 36,
          maxWidth: 1140,
          margin: '0 auto',
        }}
      >
        {/* Left Column: Direct Info & Channels */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        >
          {/* Email Card with 1-click copy */}
          <SpotlightCard
            style={{
              padding: 22,
              backgroundColor: isDark ? '#0f172a' : '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
              borderRadius: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: '#818cf8',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  <LuMail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8' }}>
                    Email Communication
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: isDark ? '#ffffff' : '#0f172a',
                      textDecoration: 'none',
                      marginTop: 2,
                      display: 'block',
                    }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                style={{
                  padding: 8,
                  borderRadius: 8,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  color: copiedEmail ? '#10b981' : (isDark ? '#94a3b8' : '#64748b'),
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Copy Email"
              >
                {copiedEmail ? <LuCheck size={16} /> : <LuCopy size={16} />}
              </button>
            </div>
          </SpotlightCard>

          {/* Phone / WhatsApp Card */}
          <SpotlightCard
            style={{
              padding: 22,
              backgroundColor: isDark ? '#0f172a' : '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
              borderRadius: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  <LuPhone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8' }}>
                    Direct Phone &amp; WhatsApp
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: isDark ? '#ffffff' : '#0f172a',
                      textDecoration: 'none',
                      marginTop: 2,
                      display: 'block',
                    }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                style={{
                  padding: 8,
                  borderRadius: 8,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  color: copiedPhone ? '#10b981' : (isDark ? '#94a3b8' : '#64748b'),
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Copy Phone"
              >
                {copiedPhone ? <LuCheck size={16} /> : <LuCopy size={16} />}
              </button>
            </div>
          </SpotlightCard>

          {/* Location & Availability Card */}
          <SpotlightCard
            style={{
              padding: 22,
              backgroundColor: isDark ? '#0f172a' : '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
              borderRadius: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  flexShrink: 0,
                }}
              >
                <LuMapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8' }}>
                  Location &amp; Work Model
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#ffffff' : '#0f172a', marginTop: 2 }}>
                  {personalInfo.location} · {personalInfo.availability}
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Social Links Bar */}
          <div style={{ display: 'flex', gap: 12 }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                borderRadius: 12,
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                color: isDark ? '#ffffff' : '#0f172a',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <SiGithub size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 16px',
                borderRadius: 12,
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                color: '#38bdf8',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <FiLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            style={{
              padding: 32,
              backgroundColor: isDark ? '#0f172a' : '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
              borderRadius: 18,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: isDark ? '#ffffff' : '#0f172a',
                  margin: 0,
                }}
              >
                Send a Message
              </h3>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 11,
                  fontFamily: 'ui-monospace, monospace',
                  color: '#34d399',
                }}
              >
                <LuClock size={12} />
                Usually replies in &lt; 24h
              </span>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569', marginBottom: 6 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 10,
                      fontSize: 13.5,
                      fontFamily: 'inherit',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                      border: errors.name ? '1px solid #ef4444' : (isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #cbd5e1'),
                      color: isDark ? '#ffffff' : '#0f172a',
                      outline: 'none',
                    }}
                  />
                  {errors.name && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: '#ef4444' }}>
                      <LuCircleAlert size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569', marginBottom: 6 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 10,
                      fontSize: 13.5,
                      fontFamily: 'inherit',
                      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                      border: errors.email ? '1px solid #ef4444' : (isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #cbd5e1'),
                      color: isDark ? '#ffffff' : '#0f172a',
                      outline: 'none',
                    }}
                  />
                  {errors.email && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: '#ef4444' }}>
                      <LuCircleAlert size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569', marginBottom: 6 }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Full-time opportunity / Project discussion"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontFamily: 'inherit',
                    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #cbd5e1',
                    color: isDark ? '#ffffff' : '#0f172a',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569', marginBottom: 6 }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your role requirements or engineering goals..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontFamily: 'inherit',
                    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f8fafc',
                    border: errors.message ? '1px solid #ef4444' : (isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #cbd5e1'),
                    color: isDark ? '#ffffff' : '#0f172a',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
                {errors.message && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: '#ef4444' }}>
                    <LuCircleAlert size={12} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)',
                  transition: 'background-color 0.15s ease',
                  opacity: status === 'sending' ? 0.75 : 1,
                }}
              >
                {status === 'sending' ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <LuSend size={15} />
                  </>
                )}
              </button>

              {/* Success Notification */}
              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '12px 16px',
                      borderRadius: 10,
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontSize: 13,
                    }}
                  >
                    <LuCircleCheck size={16} />
                    <span>Thank you! Your message has been sent. Wasim will reply shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
