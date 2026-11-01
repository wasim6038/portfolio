import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SkillsSection from './pages/SkillsSection';
import ExperienceSection from './pages/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection';
import ServicesSection from './pages/ServicesSection';
import ContactSection from './pages/ContactSection';

const AppContent = () => {
  const { isDark } = useTheme();
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}
         className={`min-h-screen ${isDark ? 'bg-[#0b0f17] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
