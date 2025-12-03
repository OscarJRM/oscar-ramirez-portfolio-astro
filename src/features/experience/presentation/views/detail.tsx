import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip, Button } from "@heroui/react";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import type { Experience } from "../../types/experience.interface";

interface ExperienceDetailFeatureProps {
  experience: Experience;
  onBack: () => void;
}

export default function ExperienceDetailFeature({ experience, onBack }: ExperienceDetailFeatureProps) {
  // Scroll to top when component mounts or experience changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [experience.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const startDate = formatDate(experience.start_date);
  const endDate = experience.end_date ? formatDate(experience.end_date) : 'Present';

  const goBack = () => {
    onBack();
  };

  return (
    <section className="pb-16 px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 px-4"
        >
          <Button
            variant="ghost"
            startContent={<ArrowLeftIcon className="w-4 h-4" />}
            onClick={goBack}
            className="text-gray-400 hover:text-white"
          >
            All Experiences
          </Button>
        </motion.div>

        {/* Company Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {experience.company || experience.position}
          </h1>
          <p className="text-gray-400 text-lg">
            {startDate} - {endDate}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="px-4"
        >
          <Card className="bg-gray-900/50 border border-gray-800">
            <CardBody className="p-8">
              {/* Overview Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {experience.details?.overview || experience.description}
                </p>
              </div>

              {/* My Role Section */}
              {experience.details?.role && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">My Role</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {experience.details.role}
                  </p>
                </div>
              )}

              {/* Skills & Technologies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <Chip 
                      key={index}
                      variant="faded"
                      className="text-primary-color text-base px-4 py-2"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Skills Acquired */}
              {experience.details?.skills_acquired && experience.details.skills_acquired.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Skills Acquired</h2>
                  <div className="flex flex-wrap gap-3">
                    {experience.details.skills_acquired.map((skill, index) => (
                      <Chip 
                        key={index}
                        variant="bordered"
                        className="text-gray-300 border-gray-600"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact */}
              {experience.details?.impact && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Impact</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {experience.details.impact}
                  </p>
                </div>
              )}

              {/* Company Link */}
              {experience.details?.company_link && (
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <Button
                    as="a"
                    href={experience.details.company_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="bordered"
                    className="text-primary-color border-primary-color hover:bg-primary-color hover:text-white"
                  >
                    Visit Company Website
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}