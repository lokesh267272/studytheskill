import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowDown, Search, ArrowUp, AlertTriangle, ChevronsRight, Check, X, Layers } from 'lucide-react';

// Common Box Component for Arrays
const ArrayBox: React.FC<{ 
    val: number; 
    idx: number; 
    state: 'default' | 'checking' | 'found' | 'eliminated';
    label?: string;
    labelColor?: string;
}> = ({ val, idx, state, label, labelColor = 'text-black' }) => {
    const bgColors = {
        default: 'bg-white',
        checking: 'bg-yellow-100',
        found: 'bg-green-200',
        eliminated: 'bg-gray-200 opacity-50'
    };
    
    const borderColors = {
        default: 'border-black',
        checking: 'border-blue-500',
        found: 'border-green-600',
        eliminated: 'border-gray-400'
    };

    return (
        <div className="flex flex-col items-center relative">
            {label && (
                <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`absolute -top-8 text-xs font-bold ${labelColor} flex flex-col items-center`}
                >
                    {label}
                    <ArrowDown size={16}/>
                </motion.div>
            )}
            
            <motion.div 
                layout
                animate={{ 
                    backgroundColor: state === 'checking' ? '#fef9c3' : (state === 'found' ? '#bbf7d0' : (state === 'eliminated' ? '#e5e7eb' : '#ffffff')),
                    scale: state === 'checking' ? 1.1 : 1
                }}
                className={`w-10 h-10 md:w-12 md:h-12 border-2 ${borderColors[state]} flex items-center justify-center font-bold text-lg shadow-sm rounded-sm z-10`}
            >
                {val}
            </motion.div>
            
            <span className="text-[10px] font-mono text-gray-500 mt-1">{idx}</span>
        </div>
    );
};

// 1. Linear Search Visualizer
export const LinearSearchDemo: React.FC = () => {
    const [arr] = useState([15, 42, 8, 99, 23, 4, 16]);
    const [target, setTarget] = useState(23);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [foundIdx, setFoundIdx] = useState<number | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [msg, setMsg] = useState("Ready to search.");

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const search = async () => {
        if(isSearching) return;
        setIsSearching(true);
        setFoundIdx(null);
        setCurrentIndex(null);
        setMsg(`Starting Linear Search for ${target}...`);

        for(let i=0; i<arr.length; i++) {
            setCurrentIndex(i);
            setMsg(`Checking index ${i}: Is ${arr[i]} == ${target}?`);
            await sleep(800);

            if(arr[i] === target) {
                setMsg(`Found ${target} at index ${i}! 🎉`);
                setFoundIdx(i);
                setIsSearching(false);
                return;
            }
        }

        setMsg(`${target} not found in array.`);
        setCurrentIndex(null);
        setIsSearching(false);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full bg-white p-4 border-2 border-black rounded shadow-sketch">
            <div className="flex gap-4 items-center flex-wrap justify-center bg-gray-50 p-2 rounded">
                <span className="font-bold">Find:</span>
                <input 
                    type="number" 
                    value={target} 
                    onChange={e => setTarget(Number(e.target.value))}
                    className="w-16 p-2 border-2 border-black rounded font-bold"
                />
                <SketchButton onClick={search} disabled={isSearching}><Search size={16} className="mr-1 inline"/> Linear Search</SketchButton>
            </div>

            <div className="h-6 text-sm font-bold text-blue-600 font-hand">{msg}</div>

            <div className="flex gap-2 overflow-x-auto p-4 w-full justify-center">
                {arr.map((val, i) => (
                    <ArrayBox 
                        key={i} 
                        val={val} 
                        idx={i} 
                        state={foundIdx === i ? 'found' : (currentIndex === i ? 'checking' : 'default')}
                        label={currentIndex === i ? 'Curr' : undefined}
                        labelColor="text-blue-600"
                    />
                ))}
            </div>
            <p className="text-xs text-gray-500">Checking one by one. O(n).</p>
        </div>
    );
};

