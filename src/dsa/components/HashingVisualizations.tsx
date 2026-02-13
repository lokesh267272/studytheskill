import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, ArrowDown, Hash, AlertCircle, Search, Database } from 'lucide-react';

// 1. Basic Hash Function Demo
export const HashFunctionDemo: React.FC = () => {
    const [input, setInput] = useState<number | ''>('');
    const [table, setTable] = useState<(number | null)[]>(Array(10).fill(null));
    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

    const insert = () => {
        if (input === '') return;
        const val = Number(input);
        const index = val % 10;

        setHighlightIndex(index);
        const newTable = [...table];
        newTable[index] = val; // Simple overwrite for basic demo
        setTable(newTable);
        setInput('');
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex gap-4 items-center bg-gray-50 p-4 border-2 border-black rounded shadow-sketch">
                <div className="flex flex-col">
                    <label className="font-bold text-sm">Key (Number)</label>
                    <input
                        type="number"
                        value={input}
                        onChange={(e) => setInput(Number(e.target.value))}
                        className="border-2 border-black p-2 w-24 font-bold rounded"
                        placeholder="e.g. 25"
                    />
                </div>
                <div className="text-2xl font-bold">→</div>
                <div className="flex flex-col items-center p-2 border-2 border-dashed border-gray-400 rounded bg-white">
                    <span className="text-xs text-gray-500 font-bold">HASH FUNCTION</span>
                    <span className="font-mono font-bold text-blue-600">Key % 10</span>
                </div>
                <div className="text-2xl font-bold">→</div>
                <SketchButton onClick={insert}>Hash It!</SketchButton>
            </div>

            {/* The Table */}
            <div className="flex gap-1 overflow-x-auto w-full justify-center p-2">
                {table.map((val, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                        {highlightIndex === i && (
                            <motion.div
                                layoutId="hash-arrow"
                                className="absolute -top-8 text-blue-600 font-bold"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <ArrowDown size={24} />
                            </motion.div>
                        )}
                        <div className={`w-10 h-12 border-2 border-black flex items-center justify-center font-bold text-sm bg-white ${val !== null ? 'bg-yellow-100' : ''}`}>
                            {val}
                        </div>
                        <span className="text-xs font-mono text-gray-500 mt-1">{i}</span>
                    </div>
                ))}
            </div>
            <p className="text-sm font-hand text-gray-600">Calculates index instantly based on value. O(1).</p>
        </div>
    );
};

// 2. Collision Visualizer (The Problem)
export const CollisionDemo: React.FC = () => {
    const [step, setStep] = useState(0);

    // Scenario: Insert 12, then 22. Both map to index 2.
    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex gap-4">
                <SketchButton onClick={() => setStep(1)} disabled={step >= 1}>Insert 12</SketchButton>
                <SketchButton onClick={() => setStep(2)} disabled={step !== 1} variant="danger">Insert 22</SketchButton>
                <SketchButton onClick={() => setStep(0)} variant="neutral">Reset</SketchButton>
            </div>

            <div className="flex gap-2">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center bg-gray-100 font-bold text-gray-400">
                    Index 1
                </div>
                <div className="w-16 h-16 border-4 border-black flex flex-col items-center justify-center relative bg-white">
                    <span className="absolute -top-6 font-bold text-sm">Index 2</span>
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="w-12 h-12 bg-green-100 border-2 border-black rounded-full flex items-center justify-center font-bold absolute z-10"
                            >
                                12
                            </motion.div>
                        )}
                        {step >= 2 && (
                            <motion.div
                                initial={{ y: -50, x: 20, opacity: 0 }}
                                animate={{ y: 0, x: 10, opacity: 1, rotate: [0, 10, -10, 0] }}
                                className="w-12 h-12 bg-red-200 border-2 border-red-600 text-red-800 rounded-full flex items-center justify-center font-bold absolute z-20 shadow-xl"
                            >
                                22
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center bg-gray-100 font-bold text-gray-400">
                    Index 3
                </div>
            </div>

            {step === 2 && (
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="flex items-center gap-2 bg-red-100 p-3 border-2 border-red-500 rounded text-red-700 font-bold"
                >
                    <AlertCircle /> COLLISION DETECTED! Both want Index 2.
                </motion.div>
            )}
        </div>
    );
};

