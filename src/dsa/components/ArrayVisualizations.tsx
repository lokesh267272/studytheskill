import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, Trash2, Plus, Search, MousePointer, Copy, RefreshCw, ChevronsRight, ArrowDown } from 'lucide-react';

// 1. Array Memory View (Interactive Address Calculation)
export const ArrayMemoryView: React.FC = () => {
    const [highlightIndex, setHighlightIndex] = useState(0);
    const data = [10, 20, 30, 40, 50];
    const baseAddress = 1000;
    const size = 4; // 4 bytes for integer

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            {/* Memory Strip */}
            <div className="flex items-end gap-0 border-b-4 border-black pb-1 px-4 overflow-x-auto max-w-full">
                {data.map((val, idx) => (
                    <div 
                        key={idx} 
                        className={`flex flex-col items-center gap-1 group cursor-pointer transition-all duration-300 relative px-1`}
                        onClick={() => setHighlightIndex(idx)}
                    >
                        <span className="text-[10px] font-mono text-gray-500 mb-1">
                            {baseAddress + (idx * size)}
                        </span>
                        
                        <div className="relative">
                            <motion.div 
                                className={`w-14 h-14 border-2 border-black flex items-center justify-center text-xl font-bold shadow-sketch z-10 bg-white relative`}
                            >
                                {val}
                            </motion.div>
                            {/* Animated Background Highlight */}
                            {idx === highlightIndex && (
                                <motion.div 
                                    layoutId="mem-highlight"
                                    className="absolute inset-0 bg-highlight -z-0"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>

                        <span className={`text-sm font-bold font-mono mt-1 ${idx === highlightIndex ? 'text-blue-600' : 'text-gray-400'}`}>
                            [{idx}]
                        </span>
                    </div>
                ))}
            </div>

            {/* Address Calculator */}
            <div className="bg-white border-2 border-black p-4 rounded-lg shadow-sketch w-full max-w-md">
                <div className="flex flex-col gap-4">
                    <label className="font-bold flex justify-between">
                        <span>Select Index (i): <span className="text-blue-600 text-xl font-hand">{highlightIndex}</span></span>
                    </label>
                    <input 
                        type="range" 
                        min="0" 
                        max={data.length - 1} 
                        value={highlightIndex} 
                        onChange={(e) => setHighlightIndex(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                    />
                    
                    <div className="bg-gray-100 p-3 rounded border-2 border-dashed border-gray-400 font-mono text-sm md:text-base">
                        <p className="text-gray-500 mb-1">// Formula</p>
                        <p>
                            Address = <span className="text-purple-600">Base</span> + (<span className="text-blue-600">Index</span> × <span className="text-red-600">Size</span>)
                        </p>
                        <p className="mt-2 font-bold text-lg border-t border-gray-300 pt-2">
                            {baseAddress + (highlightIndex * size)} = <span className="text-purple-600">{baseAddress}</span> + (<span className="text-blue-600">{highlightIndex}</span> × <span className="text-red-600">{size}</span>)
                        </p>
                    </div>
                    <div className="text-right text-xs font-bold text-green-600">
                        ⚡ O(1) Time Calculation
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. 2D Array Visualizer (Interactive)
export const MatrixVisualizer: React.FC = () => {
    const [hoverCell, setHoverCell] = useState<{r: number, c: number} | null>(null);
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-3 gap-2 p-3 border-2 border-black bg-gray-50 rounded-lg shadow-sketch">
                {matrix.map((row, rIdx) => (
                    row.map((val, cIdx) => {
                        const isRowHighlight = hoverCell?.r === rIdx;
                        const isColHighlight = hoverCell?.c === cIdx;
                        const isCellHighlight = isRowHighlight && isColHighlight;

                        return (
                            <motion.div 
                                key={`${rIdx}-${cIdx}`} 
                                onMouseEnter={() => setHoverCell({r: rIdx, c: cIdx})}
                                onMouseLeave={() => setHoverCell(null)}
                                animate={{ 
                                    scale: isCellHighlight ? 1.15 : 1,
                                    backgroundColor: isCellHighlight ? '#fef08a' : (isRowHighlight || isColHighlight ? '#f0f9ff' : '#ffffff'),
                                    zIndex: isCellHighlight ? 10 : 1
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-12 h-12 md:w-16 md:h-16 border-2 border-black flex items-center justify-center font-bold text-lg relative cursor-pointer rounded-sm"
                            >
                                {val}
                                {isCellHighlight && (
                                    <motion.span 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -top-3 -right-3 bg-black text-white text-[10px] px-1 rounded z-10 font-mono shadow-sm"
                                    >
                                        [{rIdx}][{cIdx}]
                                    </motion.span>
                                )}
                            </motion.div>
                        )
                    })
                ))}
            </div>
            
            <div className="h-8 font-bold font-mono text-xl text-blue-600">
                {hoverCell ? `arr[${hoverCell.r}][${hoverCell.c}]` : "Hover over a cell"}
            </div>
        </div>
    );
};

// 3. Array Operations Playground (Combined)
export const ArrayOperationsVisualizer: React.FC = () => {
    const [arr, setArr] = useState<number[]>([10, 20, 30, 40]);
    const [mode, setMode] = useState<'VIEW' | 'SEARCH' | 'INSERT' | 'DELETE'>('VIEW');
    const [inputValue, setInputValue] = useState(99);
    const [targetIndex, setTargetIndex] = useState(1);
    const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
    const [shiftingIndices, setShiftingIndices] = useState<number[]>([]);
    const [message, setMessage] = useState("Select a mode to start");
    const [isBusy, setIsBusy] = useState(false);

    // Helpers
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const handleSearch = async () => {
        if (isBusy) return;
        setIsBusy(true);
        setMessage(`Searching for value: ${inputValue}...`);
        
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            setAnimatingIndex(i);
            setMessage(`Checking Index [${i}]...`);
            await sleep(600);
            if (arr[i] === Number(inputValue)) {
                setMessage(`Found ${inputValue} at Index [${i}]! 🎉`);
                found = true;
                break;
            }
        }
        if (!found) {
            setAnimatingIndex(null);
            setMessage(`${inputValue} not found.`);
        }
        setIsBusy(false);
    };

    const handleInsert = async () => {
        if (isBusy) return;
        if (arr.length >= 6) { setMessage("Array Full! (Overflow)"); return; }
        if (targetIndex < 0 || targetIndex > arr.length) { setMessage("Invalid Index"); return; }
        
        setIsBusy(true);
        setMessage(`Inserting ${inputValue} at Index [${targetIndex}]...`);
        
        // 1. Identify elements to shift
        if (targetIndex < arr.length) {
            const indicesToShift = [];
            for(let i=targetIndex; i<arr.length; i++) indicesToShift.push(i);
            setShiftingIndices(indicesToShift);
            setMessage("Shifting elements right to make space... O(n)");
            await sleep(1000);
        }
        
        // 2. Perform insertion - Layout animation handles the slide
        const newArr = [...arr];
        newArr.splice(targetIndex, 0, Number(inputValue));
        setArr(newArr);
        
        setShiftingIndices([]);
        setAnimatingIndex(targetIndex); 

        setMessage("Element Inserted!");
        await sleep(1000);
        
        setAnimatingIndex(null);
        setMessage("Ready.");
        setIsBusy(false);
    };

    const handleDelete = async () => {
        if (isBusy) return;
        if (arr.length === 0) { setMessage("Array is empty"); return; }
        if (targetIndex < 0 || targetIndex >= arr.length) { setMessage("Invalid Index"); return; }

        setIsBusy(true);
        setMessage(`Deleting element at Index [${targetIndex}]...`);
        setAnimatingIndex(targetIndex);

        await sleep(800);
        setMessage("Shifting elements left... O(n)");
        
        const newArr = [...arr];
        newArr.splice(targetIndex, 1);
        setArr(newArr);
        setAnimatingIndex(null);
        
        await sleep(500);
        setMessage("Deletion Complete!");
        setIsBusy(false);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full bg-gray-50 p-4 border-2 border-black rounded-lg">
            {/* Mode Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
                {(['VIEW', 'SEARCH', 'INSERT', 'DELETE'] as const).map(m => (
                    <button
                        key={m}
                        onClick={() => { setMode(m); setMessage("Ready."); setAnimatingIndex(null); setShiftingIndices([]); }}
                        disabled={isBusy}
                        className={`px-3 py-1 font-bold text-sm border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] transition-transform active:translate-y-1 active:shadow-none
                            ${mode === m ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}
                        `}
                    >
                        {m}
                    </button>
                ))}
            </div>

            {/* Controls */}
            <div className="flex gap-4 items-center h-12">
                {mode === 'SEARCH' && (
                    <div className="flex gap-2">
                        <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))} className="w-16 p-1 border-2 border-black rounded" placeholder="Val"/>
                        <SketchButton onClick={handleSearch} disabled={isBusy}><Search size={16}/></SketchButton>
                    </div>
                )}
                {(mode === 'INSERT') && (
                    <div className="flex gap-2 items-center">
                        <input type="number" value={targetIndex} onChange={e => setTargetIndex(Number(e.target.value))} className="w-12 p-1 border-2 border-black rounded" placeholder="Idx"/>
                        <span className="font-bold">Val:</span>
                        <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))} className="w-16 p-1 border-2 border-black rounded" placeholder="Val"/>
                        <SketchButton onClick={handleInsert} disabled={isBusy}><Plus size={16}/></SketchButton>
                    </div>
                )}
                {(mode === 'DELETE') && (
                    <div className="flex gap-2 items-center">
                        <input type="number" value={targetIndex} onChange={e => setTargetIndex(Number(e.target.value))} className="w-12 p-1 border-2 border-black rounded" placeholder="Idx"/>
                        <SketchButton onClick={handleDelete} variant="danger" disabled={isBusy}><Trash2 size={16}/></SketchButton>
                    </div>
                )}
                {mode === 'VIEW' && <span className="text-gray-500 italic font-hand">Visualize Access or just look around!</span>}
            </div>

            {/* Visual Array */}
            <div className="flex justify-center items-end h-32 gap-2 w-full overflow-x-auto px-4">
                <AnimatePresence mode="popLayout">
                    {arr.map((val, idx) => {
                        const isShifting = shiftingIndices.includes(idx);
                        // We use a composite key for INSERT/DELETE to force re-render/animation correctly
                        // but for search we want stability, so we just use index if not modifying structure
                        const key = mode === 'SEARCH' ? idx : `${val}-${idx}-${arr.length}`; 

                        return (
                            <motion.div
                                key={key}
                                layout
                                initial={{ scale: 0.5, opacity: 0, y: -20 }}
                                animate={{ 
                                    scale: 1, 
                                    opacity: 1,
                                    y: 0,
                                    x: isShifting ? 10 : 0, 
                                    backgroundColor: isShifting ? '#fed7aa' : '#ffffff',
                                    borderColor: isShifting ? '#f97316' : '#000000'
                                }}
                                exit={{ scale: 0, opacity: 0, y: 30, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                className={`w-12 h-12 md:w-14 md:h-14 border-2 flex flex-col items-center justify-center font-bold shadow-sketch cursor-default bg-white relative shrink-0 rounded-sm`}
                            >
                                {isShifting ? <ChevronsRight size={16} className="text-orange-600 animate-pulse"/> : val}
                                
                                <span className="absolute -bottom-6 text-[10px] text-gray-500 font-mono">[{idx}]</span>
                                
                                {/* Gliding Pointer for Search/Action */}
                                {animatingIndex === idx && (
                                    <motion.div 
                                        layoutId="array-active-pointer"
                                        className="absolute -top-10 text-blue-600 z-20"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] bg-blue-100 px-1 border border-blue-300 rounded mb-1">curr</span>
                                            <ArrowDown size={24} className="animate-bounce" />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <p className="font-hand font-bold text-lg text-blue-600 h-6 text-center">{message}</p>
        </div>
    );
};

// 4. Dynamic Array Simulator (Resizing Logic)
export const StaticVsDynamic: React.FC = () => {
    const [elements, setElements] = useState<number[]>([1, 2]);
    const [capacity, setCapacity] = useState(3);
    const [isResizing, setIsResizing] = useState(false);

    const addElement = async () => {
        if (isResizing) return;

        if (elements.length < capacity) {
            setElements([...elements, elements.length + 1]);
        } else {
            // Trigger resize
            setIsResizing(true);
            // Wait for visual effect
            await new Promise(r => setTimeout(r, 1500));
            setCapacity(capacity * 2);
            setElements([...elements, elements.length + 1]);
            setIsResizing(false);
        }
    };

    const reset = () => {
        setElements([1, 2]);
        setCapacity(3);
        setIsResizing(false);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex justify-between w-full max-w-sm">
                <div className="font-bold">Size: {elements.length}</div>
                <div className="font-bold text-red-600">Capacity: {capacity}</div>
            </div>

            <div className="relative p-6 border-4 border-dashed border-gray-300 rounded-lg min-h-[120px] w-full flex flex-wrap gap-2 justify-start content-start transition-all duration-500"
                 style={{ borderColor: isResizing ? '#fca5a5' : '#d1d5db', transform: isResizing ? 'scale(1.02)' : 'scale(1)' }}>
                
                {/* Capacity Slots Background */}
                <div className="absolute inset-0 p-6 flex flex-wrap gap-2 pointer-events-none z-0">
                    {Array.from({ length: capacity }).map((_, i) => (
                        <div key={i} className="w-10 h-10 border-2 border-gray-200 rounded-sm"></div>
                    ))}
                </div>

                {/* Actual Elements */}
                <AnimatePresence>
                    {elements.map((val, idx) => (
                        <motion.div
                            key={val}
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            layout
                            className="w-10 h-10 border-2 border-black bg-blue-100 flex items-center justify-center font-bold z-10 shadow-sm rounded-sm"
                        >
                            {val}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isResizing && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-white/80 flex items-center justify-center z-20 font-bold text-red-600 text-center backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                            className="bg-white p-4 border-2 border-red-500 shadow-sketch rounded-lg"
                        >
                            <Copy className="inline mb-1 mr-2"/>
                            Doubling Capacity...
                            <br/><span className="text-xs text-black font-normal font-hand">Copying elements to new larger block</span>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            <div className="flex gap-4">
                <SketchButton onClick={addElement} disabled={isResizing}>
                    <Plus className="inline mr-1" size={18}/> Add Element
                </SketchButton>
                <button onClick={reset} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 border-2 border-transparent hover:border-black transition-all">
                    <RefreshCw size={20}/>
                </button>
            </div>
            
            <p className="text-xs text-center text-gray-500 max-w-xs font-hand">
                When <strong>Size == Capacity</strong>, the array creates a new larger block and copies everything. This is O(n), but happens rarely!
            </p>
        </div>
    );
};
