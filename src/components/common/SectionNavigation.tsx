import { motion } from "framer-motion";
import { navigationItems } from "../../features/layout/presentation/components/DynamicContent";


interface SectionNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function SectionNavigation({ activeSection, onSectionChange }: SectionNavigationProps) {
  return (
    <div className="flex gap-4 mb-8 p-1 bg-gray-800/50 rounded-lg backdrop-blur-sm">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`
            relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md
            ${activeSection === item.id 
              ? 'text-white' 
              : 'text-gray-400 hover:text-white'
            }
          `}
        >
          {activeSection === item.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-purple-500/20 rounded-md border border-purple-500/30"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
