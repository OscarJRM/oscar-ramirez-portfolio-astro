import ProjectsPageFeature from "../../features/projects/presentation/views";

interface ProjectsPageProps {
  initialProjectId?: string;
  onNavigate?: (section: string) => void;
}

export default function ProjectsPage({ initialProjectId, onNavigate }: ProjectsPageProps) {
  return (
    <div>
      <ProjectsPageFeature initialProjectId={initialProjectId} onNavigate={onNavigate} />
    </div>
  );
}
