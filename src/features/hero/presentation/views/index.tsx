import ProfileCard from "../../../../components/profile_card";
import FrequentlyQuestions from "../../../frequently_questions/presentation/views";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";

interface HeroFeatureProps {
  onRecentProjectClick?: (id: string) => void;
  onNavigate?: (section: string) => void;
}

export default function Hero_Feature({ onRecentProjectClick, onNavigate }: HeroFeatureProps) {
 
  return (
    <div className="space-y-12">
      <ProfileCard onNavigate={onNavigate} />
      <RecentProjects onProjectClick={onRecentProjectClick} />
      <Skills />
      <FrequentlyQuestions />
    </div>
  );
}
