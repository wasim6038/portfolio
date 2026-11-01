import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor,
  borderColor,
  onClick,
  style = {},
  ...props
}) => {
  const { isDark } = useTheme();
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const activeSpotlightColor = spotlightColor || (isDark ? 'rgba(99, 102, 241, 0.16)' : 'rgba(99, 102, 241, 0.08)');
  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${useTransform(
    mouseX,
    (v) => `${v * 100}%`
  )} ${useTransform(mouseY, (v) => `${v * 100}%`)}, ${activeSpotlightColor}, transparent 80%)`;

  const defaultBorder = borderColor || (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)');
  const defaultBg = isDark ? '#0f172a' : '#ffffff';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        border: `1px solid ${isHovered ? 'rgba(99, 102, 241, 0.35)' : defaultBorder}`,
        backgroundColor: defaultBg,
        boxShadow: isHovered
          ? (isDark ? '0 16px 36px -10px rgba(0,0,0,0.6), 0 0 24px rgba(99,102,241,0.12)' : '0 16px 36px -10px rgba(15,23,42,0.12)')
          : (isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.04)'),
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        transform: isHovered ? 'translateY(-3px)' : 'none',
        ...style,
      }}
      className={className}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius: 20,
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.25s ease',
          zIndex: 0,
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
