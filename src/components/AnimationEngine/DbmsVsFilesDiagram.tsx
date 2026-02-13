import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Database, Search, X, Check, FolderOpen } from 'lucide-react';
import { SketchyButton } from '../Controls/SketchyComponents';

export const DbmsVsFilesDiagram = ({ step }: { step: number }) => {
    // Local state for the interactive demo within the diagram
    const [searchState, setSearchState] = useState<'idle' | 'searching' | 'found' | 'failed'>('idle');
    const [timer, setTimer] = useState(0);

    // Reset state when step changes
    useEffect(() => {
        setSearchState('idle');
        setTimer(0);
    }, [step]);

    // Timer effect for searching state
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (searchState === 'searching') {
            interval = setInterval(() => {
                setTimer(t => t + 1);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [searchState]);

    const handleSearch = () => {
        setSearchState('searching');
        setTimer(0);

        // Simulation time based on current mode (step)
        // Step 0: File System (Slow)
        // Step 1: DBMS (Fast)
        const isDbms = step >= 1;
        const duration = isDbms ? 800 : 3000;

        setTimeout(() => {
            setSearchState('found');
        }, duration);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            {/* Header / Context */}
            <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-700">
                    {step < 1 ? "Legacy: File System Mode" : "Modern: DBMS Mode"}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                    {step < 1 ? "Goal: Find 'Student: John' in the pile." : "Goal: Query 'ID: 101' from the index."}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[300px]">

                {/* Visual Area */}
                <div className="relative w-64 h-64 bg-slate-50 rounded-lg border-2 border-slate-300 overflow-hidden shadow-inner md:w-80 md:h-72">

                    {/* SCENARIO 1: MESSY FILES (Step 0) */}
                    <AnimatePresence>
                        {step < 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 p-4"
                            >
                                {/* Scattered Files */}
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute text-slate-400"
                                        initial={{
                                            x: Math.random() * 200,
                                            y: Math.random() * 200,
                                            rotate: Math.random() * 40 - 20
                                        }}
                                        animate={searchState === 'searching' ? {
                                            scale: [1, 1.1, 1],
                                            filter: ["brightness(1)", "brightness(0.8)", "brightness(1)"]
                                        } : {}}
                                        transition={{ duration: 0.5, delay: i * 0.1, repeat: searchState === 'searching' ? Infinity : 0 }}
                                    >
                                        <FileText size={32} />
                                    </motion.div>
                                ))}

                                {/* Searching Hand/Glass */}
                                {searchState === 'searching' && (
                                    <motion.div
                                        className="absolute z-10 text-red-500 drop-shadow-lg"
                                        animate={{
                                            x: [0, 150, 50, 200, 100],
                                            y: [0, 100, 200, 50, 150]
                                        }}
                                        transition={{ duration: 3, ease: "linear" }}
                                    >
                                        <Search size={48} />
                                    </motion.div>
                                )}

                                {/* Result Overlay */}
                                {searchState === 'found' && (
                                    <motion.div
                                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                                        className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 backdrop-blur-sm"
                                    >
                                        <div className="text-center">
                                            <div className="inline-block p-3 bg-red-100 rounded-full mb-2">
                                                <Check className="text-red-600" size={32} />
                                            </div>
                                            <p className="font-bold text-slate-800">Found after {timer}ms!</p>
                                            <p className="text-xs text-red-500 font-bold">Inefficient & Slow</p>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>


                    {/* SCENARIO 2: DBMS (Step 1) */}
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-blue-50/50"
                            >
                                {/* Server Rack / Structure */}
                                <div className="grid grid-cols-4 gap-2 opacity-80">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className={`w-10 h-10 rounded border transition-colors duration-300 flex items-center justify-center
                                            ${searchState === 'found' && i === 5 ? 'bg-green-500 border-green-700 shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'bg-white border-blue-200'}
                                        `}>
                                            <Database size={16} className={searchState === 'found' && i === 5 ? 'text-white' : 'text-blue-200'} />
                                        </div>
                                    ))}
                                </div>

                                {/* Scanning Beam */}
                                {searchState === 'searching' && (
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,1)] z-10"
                                        animate={{ top: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
                                    />
                                )}

                                {/* Result Overlay */}
                                {searchState === 'found' && (
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                                        className="absolute bottom-4 left-0 right-0 mx-auto w-max px-6 py-2 bg-green-600 text-white rounded-full shadow-lg z-20"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Check size={16} />
                                            <span className="font-bold text-sm">Indexed Access! (O(1))</span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Dashboard / Controls */}
                <div className="flex flex-col gap-4 w-full md:w-auto min-w-[180px]">
                    <div className="bg-slate-800 text-green-400 font-mono p-4 rounded-lg shadow-inner text-sm">
                        <div className="mb-2 opacity-50 text-[10px] uppercase">System Monitor</div>
                        <div className="flex justify-between mb-1">
                            <span>Status:</span>
                            <span className={searchState === 'searching' ? "animate-pulse text-yellow-400" : ""}>
                                {searchState.toUpperCase()}
                            </span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1">
                            <span>Time:</span>
                            <span>{Math.min(timer, 999)}ms</span>
                        </div>
                    </div>

                    <SketchyButton
                        onClick={handleSearch}
                        active={step >= 1}
                        className={`w-full text-center justify-center ${searchState === 'searching' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {searchState === 'searching' ? "Scanning..." : "Run Query"}
                    </SketchyButton>

                    {searchState !== 'idle' && (
                        <button
                            className="text-xs text-slate-400 underline hover:text-slate-600"
                            onClick={() => { setSearchState('idle'); setTimer(0); }}
                        >
                            Reset Simulation
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};
