import FloatingNavbar from "../../../../components/navbar/FloatingNavbar";
import { useCallback, useEffect, useState } from "react";
import DynamicContent from "../../../../features/layout/presentation/components/DynamicContent";
import { Providers } from "../../../../components/providers/ToastProvider";

interface AppLayoutProps {
  initialSection?: string;
}

export default function AppLayout({ initialSection = "hero" }: AppLayoutProps) {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    
    if (typeof window !== 'undefined') {
      const newUrl = sectionId === 'hero' ? '/' : `/${sectionId}`;
      window.history.pushState({}, '', newUrl);
    }
  }, []);

  return (
    <Providers>
        <div id="container" className="bg-black min-h-screen">
          <FloatingNavbar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
        />
        <div className="max-w-6xl mx-auto px-4">
          <div className="pt-24 pb-12">
            <DynamicContent activeSection={activeSection} onNavigate={handleSectionChange} />
          </div>
        </div>
      </div>
    </Providers>
  );
}
