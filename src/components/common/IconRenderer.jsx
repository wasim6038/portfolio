import * as SiIcons from 'react-icons/si';
import * as LuIcons from 'react-icons/lu';
import * as FiIcons from 'react-icons/fi';

export const IconRenderer = ({ name, size = 16, className = '', color }) => {
  if (!name) return null;

  let IconComponent = SiIcons[name] || LuIcons[name] || FiIcons[name];

  // Common fallbacks
  if (!IconComponent) {
    if (name.startsWith('Si')) IconComponent = SiIcons[name];
    else if (name.startsWith('Lu')) IconComponent = LuIcons[name];
    else if (name.startsWith('Fi')) IconComponent = FiIcons[name];
  }

  if (!IconComponent) {
    return <span style={{ width: size, height: size, display: 'inline-block' }}>•</span>;
  }

  return <IconComponent size={size} className={className} style={color ? { color } : undefined} />;
};

export default IconRenderer;
