import React from 'react';
import { motion } from 'framer-motion';

// A container that looks like a card with hand-drawn borders
export const SketchCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = "", title }) => (
    <div className={`bg-white border-2 border-ink rounded-lg shadow-sketch p-6 relative ${className}`}>
        {title && (
            <div className="absolute -top-4 left-4 bg-highlight px-3 py-1 border-2 border-ink transform -rotate-2 font-bold text-xl z-10">
                {title}
            </div>
        )}
        {children}
    </div>
);

// A clickable button with press animation
export const SketchButton: React.FC<{ onClick: () => void; children: React.ReactNode; variant?: 'primary' | 'danger' | 'neutral'; disabled?: boolean }> = ({ onClick, children, variant = 'primary', disabled = false }) => {
    let bgClass = 'bg-accent';
    if (variant === 'danger') bgClass = 'bg-danger';
    if (variant === 'neutral') bgClass = 'bg-white';
    if (disabled) bgClass = 'bg-gray-200';

    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.02, boxShadow: "5px 5px 0px 0px #1a1a1a" } : {}}
            whileTap={!disabled ? { scale: 0.98, boxShadow: "1px 1px 0px 0px #1a1a1a", x: 2, y: 2 } : {}}
            onClick={onClick}
            disabled={disabled}
            className={`${bgClass} border-2 border-ink text-ink font-bold py-2 px-6 rounded-md shadow-sketch transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </motion.button>
    );
};

// A badge for keywords
export const Highlight: React.FC<{ children: React.ReactNode; color?: 'yellow' | 'red' | 'blue' }> = ({ children, color = 'yellow' }) => {
    const colors = {
        yellow: 'bg-highlight',
        red: 'bg-danger',
        blue: 'bg-accent'
    };
    return (
        <span className={`${colors[color]} px-1 mx-1 border-b-2 border-ink inline-block transform -skew-x-6`}>
            <span className="transform skew-x-6 inline-block font-bold">
                {children}
            </span>
        </span>
    );
};
