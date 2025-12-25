"use client";

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-zinc-800/50 transition-colors"
                    >
                        <span className="font-semibold text-lg pr-4">{item.question}</span>
                        <FiChevronDown
                            className={`text-xl flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 text-zinc-400 leading-relaxed border-t border-zinc-800">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
