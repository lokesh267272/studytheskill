import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, ArrowUp, Plus, Trash2, Link as LinkIcon, ChevronsRight } from 'lucide-react';

// 1. Node Anatomy (Data | Next)
export const NodeAnatomy: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-6 p-4">
            <div className="flex items-center gap-4">
                {/* Node */}
                <div className="flex border-4 border-black bg-white shadow-sketch rounded-lg overflow-hidden transform hover:scale-105 transition-transform cursor-help">
                    {/* Data Section */}
                    <div className="p-4 bg-yellow-100 border-r-4 border-black w-28 text-center flex flex-col items-center justify-center">
                        <span className="font-bold text-2xl">10</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-1">Data</span>
                    </div>
                    {/* Pointer Section */}
                    <div className="p-4 bg-blue-100 w-28 text-center flex flex-col items-center justify-center relative group">
                        <div className="w-4 h-4 bg-black rounded-full mb-1 group-hover:bg-blue-600 transition-colors"></div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Next</span>

                        {/* Hover Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Address: 0x4F2A
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center animate-pulse">
                    <ArrowRight size={48} strokeWidth={2.5} className="text-gray-700" />
                    <span className="text-xs font-mono text-gray-500">Points to</span>
                </div>

                {/* Next Node Placeholder */}
                <div className="w-16 h-16 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-300 font-bold text-2xl">
                    ?
                </div>
            </div>
            <p className="text-sm bg-gray-50 p-2 border border-black rounded shadow-sm">
                <strong>Tip:</strong> A node has two distinct parts. The <span className="text-yellow-600 font-bold">Data</span> holds the value, and the <span className="text-blue-600 font-bold">Next Pointer</span> holds the address of the neighbor.
            </p>
        </div>
    );
};

// 2. Scattered Memory Visualization
export const ScatteredMemory: React.FC = () => {
    // Simulating random memory blocks
    const nodes = [
        { id: 1, val: 10, x: 20, y: 20, nextId: 2 },
        { id: 2, val: 20, x: 180, y: 80, nextId: 3 },
        { id: 3, val: 30, x: 60, y: 140, nextId: null },
    ];

    return (
        <div className="relative w-full h-64 border-2 border-black bg-white rounded-lg overflow-hidden p-4 shadow-inner">
            <div className="absolute top-2 left-2 bg-yellow-100 px-2 py-1 border border-black text-xs font-bold z-10 shadow-sm">RAM (Heap Memory)</div>

            {/* Draw Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                    </marker>
                </defs>
                {nodes.map((node) => {
                    const nextNode = nodes.find(n => n.id === node.nextId);
                    if (!nextNode) return null;
                    return (
                        <g key={`line-${node.id}`}>
                            <path
                                d={`M ${node.x + 60} ${node.y + 24} Q ${node.x + 100} ${node.y} ${nextNode.x} ${nextNode.y + 24}`}
                                stroke="black"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                                markerEnd="url(#arrowhead)"
                                className="animate-[dash_20s_linear_infinite]"
                            />
                        </g>
                    );
                })}
            </svg>

            {/* Draw Nodes */}
            {nodes.map(node => (
                <div
                    key={node.id}
                    className="absolute w-24 h-12 border-2 border-black bg-white flex shadow-sketch z-10 hover:scale-110 transition-transform cursor-pointer"
                    style={{ left: node.x, top: node.y }}
                >
                    <div className="w-2/3 border-r-2 border-black flex items-center justify-center font-bold bg-yellow-50">{node.val}</div>
                    <div className="w-1/3 flex items-center justify-center bg-blue-100">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    {/* Address Tag */}
                    <div className="absolute -top-5 left-0 text-[10px] bg-gray-200 px-1 border border-black font-mono">0x{node.id}00</div>
                    {/* Pointer Value */}
                    <div className="absolute -bottom-5 right-0 text-[10px] text-blue-600 font-mono font-bold">
                        {node.nextId ? `-> 0x${node.nextId}00` : 'NULL'}
                    </div>
                </div>
            ))}

            {/* Random Noise Blocks */}
            <div className="absolute top-10 right-20 w-12 h-8 border border-gray-200 bg-gray-100 opacity-50"></div>
            <div className="absolute bottom-10 left-40 w-16 h-8 border border-gray-200 bg-gray-100 opacity-50"></div>
        </div>
    );
};

