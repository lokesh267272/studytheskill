import React from 'react';

export const SuperCandidateKeysDiagram = ({ step }: { step: number }) => {
    return (
        <div className="flex flex-col items-center gap-6 w-full h-full max-w-2xl px-2">
            <div className="flex flex-col items-center gap-6 w-full">
                <div className="relative w-full h-[300px] md:h-[400px] bg-slate-50 border-4 border-dashed border-slate-200 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className={`
                        absolute transition-all duration-700 ease-in-out border-4 border-slate-400 rounded-full flex items-center justify-center
                        ${step === 0 ? 'w-56 h-56 md:w-80 md:h-80 bg-slate-100 shadow-inner' : step === 1 ? 'w-64 h-64 md:w-96 md:h-96 bg-yellow-50 border-yellow-400 border-dashed' : 'w-48 h-48 md:w-64 md:h-64 bg-slate-200 border-slate-300 opacity-30'}
                    `}>
                        {step <= 1 && (
                            <div className="absolute top-4 md:top-8 font-black text-xs md:text-sm text-slate-400 uppercase tracking-[0.5em]">Super Key</div>
                        )}
                        <div className="flex flex-wrap gap-2 md:gap-4 justify-center px-4 md:px-12">
                            <div className="bg-white border-2 border-black px-3 py-1.5 md:px-5 md:py-2 rounded shadow-sketch text-xs md:text-lg font-black">ID</div>
                            <div className={`
                                bg-white border-2 border-black px-3 py-1.5 md:px-5 md:py-2 rounded shadow-sketch text-xs md:text-lg font-black transition-all duration-500
                                ${step >= 2 ? 'opacity-0 scale-50' : 'opacity-100'}
                            `}>Name</div>
                            <div className={`
                                bg-white border-2 border-black px-3 py-1.5 md:px-5 md:py-2 rounded shadow-sketch text-xs md:text-lg font-black transition-all duration-500
                                ${step >= 2 ? 'opacity-0 scale-50' : 'opacity-100'}
                            `}>Email</div>
                        </div>
                    </div>

                    {/* Candidate Key Circle - The Minimal Core */}
                    <div className={`
                        absolute transition-all duration-1000 ease-in-out border-8 border-green-500 rounded-full flex flex-col items-center justify-center bg-white shadow-2xl
                        ${step >= 2 ? 'w-40 h-40 md:w-64 md:h-64 scale-100 opacity-100' : 'w-0 h-0 scale-0 opacity-0'}
                    `}>
                        <div className="absolute top-4 md:top-8 font-black text-[10px] md:text-xs text-green-600 uppercase tracking-[0.3em]">Minimal Core</div>
                        <div className="bg-green-600 text-white border-4 border-green-800 px-6 py-2 md:px-10 md:py-4 rounded-xl shadow-xl text-lg md:text-3xl font-black">ID</div>
                        <div className="mt-4 bg-green-100 text-green-800 text-[10px] md:text-xs font-black px-3 py-1 rounded-full uppercase">Candidate Key</div>
                    </div>

                    {step === 1 && (
                        <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center pointer-events-none">
                            <div className="bg-red-600 text-white px-8 py-3 rounded-full font-black text-xl shadow-2xl animate-pulse">REDUNDANCY DETECTED!</div>
                        </div>
                    )}
                </div>

                <div className="w-full bg-slate-900 text-white p-4 md:p-6 rounded-2xl shadow-2xl border-b-4 border-slate-700 min-h-[100px] flex items-center justify-center text-center">
                    <p className="text-sm md:text-xl font-bold leading-snug tracking-tight">
                        {step === 0 && "Start: A 'Super Key' can be large {ID, Name, Email}. It works, but it's overkill."}
                        {step === 1 && "Observation: If we remove Name/Email, it's STILL unique! The extra data is useless for identity."}
                        {step === 2 && "The Minimal Set: Just {ID}. This is our CANDIDATE KEY. Lean, mean, and unique!"}
                        {step >= 3 && "Final Rule: Every Candidate Key is a Super Key, but we prefer the MINIMAL one."}
                    </p>
                </div>
            </div>
        </div>
    );
};
