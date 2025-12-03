import { Card, CardBody } from "@heroui/card";
import { Chip, Image } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { AboutMe } from "../../types/about.interface";

interface AboutMeComponentProps {
  data: AboutMe;
  index: number;
}

export default function AboutMeComponent({ data, index }: AboutMeComponentProps) {
  const isImageRight = index % 2 === 0; // Par = imagen derecha, Impar = imagen izquierda
  const cardRef = useRef(null);
  
  // Para la primera card en móvil, usar margin más pequeño para que aparezca más fácil
  const isFirstCard = index === 0;
  const margin = isFirstCard ? "-50px" : "-100px";
  
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: margin,
    amount: 0.2 // Reducido para que aparezca más rápido
  });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        delay: 0.1, // Reducido de 0.2 a 0.1
        duration: 0.6, // Reducido de 0.8 a 0.6
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className="mb-8"
    >
      <Card className="transition-all duration-300 group">
        <CardBody className="p-8">
          {/* Layout con imagen */}
          {data.imageUrl ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isInView ? 0.4 + (index * 0.1) : 0, duration: 0.6 }}
            >
              {/* Título */}
              <h3 className="text-3xl font-bold mb-6 text-white">
                {data.title}
              </h3>
              
              {/* Contenedor con imagen flotante y texto */}
              <div className="relative">
                {/* Imagen flotante */}
                <motion.div 
                  className={`relative overflow-hidden rounded-lg mb-4 lg:mb-0 
                    ${isImageRight 
                      ? 'lg:float-right lg:ml-3 lg:max-w-[45%]' 
                      : 'lg:float-left lg:mr-3  lg:max-w-[45%]'
                    }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: isInView ? 0.5 + (index * 0.1) : 0, duration: 0.5 }}
                >
                  <Image
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 "></div>
                </motion.div>
                
                {/* Texto que fluye alrededor */}
                <motion.div 
                  initial={{ opacity: 0, x: isImageRight ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isImageRight ? -20 : 20 }}
                  transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
                >
                  <p className="text-gray-400 text-lg leading-relaxed text-justify">
                    {data.description}
                  </p>
                </motion.div>
                

                <div className="clear-both"></div>
                
                {/* Tags debajo de todo */}
                {data.tags && data.tags.length > 0 && (
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: isInView ? 0.7 + (index * 0.1) : 0, duration: 0.5 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {data.tags.map((tag, tagIndex) => (
                        <Chip 
                          variant="faded"
                          key={tagIndex}
                          className="text-primary-color"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Layout sin imagen - solo contenido centrado */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: isInView ? 0.6 + (index * 0.1) : 0, duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">
                {data.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {data.description}
              </p>
              
              {/* Tags */}
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, tagIndex) => (
                    <Chip 
                      variant="faded"
                      key={tagIndex}
                      className="text-primary-color"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