// 3. Types of Linked Lists
export const LLTypes: React.FC<{ type: 'SINGLY' | 'DOUBLY' | 'CIRCULAR' }> = ({ type }) => {
    return (
        <div className="flex items-center justify-center gap-1 overflow-x-auto py-8">
            {[10, 20, 30].map((val, i) => (
                <React.Fragment key={i}>
                    {/* Doubly Link Back */}
                    {type === 'DOUBLY' && i > 0 && (
                        <div className="flex flex-col items-center -mr-2 z-0 relative top-3">
                            <div className="w-8 h-[2px] bg-black"></div>
                            <div className="absolute left-0 -top-1 border-t-[4px] border-t-transparent border-r-[6px] border-r-black border-b-[4px] border-b-transparent"></div>
                        </div>
                    )}

                    {/* Node */}
                    <div className="flex flex-col items-center group z-10">
                        <div className="flex border-2 border-black bg-white shadow-sketch rounded-sm overflow-hidden">
                            {type === 'DOUBLY' && <div className="w-6 border-r-2 border-black bg-green-100 flex items-center justify-center text-[8px] font-bold">PREV</div>}
                            <div className="w-10 h-10 flex items-center justify-center font-bold text-lg">{val}</div>
                            <div className="w-8 border-l-2 border-black bg-blue-100 flex items-center justify-center text-[8px] font-bold relative">
                                NEXT
                                <div className="absolute w-1 h-1 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Forward Link */}
                    {i < 2 && (
                        <div className="flex flex-col items-center -ml-2 z-0 relative -top-3">
                            <ArrowRight size={32} strokeWidth={1.5} />
                        </div>
                    )}
                </React.Fragment>
            ))}

            {/* End Connections */}
            {type === 'CIRCULAR' ? (
                <div className="relative ml-2">
                    <div className="w-10 h-10 flex items-center justify-center text-[10px] font-bold border-2 border-dashed border-black rounded-full bg-gray-50">HEAD</div>
                    {/* Loop Visual */}
                    <div className="absolute top-1/2 left-1/2 w-48 h-20 border-b-2 border-l-2 border-r-2 border-black rounded-b-full border-dashed opacity-30 -translate-x-[90%] pointer-events-none"></div>
                </div>
            ) : (
                <div className="flex flex-col items-center mx-2 opacity-50">
                    <ArrowRight size={24} />
                    <span className="text-red-600 font-bold text-xs border border-red-200 bg-red-50 px-1">NULL</span>
                </div>
            )}
        </div>
    );
};

// 4. Linked List Playground (Interactive)
import { AlgorithmStepWalker } from './AlgorithmStepWalker';

