import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, ArrowDown, ArrowUp, Plus, Trash2, Eye, RefreshCw, Layers } from 'lucide-react';

// 1. Stack Concept (Plates Analogy)
export const StackConcept: React.FC = () => {
    const [plates, setPlates] = useState<number[]>([1, 2, 3]);
    
    const addPlate = () => {
        if (plates.length < 5) setPlates([...plates, plates.length + 1]);
    };
    
    const removePlate = () => {
        if (plates.length > 0) setPlates(plates.slice(0, -1));
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 mb-4">
                <SketchButton onClick={addPlate} disabled={plates.length >= 5}><Plus size={16}/> Add Plate</SketchButton>
                <SketchButton onClick={removePlate} disabled={plates.length === 0} variant="danger"><Trash2 size={16}/> Remove Plate</SketchButton>
            </div>
            
            <div className="relative flex flex-col-reverse items-center justify-start h-48 w-40 border-b-8 border-black">
                <AnimatePresence>
                    {plates.map((p, i) => (
                        <motion.div
                            key={p}
                            initial={{ y: -100, opacity: 0, rotate: Math.random() * 6 - 3 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -100, opacity: 0, rotate: Math.random() * 10 - 5 }}
                            transition={{ type: "spring", stiffness: 120, damping: 12 }}
                            className="w-32 h-6 bg-white border-2 border-black rounded-full mb-1 shadow-sm flex items-center justify-center relative z-10"
                            style={{ width: `${100 - i * 5}%` }} // Tapering slightly for 3D effect
                        >
                            <div className="w-full h-full rounded-full border border-gray-100 opacity-50"></div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {/* Base/Table */}
                <div className="absolute bottom-0 w-48 h-2 bg-black rounded"></div>
            </div>
            <p className="font-hand font-bold text-blue-600">LIFO: Last In, First Out</p>
        </div>
    );
};

// 2. Stack Playground (Core Operations)
export const StackPlayground: React.FC = () => {
    const [stack, setStack] = useState<number[]>([10, 20]);
    const maxSize = 5;
    const [inputValue, setInputValue] = useState(30);
    const [message, setMessage] = useState("Ready");
    const [isAnimating, setIsAnimating] = useState(false);
    const [highlightTop, setHighlightTop] = useState(false);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const push = async () => {
        if (isAnimating) return;
        if (stack.length >= maxSize) {
            setMessage("Error: Stack Overflow! (Stack is Full)");
            return;
        }

        setIsAnimating(true);
        setMessage(`Pushing ${inputValue}...`);
        
        // Visualize checking TOP (handled via layoutId highlight ideally, but let's stick to sequence)
        setHighlightTop(true);
        await sleep(400);
        
        // Add element
        setStack([...stack, inputValue]);
        setMessage("Top Incremented. Element Added.");
        setHighlightTop(false);
        await sleep(500);
        
        setIsAnimating(false);
        setMessage("Ready.");
    };

    const pop = async () => {
        if (isAnimating) return;
        if (stack.length === 0) {
            setMessage("Error: Stack Underflow! (Stack is Empty)");
            return;
        }

        setIsAnimating(true);
        setMessage("Popping Top Element...");
        setHighlightTop(true);
        await sleep(400);

        setStack(stack.slice(0, -1));
        setMessage("Element Removed. Top Decremented.");
        setHighlightTop(false);
        await sleep(500);

        setIsAnimating(false);
        setMessage("Ready.");
    };

    const peek = async () => {
        if (stack.length === 0) {
            setMessage("Stack is Empty. Nothing to peek.");
            return;
        }
        setMessage(`Peek: Top element is ${stack[stack.length - 1]}`);
        setHighlightTop(true);
        await sleep(1000);
        setHighlightTop(false);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full p-4 border-2 border-black bg-white rounded shadow-sketch">
            {/* Controls */}
            <div className="flex gap-2 items-center flex-wrap justify-center">
                <input 
                    type="number" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-16 p-2 border-2 border-black rounded font-bold"
                />
                <SketchButton onClick={push} disabled={isAnimating}>Push</SketchButton>
                <SketchButton onClick={pop} disabled={isAnimating} variant="danger">Pop</SketchButton>
                <SketchButton onClick={peek} disabled={isAnimating} variant="neutral"><Eye size={16}/></SketchButton>
            </div>

            <div className="h-6 font-bold text-blue-600 text-sm md:text-base font-hand">{message}</div>

            <div className="flex items-end gap-2">
                {/* The Stack Visualization */}
                <div className="relative w-32 h-64 border-l-4 border-b-4 border-r-4 border-black bg-gray-50 flex flex-col-reverse justify-start p-2 gap-1 overflow-hidden">
                    <AnimatePresence>
                        {stack.map((val, i) => (
                            <motion.div
                                key={`${val}-${i}`} // Unique key logic for demo
                                initial={{ y: -200, opacity: 0, rotate: -5 }}
                                animate={{ 
                                    y: 0, 
                                    opacity: 1,
                                    rotate: 0,
                                    backgroundColor: (highlightTop && i === stack.length - 1) ? '#fef08a' : '#ffffff' 
                                }}
                                exit={{ y: -200, opacity: 0, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                                className="w-full h-10 border-2 border-black flex items-center justify-center font-bold shadow-sm shrink-0 rounded-sm relative"
                            >
                                {val}
                                {i === stack.length - 1 && (
                                    <motion.div 
                                        layoutId="stack-pointer-line"
                                        className="absolute right-0 top-1/2 w-4 h-[2px] bg-red-500 translate-x-full"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {/* Capacity Lines */}
                    <div className="absolute top-0 right-0 text-[10px] text-gray-400 p-1 font-mono">Max: {maxSize}</div>
                </div>

                {/* Top Pointer Indicator - Glides alongside */}
                <div className="h-64 relative w-24">
                     <AnimatePresence>
                        {stack.length > 0 && (
                            <motion.div 
                                layoutId="stack-top-label"
                                className="absolute left-0 flex items-center gap-2 text-red-600 font-bold"
                                // 10 (padding) + index * 44 (height + gap)
                                // But since we are bottom aligned, we need to calculate bottom position
                                style={{ bottom: 10 + (stack.length - 1) * 44 + 10 }} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <ArrowRight size={24} />
                                <span className="font-hand">TOP ({stack.length - 1})</span>
                            </motion.div>
                        )}
                        {stack.length === 0 && (
                             <motion.div 
                                className="absolute bottom-2 left-0 text-gray-400 text-xs font-bold"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                             >
                                 Empty
                             </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

// 3. String Reverser Application
export const StringReverser: React.FC = () => {
    const [input, setInput] = useState("HELLO");
    const [stack, setStack] = useState<string[]>([]);
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const runReverse = async () => {
        if(isRunning) return;
        setIsRunning(true);
        setStack([]);
        setOutput("");

        // Push Phase
        for (const char of input.split('')) {
            await sleep(400);
            setStack(prev => [...prev, char]);
        }

        await sleep(500);

        // Pop Phase
        const tempStack = input.split('');
        while(tempStack.length > 0) {
            await sleep(400);
            const char = tempStack.pop();
            setStack([...tempStack]); // Visual update
            if(char) setOutput(prev => prev + char);
        }

        setIsRunning(false);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value.toUpperCase())}
                    maxLength={6}
                    className="border-2 border-black p-2 rounded w-32 font-bold uppercase"
                />
                <SketchButton onClick={runReverse} disabled={isRunning}>Reverse</SketchButton>
            </div>

            <div className="grid grid-cols-3 gap-8 items-center w-full max-w-lg">
                <div className="text-center font-bold text-xl font-hand tracking-widest">{input}</div>
                
                {/* Stack */}
                <div className="flex justify-center">
                    <div className="w-16 h-40 border-l-4 border-b-4 border-r-4 border-black bg-white flex flex-col-reverse p-1 gap-1">
                        <AnimatePresence>
                            {stack.map((c, i) => (
                                <motion.div 
                                    key={`${c}-${i}`}
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    className="w-full h-8 border border-black bg-yellow-100 flex items-center justify-center font-bold shadow-sm"
                                >
                                    {c}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="text-center font-bold text-xl text-blue-600 min-h-[2rem] font-hand tracking-widest">{output}</div>
            </div>
            <p className="text-xs text-center text-gray-500 font-hand">1. Push all characters. <br/> 2. Pop all characters.</p>
        </div>
    );
};

// 4. Balanced Parentheses Visualizer
export const BalancedParentheses: React.FC = () => {
    // A simplified visual just to show the concept
    return (
        <div className="flex flex-col items-center gap-4 p-4 border-2 border-black bg-white rounded shadow-sm">
             <div className="text-2xl font-mono tracking-widest mb-2">
                 ( ( ) )
             </div>
             <div className="flex gap-4">
                 <div className="flex flex-col items-center">
                     <span className="font-bold text-green-600 mb-1 font-hand">Push '('</span>
                     <div className="w-12 h-12 border-2 border-black bg-green-100 flex items-center justify-center font-bold rounded-sm">(</div>
                 </div>
                 <ArrowRight className="mt-8"/>
                 <div className="flex flex-col items-center">
                     <span className="font-bold text-red-600 mb-1 font-hand">Pop on ')'</span>
                     <div className="w-12 h-12 border-2 border-dashed border-red-400 flex items-center justify-center font-bold text-red-400 opacity-50 rounded-sm">)</div>
                 </div>
             </div>
             <p className="text-sm mt-2 font-hand">If stack is empty at end, it's balanced!</p>
        </div>
    );
};

// 5. Stack Implementation Comparison
export const StackImplComparison: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Array Stack */}
            <div className="border-2 border-black p-4 bg-white rounded shadow-sketch">
                <h4 className="font-bold text-center mb-4 flex items-center justify-center gap-2 font-hand">
                    <Layers size={18}/> Array Implementation
                </h4>
                <div className="flex flex-col-reverse w-20 mx-auto border-l-2 border-r-2 border-b-2 border-gray-400 h-32 bg-gray-100 relative">
                    <div className="w-full h-8 border-b border-gray-300 flex items-center justify-center bg-blue-100">10</div>
                    <div className="w-full h-8 border-b border-gray-300 flex items-center justify-center bg-blue-100">20</div>
                    {/* Fixed Size indicator */}
                    <div className="absolute top-0 w-full border-t-2 border-red-500"></div>
                    <span className="absolute -top-6 left-0 right-0 text-center text-[10px] text-red-500 font-bold">FIXED SIZE</span>
                </div>
                <ul className="mt-4 text-sm list-disc pl-4 space-y-1 font-hand">
                    <li>Easy to implement</li>
                    <li><span className="text-red-600 font-bold">Overflow</span> if full</li>
                    <li>Fixed memory allocation</li>
                </ul>
            </div>

            {/* Linked List Stack */}
            <div className="border-2 border-black p-4 bg-white rounded shadow-sketch">
                <h4 className="font-bold text-center mb-4 flex items-center justify-center gap-2 font-hand">
                    <ArrowDown size={18}/> Linked List Imp.
                </h4>
                <div className="flex flex-col items-center h-32 justify-start gap-1">
                    <div className="flex items-center">
                        <div className="w-12 h-8 border border-black bg-green-100 flex items-center justify-center text-sm font-bold shadow-sm">Top</div>
                        <ArrowRight size={14}/>
                        <div className="w-8 h-8 border border-black flex items-center justify-center text-xs bg-white">Node</div>
                    </div>
                    <ArrowDown size={14}/>
                    <div className="w-8 h-8 border border-black flex items-center justify-center text-xs bg-white">Node</div>
                    <ArrowDown size={14}/>
                    <span className="text-xs font-bold">NULL</span>
                </div>
                 <ul className="mt-4 text-sm list-disc pl-4 space-y-1 font-hand">
                    <li>Dynamic Size</li>
                    <li><span className="text-green-600 font-bold">No Overflow</span> (unless RAM full)</li>
                    <li>Extra pointer memory</li>
                </ul>
            </div>
        </div>
    );
};
