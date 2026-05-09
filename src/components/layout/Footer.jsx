import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const { isDark } = useTheme();
  const bg     = isDark ? '#05060c' : '#f9fafb';
  const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const textSub   = isDark ? '#9ca3af' : '#6b7280';
  const textMuted = isDark ? '#6b7280' : '#9ca3af';
  const textMain  = isDark ? '#fff' : '#111827';

  const socials = [
    { icon: FiGithub,   href: personalInfo.github,             label:'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin,           label:'LinkedIn' },
    { icon: FiTwitter,  href: personalInfo.twitter,            label:'Twitter'  },
    { icon: FiMail,     href:`mailto:${personalInfo.email}`,   label:'Email'    },
  ];

  return (
    <footer style={{ background:bg, borderTop:`1px solid ${border}` }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'48px 20px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40, marginBottom:40 }}
             className="max-md:grid-cols-1">
          {/* Brand */}
          <div>
            <h3 className="font-display" style={{ fontSize:'1.4rem', fontWeight:800, marginBottom:10 }}>
              <span className="gradient-text">Wasim</span>
              <span style={{ color:textMain }}> Ansari</span>
            </h3>
            <p style={{ fontSize:'0.855rem', color:textSub, lineHeight:1.7, maxWidth:240 }}>
              Full Stack MERN Developer crafting modern web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display" style={{ fontWeight:700, color:textMain, marginBottom:16 }}>Quick Links</h4>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 12px' }}>
              {navLinks.map(({ label, href }) => (
                <a key={href} href={href}
                  style={{ fontSize:'0.855rem', color:textSub, textDecoration:'none', transition:'color 0.16s' }}
                  onMouseEnter={e => e.currentTarget.style.color='#818cf8'}
                  onMouseLeave={e => e.currentTarget.style.color=textSub}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display" style={{ fontWeight:700, color:textMain, marginBottom:16 }}>Get In Touch</h4>
            <p style={{ fontSize:'0.855rem', color:textSub, marginBottom:6 }}>{personalInfo.email}</p>
            <p style={{ fontSize:'0.855rem', color:textSub }}>{personalInfo.location}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop:24, borderTop:`1px solid ${border}`,
          display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:16 }}>
          <p style={{ fontSize:'0.8rem', color:textMuted }}>
            © {new Date().getFullYear()} Md Wasim Ansari. All rights reserved.
          </p>
          <div style={{ display:'flex', gap:8 }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                whileHover={{ scale:1.12, y:-2 }} whileTap={{ scale:0.93 }}
                aria-label={label}
                style={{ padding:8, borderRadius:8, display:'flex', alignItems:'center',
                  border:`1px solid ${border}`, color:textSub, textDecoration:'none', transition:'all 0.16s' }}
                onMouseEnter={e => { e.currentTarget.style.color='#818cf8'; e.currentTarget.style.borderColor='rgba(99,102,241,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.color=textSub; e.currentTarget.style.borderColor=border; }}>
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
