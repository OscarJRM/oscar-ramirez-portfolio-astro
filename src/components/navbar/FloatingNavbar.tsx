import { useState, useEffect } from 'react';

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
    { name: 'Home', href: '#inicio', sectionId: 'hero' },
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Experience', href: '#experience', sectionId: 'experience' },
    { name: 'Contact', href: 'contact', sectionId: 'contact' },
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
        <div className="flex items-center gap-1">
          {menuItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                className={`
                  group relative flex items-center justify-center px-4 py-2 rounded-full 
                  transition-all duration-300 ease-out
                  text-sm font-medium
                  hover:bg-white/10
                  ${activeSection === item.sectionId 
                    ? 'text-white bg-white/15 shadow-lg shadow-white/5' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
                title={item.name}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default FloatingNavbar;
