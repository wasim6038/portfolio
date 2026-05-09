import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from '../components/common/SectionWrapper';
import { useTheme } from '../context/ThemeContext';
import { stats, education } from '../data/portfolioData';

const AboutSection = () => {
  const { isDark } = useTheme();
  const card = isDark
    ? { bg:'rgba(255,255,255,0.03)', border:'rgba(255,255,255,0.07)' }
    : { bg:'#ffffff', border:'rgba(0,0,0,0.08)' };
  const textMain = isDark ? '#fff' : '#111827';
  const textSub  = isDark ? '#9ca3af' : '#6b7280';
  const textMuted = isDark ? '#6b7280' : '#9ca3af';

  return (
    <SectionWrapper id="about" alternate>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 20px' }}>
        <SectionHeader badge="About Me" title="Who I" highlight="Am"
          subtitle="A passionate developer turning ideas into reality." />

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start' }}
             className="max-lg:grid-cols-1">

          {/* Left */}
          <motion.div initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}>

            <div style={{ padding:32, borderRadius:20, border:`1px solid ${card.border}`, background:card.bg, marginBottom:16 }}>
              <h3 className="font-display" style={{ fontSize:'1.3rem', fontWeight:700, color:textMain, marginBottom:16 }}>
                Full Stack MERN Developer
              </h3>
              {[
                "I'm a passionate Full Stack Developer specializing in the MERN stack. I love building fast, scalable, and beautiful web applications that solve real-world problems.",
                "During my 6-month internship at Executehub Technologies, I worked on production projects including Oneseva, Collibet, and a Learning Management System.",
                "Currently pursuing B.Tech in IT with a CGPA of 8.05, I believe in writing clean code and building user-focused applications.",
              ].map((t, i) => (
                <p key={i} style={{ fontSize:'0.9rem', lineHeight:1.75, color:textSub, marginBottom:i<2?12:0 }}>{t}</p>
              ))}

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:24 }}>
                {[
                  { l:'Name',     v:'Md Wasim Ansari'       },
                  { l:'Email',    v:'anassaifi6038@gmail.com'},
                  { l:'Location', v:'Ranchi, Jharkhand, India'},
                  { l:'Status',   v:'Open to Work ✅'        },
                ].map(({ l, v }) => (
                  <div key={l}>
                    <p style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', color:textMuted, marginBottom:3 }}>{l}</p>
                    <p style={{ fontSize:'0.85rem', fontWeight:500, color:textMain, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
              {stats.map(({ value, label }, i) => (
                <motion.div key={label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  style={{ padding:'16px 8px', borderRadius:14, textAlign:'center',
                    border:`1px solid ${card.border}`, background:card.bg }}>
                  <p className="gradient-text font-display" style={{ fontSize:'1.4rem', fontWeight:800 }}>{value}</p>
                  <p style={{ fontSize:10, color:textSub, marginTop:3, lineHeight:1.3 }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div initial={{ opacity:0, x:32 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}>

            <h3 className="font-display" style={{ fontSize:'1.15rem', fontWeight:700, color:textMain, marginBottom:20 }}>Education</h3>

            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {education.map((edu, i) => (
                <motion.div key={i} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.12 }}
                  className="card-hover"
                  style={{ padding:20, borderRadius:16, border:`1px solid ${card.border}`, background:card.bg, display:'flex', gap:16, alignItems:'flex-start' }}>
                  <div style={{ width:42, height:42, borderRadius:12, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem',
                    background:`linear-gradient(135deg, ${edu.color.includes('violet') ? '#6366f1,#8b5cf6' : edu.color.includes('blue') ? '#3b82f6,#06b6d4' : '#10b981,#14b8a6'})` }}>
                    🎓
                  </div>
                  <div>
                    <p className="font-display" style={{ fontWeight:700, color:textMain, fontSize:'0.95rem' }}>{edu.degree}</p>
                    <p style={{ fontSize:'0.85rem', color:'#818cf8', marginTop:2 }}>{edu.institution}</p>
                    <p style={{ fontSize:12, color:textMuted, marginTop:3 }}>{edu.location} · {edu.year}</p>
                    <span style={{ display:'inline-block', marginTop:8, padding:'3px 12px', borderRadius:99, fontSize:11, fontWeight:600,
                      background: edu.color.includes('violet') ? 'rgba(99,102,241,0.15)' : edu.color.includes('blue') ? 'rgba(59,130,246,0.15)' : 'rgba(16,185,129,0.15)',
                      color: edu.color.includes('violet') ? '#818cf8' : edu.color.includes('blue') ? '#60a5fa' : '#34d399' }}>
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement */}
            <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:0.45 }}
              style={{ marginTop:16, padding:20, borderRadius:16,
                background: isDark ? 'rgba(245,158,11,0.08)' : 'rgba(245,158,11,0.06)',
                border:'1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                <span style={{ fontSize:'1.4rem' }}>🏆</span>
                <p className="font-display" style={{ fontWeight:700, color:textMain }}>OpenHack Coding Competition</p>
              </div>
              <p style={{ fontSize:'0.875rem', color:textSub }}>Participated with a team and secured a top 10 rank in a competitive programming challenge.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
