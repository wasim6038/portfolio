import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const card = isDark ? { bg:'rgba(255,255,255,0.03)', border:'rgba(255,255,255,0.07)' } : { bg:'#fff', border:'rgba(0,0,0,0.08)' };
  const textMain = isDark ? '#fff'     : '#111827';
  const textSub  = isDark ? '#9ca3af' : '#6b7280';

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'At least 20 characters';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]:'' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1600));
    setStatus('sent');
    setForm({ name:'', email:'', subject:'', message:'' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputStyle = field => ({
    width:'100%', padding:'12px 16px', borderRadius:12, fontSize:'0.875rem', outline:'none',
    fontFamily:'inherit', transition:'all 0.18s',
    background: errors[field] ? 'rgba(239,68,68,0.07)' : isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb',
    border: `1px solid ${errors[field] ? 'rgba(239,68,68,0.5)' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    color: textMain,
  });

  const contacts = [
    { icon: FiMail,    label:'Email',    value: personalInfo.email,  href:`mailto:${personalInfo.email}` },
    { icon: FiPhone,   label:'Phone',    value: personalInfo.phone,  href:`tel:${personalInfo.phone}`    },
    { icon: FiMapPin,  label:'Location', value: personalInfo.location, href:'#' },
  ];

  const socials = [
    { icon: FiGithub,   href: personalInfo.github,             label:'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin,           label:'LinkedIn' },
    { icon: FiMail,     href:`mailto:${personalInfo.email}`,   label:'Email'    },
  ];

  return (
    <SectionWrapper id="contact">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 20px' }}>
        <SectionHeader badge="Contact" title="Let's" highlight="Connect"
          subtitle="Have a project in mind? I'd love to hear from you." />

        <div style={{ display:'grid', gridTemplateColumns:'2fr 3fr', gap:28, alignItems:'start' }}
             className="max-lg:grid-cols-1">

          {/* Info card */}
          <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ padding:32, borderRadius:20, border:`1px solid ${card.border}`, background:card.bg }}>
            <h3 className="font-display" style={{ fontSize:'1.15rem', fontWeight:700, color:textMain, marginBottom:8 }}>
              Get In Touch
            </h3>
            <p style={{ fontSize:'0.875rem', color:textSub, lineHeight:1.7, marginBottom:28 }}>
              Whether you have a question, project idea, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:18, marginBottom:28 }}>
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none' }}>
                  <div style={{ width:42, height:42, borderRadius:12, flexShrink:0,
                    background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.22)',
                    display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Icon size={16} color="#818cf8" />
                  </div>
                  <div>
                    <p style={{ fontSize:11, color: isDark ? '#6b7280' : '#9ca3af', marginBottom:2 }}>{label}</p>
                    <p style={{ fontSize:'0.855rem', fontWeight:500, color:textMain }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ paddingTop:20, borderTop:`1px solid ${card.border}` }}>
              <p style={{ fontSize:12, color: isDark ? '#6b7280' : '#9ca3af', marginBottom:12 }}>Follow me</p>
              <div style={{ display:'flex', gap:10 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                    whileHover={{ scale:1.1, y:-2 }}
                    style={{ padding:10, borderRadius:10, display:'flex',
                      border:`1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                      color: isDark ? '#9ca3af' : '#6b7280', textDecoration:'none',
                      transition:'all 0.16s' }}>
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ padding:32, borderRadius:20, border:`1px solid ${card.border}`, background:card.bg }}>

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div key="success"
                  initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                    minHeight:300, textAlign:'center', gap:16 }}>
                  <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(16,185,129,0.1)',
                    border:'1px solid rgba(16,185,129,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <FiCheckCircle size={32} color="#34d399" />
                  </div>
                  <h3 className="font-display" style={{ fontSize:'1.3rem', fontWeight:700, color:textMain }}>Message Sent!</h3>
                  <p style={{ fontSize:'0.875rem', color:textSub }}>Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                    <div>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Your Name" style={inputStyle('name')} />
                      {errors.name && <p style={{ color:'#f87171', fontSize:11, marginTop:4 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="Your Email" style={inputStyle('email')} />
                      {errors.email && <p style={{ color:'#f87171', fontSize:11, marginTop:4 }}>{errors.email}</p>}
                    </div>
                  </div>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Subject (optional)" style={inputStyle('subject')} />
                  <div>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={5} placeholder="Your message..."
                      style={{ ...inputStyle('message'), resize:'none', display:'block' }} />
                    {errors.message && <p style={{ color:'#f87171', fontSize:11, marginTop:4 }}>{errors.message}</p>}
                  </div>
                  <motion.button type="submit" disabled={status==='sending'}
                    whileHover={{ scale:1.02, boxShadow:'0 8px 28px rgba(99,102,241,0.42)' }}
                    whileTap={{ scale:0.98 }}
                    style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                      padding:'13px 24px', borderRadius:12, border:'none', cursor:'pointer',
                      background:'#6366f1', color:'#fff', fontWeight:600, fontSize:'0.9rem',
                      fontFamily:'inherit', transition:'all 0.18s',
                      opacity: status==='sending' ? 0.7 : 1 }}>
                    {status === 'sending' ? (
                      <>
                        <span style={{ width:16, height:16, border:'2px solid rgba(255,255,255,0.3)',
                          borderTopColor:'#fff', borderRadius:'50%', animation:'spin 0.7s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <><FiSend size={15} /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
