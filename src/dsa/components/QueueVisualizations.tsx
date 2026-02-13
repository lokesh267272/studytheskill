import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, ArrowDown, ArrowUp, Plus, Trash2, User, Printer, Cpu, RotateCw } from 'lucide-react';

// 1. Queue Concept (People in Line)
export const QueueConcept: React.FC = () => {
    const [people, setPeople] = useState<number[]>([1, 2, 3]);

    const enqueue = () => {
        if (people.length < 5) setPeople([...people, Date.now()]);
    };

    const dequeue = () => {
        if (people.length > 0) setPeople(people.slice(1));
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex gap-4">
                <SketchButton onClick={enqueue} disabled={people.length >= 5}><Plus size={16}/> Join Line</SketchButton>
                <SketchButton onClick={dequeue} disabled={people.length === 0} variant="danger"><Trash2 size={16}/> Serve Person</SketchButton>
            </div>
            
            <div className="flex items-center gap-2 h-24 border-b-4 border-dashed border-gray-300 w-full justify-start overflow-hidden px-4 relative">
                <span className="absolute left-0 -top-6 text-xs font-bold text-red-600 font-hand">FRONT (Exit)</span>
                <span className="absolute right-0 -top-6 text-xs font-bold text-green-600 font-hand">REAR (Entry)</span>
                
                <AnimatePresence mode="popLayout">
                    {people.map((p, i) => (
                        <motion.div
                            key={p}
                            layout
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="flex flex-col items-center min-w-[3rem]"
                        >
                            <User size={32} className={i === 0 ? "text-red-600" : "text-black"} />
                            <span className="text-xs font-bold font-hand">{i + 1}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <p className="font-hand font-bold text-blue-600">FIFO: First In, First Out</p>
        </div>
    );
};

// 2. Linear Queue Playground
export const QueuePlayground: React.FC = () => {
    const size = 5;
    const [queue, setQueue] = useState<(number | null)[]>(Array(size).fill(null));
    const [front, setFront] = useState(0);
    const [rear, setRear] = useState(-1); // Points to last element
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(10);
    const [message, setMessage] = useState("Ready");

    const enqueue = async () => {
        if (rear === size - 1) {
            setMessage("Error: Queue Overflow! (Rear reached end)");
            return;
        }
        const newRear = rear + 1;
        const newQ = [...queue];
        newQ[newRear] = inputValue;
        
        setQueue(newQ);
        setRear(newRear);
        setCount(c => c + 1);
        setMessage(`Enqueued ${inputValue} at Index ${newRear}`);
        setInputValue(prev => prev + 10);
    };

    const dequeue = async () => {
        if (count === 0) {
            setMessage("Error: Queue Underflow! (Empty)");
            return;
        }
        const newQ = [...queue];
        const val = newQ[front];
        newQ[front] = null; // Visual cleanup, logically we just move front
        
        setQueue(newQ);
        setFront(front + 1);
        setCount(c => c - 1);
        setMessage(`Dequeued ${val} from Index ${front}`);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full p-4 border-2 border-black bg-white rounded shadow-sketch">
            <div className="flex gap-2 items-center flex-wrap justify-center">
                 <input 
                    type="number" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-16 p-2 border-2 border-black rounded font-bold"
                />
                <SketchButton onClick={enqueue} disabled={rear === size - 1}>Enqueue</SketchButton>
                <SketchButton onClick={dequeue} variant="danger" disabled={count === 0}>Dequeue</SketchButton>
            </div>

            <div className="h-6 font-bold text-blue-600 text-sm md:text-base font-hand">{message}</div>

            <div className="flex gap-1 relative mt-8">
                {queue.map((val, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                        {/* Pointers Container */}
                        <div className="h-10 relative w-full mb-1">
                            {front === i && count > 0 && (
                                <motion.div 
                                    layoutId="linear-q-front"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600 flex flex-col items-center"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    F<ArrowDown size={14}/>
                                </motion.div>
                            )}
                            {rear === i && count > 0 && (
                                <motion.div 
                                    layoutId="linear-q-rear"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold text-green-600 flex flex-col items-center"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    R<ArrowDown size={14}/>
                                </motion.div>
                            )}
                        </div>

                        {/* Box */}
                        <motion.div 
                            className={`w-12 h-12 border-2 border-black flex items-center justify-center font-bold text-lg rounded-sm
                                ${val !== null ? 'bg-yellow-100' : 'bg-gray-100'}
                            `}
                            animate={{ scale: val !== null ? 1 : 0.9 }}
                        >
                            <AnimatePresence>
                                {val !== null && (
                                    <motion.span
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                    >
                                        {val}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                        
                        {/* Index */}
                        <span className="text-xs text-gray-500 font-mono mt-1">{i}</span>
                    </div>
                ))}
            </div>
            
            {rear === size - 1 && front > 0 && (
                <div className="bg-red-50 border border-red-500 p-2 text-xs text-red-700 mt-2 font-hand">
                    <strong>Pitfall Alert:</strong> Rear is at end (Overflow?), but there is space at the start! 
                    <br/>This is why we need <strong>Circular Queues</strong>.
                </div>
            )}
        </div>
    );
};

// 3. Circular Queue Visualizer
export const CircularQueuePlayground: React.FC = () => {
    const size = 6;
    const [queue, setQueue] = useState<(number | null)[]>(Array(size).fill(null));
    const [front, setFront] = useState(-1);
    const [rear, setRear] = useState(-1);
    const [inputValue, setInputValue] = useState(1);
    const [msg, setMsg] = useState("Start!");

    const isEmpty = front === -1;
    const isFull = (rear + 1) % size === front;

    const enqueue = () => {
        if (isFull) {
            setMsg("Full! (Circular Overflow)");
            return;
        }
        let newFront = front;
        if (front === -1) newFront = 0;
        
        const newRear = (rear + 1) % size;
        const newQ = [...queue];
        newQ[newRear] = inputValue;
        
        setQueue(newQ);
        setFront(newFront);
        setRear(newRear);
        setInputValue(prev => prev + 1);
        setMsg(`Inserted ${inputValue} at ${newRear}`);
    };

    const dequeue = () => {
        if (isEmpty) {
            setMsg("Empty! (Underflow)");
            return;
        }
        const val = queue[front];
        const newQ = [...queue];
        newQ[front] = null;
        
        if (front === rear) {
            // Last element
            setFront(-1);
            setRear(-1);
        } else {
            setFront((front + 1) % size);
        }
        setQueue(newQ);
        setMsg(`Removed ${val}`);
    };

    // Calculate positions for a circle
    const radius = 60;
    const center = 80;

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex gap-4 mb-4">
                <SketchButton onClick={enqueue} disabled={isFull}>Enqueue</SketchButton>
                <SketchButton onClick={dequeue} variant="danger" disabled={isEmpty}>Dequeue</SketchButton>
            </div>
            <div className="text-sm font-bold text-blue-600 mb-4 h-6 font-hand">{msg}</div>

            <div className="relative w-[160px] h-[160px] border-4 border-dashed border-gray-200 rounded-full">
                {queue.map((val, i) => {
                    const angle = (i * 360) / size;
                    const radian = (angle - 90) * (Math.PI / 180); // -90 to start at top
                    const x = center + radius * Math.cos(radian) - 20; // -20 for half width
                    const y = center + radius * Math.sin(radian) - 20;

                    return (
                        <div
                            key={i}
                            className={`absolute w-10 h-10 border-2 border-black flex flex-col items-center justify-center font-bold text-sm shadow-sm rounded-full transition-colors duration-300
                                ${val !== null ? 'bg-purple-100' : 'bg-white'}
                            `}
                            style={{ left: x, top: y }}
                        >
                            <AnimatePresence>
                                {val !== null && (
                                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        {val}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Gliding Pointers */}
                            {front === i && (
                                <motion.span 
                                    layoutId="circ-pointer-front"
                                    className="absolute -top-4 text-[8px] font-bold text-red-600 bg-white px-1 border border-black rounded"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    F
                                </motion.span>
                            )}
                            {rear === i && (
                                <motion.span 
                                    layoutId="circ-pointer-rear"
                                    className="absolute -bottom-4 text-[8px] font-bold text-green-600 bg-white px-1 border border-black rounded"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    R
                                </motion.span>
                            )}
                        </div>
                    );
                })}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300">
                    <RotateCw size={40}/>
                </div>
            </div>
        </div>
    );
};

// 4. Applications
export const QueueApplications: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="border-2 border-black p-4 bg-white rounded flex flex-col items-center text-center shadow-sketch">
                <Cpu size={32} className="mb-2 text-blue-600"/>
                <h4 className="font-bold font-hand">CPU Scheduling</h4>
                <p className="text-xs mt-1">Tasks wait in a queue to get CPU time.</p>
            </div>
            <div className="border-2 border-black p-4 bg-white rounded flex flex-col items-center text-center shadow-sketch">
                <Printer size={32} className="mb-2 text-orange-600"/>
                <h4 className="font-bold font-hand">Printer Spooling</h4>
                <p className="text-xs mt-1">Documents print in the order they were sent.</p>
            </div>
            <div className="border-2 border-black p-4 bg-white rounded flex flex-col items-center text-center shadow-sketch">
                <div className="flex gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-black"></div>
                    <ArrowRight size={16}/>
                    <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                </div>
                <h4 className="font-bold font-hand">BFS (Graphs)</h4>
                <p className="text-xs mt-1">Level-by-level traversal uses a queue.</p>
            </div>
        </div>
    );
};

// 5. Stack vs Queue Comparison
export const StackVsQueue: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-8 w-full">
            {/* Stack */}
            <div className="flex flex-col items-center">
                <h4 className="font-bold text-red-600 mb-2 font-hand">Stack (LIFO)</h4>
                <div className="w-16 h-32 border-l-4 border-r-4 border-b-4 border-black bg-red-50 flex flex-col-reverse p-1 gap-1 relative shadow-sm">
                    <div className="w-full h-6 border border-black bg-white flex items-center justify-center text-xs">3</div>
                    <div className="w-full h-6 border border-black bg-white flex items-center justify-center text-xs">2</div>
                    <div className="w-full h-6 border border-black bg-white flex items-center justify-center text-xs">1</div>
                    
                    {/* Arrow */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <span className="text-[8px] font-bold">IN/OUT</span>
                        <ArrowDown size={16}/>
                    </div>
                </div>
                <p className="text-xs mt-2 text-center font-hand">One End (Top)</p>
            </div>

            {/* Queue */}
            <div className="flex flex-col items-center">
                <h4 className="font-bold text-green-600 mb-2 font-hand">Queue (FIFO)</h4>
                <div className="w-32 h-12 border-t-4 border-b-4 border-black bg-green-50 flex items-center p-1 gap-1 relative overflow-hidden shadow-sm">
                    <div className="h-full w-8 border border-black bg-white flex items-center justify-center text-xs shrink-0">1</div>
                    <div className="h-full w-8 border border-black bg-white flex items-center justify-center text-xs shrink-0">2</div>
                    <div className="h-full w-8 border border-black bg-white flex items-center justify-center text-xs shrink-0">3</div>

                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center">
                        <span className="text-[8px] font-bold">OUT</span>
                        <ArrowRight size={16}/>
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center">
                        <ArrowRight size={16}/>
                        <span className="text-[8px] font-bold">IN</span>
                    </div>
                </div>
                <p className="text-xs mt-2 text-center font-hand">Two Ends (Front/Rear)</p>
            </div>
        </div>
    );
};
