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
    <>
     <div>
            <div className="p-5 md:hidden"><ProfileCard onNavigate={onNavigate} /></div>
            <RecentProjects onProjectClick={onRecentProjectClick} />
            <Skills />
            <FrequentlyQuestions />
          </div>
    </>
  );
}