// 3. Chaining (Linked List Resolution)
export const ChainingDemo: React.FC = () => {
    const [table, setTable] = useState<number[][]>([[], [], [], [], []]);
    const [input, setInput] = useState(10);

    const insert = () => {
        const val = input;
        const index = val % 5;
        const newTable = [...table];
        newTable[index] = [...newTable[index], val];
        setTable(newTable);
        setInput(prev => prev + 5); // Increment for easy collision generation
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full bg-white p-4 border border-black rounded shadow-inner">
            <div className="flex gap-2 items-center">
                <input
                    type="number" value={input} onChange={e => setInput(Number(e.target.value))}
                    className="border-2 border-black p-2 w-20 rounded font-bold"
                />
                <span className="font-bold text-gray-500">% 5</span>
                <SketchButton onClick={insert}>Insert</SketchButton>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-md">
                {table.map((chain, i) => (
                    <div key={i} className="flex items-center h-12 border-b border-gray-200 pb-2">
                        <div className="w-12 h-12 border-2 border-black bg-gray-100 flex items-center justify-center font-bold shrink-0 mr-2 relative">
                            {i}
                            <div className="absolute right-0 top-1/2 w-2 h-[2px] bg-black"></div>
                        </div>
                        <div className="flex gap-1 items-center overflow-x-auto p-1">
                            <AnimatePresence>
                                {chain.map((val, j) => (
                                    <React.Fragment key={`${val}-${j}`}>
                                        {j >= 0 && <ArrowRight size={16} className="text-gray-400 shrink-0" />}
                                        <motion.div
                                            initial={{ scale: 0, x: -20 }} animate={{ scale: 1, x: 0 }}
                                            className="w-10 h-10 border-2 border-black bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-sm"
                                        >
                                            {val}
                                        </motion.div>
                                    </React.Fragment>
                                ))}
                            </AnimatePresence>
                            <div className="w-6 h-6 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-[8px] text-gray-400">NULL</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. Linear Probing Demo
import { AlgorithmStepWalker } from './AlgorithmStepWalker';

export const LinearProbingDemo: React.FC = () => {
    const size = 10;
    const [table, setTable] = useState<(number | null)[]>(Array(size).fill(null));
    const [input, setInput] = useState(12);
    const [msg, setMsg] = useState("Ready");
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Algo Walker State
    const [algoSteps, setAlgoSteps] = useState<string[]>([]);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const insert = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAlgoSteps([
            "index = hash(key)",
            "while (table[index] != null)",
            "  index = (index + 1) % size",
            "table[index] = key"
        ]);
        setMsg("Hashing...");

        let idx = input % size;
        setActiveIdx(idx);
        setActiveStep(0); // Calculate Hash
        await sleep(600);

        let attempts = 0;

        // Loop check
        setActiveStep(1);
        while (table[idx] !== null && attempts < size) {
            setMsg(`Index ${idx} occupied! Collision!`);
            // Visualize collision check
            await sleep(500);

            // Advance
            setActiveStep(2);
            setMsg(`Probing next (Index ${idx}+1)...`);
            idx = (idx + 1) % size;
            setActiveIdx(idx);
            await sleep(600);

            attempts++;
            setActiveStep(1); // Back to check condition
        }

        if (attempts === size) {
            setMsg("Table Full!");
        } else {
            setActiveStep(3); // Insertion
            const newTable = [...table];
            newTable[idx] = input;
            setTable(newTable);
            setMsg(`Inserted at ${idx}`);
        }

        await sleep(500);
        setActiveIdx(null);
        setActiveStep(null);
        setIsAnimating(false);
        setInput(prev => prev + 10);
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-6 w-full bg-white p-4 border border-black rounded shadow-inner">
            <div className="flex-1 w-full flex flex-col items-center">
                <div className="flex gap-2">
                    <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} className="border-2 border-black p-1 w-20 rounded font-bold" />
                    <SketchButton onClick={insert} disabled={isAnimating}>Insert</SketchButton>
                </div>
                <div className="h-6 font-bold text-purple-600 mt-2">{msg}</div>

                <div className="flex gap-1 overflow-x-auto w-full justify-center p-4">
                    {table.map((val, i) => (
                        <div key={i} className="flex flex-col items-center relative">
                            {activeIdx === i && (
                                <motion.div layoutId="probe-arrow" className="absolute -top-8 text-purple-500">
                                    <ArrowDown size={24} />
                                </motion.div>
                            )}
                            <div className={`w-8 h-10 md:w-10 md:h-12 border-2 border-black flex items-center justify-center font-bold text-sm transition-colors ${val !== null ? 'bg-purple-100' : 'bg-white'} ${activeIdx === i ? 'border-purple-500 ring-2 ring-purple-200' : ''}`}>
                                {val}
                            </div>
                            <span className="text-[10px] mt-1">{i}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Algorithm Walker */}
            <div className="w-full md:w-64 shrink-0">
                <AlgorithmStepWalker
                    title="Linear Probing Insert"
                    steps={algoSteps.length > 0 ? algoSteps : ["Ready to Hash..."]}
                    activeStep={activeStep}
                />
            </div>
        </div>
    );
};

// 5. Quadratic Probing Demo
export const QuadraticProbingDemo: React.FC = () => {
    const size = 10;
    const [table, setTable] = useState<(number | null)[]>(Array(size).fill(null));
    const [input, setInput] = useState(12);
    const [msg, setMsg] = useState("Ready");
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const insert = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setMsg("Hashing...");

        let hash = input % size;
        let idx = hash;
        setActiveIdx(idx);
        await sleep(600);

        let i = 0;
        let attempts = 0;

        // Quadratic Probing: (hash + i*i) % size
        while (table[idx] !== null && attempts < size) {
            i++;
            let step = i * i;
            setMsg(`Collision at ${idx}! Jumping ${step} (i=${i}²)...`);
            await sleep(800);

            idx = (hash + step) % size;
            setActiveIdx(idx);
            attempts++;
        }

        if (table[idx] !== null) {
            setMsg("Table Full / Limit Reached!");
        } else {
            const newTable = [...table];
            newTable[idx] = input;
            setTable(newTable);
            setMsg(`Inserted at ${idx}`);
        }

        await sleep(500);
        setActiveIdx(null);
        setIsAnimating(false);
        setInput(prev => prev + 10);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full bg-white p-4 border border-black rounded shadow-inner">
            <div className="flex gap-2">
                <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} className="border-2 border-black p-1 w-20 rounded font-bold" />
                <SketchButton onClick={insert} disabled={isAnimating}>Insert</SketchButton>
            </div>
            <div className="h-6 font-bold text-orange-600">{msg}</div>

            <div className="flex gap-1 overflow-x-auto w-full justify-center p-4">
                {table.map((val, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                        {activeIdx === i && (
                            <motion.div layoutId="q-probe-arrow" className="absolute -top-8 text-orange-500">
                                <ArrowDown size={24} />
                            </motion.div>
                        )}
                        <div className={`w-8 h-10 md:w-10 md:h-12 border-2 border-black flex items-center justify-center font-bold text-sm transition-colors ${val !== null ? 'bg-orange-100' : 'bg-white'}`}>
                            {val}
                        </div>
                        <span className="text-[10px] mt-1">{i}</span>
                    </div>
                ))}
            </div>
            <div className="text-xs text-gray-500 mt-1 font-mono bg-gray-100 px-2 py-1 rounded">
                Idx = (Hash + i²) % Size
            </div>
        </div>
    );
};

// 6. Comparison Chart
export const HashingComparison: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between p-2 border-b-2 border-black">
                <span className="font-bold w-1/3">Data Structure</span>
                <span className="font-bold w-1/3 text-center">Avg Search</span>
                <span className="font-bold w-1/3 text-right">Worst Search</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-red-50 border-l-4 border-red-500">
                <span className="w-1/3 font-bold">Array</span>
                <span className="w-1/3 text-center">O(n)</span>
                <span className="w-1/3 text-right text-red-600">O(n)</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-yellow-50 border-l-4 border-yellow-500">
                <span className="w-1/3 font-bold">BST</span>
                <span className="w-1/3 text-center">O(log n)</span>
                <span className="w-1/3 text-right text-red-600">O(n)</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-green-50 border-l-4 border-green-500 transform scale-105 shadow-md">
                <span className="w-1/3 font-bold flex items-center gap-1"><Hash size={16} /> Hash Table</span>
                <span className="w-1/3 text-center font-bold text-green-700">O(1) ⚡</span>
                <span className="w-1/3 text-right text-red-600">O(n)</span>
            </div>

            <p className="text-xs text-center text-gray-500 mt-2">*O(1) assumes a good hash function and low load factor.</p>
        </div>
    );
};
