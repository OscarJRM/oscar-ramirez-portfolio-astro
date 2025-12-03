import { Card } from "@heroui/card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SKILLS_DATA } from "../../../../constants/hero/skills";
import DotPagination from "../../../../components/common/DotPagination";

export default function Skills(){
    const [currentPage, setCurrentPage] = useState(1);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const skillsPerPage = 6;
    
    const ref = useRef(null);
    const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const totalPages = Math.ceil(SKILLS_DATA.length / skillsPerPage);
    const startIndex = (currentPage - 1) * skillsPerPage;
    const endIndex = startIndex + skillsPerPage;
    const currentSkills = SKILLS_DATA.slice(startIndex, endIndex);

    useEffect(() => {
        if (!isAutoPlay || totalPages <= 1 || !isInView) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentPage(prev => prev >= totalPages ? 1 : prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay, totalPages, isInView]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (resumeTimeoutRef.current) {
                clearTimeout(resumeTimeoutRef.current);
            }
        };
    }, []);

    const handlePageClick = (page: number) => {
        // Clear any existing resume timeout
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }

        setIsAutoPlay(false);
        setDirection(page > currentPage ? 1 : -1);
        setCurrentPage(page);
        
        // Resume after 8 seconds if no other interaction happens
        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoPlay(true);
        }, 8000);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-16" ref={ref}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-left mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    My <span className="text-white">Skills &</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-primary-color">Technologies</span>
                </h2>
            </motion.div>
            
            <div className="relative overflow-hidden mb-8">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div 
                        key={currentPage}
                        custom={direction}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={{
                            enter: (direction: number) => ({
                                x: direction > 0 ? '100%' : '-100%',
                                opacity: 0
                            }),
                            center: {
                                x: 0,
                                opacity: 1
                            },
                            exit: (direction: number) => ({
                                x: direction > 0 ? '-100%' : '100%',
                                opacity: 0
                            })
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 1000, damping: 80, duration: 0.2 },
                            opacity: { duration: 0.1 }
                        }}
                    >
                        {currentSkills.map((skill, index) => (
                            <motion.div
                                key={startIndex + index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: isInView ? index * 0.1 : 0,
                                    ease: "easeOut" 
                                }}
                            >
                                <Card 
                                    className="p-6 hover:bg-primary_custom-200 transition-all duration-300 cursor-pointer group h-full min-h-[140px] flex flex-col justify-center"
                                >
                                    <div className="flex items-center gap-4 h-full">
                                        <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-primary_custom-400 transition-colors flex-shrink-0">
                                            <skill.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {skill.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <DotPagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageClick}
            />
        </div>
    );
}
