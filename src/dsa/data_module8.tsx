import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    HashFunctionDemo,
    CollisionDemo,
    ChainingDemo,
    LinearProbingDemo,
    QuadraticProbingDemo,
    HashingComparison
} from './components/HashingVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle, Key, Search, Database } from 'lucide-react';

const MODULE_NAME = "Module 8: Hashing";

export const module8Data: ContentSection[] = [
    {
        id: '801',
        module: MODULE_NAME,
        title: 'What is Hashing? (The Valet Parking)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Imagine <Highlight>Valet Parking</Highlight>.
                </p>
                <SketchCard title="The Instant Retrieval">
                    <p>Usually, to find your car in a massive lot, you'd have to walk row by row (O(n)).</p>
                    <p className="mt-2 text-blue-600 font-bold">With Hashing:</p>
                    <ul className="list-disc pl-6 text-sm">
                        <li>You give your keys (Input).</li>
                        <li>Valet gives you a ticket #5 (Hash).</li>
                        <li>Car is parked in Spot #5.</li>
                        <li>To get it back, you go <strong>directly</strong> to Spot #5. No searching!</li>
                    </ul>
                </SketchCard>
                <div className="flex justify-center items-center gap-4 text-xl font-bold font-hand my-6 bg-gray-50 p-4 border rounded">
                    <div>"Apple" (Key)</div>
                    <div>➔</div>
                    <div className="bg-black text-white px-2 rounded">Hash Fn</div>
                    <div>➔</div>
                    <div className="text-green-600">Index 5</div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 801, question: "Hashing is mainly used for?", options: ["Sorting", "Fast Search/Insert", "Recursion"], correctIndex: 1, explanation: "It provides O(1) average time complexity." },
            { id: 802, question: "Hashing converts a key into?", options: ["Value", "Index", "Linked List"], correctIndex: 1, explanation: "An integer index for the array." }
        ]
    },
    {
        id: '802',
        module: MODULE_NAME,
        title: 'The Hash Table (The Parking Lot)',
        shortTitle: '2. Hash Table',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>A <strong>Hash Table</strong> is just a fancy Array where we use math to find the index.</p>
                <div className="bg-white p-4 border-2 border-black rounded flex flex-col items-center">
                    <p className="mb-4 text-center">We don't fill it 0, 1, 2... We fill it casually!</p>
                    <div className="w-full flex justify-center gap-1 border-b-2 border-gray-200 pb-4 mb-4">
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-10 h-10 border border-gray-400 flex items-center justify-center text-xs ${i === 2 || i === 5 ? 'bg-blue-200' : 'bg-gray-50'}`}>
                                    {i === 2 ? '🚗' : i === 5 ? '🚙' : ''}
                                </div>
                                <span className="text-[10px]">{i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 803, question: "Hash table is based on which data structure?", options: ["Array", "Linked List", "Tree"], correctIndex: 0, explanation: "It uses an array for storage." },
            { id: 804, question: "Average access time in hash table?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 2, explanation: "Direct index access is constant time." }
        ]
    },
    {
        id: '803',
        module: MODULE_NAME,
        title: 'The Hash Function (The Room Assignment)',
        shortTitle: '3. Hash Function',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>The magic formula that assigns the spot.</p>
                <SketchCard title="Simple Logic: Modulo">
                    <p className="text-center text-lg font-mono">Spot = Key % TotalSpots</p>
                    <p className="text-center text-sm text-gray-500 mt-2">Example: Key 105, 10 Spots. <br />105 % 10 = Spot 5.</p>
                </SketchCard>
                <HashFunctionDemo />
                <div className="text-sm bg-gray-100 p-2 border border-black rounded">
                    <strong>Goal:</strong> Spread cars evenly. Don't put everyone in Spot 0!
                </div>
            </div>
        ),
        mcqs: [
            { id: 805, question: "Purpose of hash function?", options: ["Sort data", "Map key to index", "Compress data"], correctIndex: 1, explanation: "Calculates the position in the table." },
            { id: 806, question: "A good hash function should?", options: ["Be slow", "Distribute keys uniformly", "Always return 0"], correctIndex: 1, explanation: "To minimize collisions." }
        ]
    },
    {
        id: '804',
        module: MODULE_NAME,
        title: 'Collision! (The Double Booking)',
        shortTitle: '4. Collision',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-xl text-red-600 font-bold">Uh oh! Spot 5 is taken.</p>
                <CollisionDemo />
                <SketchCard title="What Happened?">
                    <p>Two different keys (e.g., 105 and 25) did the math and both got Spot 5.</p>
                    <p className="mt-2 font-bold">This is a COLLISION.</p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 807, question: "Collision occurs when?", options: ["Table is empty", "Two keys map to same index", "Key is too large"], correctIndex: 1, explanation: "Multiple items fighting for one slot." },
            { id: 808, question: "Can collisions be avoided completely?", options: ["Yes", "No"], correctIndex: 1, explanation: "Unless table size is infinite." }
        ]
    },
    {
        id: '805',
        module: MODULE_NAME,
        title: 'Solving Collisions',
        shortTitle: '5. Resolution',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-12">
                {/* Chaining */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">1</div>
                        <h4 className="font-bold text-xl text-blue-600">Separate Chaining (Bunk Beds)</h4>
                    </div>
                    <p className="mb-4 text-sm bg-blue-50 p-3 border-l-4 border-blue-500">
                        <strong>Concept:</strong> If Spot 5 is full, just stack them up! (Make a Linked List at that index).
                        <br /><span className="text-gray-500 italic">"Room 5 can fit 10 people if we use bunk beds."</span>
                    </p>
                    <ChainingDemo />
                </div>

                {/* Linear Probing */}
                <div className="border-t-2 border-dashed border-gray-400 pt-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">2</div>
                        <h4 className="font-bold text-xl text-purple-600">Linear Probing (Knock Next Door)</h4>
                    </div>
                    <p className="mb-4 text-sm bg-purple-50 p-3 border-l-4 border-purple-500">
                        <strong>Concept:</strong> Spot 5 full? Try Spot 6. Full? Try Spot 7.
                        <br /><strong>Problem:</strong> "Clustering". If a neighborhood gets crowded, you have to walk far to find an empty house.
                    </p>
                    <LinearProbingDemo />
                </div>
            </div>
        ),
        mcqs: [
            { id: 809, question: "Chaining uses which data structure?", options: ["Array", "Linked List", "Stack"], correctIndex: 1, explanation: "To store multiple items at one index." },
            { id: 810, question: "Linear probing suffers from?", options: ["Clustering", "Memory waste", "Complexity"], correctIndex: 0, explanation: "Primary clustering happens when filled slots bunch together." }
        ]
    },
    {
        id: '806',
        module: MODULE_NAME,
        title: 'Load Factor (The Crowded Hotel)',
        shortTitle: '6. Load Factor',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="text-center bg-gray-50 p-4 border-2 border-black rounded">
                    <span className="text-2xl font-bold font-mono">Limit ≈ 0.7</span>
                </div>
                <p>If the hotel is 70% full, finding an Empty Room (Probing) takes too long.</p>
                <div className="bg-yellow-100 p-4 border-l-4 border-yellow-500">
                    <strong>Solution:</strong> Build a bigger hotel! (Resize table & Rehash everything).
                </div>
            </div>
        ),
        mcqs: [
            { id: 811, question: "Load factor is calculated as?", options: ["Table Size / Elements", "Elements / Table Size"], correctIndex: 1, explanation: "Density of the table." },
            { id: 812, question: "High load factor leads to?", options: ["Faster search", "More collisions", "Less space"], correctIndex: 1, explanation: "Table gets crowded." }
        ]
    },
    {
        id: '807',
        module: MODULE_NAME,
        title: 'Time Complexity Report',
        shortTitle: '7. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="p-2">Op</th>
                                <th className="p-2">Avg</th>
                                <th className="p-2">Worst</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Search</td>
                                <td className="p-2 text-green-600 font-bold">O(1)</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                            </tr>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Insert</td>
                                <td className="p-2 text-green-600 font-bold">O(1)</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-red-50 p-2 text-sm text-center border border-red-200 rounded">
                    <strong>Worst Case O(n):</strong> The Apocalypse. Everyone collides at the same spot (One giant linked list).
                </div>
            </div>
        ),
        mcqs: [
            { id: 813, question: "Average search time in Hash Table?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 2, explanation: "Ideally constant time." },
            { id: 814, question: "Worst case complexity of hashing?", options: ["O(1)", "O(n)", "O(n^2)"], correctIndex: 1, explanation: "Degenerates to a linked list traversal." }
        ]
    },
    {
        id: '808',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '8. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Space Complexity is <Highlight>O(n)</Highlight>.</p>
                <div className="bg-white p-4 border-2 border-black rounded text-sm">
                    <p><strong>Trade-off:</strong> We waste some space (empty slots) to get blazing fast speed.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 815, question: "Does hashing require extra space?", options: ["Yes", "No"], correctIndex: 0, explanation: "Need a table larger than n to reduce collisions." }
        ]
    },
    {
        id: '809',
        module: MODULE_NAME,
        title: 'Comparison',
        shortTitle: '9. Comparison',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <HashingComparison />
            </div>
        ),
        mcqs: [
            { id: 816, question: "Fastest average search structure?", options: ["Array", "BST", "Hash Table"], correctIndex: 2, explanation: "O(1) beats O(log n)." },
            { id: 817, question: "Main disadvantage of Hashing vs BST?", options: ["Slower", "Unordered data", "More memory"], correctIndex: 1, explanation: "Hashing does not maintain sorted order." }
        ]
    },
    {
        id: '810',
        module: MODULE_NAME,
        title: 'Real World Magic',
        shortTitle: '10. Applications',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SketchCard title="Passwords" className="bg-red-50">
                        <p><strong>Security:</strong> Websites don't store "password123". They store the Hash!</p>
                        <p className="text-xs text-gray-500">hash("password123") = "a8f3...92"</p>
                    </SketchCard>
                    <SketchCard title="Compilers" className="bg-blue-50">
                        <p><strong>Variables:</strong> Looking up variable "x" in your code needs to be INSTANT.</p>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 818, question: "Symbol table in compilers uses?", options: ["Stack", "Hash Table", "Queue"], correctIndex: 1, explanation: "For fast variable lookup." },
            { id: 819, question: "Hashing is used in?", options: ["Caching", "Sorting", "Recursion"], correctIndex: 0, explanation: "Fast retrieval of cached data." }
        ]
    },
    {
        id: '811',
        module: MODULE_NAME,
        title: 'Traps to Avoid',
        shortTitle: '11. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Tricked!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Thinking Hashing is SORTED.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> It is random chaos. Use BST if you need order.
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '812',
        module: MODULE_NAME,
        title: 'Cheat Sheet',
        shortTitle: '12. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Hash Note" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Fast Search: O(1)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Worst Case: O(n) (Collisions)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Resolution: Chaining, Probing</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Use for: Unordered Maps, Sets</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
