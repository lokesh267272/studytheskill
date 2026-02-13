import React from 'react';
import { motion } from 'framer-motion';

interface AlgorithmStepWalkerProps {
    title?: string;
    steps: string[];
    activeStep: number | null; // null if no step is active (or finished)
}

export const AlgorithmStepWalker: React.FC<AlgorithmStepWalkerProps> = ({ title = "Algorithm Steps", steps, activeStep }) => {
    return (
        <div className="flex flex-col border-2 border-black bg-gray-50 rounded-lg overflow-hidden shadow-sketch w-full max-w-sm">
            <div className="bg-black text-white px-4 py-2 font-bold text-sm flex justify-between items-center">
                <span>{title}</span>
                {activeStep !== null && (
                    <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded animate-pulse">Running</span>
                )}
            </div>
            <div className="p-4 space-y-1 font-mono text-xs md:text-sm overflow-y-auto max-h-[200px]">
                {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                        <motion.div
                            key={index}
                            initial={false}
                            animate={{
                                backgroundColor: isActive ? '#dbeafe' : 'transparent', // blue-100
                                x: isActive ? 4 : 0,
                                scale: isActive ? 1.02 : 1,
                                fontWeight: isActive ? 'bold' : 'normal',
                                color: isActive ? '#1e40af' : '#374151' // blue-800 vs gray-700
                            }}
                            className={`px-2 py-1 rounded border-l-4 transition-colors duration-200 ${isActive ? 'border-blue-500' : 'border-transparent'}`}
                        >
                            <span className="opacity-50 mr-2 select-none">{index + 1}.</span>
                            {step}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
