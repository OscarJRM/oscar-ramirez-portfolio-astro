import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE_DATA } from "../../../../constants/experience/experience_data";
import CardExperienceComponent from "../components/CardExperienceComponent";
import type { Experience } from "../../types/experience.interface";

interface Experience_FeatureProps {
  onExperienceSelect: (experience: Experience) => void;
}

export default function Experience_Feature({ onExperienceSelect }: Experience_FeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  console.log('🔄 Experience_Feature render - isInView:', isInView);

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Professional <span className="text-white">Journey &</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary-color">Experience</span>
          </h2>
        </motion.div>

        {/* Grid de cards Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 px-4">
          {EXPERIENCE_DATA.map((experience, index) => (
            <CardExperienceComponent 
              key={experience.id}
              data={experience}
              index={index}
              isInView={isInView}
              onCardClick={onExperienceSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
