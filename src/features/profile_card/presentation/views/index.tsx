import { Card, CardBody } from "@heroui/card";
import { PROFILE_CARD_DATA } from "../../../../constants/profile/profile_card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

interface ProfileCardProps {
  onNavigate?: (section: string) => void;
}

export default function Profile_Card({ onNavigate }: ProfileCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Card className="w-full max-w-5xl mx-auto bg-gray-950/50 backdrop-blur-md border border-gray-800">
        <CardBody className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Avatar Section */}
            <motion.div 
              className="shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-gray-800/50">
                <Image 
                  src={PROFILE_CARD_DATA.avatar}
                  alt="Profile Avatar"
                  className="object-cover w-full h-full"
                  removeWrapper
                />
              </div>
            </motion.div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {PROFILE_CARD_DATA.name}
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-300 font-medium max-w-2xl"
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {PROFILE_CARD_DATA.bio}
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400"
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex items-center gap-2">
                  <span>📍</span> {PROFILE_CARD_DATA.location}
                </span>
                <span className="hidden md:inline text-gray-600">•</span>
                <div className="flex gap-4">
                  {PROFILE_CARD_DATA.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-xl"
                    >
                      {link.icon || link.platform}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Actions Section */}
            <motion.div 
              className="flex flex-col gap-3 w-full md:w-auto min-w-[200px]"
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                className="font-bold py-6 text-lg text-white shadow-lg shadow-blue-900/20"
                style={{ backgroundColor: 'var(--color-blue-400)' }}
                onPress={() => onNavigate?.('contact')}
              >
                Contact Me
              </Button>

              <Button
                as="a"
                href="/Galarza_Emilia_CV.pdf"
                download="Galarza_Emilia_CV.pdf"
                variant="bordered"
                className="font-semibold py-6 text-lg border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
                startContent={<FaDownload />}
              >
                Download CV
              </Button>
            </motion.div>

          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
