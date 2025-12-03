import Experience_Feature from "../../features/experience/presentation/views";
import type { Experience } from "../../features/experience/types/experience.interface";

interface MyExperienceProps {
  onExperienceSelect?: (experience: Experience) => void;
}

export default function MyExperience({ onExperienceSelect }: MyExperienceProps) {
    const handleExperienceSelect = onExperienceSelect || (() => {
        console.warn('onExperienceSelect not provided');
    });

    return <Experience_Feature onExperienceSelect={handleExperienceSelect} />;
}