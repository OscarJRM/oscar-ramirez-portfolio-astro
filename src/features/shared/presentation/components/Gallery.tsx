import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Image, Modal, ModalContent, ModalBody } from "@heroui/react";
import { IoExpand } from "react-icons/io5";

interface GalleryProps {
  images: string[];
  projectTitle: string;
}

export function Gallery({ images, projectTitle }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={`gallery-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="cursor-pointer group relative"
            onClick={() => setSelectedImage(src)}
          >
            <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
              <CardBody className="p-0 relative overflow-hidden">
                <div className="w-full h-64 overflow-hidden">
                  <Image
                    src={src}
                    alt={`${projectTitle} screenshot ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    removeWrapper
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <IoExpand className="w-8 h-8 text-white mb-2 mx-auto" />
                    <p className="text-white text-sm font-medium">Click to expand</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded image */}
      <AnimatePresence>
        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            size="3xl"
            hideCloseButton
            classNames={{
              base: "bg-gray-900/95",
            }}
          >
            <ModalContent>
              <ModalBody className="p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={selectedImage}
                    alt={`${projectTitle} expanded`}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                </motion.div>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
