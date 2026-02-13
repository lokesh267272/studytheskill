import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowRight, ArrowUp, Lock, Unlock, ArrowDown } from 'lucide-react';

const MemoryBox: React.FC<{ char: string, index: number, isNull: boolean }> = ({ char, index, isNull }) => (
    <div className="flex flex-col items-center group">
        <span className="text-xs text-gray-400 font-mono mb-1">{1000 + index}</span>
        <div className={`w-12 h-12 border-2 border-black flex items-center justify-center font-bold text-xl shadow-sketch rounded-sm
            ${isNull ? 'bg-red-100 text-red-600 border-dashed' : 'bg-white'}
            group-hover:-translate-y-1 transition-transform
        `}>
            {char}
        </div>
        <span className="text-xs font-bold font-mono mt-1 text-blue-600">{index}</span>
    </div>
);

// 1. String Memory & Null Terminator
export const StringMemoryView: React.FC = () => {
    const str = "HELLO";

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-end gap-1 overflow-x-auto p-4 max-w-full">
                {str.split('').map((char, i) => (
                    <MemoryBox key={i} char={char} index={i} isNull={false} />
                ))}
                {/* Null Terminator */}
                <MemoryBox char="\0" index={str.length} isNull={true} />
            </div>
            <p className="text-sm bg-yellow-50 p-2 border border-black transform rotate-1 rounded font-hand shadow-sm">
                Strings are just Arrays of Characters ending with a <strong className="text-red-600">\0 (Null Character)</strong>!
            </p>
        </div>
    );
};

// 2. String vs Char Array (The Terminator Difference)
export const StringVsCharArray: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center">
                <h4 className="font-bold mb-2 font-hand">Character Array</h4>
                <div className="flex gap-1">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50">A</div>
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50">B</div>
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50">C</div>
                </div>
                <p className="text-xs text-red-500 mt-2 font-bold font-hand">Where does it end? Computer doesn't know!</p>
            </div>
            
            <div className="flex flex-col items-center">
                <h4 className="font-bold mb-2 font-hand">String</h4>
                <div className="flex gap-1">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white">A</div>
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white">B</div>
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white">C</div>
                    <div className="w-10 h-10 border-2 border-black bg-red-100 text-red-600 flex items-center justify-center font-mono font-bold">\0</div>
                </div>
                <p className="text-xs text-green-600 mt-2 font-bold font-hand">Stops exactly here (\0).</p>
            </div>
        </div>
    );
};

// 3. Interactive String Operations
export const StringOperations: React.FC = () => {
    const [mode, setMode] = useState<'LENGTH' | 'PALINDROME'>('LENGTH');
    const [text, setText] = useState("LEVEL");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [secondIndex, setSecondIndex] = useState<number | null>(null);
    const [message, setMessage] = useState("Ready");
    const [isBusy, setIsBusy] = useState(false);

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const runLength = async () => {
        if(isBusy) return;
        setIsBusy(true);
        setMessage("Counting characters...");
        
        for(let i=0; i<=text.length; i++) {
            setActiveIndex(i);
            if(i === text.length) {
                setMessage(`Found \\0 at index ${i}. Length is ${i}!`);
            } else {
                setMessage(`Count: ${i+1}`);
            }
            await sleep(600);
        }
        setIsBusy(false);
    };

    const runPalindrome = async () => {
        if(isBusy) return;
        setIsBusy(true);
        setMessage("Checking Palindrome...");
        
        let left = 0;
        let right = text.length - 1;
        let isPal = true;

        while(left <= right) {
            setActiveIndex(left);
            setSecondIndex(right);
            setMessage(`Comparing ${text[left]} vs ${text[right]}...`);
            await sleep(800);

            if(text[left] !== text[right]) {
                setMessage("Mismatch! Not a palindrome.");
                isPal = false;
                break;
            }
            left++;
            right--;
        }

        if(isPal) setMessage("Match! It is a Palindrome. 🎉");
        setActiveIndex(null);
        setSecondIndex(null);
        setIsBusy(false);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex gap-2 mb-4">
                <SketchButton onClick={() => { setMode('LENGTH'); setText("HELLO"); }} variant={mode === 'LENGTH' ? 'primary' : 'neutral'}>Length (O(n))</SketchButton>
                <SketchButton onClick={() => { setMode('PALINDROME'); setText("RACECAR"); }} variant={mode === 'PALINDROME' ? 'primary' : 'neutral'}>Palindrome Check</SketchButton>
            </div>

            <div className="text-xl font-bold font-mono tracking-widest bg-white px-8 py-4 border-2 border-black rounded shadow-sketch flex gap-2 relative mt-8">
                {text.split('').map((char, i) => (
                    <div key={i} className="relative">
                        <motion.div 
                            animate={{ 
                                scale: (i === activeIndex || i === secondIndex) ? 1.2 : 1,
                                backgroundColor: (i === activeIndex || i === secondIndex) ? '#fef08a' : '#fff'
                            }}
                            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded"
                        >
                            {char}
                        </motion.div>
                        
                        {/* Gliding Pointers */}
                        {i === activeIndex && (
                             <motion.div 
                                layoutId="pointer-main"
                                className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-500 font-bold"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <ArrowDown size={24} />
                            </motion.div>
                        )}
                        {i === secondIndex && (
                             <motion.div 
                                layoutId="pointer-second"
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-green-500 font-bold"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <ArrowUp size={24} />
                            </motion.div>
                        )}
                    </div>
                ))}
                 {/* Implicit Null */}
                 <div className="relative">
                    <div className={`w-10 h-10 flex items-center justify-center border border-dashed border-red-300 text-red-300 rounded ${activeIndex === text.length ? 'bg-red-100 scale-110' : ''}`}>
                        \0
                    </div>
                    {activeIndex === text.length && (
                         <motion.div 
                            layoutId="pointer-main"
                            className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-500 font-bold"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <ArrowDown size={24} />
                        </motion.div>
                    )}
                 </div>
            </div>

            <p className="h-8 font-bold text-blue-600 font-hand text-lg">{message}</p>

            <SketchButton onClick={mode === 'LENGTH' ? runLength : runPalindrome} disabled={isBusy}>
                {isBusy ? 'Running...' : 'Run Animation'}
            </SketchButton>
        </div>
    );
};

