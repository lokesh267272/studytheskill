import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    QueueConcept,
    QueuePlayground,
    CircularQueuePlayground,
    QueueApplications,
    StackVsQueue
} from './components/QueueVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const MODULE_NAME = "Module 6: Queues";

export const module6Data: ContentSection[] = [
    {
        id: '601',
        module: MODULE_NAME,
        title: 'What is a Queue? (The Roller Coaster)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Imagine a <Highlight>Line for a Roller Coaster</Highlight>.
                </p>
                <SketchCard title="The Golden Rule">
                    <div className="flex items-center justify-center gap-4 text-center">
                        <div>
                            <p className="text-4xl">🏃‍♂️</p>
                            <p className="text-sm font-bold">Arrive First</p>
                        </div>
                        <ArrowRight className="text-gray-400" />
                        <div>
                            <p className="text-4xl">🎢</p>
                            <p className="text-sm font-bold">Ride First</p>
                        </div>
                    </div>
                    <p className="text-center mt-4 text-gray-600">No cutting in line!</p>
                </SketchCard>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">Core Principle: FIFO</h3>
                    <p className="text-lg"><strong>F</strong>irst <strong>I</strong>n, <strong>F</strong>irst <strong>O</strong>ut.</p>
                    <p>New people join at the <strong>REAR</strong> (Back). People leave from the <strong>FRONT</strong>.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 601, question: "Queue follows which principle?", options: ["LIFO", "FIFO", "Random"], correctIndex: 1, explanation: "First person in line is served first." },
            { id: 602, question: "Insertion in queue happens at?", options: ["Front", "Rear", "Middle"], correctIndex: 1, explanation: "You join the back of the line." },
            { id: 623, question: "Keyboard buffer uses which structure?", options: ["Stack", "Queue", "Tree"], correctIndex: 1, explanation: "Keystrokes are processed in order." }
        ]
    },
    {
        id: '602',
        module: MODULE_NAME,
        title: 'Queue Terminology',
        shortTitle: '2. Terms',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">FRONT</h4>
                        <p className="text-sm">The Gatekeeper. Points to the person getting on the ride next.</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-green-600 mb-2">REAR</h4>
                        <p className="text-sm">The End of the Line. Points to the last person who joined.</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-blue-600 mb-2">ENQUEUE</h4>
                        <p className="text-sm">Joining the line. (Rear moves back)</p>
                    </div>
                    <div className="p-4 border-2 border-black bg-white rounded shadow-sm">
                        <h4 className="font-bold text-purple-600 mb-2">DEQUEUE</h4>
                        <p className="text-sm">Getting on the ride. (Front moves back)</p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 603, question: "Which pointer is used for deletion?", options: ["Front", "Rear", "Top"], correctIndex: 0, explanation: "We remove from the Front." },
            { id: 604, question: "Enqueue means?", options: ["Deletion", "Insertion", "Sorting"], correctIndex: 1, explanation: "Adding to the queue." }
        ]
    },
    {
        id: '603',
        module: MODULE_NAME,
        title: 'Operations Lab',
        shortTitle: '3. Operations Lab',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Watch how <strong>Front</strong> chases <strong>Rear</strong>!</p>
                <div className="bg-blue-100 p-2 text-center rounded border border-blue-300 mb-2">
                    <strong>Notice:</strong> When you Dequeue, the spot becomes "empty" but we can't easily reuse it in a simple array!
                </div>
                <QueuePlayground />
            </div>
        ),
        mcqs: [
            { id: 605, question: "Dequeue removes element from?", options: ["Rear", "Front", "Center"], correctIndex: 1, explanation: "FIFO principle." },
            { id: 606, question: "Peek operation returns?", options: ["Rear element", "Front element", "Null"], correctIndex: 1, explanation: "It shows who is next in line." },
            { id: 624, question: "Condition for empty queue (simple)?", options: ["Front == -1", "Front == 0", "Rear == 0"], correctIndex: 0, explanation: "Initial state." }
        ]
    },
    {
        id: '604',
        module: MODULE_NAME,
        title: 'Overflow & Underflow',
        shortTitle: '4. Error States',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col gap-4">
                    <SketchCard title="Overflow (The Club is Full) 🚫" className="bg-red-50">
                        <p>Happens when you try to <strong className="text-red-700">ENQUEUE</strong> but the line is full.</p>
                        <p className="text-xs text-gray-600 mt-2">Bouncer says: "No more people allowed!"</p>
                    </SketchCard>
                    <SketchCard title="Underflow (Empty Floor) 👻" className="bg-blue-50">
                        <p>Happens when you try to <strong className="text-blue-700">DEQUEUE</strong> but no one is in line.</p>
                        <p className="text-xs text-gray-600 mt-2">Operator says: "Who am I letting on the ride? A ghost?"</p>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 607, question: "Queue overflow occurs when?", options: ["Queue is empty", "Rear reaches max size", "Front is -1"], correctIndex: 1, explanation: "No space at the end." },
            { id: 608, question: "Underflow condition is?", options: ["Queue is full", "Queue is empty", "Queue has 1 element"], correctIndex: 1, explanation: "Nothing to delete." }
        ]
    },
    {
        id: '605',
        module: MODULE_NAME,
        title: 'Implementation: The "False Overflow"',
        shortTitle: '5. Implementation',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Arrays act weird with Queues.</p>
                <div className="border-2 border-black p-4 bg-white rounded shadow-sm">
                    <h4 className="font-bold text-red-600 mb-2">The "False Overflow" Problem</h4>
                    <p className="text-sm mb-2">Imagine a bus. 5 people get on (Rear moves). Then 2 get off (Front moves).</p>
                    <div className="flex gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-300 flex items-center justify-center">❌</div>
                        <div className="w-8 h-8 bg-gray-300 flex items-center justify-center">❌</div>
                        <div className="w-8 h-8 bg-blue-200 flex items-center justify-center">🧑</div>
                        <div className="w-8 h-8 bg-blue-200 flex items-center justify-center">🧑</div>
                        <div className="w-8 h-8 bg-blue-200 flex items-center justify-center">🧑</div>
                    </div>
                    <p className="text-sm">The first 2 seats are empty, but <strong>REAR</strong> is at the end. We cannot add new people even though there is space! <br /><strong>Solution?</strong> Circular Queue.</p>
                </div>
                <CodeSnippet
                    title="Circular Queue Arithmetic"
                    code={`
// Wrapping around!
if ((rear + 1) % SIZE == front) {
    printf("Queue Full!");
} else {
    rear = (rear + 1) % SIZE; // Loop back to 0
}`}
                />
            </div>
        ),
        mcqs: [
            { id: 609, question: "Which implementation avoids overflow?", options: ["Array", "Linked List"], correctIndex: 1, explanation: "Nodes are created dynamically." },
            { id: 610, question: "Array queue disadvantage?", options: ["Complex code", "Fixed Size & Wasted Space", "Slow access"], correctIndex: 1, explanation: "Linear array queues waste deleted space." }
        ]
    },
    {
        id: '606',
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
                                <td className="p-3 font-bold">Enqueue</td>
                                <td className="p-3 text-green-600 font-bold">O(1)</td>
                                <td className="p-3 text-sm">Joining the back of the line. Instant.</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="p-3 font-bold">Dequeue</td>
                                <td className="p-3 text-green-600 font-bold">O(1)</td>
                                <td className="p-3 text-sm">Leaving from the front. Instant.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Peek</td>
                                <td className="p-3 text-green-600 font-bold">O(1)</td>
                                <td className="p-3 text-sm">Checking who is next.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        mcqs: [
            { id: 611, question: "Time complexity of enqueue?", options: ["O(n)", "O(1)", "O(log n)"], correctIndex: 1, explanation: "No looping required." },
            { id: 612, question: "Queue operations take constant time?", options: ["Yes", "No"], correctIndex: 0, explanation: "Efficient operations." }
        ]
    },
    {
        id: '607',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '7. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Space Complexity is <Highlight>O(n)</Highlight>.</p>
                <div className="bg-white p-4 border-2 border-black rounded">
                    <p>We need space for <strong>n</strong> people in the line.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 613, question: "Space complexity of queue with n elements?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 1, explanation: "Proportional to number of items." }
        ]
    },
    {
        id: '608',
        module: MODULE_NAME,
        title: 'Types of Queues',
        shortTitle: '8. Types',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border-2 border-black bg-white shadow-sm">
                        <h4 className="font-bold text-lg">1. Simple Queue</h4>
                        <p className="text-sm">The basic line. Can waste space.</p>
                    </div>
                    <div className="p-3 border-2 border-black bg-purple-50 shadow-sm">
                        <h4 className="font-bold text-lg">2. Circular Queue (The Loop)</h4>
                        <p className="text-sm">The line wraps around in a circle. No space wasted.</p>
                    </div>
                    <div className="p-3 border-2 border-black bg-yellow-50 shadow-sm">
                        <h4 className="font-bold text-lg">3. Priority Queue (The VIP)</h4>
                        <p className="text-sm">Important people cut the line! (Sorted by importance).</p>
                    </div>
                    <div className="p-3 border-2 border-black bg-blue-50 shadow-sm">
                        <h4 className="font-bold text-lg">4. Deque (Double Ended)</h4>
                        <p className="text-sm">Join or Leave from BOTH ends.</p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 614, question: "Which queue avoids space wastage?", options: ["Simple Queue", "Circular Queue"], correctIndex: 1, explanation: "It wraps around." },
            { id: 615, question: "Priority queue deletes element based on?", options: ["Arrival Time", "Priority", "Size"], correctIndex: 1, explanation: "Highest priority goes first." },
            { id: 616, question: "Deque allows insertion at?", options: ["Rear only", "Front only", "Both ends"], correctIndex: 2, explanation: "Double Ended Queue." }
        ]
    },
    {
        id: '609',
        module: MODULE_NAME,
        title: 'Circular Queue (The Lazy Susan)',
        shortTitle: '9. Circular Queue',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Solves the wastage problem by connecting the end back to the start.</p>
                <SketchCard title="The Infinite Loop">
                    <CircularQueuePlayground />
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 617, question: "Circular queue advantage?", options: ["Faster", "Utilizes empty space", "More complex"], correctIndex: 1, explanation: "Reuses deleted spots." },
            { id: 618, question: "Circular queue connects which pointers?", options: ["Rear to Front", "Front to Rear"], correctIndex: 0, explanation: "End wraps to Beginning." }
        ]
    },
    {
        id: '610',
        module: MODULE_NAME,
        title: 'Real World Magic',
        shortTitle: '10. Applications',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Where is this used?</p>
                <div className="grid grid-cols-1 gap-4">
                    <SketchCard title="The Printer Queue" className="bg-gray-50">
                        <p><strong>Scenario:</strong> You, Bob, and Alice all hit "Print" at the same time.</p>
                        <p className="mt-2">The printer holds the jobs in a <strong>Queue</strong>. It prints yours, then Bob's, then Alice's.</p>
                    </SketchCard>
                    <SketchCard title="Music Playlist" className="bg-purple-50">
                        <p><strong>Scenario:</strong> "Add to Queue" in Spotify.</p>
                        <p className="mt-2">Songs play in the order you added them.</p>
                    </SketchCard>
                </div>
                <QueueApplications />
            </div>
        ),
        mcqs: [
            { id: 619, question: "BFS uses which data structure?", options: ["Stack", "Queue", "Tree"], correctIndex: 1, explanation: "Breadth First Search explores neighbor by neighbor." },
            { id: 620, question: "Printer queue follows which principle?", options: ["LIFO", "FIFO"], correctIndex: 1, explanation: "First print command is printed first." }
        ]
    },
    {
        id: '611',
        module: MODULE_NAME,
        title: 'Queue vs Stack',
        shortTitle: '11. Comparison',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <StackVsQueue />
                <div className="flex gap-4 justify-center mt-4">
                    <div className="bg-red-100 p-2 rounded">Stack = LIFO (Plates)</div>
                    <div className="bg-blue-100 p-2 rounded">Queue = FIFO (Line)</div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 621, question: "Which follows FIFO?", options: ["Stack", "Queue"], correctIndex: 1, explanation: "Queue is FIFO." },
            { id: 622, question: "Which uses one end for insertion & deletion?", options: ["Queue", "Stack"], correctIndex: 1, explanation: "Stack uses TOP only." }
        ]
    },
    {
        id: '612',
        module: MODULE_NAME,
        title: 'Common Traps',
        shortTitle: '12. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Tricked!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Trying to Dequeue from the Rear.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> That's illegal! You must leave from the Front.
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '613',
        module: MODULE_NAME,
        title: 'Cheat Sheet',
        shortTitle: '13. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Queue Note" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> FIFO: First In First Out</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Enqueue @ Rear (O(1))</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Dequeue @ Front (O(1))</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Use Circular Queue to save space.</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
