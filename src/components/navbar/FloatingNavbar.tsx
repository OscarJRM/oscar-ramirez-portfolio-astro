import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  FolderOpen, 
  Briefcase, 
  Mail
} from 'lucide-react';

interface FloatingNavbarProps {
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
}

const FloatingNavbar = ({ activeSection, onSectionChange }: FloatingNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show navbar if not scrolled down or if hovered
  const shouldShowNavbar = !isScrolled || isHovered;

  const menuItems = [
    { name: 'Home', href: '#inicio', icon: Home, sectionId: 'hero' },
    { name: 'About', href: '#about', icon: User, sectionId: 'about' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, sectionId: 'projects' },
    { name: 'Experience', href: '#experience', icon: Briefcase, sectionId: 'experience' },
    { name: 'Contact', href: 'contact', icon: Mail, sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof menuItems[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (onSectionChange && item.sectionId) {
      onSectionChange(item.sectionId);
    }
  };

  return (
    <>
      {/* Collapsed indicator line */}
      {isScrolled && !shouldShowNavbar && (
        <div 
          className="rounded-full opacity-60 transition-all duration-150"
        />
      )}

      {/* Main navbar */}
      <nav
        className={`
          fixed left-1/2 transform -translate-x-1/2 z-50 
          flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ease-out
          bg-gray-950/90 backdrop-blur-xl border border-gray-800/80 shadow-2xl shadow-black/40
          ${shouldShowNavbar 
            ? 'top-4 opacity-100 translate-y-0 scale-100' 
            : 'top-0 opacity-0 -translate-y-full scale-90 pointer-events-none'
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                className={`
                  group relative flex items-center justify-center w-10 h-10 rounded-full 
                  transition-all duration-300 ease-out
                  hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20
                  hover:shadow-lg hover:shadow-purple-500/25
                  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                  before:from-purple-500 before:to-pink-500 before:opacity-0 before:transition-opacity 
                  before:duration-300 hover:before:opacity-20
                  transform hover:scale-110 active:scale-95
                  ${activeSection === item.sectionId 
                    ? 'text-white bg-purple-500/30 shadow-purple-500/50' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
                title={item.name}
              >
                <IconComponent size={18} className="relative z-10" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
