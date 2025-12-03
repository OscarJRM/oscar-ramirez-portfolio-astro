import { Card } from "@heroui/card";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../../../constants/hero/skills";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@heroui/button";

export default function Skills() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 2;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-12 mb-20">
            <div className="flex items-center justify-between mb-8 px-4">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-primary-color">Skills</span>
                    </h2>
                </div>
                
                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        variant="flat"
                        className="bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
                        onPress={() => scroll('left')}
                        isDisabled={!canScrollLeft}
                    >
                        <ChevronLeft size={24} />
                    </Button>
                    <Button
                        isIconOnly
                        variant="flat"
                        className="bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
                        onPress={() => scroll('right')}
                        isDisabled={!canScrollRight}
                    >
                        <ChevronRight size={24} />
                    </Button>
                </div>
            </div>
            
            <div 
                className="relative overflow-x-auto hide-scrollbar"
                ref={scrollRef}
                onScroll={checkScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex gap-4 pb-4 px-4 min-w-max">
                    {SKILLS_DATA.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card 
                                className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group cursor-pointer"
                            >
                                <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
