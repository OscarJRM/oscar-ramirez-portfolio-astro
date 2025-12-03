import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip, Button, Image } from "@heroui/react";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TechCard } from "../../../shared/presentation/components/TechCard";
import { Gallery } from "../../../shared/presentation/components/Gallery";
import type { DetailedProject } from "../../types/project-detail.interface";

interface ProjectDetailFeatureProps {
  project: DetailedProject;
  onBack: () => void;
}

export default function ProjectDetailFeature({ project, onBack }: ProjectDetailFeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-8 px-4"
        >
          <Button
            variant="ghost"
            startContent={<ArrowLeftIcon className="w-4 h-4" />}
            onClick={onBack}
            className="text-gray-400 hover:text-white"
          >
            All Projects
          </Button>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="px-4 mb-10"
        >
          <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
            <CardBody className="p-0">
              <Image
                src={project.visualContent.mainImage}
                alt={project.title}
                className="w-full h-[340px] md:h-[420px] object-cover"
              />
            </CardBody>
          </Card>
        </motion.div>

        {/* Title + Short description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Technical stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-4 mb-10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Technical Stack</h2>

          <div className="space-y-8">
            {project.technicalStack.frontend?.length ? (
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Frontend</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.technicalStack.frontend.map((t, i) => (
                    <TechCard 
                      key={`fe-${i}`} 
                      title={t.name} 
                      description={t.description} 
                      icon={t.icon}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {project.technicalStack.backend?.length ? (
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Backend</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.technicalStack.backend.map((t, i) => (
                    <TechCard 
                      key={`be-${i}`} 
                      title={t.name} 
                      description={t.description} 
                      icon={t.icon}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {project.technicalStack.devOps?.length ? (
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">DevOps</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.technicalStack.devOps.map((t, i) => (
                    <TechCard 
                      key={`do-${i}`} 
                      title={t.name} 
                      description={t.description} 
                      icon={t.icon}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>

        {/* Collaborators */}
        {project.collaborators?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="px-4 mb-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Collaborators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.collaborators.map((c, i) => (
                <TechCard
                  key={`collab-${i}`}
                  title={c.name}
                  description={c.role}
                  icon={c.github ? FaGithub : (c.linkedin ? FaLinkedin : undefined)}
                  className="bg-gray-800/30"
                />
              ))}
            </div>
          </motion.div>
        ) : null}

        {/* Links */}
        {(project.links?.demo || project.links?.github) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="px-4 mb-12 flex gap-4"
          >
            {project.links?.demo && (
              <Button
                as="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="text-primary-color border-primary-color hover:bg-primary-color hover:text-white"
              >
                Visit Demo
              </Button>
            )}
            {project.links?.github && (
              <Button
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="text-primary-color border-primary-color hover:bg-primary-color hover:text-white"
              >
                View Repo
              </Button>
            )}
          </motion.div>
        )}

        {/* Gallery */}
        {project.visualContent.screenshots?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
            <Gallery 
              images={project.visualContent.screenshots} 
              projectTitle={project.title}
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
