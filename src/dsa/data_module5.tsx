import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    StackConcept,
    StackPlayground,
    StringReverser,
    BalancedParentheses,
    StackImplComparison
} from './components/StackVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const MODULE_NAME = "Module 5: Stacks";

export const module5Data: ContentSection[] = [
    {
        id: '501',
        module: MODULE_NAME,
        title: 'What is a Stack? (The Pringles Can)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Think of a <Highlight>Can of Pringles</Highlight>.
                </p>
                <SketchCard title="The Rules of the Can">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🥔</div>
                            <p className="font-bold">Eat</p>
                            <p className="text-sm">You can only eat the <span className="text-red-600 font-bold">TOP</span> chip.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">⬇️</div>
                            <p className="font-bold">Add</p>
                            <p className="text-sm">You can only add a chip to the <span className="text-blue-600 font-bold">TOP</span>.</p>
                        </div>
                    </div>
                </SketchCard>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">Core Principle: LIFO</h3>
                    <p className="text-lg"><strong>L</strong>ast <strong>I</strong>n, <strong>F</strong>irst <strong>O</strong>ut.</p>
                    <p>The last chip you put in is the first one you eat.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 501, question: "Stack follows which principle?", options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random Access"], correctIndex: 1, explanation: "The last item added is the first one removed." },
            { id: 502, question: "Stack insertion happens at?", options: ["Bottom", "Middle", "Top"], correctIndex: 2, explanation: "Operations are restricted to the Top end." },
            { id: 516, question: "Real world example of Stack?", options: ["Queue of people", "Pile of plates", "Network Graph"], correctIndex: 1, explanation: "LIFO nature." }
        ]
    },
    {
        id: '502',
        module: MODULE_NAME,
        title: 'Stack Terminology',
        shortTitle: '2. Terms',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-blue-600 mb-2">TOP</h4>
                        <p className="text-sm">The Lid. It points to the highest item.</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-green-600 mb-2">PUSH</h4>
                        <p className="text-sm">Stuffing an item in. (Top goes up)</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">POP</h4>
                        <p className="text-sm">Removing the top item. (Top goes down)</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-purple-600 mb-2">PEEK</h4>
                        <p className="text-sm">Just looking inside without touching.</p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 503, question: "Which pointer indicates top of stack?", options: ["HEAD", "TOP", "FRONT"], correctIndex: 1, explanation: "TOP tracks the current insertion point." },
            { id: 504, question: "Peek operation returns?", options: ["Bottom element", "Top element without removal", "Top element and removes it"], correctIndex: 1, explanation: "Peek is just viewing, not modifying." },
            { id: 5001, question: "What happens to TOP when you POP?", options: ["Increments", "Decrements", "Stays same"], correctIndex: 1, explanation: "Top goes down as items are removed." }
        ]
    },
    {
        id: '503',
        module: MODULE_NAME,
        title: 'Operations Lab',
        shortTitle: '3. Operations Lab',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Try pushing and popping to see the <span className="font-mono font-bold">TOP</span> move.</p>
                <div className="bg-yellow-100 p-2 text-center rounded border border-yellow-300 mb-2">
                    <strong>Challenge:</strong> Push 3 items, then Pop 2 without looking!
                </div>
                <StackPlayground />
                <CodeSnippet
                    title="The Push Function"
                    code={`
void push(int value) {
    if (full()) {
        printf("Can't fit anymore chips!");
        return;
    }
    top++;           // Lift the lid
    arr[top] = value; // Place the chip
}`}
                />
            </div>
        ),
        mcqs: [
            { id: 505, question: "Push operation does what?", options: ["Removes element", "Adds element to top", "Sorts the stack"], correctIndex: 1, explanation: "Increments TOP and stores value." },
            { id: 506, question: "Pop removes element from?", options: ["Top", "Bottom", "Anywhere"], correctIndex: 0, explanation: "Always removes the most recently added item." },
            { id: 5002, question: "If Top is -1, the stack is?", options: ["Full", "Empty", "Initialized"], correctIndex: 1, explanation: "0 is the first index, so -1 means no items." }
        ]
    },
    {
        id: '504',
        module: MODULE_NAME,
        title: 'Overflow & Underflow',
        shortTitle: '4. Error States',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col gap-4">
                    <SketchCard title="Stack Overflow 💥" className="bg-red-50">
                        <p><strong>The Explosion.</strong> happens when you try to PUSH into a <strong className="text-red-700">FULL</strong> stack.</p>
                        <p className="text-xs text-gray-600 mt-2">Example: Infinite Recursion (Function calling itself forever eats all memory).</p>
                    </SketchCard>
                    <SketchCard title="Stack Underflow 🕳️" className="bg-blue-50">
                        <p><strong>The Phantom Grasp.</strong> Happens when you try to POP from an <strong className="text-blue-700">EMPTY</strong> stack.</p>
                        <p className="text-xs text-gray-600 mt-2">Example: Hitting "Undo" when you haven't done anything yet.</p>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 507, question: "Stack overflow occurs when?", options: ["Stack is empty", "Stack is full", "Stack is null"], correctIndex: 1, explanation: "No space left to push." },
            { id: 508, question: "Underflow means?", options: ["Popping from empty stack", "Pushing to full stack", "Variable mismatch"], correctIndex: 0, explanation: "Nothing to remove." },
            { id: 5003, question: "Infinite recursion causes?", options: ["Stack Overflow", "Heap Overflow", "Fast execution"], correctIndex: 0, explanation: "Function calls fill up the stack memory." }
        ]
    },
    {
        id: '505',
        module: MODULE_NAME,
        title: 'Implementation: Under the Hood',
        shortTitle: '5. Implementation',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">You can build a stack using Arrays or Linked Lists.</p>
                <StackImplComparison />
                <div className="bg-gray-100 p-4 rounded text-sm mt-4">
                    <p className="font-bold mb-2">Which one is better?</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Array:</strong> Faster, but fixed size (can overflow).</li>
                        <li><strong>Linked List:</strong> Dynamic size, but uses more memory (pointers).</li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: [
            { id: 509, question: "Which implementation avoids fixed size overflow?", options: ["Array Stack", "Linked List Stack"], correctIndex: 1, explanation: "Linked Lists grow dynamically." },
            { id: 510, question: "Array stack disadvantage?", options: ["Slow speed", "Fixed size", "Complex logic"], correctIndex: 1, explanation: "You must define size upfront (static)." },
            { id: 517, question: "In Linked List Stack, where is Top?", options: ["Head", "Tail", "Middle"], correctIndex: 0, explanation: "Insertion at Head is O(1)." }
        ]
    },
    {
        id: '506',
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
                                <td className="p-3 font-bold">Push</td>
                                <td className="p-3 text-green-600 font-bold">O(1)</td>
                                <td className="p-3 text-sm">Putting a plate on top. Instant.</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 font-bold">Pop</td>
                                <td className="p-3 text-green-600 font-bold">O(1)</td>
                                <td className="p-3 text-sm">Taking the top plate. Instant.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Search</td>
                                <td className="p-3 text-red-600 font-bold">O(n)</td>
                                <td className="p-3 text-sm">Finding the bottom plate (Must remove all n plates first).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        mcqs: [
            { id: 511, question: "Time complexity of push?", options: ["O(n)", "O(1)", "O(log n)"], correctIndex: 1, explanation: "Constant time operation." },
            { id: 512, question: "Stack operations take constant time?", options: ["Yes", "No"], correctIndex: 0, explanation: "All primary ops are O(1)." },
            { id: 5004, question: "Why is searching a stack slow?", options: ["Must pop elements to see below", "It is indexed", "It is sorted"], correctIndex: 0, explanation: "You have to dismantle the stack to find deep items." }
        ]
    },
    {
        id: '507',
        module: MODULE_NAME,
        title: 'Real World Magic',
        shortTitle: '8. Applications',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-xl mb-2 text-blue-600">1. The Undo Button (Ctrl+Z)</h4>
                    <p className="mb-2 text-sm">Every action you take is Pushed. 'Undo' just Pops the last action.</p>
                </div>

                <div className="border-t-2 border-dashed border-gray-300 pt-4">
                    <h4 className="font-bold text-xl mb-2 text-purple-600">2. Balanced Parentheses</h4>
                    <p className="mb-2 text-sm">How your code editor knows you missed a closing bracket <code>&#125;</code>.</p>
                    <BalancedParentheses />
                </div>
            </div>
        ),
        mcqs: [
            { id: 514, question: "Stack is used in?", options: ["Graph BFS", "Recursion", "Disk scheduling"], correctIndex: 1, explanation: "Recursion relies on the Call Stack." },
            { id: 515, question: "Reversing a string uses which property?", options: ["FIFO", "LIFO", "Sorting"], correctIndex: 1, explanation: "LIFO naturally reverses the order." },
            { id: 5005, question: "Browser Back Button uses?", options: ["Queue", "Stack", "Tree"], correctIndex: 1, explanation: "Last page visited is the first one shown on Back." }
        ]
    },
    {
        id: '508',
        module: MODULE_NAME,
        title: 'Traps to Avoid',
        shortTitle: '10. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Tricked!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Thinking you can see the bottom.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> You are blind to everything except the Top.
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '509',
        module: MODULE_NAME,
        title: 'Cheat Sheet',
        shortTitle: '11. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Stack Note" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Rule: LIFO (Last In First Out)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Push/Pop: O(1)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Use for: Undo, Recursion, Reversing.</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
