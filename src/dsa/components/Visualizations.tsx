import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Label } from 'recharts';
import { SketchCard } from './SketchyUI';
import { Search, Clock, Box, Database, Zap, AlertTriangle } from 'lucide-react';

// 1. Comparison: Turtle vs Rabbit (Simple vs Efficient)
export const SpeedComparison: React.FC = () => {
    const [race, setRace] = useState(false);

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center bg-gray-50 p-4 border-2 border-black rounded-lg relative overflow-hidden h-32 shadow-inner">
                {/* Slow Algorithm */}
                <motion.div
                    animate={race ? { x: 200, rotate: [0, 5, -5, 0] } : { x: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="absolute top-4 left-2 flex flex-col items-center z-10"
                >
                    <Box size={32} className="text-red-500 drop-shadow-sm" />
                    <span className="text-sm font-bold font-hand">O(n)</span>
                </motion.div>

                {/* Fast Algorithm */}
                <motion.div
                    animate={race ? { x: 280, scale: [1, 1.1, 1] } : { x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="absolute bottom-4 left-2 flex flex-col items-center z-10"
                >
                    <Zap size={32} className="text-yellow-500 drop-shadow-sm" />
                    <span className="text-sm font-bold font-hand">O(1)</span>
                </motion.div>

                {/* Track markings */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

                {/* Finish Line */}
                <div className="absolute right-10 top-0 bottom-0 w-2 bg-black/10 border-l-2 border-dashed border-black"></div>
            </div>
            <button
                onClick={() => setRace(!race)}
                className="self-center bg-black text-white px-6 py-2 font-hand font-bold rounded shadow-sketch hover:scale-105 transition-transform"
            >
                {race ? "Reset Race" : "Start Race"}
            </button>
        </div>
    );
};

// 2. Loop Visualizer (Counting Operations)
export const LoopVisualizer: React.FC = () => {
    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running && count < n) {
            const timer = setTimeout(() => setCount(c => c + 1), 500);
            return () => clearTimeout(timer);
        } else if (count >= n) {
            setRunning(false);
        }
    }, [count, n, running]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 w-full justify-center">
                <span className="font-bold text-lg font-hand">Input (n): {n}</span>
                <input
                    type="range" min="1" max="10" value={n}
                    onChange={(e) => { setN(parseInt(e.target.value)); setCount(0); setRunning(false); }}
                    className="border-2 border-black accent-black cursor-pointer"
                />
            </div>

            <div className="flex gap-2 p-4 min-h-[60px] flex-wrap justify-center">
                <AnimatePresence>
                    {Array.from({ length: n }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{
                                scale: i < count ? 1.1 : 1,
                                opacity: i < count ? 1 : 0.4,
                                rotate: i < count ? 0 : -5,
                                backgroundColor: i < count ? '#fef08a' : '#f3f4f6'
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`w-10 h-10 border-2 border-black flex items-center justify-center font-bold shadow-sm rounded-sm`}
                        >
                            {i + 1}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="text-xl font-bold font-hand">Operations: {count}</div>

            <button
                onClick={() => { setCount(0); setRunning(true); }}
                className="bg-accent border-2 border-black px-4 py-2 rounded shadow-sketch font-bold hover:bg-blue-300 transition-colors"
                disabled={running}
            >
                {running ? "Running..." : "Run Code"}
            </button>
        </div>
    );
};

// 3. Search Visualizer (Best/Worst Case)
export const SearchVisualizer: React.FC = () => {
    const items = [10, 45, 2, 8, 99, 23, 11];
    const [target, setTarget] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [found, setFound] = useState(false);

    const startSearch = (val: number) => {
        setTarget(val);
        setCurrentIndex(0);
        setFound(false);
    };

    useEffect(() => {
        if (target !== null && currentIndex >= 0 && !found) {
            if (currentIndex >= items.length) {
                return;
            }

            if (items[currentIndex] === target) {
                setFound(true);
            } else {
                const timer = setTimeout(() => setCurrentIndex(prev => prev + 1), 600);
                return () => clearTimeout(timer);
            }
        }
    }, [currentIndex, target, found, items]);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
                <button onClick={() => startSearch(10)} className="bg-highlight px-4 py-2 border-2 border-black rounded shadow-sketch font-bold hover:-translate-y-1 transition-transform">
                    Find 10 (Best Case)
                </button>
                <button onClick={() => startSearch(11)} className="bg-danger px-4 py-2 border-2 border-black rounded shadow-sketch font-bold hover:-translate-y-1 transition-transform">
                    Find 11 (Worst Case)
                </button>
            </div>

            <div className="flex gap-2 overflow-x-auto p-4 relative">
                {items.map((val, idx) => (
                    <div
                        key={idx}
                        className={`w-12 h-12 border-2 border-black flex items-center justify-center font-bold text-lg relative z-10 bg-white shadow-sm rounded-sm transition-colors
                            ${found && idx === currentIndex ? 'bg-green-400' : ''}
                        `}
                    >
                        {val}
                        {/* Gliding Search Highlight */}
                        {idx === currentIndex && !found && (
                            <motion.div
                                layoutId="search-highlight"
                                className="absolute inset-0 border-4 border-blue-500 bg-blue-100/50 z-20 rounded-sm"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="h-8 font-bold text-lg font-hand">
                {found ? `Found at index ${currentIndex}! Total checks: ${currentIndex + 1}` : currentIndex > -1 ? `Checking index ${currentIndex}...` : "Select a case"}
            </div>
        </div>
    );
};

// 4. Complexity Graph
export const ComplexityGraph: React.FC<{ types: ('O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n^2)')[] }> = ({ types }) => {
    const data = Array.from({ length: 15 }, (_, i) => {
        const n = i + 1;
        return {
            n,
            'O(1)': 1,
            'O(log n)': Math.log2(n),
            'O(n)': n,
            'O(n log n)': n * Math.log2(n),
            'O(n^2)': n * n,
        };
    });

    const colors = {
        'O(1)': '#10b981',   // Green
        'O(log n)': '#3b82f6', // Blue
        'O(n)': '#f59e0b',   // Yellow
        'O(n log n)': '#f97316', // Orange
        'O(n^2)': '#ef4444'  // Red
    };

    return (
        <div className="h-72 w-full bg-white border-2 border-black p-4 rounded-lg relative shadow-sketch">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="n" tick={false} stroke="black">
                        <Label value="Input Size (n)" offset={-20} position="insideBottom" style={{ fontFamily: 'Patrick Hand', fontWeight: 'bold', fill: 'black' }} />
                    </XAxis>
                    <YAxis tick={false} stroke="black">
                        <Label value="Operations / Time" angle={-90} position="insideLeft" offset={0} style={{ fontFamily: 'Patrick Hand', fontWeight: 'bold', fill: 'black' }} />
                    </YAxis>
                    <Tooltip
                        contentStyle={{ border: '2px solid black', borderRadius: '8px', fontFamily: '"Patrick Hand"', backgroundColor: 'white', color: 'black' }}
                        itemStyle={{ color: 'black' }}
                        formatter={(value: any) => parseFloat(value).toFixed(2)}
                    />
                    {types.map(t => (
                        <Line
                            key={t}
                            type="monotone"
                            dataKey={t}
                            stroke={colors[t]}
                            strokeWidth={4}
                            dot={false}
                            isAnimationActive={true}
                            animationDuration={1500}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
            <div className="absolute top-4 right-4 bg-white/95 p-2 border-2 border-black rounded text-[10px] shadow-sm z-20">
                {types.map(t => (
                    <div key={t} className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full border border-black" style={{ backgroundColor: colors[t] }}></div>
                        <span className="font-bold text-black">{t}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 5. Recursion Stack Visualizer
export const RecursionVisualizer: React.FC = () => {
    const [depth, setDepth] = useState(0);
    const maxDepth = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setDepth(d => d < maxDepth ? d + 1 : 0);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="w-40 border-b-4 border-l-4 border-r-4 border-black min-h-[220px] flex flex-col-reverse items-center justify-start p-2 gap-1 bg-gray-50 relative shadow-inner">
                <span className="absolute -right-24 top-10 transform rotate-90 text-gray-400 font-bold tracking-widest">STACK MEMORY</span>
                <AnimatePresence>
                    {Array.from({ length: depth }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -50, opacity: 0, rotate: -2 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ x: 50, opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 120, damping: 12 }}
                            className="w-full h-10 bg-accent border-2 border-black flex items-center justify-center font-bold shadow-sm rounded-sm"
                        >
                            Func({i + 1})
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <p className="mt-2 font-bold font-hand text-lg">Space Complexity: O(n)</p>
            <p className="text-sm text-gray-600">(Recursion Depth)</p>
        </div>
    );
};

// 6. Nested Loop Visualizer
export const NestedLoopVisualizer: React.FC = () => {
    const [outer, setOuter] = useState(0);
    const [inner, setInner] = useState(0);
    const size = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setInner(i => {
                if (i < size - 1) return i + 1;
                setOuter(o => (o < size - 1 ? o + 1 : 0));
                return 0;
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-3 gap-2 p-4 border-2 border-black bg-white rounded-lg w-fit mx-auto shadow-sketch">
            {Array.from({ length: size }).map((_, i) => (
                Array.from({ length: size }).map((_, j) => (
                    <motion.div
                        key={`${i}-${j}`}
                        animate={{
                            scale: (i === outer && j === inner) ? 1.1 : 1,
                            backgroundColor: (i === outer && j === inner) ? '#fca5a5' : '#fff',
                            rotate: (i === outer && j === inner) ? 3 : 0
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center font-bold rounded-sm"
                    >
                        {i},{j}
                    </motion.div>
                ))
            ))}
        </div>
    );
};