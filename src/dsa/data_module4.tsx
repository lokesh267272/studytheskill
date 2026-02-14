import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    NodeAnatomy,
    ScatteredMemory,
    LLTypes,
    LinkedListPlayground,
    LLvsArray
} from './components/LinkedListVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const MODULE_NAME = "Module 4: Linked Lists";

export const module4Data: ContentSection[] = [
    {
        id: '401',
        module: MODULE_NAME,
        title: 'What is a Linked List? (The Scavenger Hunt)',
        shortTitle: '1. Intro',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Imagine a <Highlight>Scavenger Hunt</Highlight>.
                </p>
                <SketchCard title="The Clues">
                    <p className="text-center italic mb-4">"Go to the big oak tree." &rarr; "Look under the rock." &rarr; "Check the mailbox." &rarr; ❌ (End)</p>
                    <div className="flex items-center justify-center gap-2 text-2xl font-hand">
                        📦 ➡ 📦 ➡ 📦 ➡ ❌
                    </div>
                    <p className="text-center mt-2 text-sm text-gray-600">
                        You don't know where the 3rd item is until you find the 2nd one!
                    </p>
                </SketchCard>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">Core Concept:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>It is a collection of <strong>Nodes</strong> (Clues).</li>
                        <li>Each Node has:
                            <ul className="list-disc pl-6 mt-1 text-base">
                                <li><span className="text-blue-600 font-bold">Data</span> (The Treasure)</li>
                                <li><span className="text-red-600 font-bold">Next</span> (Address of the next clue)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: [
            { id: 401, question: "Linked list stores elements in?", options: ["Contiguous memory", "Non-contiguous memory", "Stack memory"], correctIndex: 1, explanation: "Nodes can be anywhere in the heap." },
            { id: 402, question: "Each node contains?", options: ["Only Data", "Only Pointer", "Data + Pointer"], correctIndex: 2, explanation: "Value plus link to the next one." },
            { id: 4001, question: "Can we easily move a node in memory?", options: ["Yes, just update pointers", "No, it is fixed", "Only if we copy the array"], correctIndex: 0, explanation: "Since they are not contiguous, moving them is logical, not physical shifting." }
        ]
    },
    {
        id: '402',
        module: MODULE_NAME,
        title: 'Anatomy of a Node',
        shortTitle: '2. The Node',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Think of a Node like a <Highlight>Backpack</Highlight>.</p>
                <div className="flex justify-center gap-8">
                    <div className="bg-white border-2 border-black p-4 rounded shadow-lg w-64">
                        <div className="bg-blue-100 p-2 border border-blue-300 mb-2 text-center rounded">
                            <strong>Pocket 1: Data</strong><br />
                            (The Stuff)
                        </div>
                        <div className="bg-red-100 p-2 border border-red-300 text-center rounded">
                            <strong>Pocket 2: Pointer</strong><br />
                            (Map to next friend)
                        </div>
                    </div>
                </div>
                <CodeSnippet
                    title="C/C++ Struct Representation"
                    code={`
struct Node {
    int data;       // Pocket 1
    struct Node* next; // Pocket 2 (The Map)
};

// Getting memory from the Heap (Ram)
struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));`}
                />
            </div>
        ),
        mcqs: [
            { id: 403, question: "Pointer in node stores?", options: ["Value of next node", "Address of next node", "Null"], correctIndex: 1, explanation: "It points to the memory location of the next node." },
            { id: 404, question: "Last node points to?", options: ["First node", "Null", "Random address"], correctIndex: 1, explanation: "Null indicates the end of the list." },
            { id: 4002, question: "Size of a Node depends on?", options: ["Data Type + Pointer Size", "Just Data", "Fixed 4 bytes"], correctIndex: 0, explanation: "It must hold the data AND the address." }
        ]
    },
    {
        id: '403',
        module: MODULE_NAME,
        title: 'Memory: Islands in the Ocean',
        shortTitle: '3. Memory View',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Arrays are like houses on a street (Neighbors). <br />Linked Lists are like <Highlight>Islands</Highlight> in an ocean.</p>
                <ScatteredMemory />
                <p className="text-center text-sm mt-2">
                    You can't walk from Island 1 to Island 2. You need a <strong>Pointer (Boat)</strong> to get there.
                </p>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-500 text-sm">
                    <strong>Why is this good?</strong>
                    <p>We don't need a huge empty block of land. We can build an island anywhere there is a tiny spot of free space!</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 405, question: "Linked list uses contiguous memory?", options: ["Yes", "No"], correctIndex: 1, explanation: "That is the definition of Arrays, not Lists." },
            { id: 406, question: "Advantage of non-contiguous memory?", options: ["Faster access", "Efficient memory utilization for fragmented RAM", "Less space"], correctIndex: 1, explanation: "Can use fragmented free space that arrays cannot." },
            { id: 4003, question: "Islands analogy refers to?", options: ["Nodes scattered in memory", "Arrays grouped together", "CPU cores"], correctIndex: 0, explanation: "Each node is an independent block connected by a bridge (pointer)." }
        ]
    },
    {
        id: '404',
        module: MODULE_NAME,
        title: 'Types of Linked Lists',
        shortTitle: '4. Types',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-xl mb-2 text-blue-600">1. Singly Linked List (One-Way Street)</h4>
                    <p className="mb-2 text-sm">You can go forward, but you can't look back.</p>
                    <LLTypes type="SINGLY" />
                </div>
                <div className="border-t-2 border-dashed border-gray-300 pt-4">
                    <h4 className="font-bold text-xl mb-2 text-purple-600">2. Doubly Linked List (Two-Way Street)</h4>
                    <p className="mb-2 text-sm">Each node has a "Back" button (Prev Pointer).</p>
                    <LLTypes type="DOUBLY" />
                </div>
                <div className="border-t-2 border-dashed border-gray-300 pt-4">
                    <h4 className="font-bold text-xl mb-2 text-green-600">3. Circular Linked List (The Loop)</h4>
                    <p className="mb-2 text-sm">The end connects back to the start. Infinite Mario Kart track!</p>
                    <LLTypes type="CIRCULAR" />
                </div>
            </div>
        ),
        mcqs: [
            { id: 407, question: "Which list has two pointers per node?", options: ["Singly", "Doubly", "Circular"], correctIndex: 1, explanation: "Prev and Next pointers." },
            { id: 408, question: "Circular list last node points to?", options: ["Null", "Head", "Middle"], correctIndex: 1, explanation: "It forms a circle." },
            { id: 4004, question: "Which list uses less memory per node?", options: ["Singly Linked List", "Doubly Linked List"], correctIndex: 0, explanation: "Singly only stores 1 pointer, Doubly stores 2." }
        ]
    },
    {
        id: '405',
        module: MODULE_NAME,
        title: 'Operations: Pointer Magic',
        shortTitle: '5. Operations',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Watch how links break and reform.</p>
                <div className="bg-yellow-100 p-2 text-center rounded border border-yellow-300 mb-2">
                    <strong>Try "Insert at Head"</strong>. It is super fast!
                </div>
                <LinkedListPlayground />
                <CodeSnippet
                    title="The Traversal Loop"
                    code={`
// Printing the Scavenger Hunt
struct Node* temp = head;

while (temp != NULL) {
    printf("%d -> ", temp->data);
    temp = temp->next; // Move to next clue
}
printf("NULL");`}
                />
            </div>
        ),
        mcqs: [
            { id: 409, question: "Which operation is fastest in Singly Linked List?", options: ["Insert at End", "Insert at Beginning", "Search"], correctIndex: 1, explanation: "No traversal needed if you have Head pointer. O(1)." },
            { id: 410, question: "Deletion at beginning takes?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "Just move Head to Head->Next." },
            { id: 418, question: "Can you access the 5th element of a Linked List directly?", options: ["Yes", "No"], correctIndex: 1, explanation: "No, you must traverse from the head." }
        ]
    },
    {
        id: '406',
        module: MODULE_NAME,
        title: 'Time Complexity Report',
        shortTitle: '6. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="p-3">Action</th>
                                <th className="p-3">Speed</th>
                                <th className="p-3">Analogy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 font-bold">Access / Search</td>
                                <td className="p-3 text-red-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Asking everyone "Are you Bob?" until you find him.</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 font-bold">Insert (Head)</td>
                                <td className="p-3 text-green-600 font-black text-lg">O(1)</td>
                                <td className="p-3 text-sm">Cutting in line at the very front.</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 font-bold">Insert (Tail)</td>
                                <td className="p-3 text-red-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Walking to the back of the line to join.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        mcqs: [
            { id: 411, question: "Access time in linked list?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 1, explanation: "You cannot jump to index i." },
            { id: 412, question: "Best operation in linked list vs array?", options: ["Random Access", "Dynamic Insertion", "Sorting"], correctIndex: 1, explanation: "Inserting without shifting elements." },
            { id: 4005, question: "Why is search O(n)?", options: ["Must check nodes one by one", "Math calculation", "It is O(1)"], correctIndex: 0, explanation: "Sequential traversal is required." }
        ]
    },
    {
        id: '407',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '7. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Space Complexity is <Highlight>O(n)</Highlight>. But there is a catch!</p>
                <div className="bg-red-50 p-4 border-2 border-red-200 rounded shadow-sm">
                    <p className="font-bold text-red-800 text-lg">The Hidden Tax</p>
                    <p>Every node needs extra memory for the <span className="font-mono">next</span> pointer.</p>
                    <div className="flex justify-center mt-4 gap-2 text-sm">
                        <div className="bg-white border-2 border-black p-2 rounded">Data (4 bytes)</div>
                        <div className="bg-blue-200 border-2 border-black p-2 rounded">Pointer (8 bytes)</div>
                    </div>
                    <p className="mt-2 text-xs text-center text-gray-600">You pay for the map to the next treasure!</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 413, question: "Linked list uses extra memory for?", options: ["Data", "Pointers", "Indexing"], correctIndex: 1, explanation: "Pointers allow the chaining mechanism." },
            { id: 4006, question: "On a 64-bit system, a pointer typically takes?", options: ["4 bytes", "8 bytes", "1 byte"], correctIndex: 1, explanation: "Memory addresses are 64-bit (8 bytes)." },
            { id: 4007, question: "Is Linked List space complexity O(n)?", options: ["Yes", "No, O(1)", "O(n^2)"], correctIndex: 0, explanation: "Space grows linearly with valid nodes." }
        ]
    },
    {
        id: '408',
        module: MODULE_NAME,
        title: 'Linked List vs Array (The Showdown)',
        shortTitle: '8. VS Array',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Which one should you choose?</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 border-2 border-black rounded shadow-sm">
                        <h4 className="font-bold text-center mb-2">Array (The Train)</h4>
                        <p className="text-sm">Cars are hooked together rigidly.</p>
                        <ul className="text-xs list-disc pl-4 mt-2">
                            <li>Walk to car 10? Fast (O(1)).</li>
                            <li>Add car in middle? Impossible/Slow.</li>
                        </ul>
                    </div>
                    <div className="bg-highlight p-3 border-2 border-black rounded shadow-sm">
                        <h4 className="font-bold text-center mb-2">Linked List (Tactical Convoy)</h4>
                        <p className="text-sm">Vehicles following each other.</p>
                        <ul className="text-xs list-disc pl-4 mt-2">
                            <li>Find vehicle 10? Radio everyone (O(n)).</li>
                            <li>Add vehicle in middle? Easy! Just tell the guy behind to follow the new guy.</li>
                        </ul>
                    </div>
                </div>
                <LLvsArray />
            </div>
        ),
        mcqs: [
            { id: 414, question: "Which supports dynamic size?", options: ["Array", "Linked List", "Both"], correctIndex: 1, explanation: "Arrays are fixed (mostly), Lists grow freely." },
            { id: 415, question: "Which gives O(1) random access?", options: ["Linked List", "Array"], correctIndex: 1, explanation: "Math address calculation works only on Arrays." },
            { id: 4008, question: "Which has better Cache Locality?", options: ["Array", "Linked List"], correctIndex: 0, explanation: "Arrays are contiguous blocks, friendly to CPU cache." }
        ]
    },
    {
        id: '409',
        module: MODULE_NAME,
        title: 'Pros & Cons',
        shortTitle: '9-10. Pros/Cons',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SketchCard title="Pros ✅" className="bg-green-50">
                        <ul className="space-y-2">
                            <li>📈 <strong>Dynamic Size:</strong> Grow as needed. No full booking required.</li>
                            <li>✂️ <strong>Easy Insert/Delete:</strong> No shifting! Just pointer updates.</li>
                        </ul>
                    </SketchCard>
                    <SketchCard title="Cons ❌" className="bg-red-50">
                        <ul className="space-y-2">
                            <li>🐌 <strong>Slow Access:</strong> No Random Access.</li>
                            <li>⚖️ <strong>Memory Tax:</strong> Pointers take space.</li>
                        </ul>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 416, question: "Main advantage of linked list?", options: ["Fast Search", "Dynamic Size", "Cache Friendly"], correctIndex: 1, explanation: "No need to pre-allocate size." },
            { id: 417, question: "Why linked list is slower than array for access?", options: ["Pointers are slow", "Sequential Traversal needed", "Data is compressed"], correctIndex: 1, explanation: "Must walk the chain." },
            { id: 4009, question: "When to use Linked List?", options: ["Frequent Insert/Delete at head", "Frequent Random Access", "Fixed size data"], correctIndex: 0, explanation: "It excels at dynamic changes." }
        ]
    },
    {
        id: '410',
        module: MODULE_NAME,
        title: 'Traps to Avoid',
        shortTitle: '11. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Lost!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Thinking Access is O(1).
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> You cannot jump to node 5. You must go 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5.
                </div>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform -rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> The Null Pointer Crash.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> Always check if <span className="font-mono">curr == NULL</span>. Accessing data of NULL is a crash!
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '411',
        module: MODULE_NAME,
        title: 'Cheat Sheet',
        shortTitle: '12. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Linked List Note" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> No contiguous memory (Islands).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Access = O(n) (Scavenger Hunt).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Insert/Delete at Head = O(1).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Space = O(n) + Pointers.</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