export const LinkedListPlayground: React.FC = () => {
    const [list, setList] = useState<number[]>([10, 20, 30]);
    const [inputValue, setInputValue] = useState(99);
    const [isAnimating, setIsAnimating] = useState(false);
    const [message, setMessage] = useState("Ready");
    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
    const [currPointer, setCurrPointer] = useState<number | null>(null);

    // Algorithm Steps State
    const [algoSteps, setAlgoSteps] = useState<string[]>([]);
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [algoTitle, setAlgoTitle] = useState("");

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const insertHead = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAlgoTitle("Insert at Head");
        setAlgoSteps([
            "Create new node(val)",
            "newNode.next = head",
            "head = newNode"
        ]);
        setMessage("Creating New Node...");

        // Step 0: Create Node
        setActiveStep(0);
        await sleep(800);

        // Step 1: Link to Head
        setMessage("newNode.next = head");
        setActiveStep(1);
        setList([inputValue, ...list]); // Visually, it appears at start
        setHighlightIndex(0);
        await sleep(800);

        // Step 2: Update Head
        setMessage("head = newNode");
        setActiveStep(2);
        await sleep(800);

        // Finish
        setActiveStep(null);
        setHighlightIndex(null);
        setIsAnimating(false);
        setMessage("Ready.");
    };

    const insertTail = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAlgoTitle("Insert at Tail");

        if (list.length === 0) {
            setAlgoSteps(["if (head == null) head = newNode"]);
            setActiveStep(0);
            setMessage("List empty. Head = newNode.");
            setList([inputValue]);
            await sleep(1000);
            setActiveStep(null);
        } else {
            setAlgoSteps([
                "Create new node(val)",
                "curr = head",
                "while (curr.next != null) curr = curr.next",
                "curr.next = newNode"
            ]);

            // Step 0: Create
            setActiveStep(0);
            setMessage("Creating New Node...");
            await sleep(600);

            // Step 1: Init Curr
            setActiveStep(1);
            setMessage("Start at Head...");
            setCurrPointer(0);
            await sleep(600);

            // Step 2: Traverse
            setActiveStep(2);
            for (let i = 0; i < list.length - 1; i++) {
                setCurrPointer(i);
                setMessage(`Checking node ${list[i]}... Next exists? Yes.`);
                await sleep(600);
                setCurrPointer(i + 1); // Move to next
            }
            setMessage("Reached last node.");
            await sleep(600);

            // Step 3: Link
            setActiveStep(3);
            setMessage("curr.next = newNode");
            setList([...list, inputValue]);
            setHighlightIndex(list.length); // The new last index
            setCurrPointer(null);
            await sleep(1000);
        }

        setHighlightIndex(null);
        setActiveStep(null);
        setIsAnimating(false);
        setMessage("Ready.");
    };

    const deleteHead = async () => {
        if (isAnimating || list.length === 0) return;
        setIsAnimating(true);
        setAlgoTitle("Delete Head");
        setAlgoSteps([
            "temp = head",
            "head = head.next",
            "free(temp)"
        ]);

        setActiveStep(0);
        setHighlightIndex(0);
        setMessage("Marking head to delete...");
        await sleep(600);

        setActiveStep(1);
        setMessage("Moving head forward...");
        setList(list.slice(1)); // Visually remove immediately for simplicity in React, or could animate exit
        setHighlightIndex(null);
        await sleep(600);

        setActiveStep(2);
        setMessage("Memory freed.");
        await sleep(500);

        setActiveStep(null);
        setIsAnimating(false);
        setMessage("Ready.");
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-6 w-full bg-white p-4 border-2 border-black rounded-lg shadow-sketch">
            {/* Left: Visualization */}
            <div className="flex-1 flex flex-col items-center w-full">
                {/* Control Panel */}
                <div className="flex gap-4 items-center flex-wrap justify-center bg-gray-50 p-2 rounded border border-gray-200 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">Value:</span>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={e => setInputValue(Number(e.target.value))}
                            className="w-16 p-2 border-2 border-black rounded font-bold shadow-sm focus:shadow-sketch outline-none transition-shadow"
                        />
                    </div>
                    <SketchButton onClick={insertHead} disabled={isAnimating}>
                        <Plus size={16} className="inline mr-1" /> Head
                    </SketchButton>
                    <SketchButton onClick={insertTail} disabled={isAnimating} variant="neutral">
                        <Plus size={16} className="inline mr-1" /> Tail
                    </SketchButton>
                    <SketchButton onClick={deleteHead} disabled={isAnimating} variant="danger">
                        <Trash2 size={16} className="inline mr-1" /> Head
                    </SketchButton>
                </div>

                {/* Status Message */}
                <div className="h-8 font-bold text-blue-600 font-hand text-lg mb-2">{message}</div>

                {/* Visualization Area */}
                <div className="flex items-center gap-0 overflow-x-auto w-full p-4 min-h-[180px] pt-12 scrollbar-thin border-2 border-dashed border-gray-200 rounded-lg relative">
                    {/* Head Label */}
                    <div className="flex flex-col items-center mr-2 opacity-80 relative z-10">
                        <div className="text-xs font-bold bg-black text-white px-2 py-1 rounded mb-1">HEAD</div>
                        <ArrowRight size={20} className="text-black" />
                    </div>

                    <AnimatePresence mode='popLayout'>
                        {list.map((val, i) => (
                            <motion.div
                                key={`${val}-${i}`} // Composite key
                                layout
                                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: highlightIndex === i ? 1.05 : 1,
                                }}
                                exit={{ opacity: 0, scale: 0, y: 30 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className={`flex items-center shrink-0 relative group`}
                            >
                                {/* Current Pointer Indicator */}
                                {currPointer === i && (
                                    <motion.div
                                        layoutId="curr-pointer"
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-purple-600 font-bold flex flex-col items-center z-20"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <span className="text-xs bg-purple-100 px-1 border border-purple-300 rounded shadow-sm">curr</span>
                                        <ArrowUp className="rotate-180" size={24} />
                                    </motion.div>
                                )}

                                {/* The Node Block */}
                                <div className={`flex flex-col items-center relative z-10 mx-1`}>
                                    <div className={`flex border-2 ${highlightIndex === i ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-black shadow-sketch'} bg-white rounded overflow-hidden transition-all duration-300`}>
                                        {/* Data Part */}
                                        <div className={`w-12 h-12 flex items-center justify-center font-bold text-lg border-r-2 border-black ${highlightIndex === i ? 'bg-blue-50' : 'bg-yellow-50'}`}>
                                            {val}
                                        </div>

                                        {/* Pointer Part */}
                                        <div className={`w-10 h-12 flex items-center justify-center ${highlightIndex === i ? 'bg-blue-100' : 'bg-gray-100'}`}>
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-300 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">0x{1000 + i * 4}</span>
                                </div>

                                {/* The Link Arrow */}
                                {i < list.length - 1 ? (
                                    <div className="text-black mx-1">
                                        <ArrowRight size={24} strokeWidth={2} />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center mx-2 opacity-50">
                                        <ArrowRight size={24} />
                                        <span className="text-red-500 font-bold text-[10px]">NULL</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {list.length === 0 && (
                        <div className="flex flex-col items-center mx-2 opacity-50">
                            <span className="text-red-500 font-bold text-sm">NULL</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Code Walker */}
            {algoSteps.length > 0 && (
                <div className="w-full md:w-64 shrink-0 animate-fade-in-up">
                    <AlgorithmStepWalker
                        title={algoTitle}
                        steps={algoSteps}
                        activeStep={activeStep}
                    />
                </div>
            )}
        </div>
    );
};

// 5. Array vs Linked List Comparison
export const LLvsArray: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="border-2 border-black p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-bold text-center mb-4 text-red-600 bg-red-50 p-2 border border-red-200 rounded">Array (Contiguous)</h4>
                <div className="flex justify-center my-6">
                    {[1, 2, 3, 4].map(x => (
                        <div key={x} className="w-12 h-12 border-2 border-black bg-white flex flex-col items-center justify-center -mr-[2px] font-bold relative z-0 hover:z-10 hover:scale-110 transition-transform">
                            {x}
                            <span className="text-[8px] absolute -bottom-4 text-gray-500">{1000 + (x - 1) * 4}</span>
                        </div>
                    ))}
                </div>
                <ul className="mt-8 text-sm space-y-2 list-disc pl-4 text-gray-700">
                    <li><span className="font-bold text-red-600">Fixed Size</span> (Hard to grow)</li>
                    <li><span className="font-bold text-green-600">Fast Access O(1)</span> (Math works)</li>
                    <li><span className="font-bold text-red-600">Slow Insert O(n)</span> (Shifting)</li>
                </ul>
            </div>

            <div className="border-2 border-black p-4 bg-white rounded-lg shadow-sketch">
                <h4 className="font-bold text-center mb-4 text-green-600 bg-green-50 p-2 border border-green-200 rounded">Linked List (Scattered)</h4>
                <div className="flex justify-center items-center gap-2 my-6">
                    {[1, 2, 3].map((x, i) => (
                        <React.Fragment key={x}>
                            <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-xs font-bold rounded-full relative">
                                {x}
                                <span className="absolute -top-4 text-[8px] text-gray-400">0x{2000 + i * 120}</span>
                            </div>
                            {i < 2 && <ArrowRight size={16} className="text-gray-400" />}
                        </React.Fragment>
                    ))}
                </div>
                <ul className="mt-8 text-sm space-y-2 list-disc pl-4 text-gray-700">
                    <li><span className="font-bold text-green-600">Dynamic Size</span> (Grow freely)</li>
                    <li><span className="font-bold text-red-600">Slow Access O(n)</span> (Must walk)</li>
                    <li><span className="font-bold text-green-600">Fast Insert O(1)</span> (At head)</li>
                </ul>
            </div>
        </div>
    );
};
