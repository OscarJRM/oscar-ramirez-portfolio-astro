import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Question } from "../../types/questions.interface";

interface AccordionComponentProps {
    questions: Question[];
    title?: string;
    subtitle?: string;
}

export default function AccordionComponent({ 
    questions, 
    title = "Frequently Asked", 
    subtitle = "Questions" 
}: AccordionComponentProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
        <div className="w-full max-w-6xl mx-auto px-16" ref={ref}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-left mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {title} <span className="text-white">Asked</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-primary-color">{subtitle}</span>
                </h2>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <Accordion variant="splitted">
                    {questions.map((item, index) => (
                        <AccordionItem 
                            key={index} 
                            aria-label={`Question ${index + 1}`} 
                            title={item.question}
                            className="font-bold"
                        >
                            <p className="text-gray-300 leading-relaxed font-medium">
                                {item.answer}
                            </p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
} 