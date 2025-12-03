import { useState, useMemo } from "react";
import Hero_Feature from "../../../hero/presentation/views";
import ContactView from "../../../contact/presentation/views";
import AboutMe from "../../../../components/about";
import Experience_Feature from "../../../experience/presentation/views";
import ExperienceDetailFeature from "../../../experience/presentation/views/detail";
import type { Experience } from "../../../experience/types/experience.interface";
import ProjectsPage from "../../../../components/projects/page";
import type { DetailedProject } from "../../../projects/types/project-detail.interface";

export interface NavItem {
  id: string;
  label: string;
  component: React.ComponentType;
}

interface DynamicContentProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
}

export default function DynamicContent({ activeSection, onNavigate }: DynamicContentProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [pendingProjectId, setPendingProjectId] = useState<string | null>(null);

  const handleExperienceSelect = (experience: Experience) => {
    console.log('🎯 Experience selected:', experience.position);
    setSelectedExperience(experience);
  };

  const handleBackToExperiences = () => {
    console.log('🔙 Back to experiences');
    setSelectedExperience(null);
  };

  // Memoizar los componentes para evitar recreaciones
  const Contact = () => <ContactView />;
  const About = () => <AboutMe />;
  const Projects = () => <ProjectsPage initialProjectId={pendingProjectId ?? undefined} onNavigate={onNavigate} />;

  // Memoizar el contenido de Experience para evitar recreaciones
  const experienceContent = useMemo(() => {
    if (selectedExperience) {
      return (
        <ExperienceDetailFeature 
          experience={selectedExperience} 
          onBack={handleBackToExperiences}
        />
      );
    }
    return <Experience_Feature onExperienceSelect={handleExperienceSelect} />;
  }, [selectedExperience]);

  // Memoizar navigationItems para evitar recreaciones
  const navigationItems: NavItem[] = useMemo(() => [
    {
      id: "hero",
      label: "Hero",
      component: () => (
        <Hero_Feature
          onRecentProjectClick={(id) => {
            setPendingProjectId(id);
            onNavigate?.("projects");
          }}
          onNavigate={onNavigate}
        />
      ),
    },
    { id: "about", label: "About", component: About },
    { id: "projects", label: "Projects", component: Projects },
    { id: "experience", label: "Experience", component: () => experienceContent },
    { id: "contact", label: "Contact", component: Contact },
  ], [experienceContent, pendingProjectId]);

  const currentItem = navigationItems.find((item) => item.id === activeSection);

  if (!currentItem) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold text-red-500">Section not found</h2>
      </div>
    );
  }

  const Component = currentItem.component;

  return (
    <div className="min-h-screen pb-33">
      <Component />
    </div>
  );
}
