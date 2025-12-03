import { Card, CardBody, CardHeader } from "@heroui/card";
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
    <>
      <motion.div
        ref={ref}
        initial={{ 
          scale: 0.3, 
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={isInView ? { 
          scale: 1, 
          opacity: 1,
          filter: "blur(0px)"
        } : {
          scale: 0.3, 
          opacity: 0,
          filter: "blur(10px)"
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth effect
          scale: {
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }}
      >
        <Card className="p-8 max-w-sm mx-auto text-center">
          <CardHeader className="flex gap-3">
            <motion.div 
              className="rounded-2xl p-4 mb-6"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.5, rotate: -10 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            >
              <Image 
                src={PROFILE_CARD_DATA.avatar}
                alt="Profile Avatar"
                className="object-cover rounded-xl"
              />
            </motion.div>
          </CardHeader>
        <CardBody className="overflow-visible text-center">
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {PROFILE_CARD_DATA.name}
          </motion.h1>

          <motion.p 
            className="text-gray-300 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {PROFILE_CARD_DATA.bio}
          </motion.p>

          <motion.p 
            className="text-gray-400 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {PROFILE_CARD_DATA.location}
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
          >
            {PROFILE_CARD_DATA.socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                transition={{ 
                  delay: 0.9 + (index * 0.1), 
                  duration: 0.3, 
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon || link.platform}
              </motion.a>
            ))}
          </motion.div>
        </CardBody>

        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.8 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          className="flex flex-col gap-3 w-full"
        >
          <Button 
            color="default" 
            className="font-semibold py-3 w-full bg-primary_custom-400!"
            onPress={() => onNavigate?.('contact')}
          >
            Let's Talk
          </Button>

          <Button
            as="a"
            href="/Galarza_Emilia_CV.pdf"
            download="Galarza_Emilia_CV.pdf"
            variant="bordered"
            className="font-semibold py-3 w-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
            startContent={<FaDownload className="text-sm" />}
          >
            Download CV
          </Button>
        </motion.div>

      </Card>
      </motion.div>
      
    </>
  );
}
