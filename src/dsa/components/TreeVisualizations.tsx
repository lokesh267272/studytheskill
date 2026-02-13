import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SketchButton } from './SketchyUI';
import { ArrowDown, Search, GitBranch, Layers, AlertTriangle } from 'lucide-react';

// Common Tree Node Component
const TreeNode: React.FC<{ 
    val: number | string; 
    x: number; 
    y: number; 
    active?: boolean; 
    visited?: boolean;
    isLeaf?: boolean;
    highlight?: string;
}> = ({ val, x, y, active, visited, highlight }) => (
    <motion.div 
        initial={{ scale: 0 }}
        animate={{ 
            scale: active ? 1.2 : 1, 
            backgroundColor: highlight ? highlight : (active ? '#fef08a' : (visited ? '#bbf7d0' : '#ffffff')),
            borderColor: active ? '#000' : '#000'
        }}
        className={`absolute w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center font-bold shadow-sketch z-10 transition-colors duration-300`}
        style={{ left: `${x}%`, top: `${y}%`, marginLeft: '-20px' }}
    >
        {val}
    </motion.div>
);

// Common Edge Component
const Edge: React.FC<{ x1: number, y1: number, x2: number, y2: number }> = ({ x1, y1, x2, y2 }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line x1={`${x1}%`} y1={`${y1+2}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="black" strokeWidth="2" />
    </svg>
);

// 1. Hierarchy Concept
export const TreeHierarchy: React.FC = () => {
    return (
        <div className="relative w-full h-64 border-2 border-black bg-white rounded-lg p-4 overflow-hidden">
            <div className="absolute top-2 right-2 text-xs font-bold bg-yellow-100 px-2 border border-black transform rotate-2">Family Tree</div>
            
            <Edge x1={50} y1={10} x2={30} y2={40} />
            <Edge x1={50} y1={10} x2={70} y2={40} />
            <Edge x1={30} y1={40} x2={20} y2={70} />
            <Edge x1={30} y1={40} x2={40} y2={70} />

            <TreeNode val="Grandpa" x={50} y={10} active />
            <TreeNode val="Dad" x={30} y={40} />
            <TreeNode val="Uncle" x={70} y={40} />
            <TreeNode val="Me" x={20} y={70} />
            <TreeNode val="Sis" x={40} y={70} />
            
            <div className="absolute bottom-2 left-2 text-sm text-gray-500 font-hand">
                Hierarchical Data Structure (Non-Linear)
            </div>
        </div>
    );
};

// 2. Terminology Interactive
export const TreeTerminology: React.FC = () => {
    const [highlight, setHighlight] = useState<'ROOT' | 'LEAF' | 'PARENT' | 'CHILD' | null>(null);

    // Tree Layout:
    //       1 (Root)
    //     /   \
    //    2     3
    //   / \
    //  4   5 (Leaves)

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-wrap gap-2 justify-center">
                <SketchButton onClick={() => setHighlight('ROOT')} variant={highlight === 'ROOT' ? 'primary' : 'neutral'}>Root</SketchButton>
                <SketchButton onClick={() => setHighlight('PARENT')} variant={highlight === 'PARENT' ? 'primary' : 'neutral'}>Parent</SketchButton>
                <SketchButton onClick={() => setHighlight('LEAF')} variant={highlight === 'LEAF' ? 'primary' : 'neutral'}>Leaf Nodes</SketchButton>
            </div>

            <div className="relative w-full h-64 border-2 border-black bg-gray-50 rounded-lg shadow-inner">
                <Edge x1={50} y1={15} x2={30} y2={45} />
                <Edge x1={50} y1={15} x2={70} y2={45} />
                <Edge x1={30} y1={45} x2={20} y2={75} />
                <Edge x1={30} y1={45} x2={40} y2={75} />

                <TreeNode val="1" x={50} y={15} highlight={highlight === 'ROOT' ? '#fca5a5' : (highlight === 'PARENT' ? '#fca5a5' : undefined)} />
                <TreeNode val="2" x={30} y={45} highlight={highlight === 'PARENT' ? '#93c5fd' : (highlight === 'CHILD' ? '#fdba74' : undefined)} />
                <TreeNode val="3" x={70} y={45} highlight={highlight === 'LEAF' ? '#86efac' : (highlight === 'CHILD' ? '#fdba74' : undefined)} />
                <TreeNode val="4" x={20} y={75} highlight={highlight === 'LEAF' ? '#86efac' : (highlight === 'CHILD' ? '#fdba74' : undefined)} />
                <TreeNode val="5" x={40} y={75} highlight={highlight === 'LEAF' ? '#86efac' : (highlight === 'CHILD' ? '#fdba74' : undefined)} />
            </div>
            
            <p className="h-6 text-sm font-bold text-blue-600">
                {highlight === 'ROOT' && "Topmost node. No parent."}
                {highlight === 'LEAF' && "Nodes with NO children."}
                {highlight === 'PARENT' && "Node (1) is Parent of (2). Node (2) is Parent of (4, 5)."}
                {highlight === null && "Select a term to visualize."}
            </p>
        </div>
    );
};

// 3. Tree Types Comparison
export const TreeTypes: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="border-2 border-black p-2 bg-white rounded flex flex-col items-center">
                <span className="font-bold text-xs mb-2 bg-blue-100 px-2">Full Binary Tree</span>
                <div className="relative w-24 h-24">
                     {/* 0 or 2 children */}
                     <svg className="absolute inset-0 w-full h-full"><line x1="50%" y1="10%" x2="25%" y2="50%" stroke="black"/><line x1="50%" y1="10%" x2="75%" y2="50%" stroke="black"/></svg>
                     <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-1/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-3/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                </div>
                <p className="text-[10px] text-center mt-1">Every node has 0 or 2 children.</p>
            </div>
            <div className="border-2 border-black p-2 bg-white rounded flex flex-col items-center">
                <span className="font-bold text-xs mb-2 bg-green-100 px-2">Complete Binary Tree</span>
                <div className="relative w-24 h-24">
                     {/* Filled left to right */}
                     <svg className="absolute inset-0 w-full h-full">
                         <line x1="50%" y1="10%" x2="25%" y2="50%" stroke="black"/>
                         <line x1="50%" y1="10%" x2="75%" y2="50%" stroke="black"/>
                         <line x1="25%" y1="50%" x2="10%" y2="90%" stroke="black"/>
                     </svg>
                     <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-1/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-3/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-20 left-[10%] -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                </div>
                <p className="text-[10px] text-center mt-1">Levels filled left to right.</p>
            </div>
            <div className="border-2 border-black p-2 bg-white rounded flex flex-col items-center">
                <span className="font-bold text-xs mb-2 bg-purple-100 px-2">Perfect Binary Tree</span>
                <div className="relative w-24 h-24">
                     {/* All levels full */}
                     <svg className="absolute inset-0 w-full h-full">
                         <line x1="50%" y1="10%" x2="25%" y2="50%" stroke="black"/>
                         <line x1="50%" y1="10%" x2="75%" y2="50%" stroke="black"/>
                         <line x1="25%" y1="50%" x2="10%" y2="90%" stroke="black"/>
                         <line x1="25%" y1="50%" x2="40%" y2="90%" stroke="black"/>
                         <line x1="75%" y1="50%" x2="60%" y2="90%" stroke="black"/>
                         <line x1="75%" y1="50%" x2="90%" y2="90%" stroke="black"/>
                     </svg>
                     <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-1/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-10 left-3/4 -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-20 left-[10%] -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-20 left-[40%] -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-20 left-[60%] -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                     <div className="absolute top-20 left-[90%] -ml-2 w-4 h-4 bg-white border border-black rounded-full"></div>
                </div>
                <p className="text-[10px] text-center mt-1">All internal nodes have 2 children & leaves at same level.</p>
            </div>
        </div>
    );
};

// 4. Traversal Visualizer
export const TraversalVisualizer: React.FC = () => {
    const [visited, setVisited] = useState<number[]>([]);
    const [activeNode, setActiveNode] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mode, setMode] = useState<'IN' | 'PRE' | 'POST'>('IN');

    // Tree Structure
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    
    const nodes = {
        1: { val: 1, x: 50, y: 15, left: 2, right: 3 },
        2: { val: 2, x: 30, y: 45, left: 4, right: 5 },
        3: { val: 3, x: 70, y: 45, left: null, right: null },
        4: { val: 4, x: 20, y: 75, left: null, right: null },
        5: { val: 5, x: 40, y: 75, left: null, right: null },
    };

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const traverse = async (nodeId: number | null, type: 'IN' | 'PRE' | 'POST') => {
        if (!nodeId) return;
        
        setActiveNode(nodeId);
        await sleep(600);

        if (type === 'PRE') {
            setVisited(v => [...v, nodeId]);
            await sleep(400);
        }

        await traverse(nodes[nodeId as keyof typeof nodes].left, type);
        setActiveNode(nodeId); // Back to root for visual flow

        if (type === 'IN') {
            setVisited(v => [...v, nodeId]);
            await sleep(400);
        }

        await traverse(nodes[nodeId as keyof typeof nodes].right, type);
        setActiveNode(nodeId);

        if (type === 'POST') {
            setVisited(v => [...v, nodeId]);
            await sleep(400);
        }
    };

    const startTraversal = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setVisited([]);
        await traverse(1, mode);
        setActiveNode(null);
        setIsAnimating(false);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex gap-2">
                <SketchButton onClick={() => { setMode('PRE'); setVisited([]); }} variant={mode === 'PRE' ? 'primary' : 'neutral'} disabled={isAnimating}>Pre-Order</SketchButton>
                <SketchButton onClick={() => { setMode('IN'); setVisited([]); }} variant={mode === 'IN' ? 'primary' : 'neutral'} disabled={isAnimating}>In-Order</SketchButton>
                <SketchButton onClick={() => { setMode('POST'); setVisited([]); }} variant={mode === 'POST' ? 'primary' : 'neutral'} disabled={isAnimating}>Post-Order</SketchButton>
            </div>
            
            <SketchButton onClick={startTraversal} disabled={isAnimating}>Start Animation ▶</SketchButton>

            <div className="relative w-full h-64 border-2 border-black bg-white rounded-lg shadow-sketch">
                 <Edge x1={50} y1={15} x2={30} y2={45} />
                 <Edge x1={50} y1={15} x2={70} y2={45} />
                 <Edge x1={30} y1={45} x2={20} y2={75} />
                 <Edge x1={30} y1={45} x2={40} y2={75} />

                 {Object.values(nodes).map(n => (
                     <TreeNode 
                        key={n.val} 
                        val={n.val} 
                        x={n.x} 
                        y={n.y} 
                        active={activeNode === n.val} 
                        visited={visited.includes(n.val)}
                    />
                 ))}
            </div>

            <div className="flex flex-col items-center w-full bg-gray-50 p-2 border border-black rounded min-h-[60px]">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Traversal Sequence</span>
                <div className="flex gap-2">
                    {visited.map((v, i) => (
                        <motion.div 
                            key={`${v}-${i}`}
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-green-200 border border-black flex items-center justify-center font-bold"
                        >
                            {v}
                        </motion.div>
                    ))}
                </div>
                {visited.length === 0 && <span className="text-gray-400 italic text-sm">Waiting to start...</span>}
            </div>
            
            <div className="text-xs bg-yellow-50 p-2 border border-black rounded">
                {mode === 'PRE' && "Root → Left → Right"}
                {mode === 'IN' && "Left → Root → Right (Sorted in BST)"}
                {mode === 'POST' && "Left → Right → Root"}
            </div>
        </div>
    );
};

// 5. BST Search Playground
export const BSTSearchPlayground: React.FC = () => {
    const [target, setTarget] = useState(30);
    const [path, setPath] = useState<number[]>([]);
    const [found, setFound] = useState<boolean | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [msg, setMsg] = useState("");

    // BST Structure
    //      40
    //     /  \
    //   20    60
    //  /  \     \
    // 10  30    70
    const nodes = {
        40: { val: 40, x: 50, y: 15, left: 20, right: 60 },
        20: { val: 20, x: 30, y: 45, left: 10, right: 30 },
        60: { val: 60, x: 70, y: 45, left: null, right: 70 },
        10: { val: 10, x: 20, y: 75, left: null, right: null },
        30: { val: 30, x: 40, y: 75, left: null, right: null },
        70: { val: 70, x: 80, y: 75, left: null, right: null },
    };

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const search = async () => {
        if (isSearching) return;
        setIsSearching(true);
        setPath([]);
        setFound(null);
        setMsg("Starting Search...");

        let curr: number | null = 40;
        let p = [];

        while (curr !== null) {
            p.push(curr);
            setPath([...p]);
            setMsg(`Comparing ${target} with ${curr}...`);
            await sleep(800);

            if (curr === target) {
                setMsg("Found! Value matches.");
                setFound(true);
                setIsSearching(false);
                return;
            } else if (target < curr) {
                setMsg(`${target} < ${curr} → Go Left`);
                curr = nodes[curr as keyof typeof nodes].left;
            } else {
                setMsg(`${target} > ${curr} → Go Right`);
                curr = nodes[curr as keyof typeof nodes].right;
            }
            await sleep(800);
        }

        setMsg("Not Found! Reached NULL.");
        setFound(false);
        setIsSearching(false);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex gap-2 items-center">
                <span className="font-bold">Find:</span>
                <input 
                    type="number" 
                    value={target} 
                    onChange={e => setTarget(Number(e.target.value))}
                    className="w-16 p-2 border-2 border-black rounded font-bold"
                />
                <SketchButton onClick={search} disabled={isSearching}><Search size={16}/></SketchButton>
            </div>
            
            <div className="h-6 text-sm font-bold text-blue-600">{msg}</div>

            <div className="relative w-full h-64 border-2 border-black bg-white rounded-lg shadow-sketch">
                <Edge x1={50} y1={15} x2={30} y2={45} />
                <Edge x1={50} y1={15} x2={70} y2={45} />
                <Edge x1={30} y1={45} x2={20} y2={75} />
                <Edge x1={30} y1={45} x2={40} y2={75} />
                <Edge x1={70} y1={45} x2={80} y2={75} />

                {Object.values(nodes).map(n => (
                    <TreeNode 
                        key={n.val} 
                        val={n.val} 
                        x={n.x} 
                        y={n.y} 
                        active={path.includes(n.val)}
                        highlight={found && n.val === target ? '#86efac' : undefined}
                    />
                ))}
            </div>
        </div>
    );
};

// 6. Skewed vs Balanced Comparison
export const SkewedVsBalanced: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="border-2 border-black p-2 bg-red-50 rounded flex flex-col items-center">
                <h4 className="font-bold mb-2">Skewed (Bad)</h4>
                <div className="relative w-full h-32">
                    <svg className="absolute inset-0 w-full h-full">
                        <line x1="50%" y1="10%" x2="60%" y2="30%" stroke="black" />
                        <line x1="60%" y1="30%" x2="70%" y2="50%" stroke="black" />
                        <line x1="70%" y1="50%" x2="80%" y2="70%" stroke="black" />
                    </svg>
                    <div className="absolute top-[10%] left-[50%] w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">1</div>
                    <div className="absolute top-[30%] left-[60%] w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">2</div>
                    <div className="absolute top-[50%] left-[70%] w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">3</div>
                    <div className="absolute top-[70%] left-[80%] w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">4</div>
                </div>
                <p className="text-xs text-center mt-1">Height = n<br/>Search = O(n)</p>
            </div>
            
            <div className="border-2 border-black p-2 bg-green-50 rounded flex flex-col items-center">
                <h4 className="font-bold mb-2">Balanced (Good)</h4>
                <div className="relative w-full h-32">
                    <svg className="absolute inset-0 w-full h-full">
                        <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="black" />
                        <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="black" />
                        <line x1="30%" y1="50%" x2="20%" y2="80%" stroke="black" />
                        <line x1="30%" y1="50%" x2="40%" y2="80%" stroke="black" />
                    </svg>
                    <div className="absolute top-[20%] left-[50%] -ml-3 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">2</div>
                    <div className="absolute top-[50%] left-[30%] -ml-3 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">1</div>
                    <div className="absolute top-[50%] left-[70%] -ml-3 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px]">3</div>
                </div>
                <p className="text-xs text-center mt-1">Height = log n<br/>Search = O(log n)</p>
            </div>
        </div>
    );
};