// 2. Binary Search Visualizer
export const BinarySearchDemo: React.FC = () => {
    // Must be sorted
    const [arr] = useState([2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]);
    const [target, setTarget] = useState(23);
    const [low, setLow] = useState<number | null>(null);
    const [high, setHigh] = useState<number | null>(null);
    const [mid, setMid] = useState<number | null>(null);
    const [foundIdx, setFoundIdx] = useState<number | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [msg, setMsg] = useState("Array must be SORTED.");

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const search = async () => {
        if(isSearching) return;
        setIsSearching(true);
        setFoundIdx(null);
        setLow(0);
        setHigh(arr.length - 1);
        setMid(null);
        setMsg(`Looking for ${target}...`);

        let l = 0;
        let h = arr.length - 1;

        while (l <= h) {
            setLow(l);
            setHigh(h);
            await sleep(800);

            let m = Math.floor((l + h) / 2);
            setMid(m);
            setMsg(`Mid index is ${m} (Value: ${arr[m]})`);
            await sleep(1000);

            if (arr[m] === target) {
                setMsg(`Found ${target} at index ${m}! 🎉`);
                setFoundIdx(m);
                setIsSearching(false);
                return;
            } else if (arr[m] < target) {
                setMsg(`${arr[m]} < ${target}. Ignore Left Half.`);
                l = m + 1;
            } else {
                setMsg(`${arr[m]} > ${target}. Ignore Right Half.`);
                h = m - 1;
            }
            await sleep(1000);
        }

        setMsg("Not found.");
        setIsSearching(false);
        setLow(null);
        setHigh(null);
        setMid(null);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full bg-white p-4 border-2 border-black rounded shadow-sketch">
             <div className="flex gap-4 items-center flex-wrap justify-center bg-gray-50 p-2 rounded">
                <span className="font-bold">Find:</span>
                <input 
                    type="number" 
                    value={target} 
                    onChange={e => setTarget(Number(e.target.value))}
                    className="w-16 p-2 border-2 border-black rounded font-bold"
                />
                <SketchButton onClick={search} disabled={isSearching} variant="neutral"><Search size={16} className="mr-1 inline"/> Binary Search</SketchButton>
            </div>

            <div className="h-6 text-sm font-bold text-blue-600 font-hand">{msg}</div>

            <div className="flex gap-1 overflow-x-auto p-4 w-full justify-center">
                {arr.map((val, i) => {
                    let state: 'default' | 'checking' | 'found' | 'eliminated' = 'default';
                    if (foundIdx === i) state = 'found';
                    else if (mid === i) state = 'checking';
                    else if (low !== null && high !== null && (i < low || i > high)) state = 'eliminated';

                    let label = undefined;
                    let labelColor = undefined;
                    
                    if (i === mid) { label = "Mid"; labelColor = "text-purple-600"; }
                    else if (i === low) { label = "L"; labelColor = "text-green-600"; }
                    else if (i === high) { label = "H"; labelColor = "text-red-600"; }

                    return (
                        <ArrayBox 
                            key={i} 
                            val={val} 
                            idx={i} 
                            state={state}
                            label={label}
                            labelColor={labelColor}
                        />
                    );
                })}
            </div>
            <p className="text-xs text-gray-500">Halving search space. O(log n).</p>
        </div>
    );
};

// 3. Complexity Visualization (Shrinking)
export const SearchComplexityVisual: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="border-2 border-black p-4 bg-gray-50 flex flex-col items-center rounded">
                <h4 className="font-bold mb-2">Linear Search O(n)</h4>
                <div className="w-full h-4 bg-blue-500 mb-1 animate-pulse"></div>
                <div className="w-full h-4 bg-blue-500 mb-1 animate-pulse delay-75"></div>
                <div className="w-full h-4 bg-blue-500 mb-1 animate-pulse delay-150"></div>
                <p className="text-xs mt-2 text-center">Steps depend linearly on input.</p>
            </div>

            <div className="border-2 border-black p-4 bg-gray-50 flex flex-col items-center rounded">
                <h4 className="font-bold mb-2">Binary Search O(log n)</h4>
                <div className="w-full h-4 bg-green-500 mb-1"></div>
                <div className="w-1/2 h-4 bg-green-500 mb-1"></div>
                <div className="w-1/4 h-4 bg-green-500 mb-1"></div>
                <div className="w-4 h-4 bg-green-500 mb-1"></div>
                <p className="text-xs mt-2 text-center">Input gets cut in half each time.</p>
            </div>
        </div>
    );
};

// 4. Space Complexity Comparison
export const SpaceComparison: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4 border-2 border-black p-4 bg-white rounded">
                <div className="bg-blue-100 p-2 rounded-full"><ChevronsRight /></div>
                <div>
                    <h4 className="font-bold">Iterative Binary Search</h4>
                    <p className="text-sm">Uses a loop. Only stores variables <code>low, high, mid</code>.</p>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold mt-1 inline-block">Space: O(1)</span>
                </div>
            </div>
            <div className="flex items-center gap-4 border-2 border-black p-4 bg-white rounded">
                <div className="bg-orange-100 p-2 rounded-full"><Layers /></div>
                <div>
                    <h4 className="font-bold">Recursive Binary Search</h4>
                    <p className="text-sm">Uses function calls. Creates a stack frame for each split.</p>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold mt-1 inline-block">Space: O(log n)</span>
                </div>
            </div>
        </div>
    );
};

// 5. Linear vs Binary Table
export const SearchComparisonTable: React.FC = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="w-full border-2 border-black text-center bg-white shadow-sketch">
                <thead>
                    <tr className="bg-gray-50 border-b-2 border-black text-ink font-bold">
                        <th className="p-3">Feature</th>
                        <th className="p-3">Linear Search</th>
                        <th className="p-3">Binary Search</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-300">
                        <td className="p-3 font-bold text-left">Pre-requisite</td>
                        <td className="p-3 text-green-600 font-bold">None (Unsorted OK)</td>
                        <td className="p-3 text-red-600 font-bold">Must be Sorted</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="p-3 font-bold text-left">Time Complexity</td>
                        <td className="p-3">O(n)</td>
                        <td className="p-3 font-bold text-green-600">O(log n)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="p-3 font-bold text-left">Speed</td>
                        <td className="p-3">Slow for large data</td>
                        <td className="p-3">Extremely Fast</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-bold text-left">Implementation</td>
                        <td className="p-3">Simple Loop</td>
                        <td className="p-3">Divide & Conquer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};