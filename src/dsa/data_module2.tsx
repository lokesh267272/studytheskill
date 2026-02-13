import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    ArrayMemoryView,
    MatrixVisualizer,
    ArrayOperationsVisualizer,
    StaticVsDynamic
} from './components/ArrayVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, List } from 'lucide-react';

const MODULE_NAME = "Module 2: Arrays";

export const module2Data: ContentSection[] = [
    {
        id: '201',
        module: MODULE_NAME,
        title: 'What is an Array? (The Egg Carton)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Think of an Array like an <Highlight>Egg Carton</Highlight>.
                </p>
                <SketchCard title="The Rules">
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li><strong>Fixed Size:</strong> You can't just magically add a 13th slot to a 12-egg carton.</li>
                        <li><strong>Contiguous:</strong> All the slots are stuck together in one block.</li>
                        <li><strong>Same Type:</strong> You put eggs in it. You don't mix eggs with bowling balls.</li>
                    </ul>
                    <ArrayMemoryView />
                </SketchCard>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded">
                    <p><strong>Technical Definition:</strong> A collection of items of the same type stored at <span className="font-bold">contiguous</span> (touching) memory locations.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 201, question: "Why are arrays called 'contiguous'?", options: ["They contain different types", "They are stored in side-by-side memory blocks", "They are random"], correctIndex: 1, explanation: "Contiguous means 'touching' or 'side-by-side'. No gaps!" },
            { id: 202, question: "Can you change the size of a standard array easily?", options: ["Yes, anytime", "No, it's fixed size", "Only on Tuesdays"], correctIndex: 1, explanation: "Standard arrays are fixed at creation. You'd need a new, bigger array to 'resize'." }
        ]
    },
    {
        id: '202',
        module: MODULE_NAME,
        title: 'Array Indexing (The Apartment Building)',
        shortTitle: '2. Indexing',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">
                    Imagine a tall apartment building.
                    In computer science, the <strong>Ground Floor is Floor 0</strong>.
                </p>
                <div className="flex justify-center items-center gap-1 p-4 bg-gray-50 rounded-lg">
                    {[10, 20, 30, 40].map((v, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-bold bg-white shadow-md relative group cursor-pointer hover:-translate-y-1 transition-transform">
                                {v}
                                <span className="absolute -top-6 bg-black text-white text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Value</span>
                            </div>
                            <div className="text-red-500 font-bold font-mono mt-1 mb-1">Index {i}</div>
                        </div>
                    ))}
                </div>
                <div className="bg-yellow-50 p-3 border-l-4 border-yellow-500">
                    <strong className="text-lg">The "Zero-Based" Rule:</strong>
                    <p>To get the 1st item, ask for Index 0.</p>
                    <p>To get the 5th item, ask for Index 4.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 203, question: "If you want the 3rd element, which index do you use?", options: ["Index 3", "Index 2", "Index 4"], correctIndex: 1, explanation: "1st is 0, 2nd is 1, 3rd is 2." },
            { id: 204, question: "Why 0-based?", options: ["It's just a convention", "It represents an offset from the start", "Computers like 0"], correctIndex: 1, explanation: "Index 0 means '0 steps away from the beginning'." }
        ]
    },
    {
        id: '203',
        module: MODULE_NAME,
        title: 'The Magic of Random Access',
        shortTitle: '3. Memory',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-xl">How does Netflix jump to minute 55:00 instantly without rewinding?</p>
                <p>Because it knows exactly <strong>where</strong> that minute is stored.</p>

                <SketchCard title="The Math Formula">
                    <p className="text-center font-mono bg-gray-100 p-2 rounded mb-4">Address = Start + (Index * Size)</p>
                    <ArrayMemoryView />
                    <p className="mt-4 text-sm">
                        Because arrays are contiguous (no gaps), the computer can calculate the exact memory address of <em>any</em> element instantly.
                        <br />
                        <strong className="text-green-600">This is why Access is O(1).</strong>
                    </p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 205, question: "Accessing array element at index 1000 takes?", options: ["O(n) time", "O(1) time", "O(1000) time"], correctIndex: 1, explanation: "It takes the exact same time as accessing index 0. It's just simple addition." },
            { id: 206, question: "What is required for this O(1) magic?", options: ["Contiguous Memory", "Linked Nodes", "Sorted Data"], correctIndex: 0, explanation: "If data wasn't side-by-side, we couldn't predict the address." }
        ]
    },
    {
        id: '204',
        module: MODULE_NAME,
        title: 'Types of Arrays',
        shortTitle: '4. Types',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col gap-8">
                    <div className="text-center bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2 text-xl">1D Array (The Line)</h4>
                        <p className="mb-2 text-gray-500">Like a queue of people.</p>
                        <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4].map(x => <div key={x} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-blue-100 font-bold">{x}</div>)}
                        </div>
                    </div>
                    <div className="text-center bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold mb-2 text-xl">2D Array (The Grid)</h4>
                        <p className="mb-2 text-gray-500">Like a Chessboard or Excel Sheet.</p>
                        <MatrixVisualizer />
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 207, question: "A spreadsheet is an example of?", options: ["1D Array", "2D Array", "Linked List"], correctIndex: 1, explanation: "Rows and Columns!" }
        ]
    },
    {
        id: '205',
        module: MODULE_NAME,
        title: 'The Problem with Arrays',
        shortTitle: '5. Operations',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <h3 className="text-xl font-bold">The "Cinema Seat" Problem</h3>
                <p>
                    Imagine you and 4 friends are sitting in a row at the movies.
                    Suddenly, a new friend arrives and wants to sit <strong>in the middle</strong>.
                </p>
                <div className="bg-red-50 p-4 border-l-4 border-red-500">
                    <p>Everyone to the right has to stand up and <strong>scoot over</strong> one seat.</p>
                    <p className="font-bold mt-2 text-red-700">This shifting takes TIME! O(n).</p>
                </div>

                <SketchCard title="Try It Yourself">
                    <ArrayOperationsVisualizer />
                    <p className="text-sm text-center mt-4 text-gray-500">
                        Click <strong>Insert</strong> (at index 1 or 2) and watch the struggle.
                    </p>
                </SketchCard>

                <CodeSnippet
                    title="Code: The Scoot Over Logic"
                    code={`
// Inserting 'x' at index 'pos'
// Everyone from the end must move one step right
for (int i = n; i > pos; i--) {
    arr[i] = arr[i-1]; // Move!
}
arr[pos] = x; // Finally sit down`}
                />
            </div>
        ),
        mcqs: [
            { id: 208, question: "Why is insertion slow in arrays?", options: ["The computer is lazy", "You have to shift existing elements", "RAM is slow"], correctIndex: 1, explanation: "You can't overwrite data; you have to make space." }
        ]
    },
    {
        id: '206',
        module: MODULE_NAME,
        title: 'Time Complexity Report Card',
        shortTitle: '6. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg text-center">Arrays are <span className="text-green-600 font-bold">Fast Readers</span> but <span className="text-red-600 font-bold">Slow Writers</span> (in the middle).</p>
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="p-3">Action</th>
                                <th className="p-3">Speed</th>
                                <th className="p-3">Real Life Analogy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="p-3 font-bold">Access (Read)</td>
                                <td className="p-3 text-green-600 font-black text-lg">O(1)</td>
                                <td className="p-3 text-sm">Teleporting to a house address.</td>
                            </tr>
                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="p-3 font-bold">Search (Find)</td>
                                <td className="p-3 text-yellow-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Knocking on every door to find 'Bob'.</td>
                            </tr>
                            <tr className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="p-3 font-bold">Insert (Middle)</td>
                                <td className="p-3 text-red-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Scooting over in cinema seats.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="p-3 font-bold">Delete (Middle)</td>
                                <td className="p-3 text-red-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Filling the empty gap after someone leaves.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        mcqs: [
            { id: 209, question: "What is an Array BEST at?", options: ["Inserting data", "Random Access (Reading)", "Deleting data"], correctIndex: 1, explanation: "Instant access to any element is its superpower." },
            { id: 210, question: "What is an Array WORST at?", options: ["Reading", "Modifying size / Inserting in middle", "Storing numbers"], correctIndex: 1, explanation: "Changing the structure (size/order) forces heavy shifting." }
        ]
    },
    {
        id: '207',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '7. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-xl">O(n) - Linear Space.</p>
                <p>If you want to store 100 integers, you need 100 <span>slots</span>.</p>
                <div className="bg-yellow-100 p-4 border-2 border-black rounded shadow-sm">
                    <p className="font-bold">⚠️ Warning: Reservation Waste</p>
                    <p className="mt-2 text-sm">
                        In many languages, if you create an array of size 1000 but only put 1 item in it...
                        <strong>You still use space for 1000.</strong>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">It's like booking an entire hotel floor for one person.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 211, question: "If you declare arr[1000], how much space is reserved?", options: ["Space for 1 element", "Space for 1000 elements", "Depends on how many you use"], correctIndex: 1, explanation: "Arrays reserve the full block immediately." }
        ]
    },
    {
        id: '208',
        module: MODULE_NAME,
        title: 'Static vs Dynamic Arrays',
        shortTitle: '8. Static vs Dynamic',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">What happens if the array gets full?</p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-300 p-3 rounded text-center">
                        <h4 className="font-bold text-red-600">Static Array (C/C++)</h4>
                        <p className="text-sm">"Sorry, we're full."</p>
                        <p className="text-xs text-gray-500 mt-1">Fixed size. Fast. Rigid.</p>
                    </div>
                    <div className="border border-gray-300 p-3 rounded text-center">
                        <h4 className="font-bold text-green-600">Dynamic Array (Python Lists/Java ArrayList)</h4>
                        <p className="text-sm">"Hold on, let me get a bigger box."</p>
                        <p className="text-xs text-gray-500 mt-1">Auto-resizes when full.</p>
                    </div>
                </div>

                <SketchCard title="Dynamic Resize In Action">
                    <StaticVsDynamic />
                    <p className="text-sm mt-2 text-center text-gray-600 italic">
                        Try filling the array. When it hits the limit, watch it <strong>Copy & Grow</strong>.
                    </p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 212, question: "How does a Dynamic Array grow?", options: ["It stretches existing memory", "It creates a new bigger array and copies everything", "It links a new part"], correctIndex: 1, explanation: "It performs a 'Resize' operation: Create New -> Copy Old -> Delete Old." }
        ]
    },
    {
        id: '209',
        module: MODULE_NAME,
        title: 'Summary: Good vs Bad',
        shortTitle: '9-10. Pros & Cons',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SketchCard title="The Good ✅" className="bg-green-50">
                        <ul className="space-y-2">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600" /> <strong>Super Fast Reads:</strong> O(1) random access is unbeatable.</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600" /> <strong>Efficient:</strong> Uses memory efficiently (no pointers).</li>
                        </ul>
                    </SketchCard>
                    <SketchCard title="The Bad ❌" className="bg-red-50">
                        <ul className="space-y-2">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-red-600" /> <strong>Fixed Size:</strong> Resizing is expensive.</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-red-600" /> <strong>Slow Edits:</strong> Inserting in the middle requires shifting.</li>
                        </ul>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '210',
        module: MODULE_NAME,
        title: 'Sneak Peek: Arrays vs Linked List',
        shortTitle: '11. vs Linked List',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Arrays are great, but what if you want to add/remove items <strong>without</strong> shifting everyone?</p>
                <div className="flex flex-col gap-4">
                    <div className="p-4 border-2 border-black bg-white shadow-sm">
                        <span className="font-bold text-xl block mb-2">Structure Battle</span>
                        <div className="flex gap-4">
                            <div>
                                <p className="font-bold text-gray-500 text-sm">Array</p>
                                <p>⬛⬛⬛⬛ <br /><span className="text-xs">Rigid Block</span></p>
                            </div>
                            <div className="border-l border-gray-300 pl-4">
                                <p className="font-bold text-gray-500 text-sm">Linked List</p>
                                <p>⚫ ➡ ⚫ ➡ ⚫ <br /><span className="text-xs">Flexible Chain</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm">We'll fight this battle in the next module!</p>
            </div>
        ),
        mcqs: []
    },
    {
        id: '211',
        module: MODULE_NAME,
        title: 'Common Traps to Avoid',
        shortTitle: '12. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't screw this up!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">1. The "Off-By-One" Error</span>
                    <p className="mt-1">Traversing from 1 to n instead of 0 to n-1. <strong>Classic rookie mistake.</strong></p>
                </div>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform -rotate-1">
                    <span className="text-2xl mr-2">2. The "Insert is Fast" Myth</span>
                    <p className="mt-1">Unless you are inserting at the very end of a dynamic array, it is <strong>O(n)</strong>.</p>
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '212',
        module: MODULE_NAME,
        title: 'Quick Cheat Sheet',
        shortTitle: '13. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The 3 Things to Remember" className="bg-yellow-50">
                    <ul className="space-y-3 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Access is Instant O(1).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Shifting is Slow O(n).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Start counting at 0.</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
