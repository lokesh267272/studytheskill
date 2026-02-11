import React from 'react';

export const AcidDiagram = ({ step }: { step: number }) => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xs md:max-w-md">
        {['Atomicity', 'Consistency', 'Isolation', 'Durability'].map((letter, idx) => (
            <div
                key={letter}
                className={`
                    border-2 border-black p-2 md:p-4 rounded bg-white shadow-sketch flex flex-col items-center
                    transition-all duration-500
                    ${step > idx ? 'scale-100 opacity-100' : 'scale-90 opacity-50 grayscale'}
                `}
            >
                <div className="text-2xl md:text-4xl font-bold mb-1 text-slate-800">{letter[0]}</div>
                <div className="text-[10px] md:text-xs text-center font-bold uppercase">{letter}</div>
            </div>
        ))}
    </div>
);