// 4. Mutable vs Immutable
export const MutableVsImmutable: React.FC = () => {
    const [isMutable, setIsMutable] = useState(true);
    const [strValue, setStrValue] = useState("Cat");
    const [address, setAddress] = useState(1000);

    const changeString = () => {
        if (isMutable) {
            setStrValue("Bat");
        } else {
            setAddress(prev => prev + 500);
            setStrValue("Bat");
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full border-2 border-black p-4 bg-gray-50 rounded shadow-sm">
            <div className="flex gap-4">
                <button 
                    onClick={() => { setIsMutable(true); setStrValue("Cat"); setAddress(1000); }}
                    className={`flex items-center gap-2 px-3 py-1 rounded border-2 border-black shadow-sm transition-transform active:translate-y-1 ${isMutable ? 'bg-green-200' : 'bg-white'}`}
                >
                    <Unlock size={16}/> Mutable (C/C++)
                </button>
                <button 
                    onClick={() => { setIsMutable(false); setStrValue("Cat"); setAddress(1000); }}
                    className={`flex items-center gap-2 px-3 py-1 rounded border-2 border-black shadow-sm transition-transform active:translate-y-1 ${!isMutable ? 'bg-blue-200' : 'bg-white'}`}
                >
                    <Lock size={16}/> Immutable (Java)
                </button>
            </div>

            <div className="flex items-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                    <span className="font-bold mb-2 font-hand">Variable 's'</span>
                    <div className="w-16 h-12 border-2 border-black bg-white flex items-center justify-center relative shadow-sm font-mono">
                        {address}
                        <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-black" size={24}/>
                    </div>
                </div>

                <div className="relative w-64 h-32 border-2 border-dashed border-gray-400 bg-white rounded p-4 overflow-hidden">
                    <span className="absolute top-1 left-2 text-xs text-gray-400 font-hand">Memory Heap</span>
                    
                    <AnimatePresence>
                        <motion.div 
                            key={address} // Re-render when address changes
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute"
                            style={{ top: '30%', left: isMutable ? '30%' : (address === 1000 ? '10%' : '60%') }}
                        >
                            <div className="flex">
                                {strValue.split('').map((c, i) => (
                                    <div key={i} className="w-8 h-8 border border-black bg-yellow-100 flex items-center justify-center font-bold shadow-sm">{c}</div>
                                ))}
                                <div className="w-8 h-8 border border-black bg-red-100 flex items-center justify-center text-xs shadow-sm">\0</div>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">addr: {address}</span>
                        </motion.div>
                        
                        {/* Ghost of previous string for Immutable */}
                        {!isMutable && address !== 1000 && (
                            <div className="absolute top-[30%] left-[10%] opacity-30 grayscale pointer-events-none">
                                <div className="flex">
                                    {"Cat".split('').map((c, i) => (
                                        <div key={i} className="w-8 h-8 border border-black bg-yellow-100 flex items-center justify-center font-bold">{c}</div>
                                    ))}
                                    <div className="w-8 h-8 border border-black bg-red-100 flex items-center justify-center text-xs">\0</div>
                                </div>
                                <span className="text-xs text-gray-500 font-mono">addr: 1000</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <SketchButton onClick={changeString}>
                Change 'C' to 'B'
            </SketchButton>
            <p className="text-sm text-center max-w-sm font-hand">
                {isMutable 
                    ? "In Mutable strings, we modify the memory directly." 
                    : "In Immutable strings, we CREATE a new string and move the pointer!"}
            </p>
        </div>
    );
};
