import React, { useState } from 'react';
import { MCQ } from '../types';
import { SketchButton, SketchCard } from './SketchyUI';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuizComponent: React.FC<{ mcqs: MCQ[], onComplete?: () => void }> = ({ mcqs, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    // Removed score state

    const handleOptionSelect = (index: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(index);
        setShowExplanation(true);
        // Removed score update logic
    };

    const nextQuestion = () => {
        if (currentIndex < mcqs.length - 1) {
            setSelectedOption(null);
            setShowExplanation(false);
            setCurrentIndex(prev => prev + 1);
        } else {
            if (onComplete) onComplete();
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setSelectedOption(null);
            setShowExplanation(false);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setShowExplanation(false);
    };

    const currentMCQ = mcqs[currentIndex];
    const isLast = currentIndex === mcqs.length - 1;

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="flex justify-between items-center font-bold text-gray-500">
                <span>Question {currentIndex + 1} / {mcqs.length}</span>
                <button
                    onClick={resetQuiz}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded border-2 border-red-300 hover:bg-red-200 text-sm font-bold transition-colors"
                >
                    Reset Quiz
                </button>
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
                                {selectedOption !== null && idx === currentMCQ.correctIndex && <Check className="inline ml-2 text-green-700" size={18} />}
                                {selectedOption !== null && idx === selectedOption && idx !== currentMCQ.correctIndex && <X className="inline ml-2 text-red-700" size={18} />}
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

            <div className="flex justify-between">
                <SketchButton
                    onClick={prevQuestion}
                    disabled={currentIndex === 0}
                    className={currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}
                >
                    &lt;- Prev
                </SketchButton>

                <SketchButton
                    onClick={nextQuestion}
                    disabled={selectedOption === null}
                >
                    {isLast ? "Next Topic ->" : "Next ->"}
                </SketchButton>
            </div>
        </div>
    );
};
