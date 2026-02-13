import React, { useState } from 'react';
import { MCQ } from '../types';
import { SketchButton, SketchCard } from './SketchyUI';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuizComponent: React.FC<{ mcqs: MCQ[], onComplete?: () => void }> = ({ mcqs, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionSelect = (index: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(index);
        setShowExplanation(true);
        if (index === mcqs[currentIndex].correctIndex) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        setSelectedOption(null);
        setShowExplanation(false);
        if (currentIndex < mcqs.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            if (onComplete) onComplete();
        }
    };

    const currentMCQ = mcqs[currentIndex];
    const isLast = currentIndex === mcqs.length - 1;

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex justify-between items-center font-bold text-gray-500">
                <span>Question {currentIndex + 1} / {mcqs.length}</span>
                <span>Score: {score}</span>
            </div>
            
            <SketchCard className="min-h-[200px] flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6">{currentMCQ.question}</h3>
                
                <div className="space-y-3">
                    {currentMCQ.options.map((opt, idx) => {
                        let btnClass = "w-full text-left p-3 rounded border-2 border-black font-bold transition-all ";
                        if (selectedOption === null) {
                            btnClass += "hover:bg-gray-100 bg-white";
                        } else {
                            if (idx === currentMCQ.correctIndex) {
                                btnClass += "bg-green-200 border-green-600";
                            } else if (idx === selectedOption) {
                                btnClass += "bg-red-200 border-red-600";
                            } else {
                                btnClass += "opacity-50 bg-gray-50";
                            }
                        }

                        return (
                            <button 
                                key={idx}
                                onClick={() => handleOptionSelect(idx)}
                                className={btnClass}
                                disabled={selectedOption !== null}
                            >
                                {opt}
                                {selectedOption !== null && idx === currentMCQ.correctIndex && <Check className="inline ml-2 text-green-700" size={18}/>}
                                {selectedOption !== null && idx === selectedOption && idx !== currentMCQ.correctIndex && <X className="inline ml-2 text-red-700" size={18}/>}
                            </button>
                        )
                    })}
                </div>
            </SketchCard>

            {showExplanation && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 p-4 border-2 border-blue-200 rounded text-blue-900"
                >
                    <span className="font-bold">Explanation: </span>
                    {currentMCQ.explanation}
                </motion.div>
            )}

            <div className="flex justify-end">
                <SketchButton 
                    onClick={nextQuestion} 
                    disabled={selectedOption === null}
                >
                    {isLast ? "Finish Quiz" : "Next Question ->"}
                </SketchButton>
            </div>
        </div>
    );
};
