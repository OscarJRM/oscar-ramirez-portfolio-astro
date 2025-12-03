import { RECENT_PROJECTS_DATA } from "../../../../constants/hero/recent_projects";
import { Card, CardBody } from "@heroui/card";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { recent_projects } from "../../../hero/types/recent_projects.interface";

interface RecentProjectsProps {
  data?: recent_projects[];
  onProjectClick?: (id: string) => void;
}

export default function RecentProjects({ data, onProjectClick }: RecentProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = data ?? RECENT_PROJECTS_DATA;

  return (
    <section className="pb-16 px-12 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            and <span className="text-primary-color">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isInView ? 0.4 + (index * 0.1) : 0, duration: 0.6 }}
            >
              <Card 
                isPressable={!!onProjectClick}
                onPress={() => onProjectClick && onProjectClick(project.id)}
                className={`w-full transition-all duration-300 group ${onProjectClick ? 'cursor-pointer hover:brightness-110 hover:shadow-lg' : ''}`}
              >
                <CardBody className="p-0">
                  <motion.div 
                    className="relative overflow-hidden rounded-t-lg h-64"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: isInView ? 0.5 + (index * 0.1) : 0, duration: 0.5 }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </motion.div>
              
                  <motion.div 
                    className="p-6 min-h-28"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {project.description}
                    </p>
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
