import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    LinearSearchDemo,
    BinarySearchDemo,
    SearchComplexityVisual,
    SpaceComparison,
    SearchComparisonTable
} from './components/SearchingVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle, Search, X } from 'lucide-react';

const MODULE_NAME = "Module 9: Searching";

export const module9Data: ContentSection[] = [
    {
        id: '901',
        module: MODULE_NAME,
        title: 'What is Searching? (Where is Waldo?)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Searching is just finding a specific <Highlight>Target</Highlight> in a crowd.
                </p>
                <SketchCard title="The Mission">
                    <div className="flex items-center justify-center gap-4 text-2xl font-hand">
                        <Search size={48} className="text-blue-600" />
                        <span>Find <strong>42</strong> in the box!</span>
                    </div>
                </SketchCard>
                <p>We do this every day: Finding a contact, finding a sock in a drawer, or Googling something.</p>
            </div>
        ),
        mcqs: [
            { id: 901, question: "Searching is used to?", options: ["Sort data", "Find an element", "Delete an array"], correctIndex: 1, explanation: "Locating a specific value." },
            { id: 902, question: "The value we look for is called?", options: ["Key / Target", "Index", "Pointer"], correctIndex: 0, explanation: "Standard terminology." }
        ]
    },
    {
        id: '902',
        module: MODULE_NAME,
        title: 'Linear Search (The Grocery Aisle)',
        shortTitle: '2. Linear Search',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Imagine looking for <strong>Ketchup</strong> in a messy aisle.</p>
                <SketchCard title="The Strategy">
                    <p>You start at the beginning and look at EVERY single bottle until you find it.</p>
                    <div className="flex justify-center mt-2 text-2xl">
                        🍅 🧴 🥫 🧂 🍾 <span className="border-2 border-red-500 rounded p-1">🍟</span>
                    </div>
                </SketchCard>
                <LinearSearchDemo />
                <div className="bg-blue-50 p-4 border-l-4 border-blue-500">
                    <strong>Pros:</strong> Works nicely on <span className="font-bold text-green-600">Messy (Unsorted)</span> lists.<br />
                    <strong>Cons:</strong> Takes forever if the list is long (O(n)).
                </div>
            </div>
        ),
        mcqs: [
            { id: 903, question: "Linear search checks elements?", options: ["Randomly", "Sequentially", "By halving"], correctIndex: 1, explanation: "One after another from index 0." },
            { id: 904, question: "Does linear search work on unsorted data?", options: ["Yes", "No"], correctIndex: 0, explanation: "Order doesn't matter, we check everything." },
            { id: 919, question: "Max comparisons in Linear Search?", options: ["1", "n/2", "n"], correctIndex: 2, explanation: "Worst case scans all." }
        ]
    },
    {
        id: '903',
        module: MODULE_NAME,
        title: 'Time Complexity: The Long Walk',
        shortTitle: '3. Linear Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-black text-ink font-bold">
                                <th className="p-2">Case</th>
                                <th className="p-2">Time</th>
                                <th className="p-2">Scenario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Best Case</td>
                                <td className="p-2 text-green-600 font-bold">O(1)</td>
                                <td className="p-2 text-sm">Found it instantly (First item).</td>
                            </tr>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Worst Case</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                                <td className="p-2 text-sm">It's at the very end (or missing).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        mcqs: [
            { id: 905, question: "Worst case complexity of Linear Search?", options: ["O(1)", "O(log n)", "O(n)"], correctIndex: 2, explanation: "You might have to scan the entire array." },
            { id: 906, question: "Best case occurs when?", options: ["Element is at end", "Element is at start", "Element is missing"], correctIndex: 1, explanation: "First check is a match." }
        ]
    },
    {
        id: '904',
        module: MODULE_NAME,
        title: 'Binary Search (The Dictionary Trick)',
        shortTitle: '4. Binary Search',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">If the list is <Highlight>SORTED</Highlight>, we can be smarter.</p>
                <SketchCard title="The Dictionary Strategy">
                    <p>You look for the word "Magic".</p>
                    <ol className="list-decimal pl-6 mt-2 text-sm space-y-2">
                        <li>You open the book in the <strong>Middle</strong>. You see "Lemon".</li>
                        <li>"Magic" comes AFTER "Lemon". So you <strong className="text-red-600">THROW AWAY</strong> the entire first half!</li>
                        <li>You repeat this with the second half.</li>
                    </ol>
                </SketchCard>
                <div className="flex justify-center my-4">
                    <div className="bg-yellow-100 border-2 border-black p-4 text-center rounded shadow-sketch transform rotate-1">
                        <h3 className="font-bold text-lg mb-2">The Rule</h3>
                        <p>Binary Search <strong className="text-red-600">ONLY</strong> works on Sorted Arrays.</p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 907, question: "Prerequisite for Binary Search?", options: ["Array must be empty", "Array must be sorted", "Array must be large"], correctIndex: 1, explanation: "Logic relies on order (< or >)." },
            { id: 908, question: "Binary search works on unsorted array?", options: ["Yes", "No"], correctIndex: 1, explanation: "No, it will fail to find elements correctly." },
            { id: 920, question: "Binary Search uses which strategy?", options: ["Greedy", "Divide and Conquer", "Dynamic Programming"], correctIndex: 1, explanation: "Halves the problem space." }
        ]
    },
    {
        id: '905',
        module: MODULE_NAME,
        title: 'Binary Search – Visualized',
        shortTitle: '5. BS Visualizer',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Watch how we cut the problem in half every time.</p>
                <BinarySearchDemo />
                <CodeSnippet
                    title="The Cutting Logic"
                    code={`
while (low <= high) {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target) 
        return mid; // Found!

    if (arr[mid] < target)
        low = mid + 1; // Throw away left half
    else
        high = mid - 1; // Throw away right half
}`}
                />
            </div>
        ),
        mcqs: [
            { id: 909, question: "Binary search reduces search space by?", options: ["1 element", "Half", "10%"], correctIndex: 1, explanation: "Divide and Conquer strategy." },
            { id: 910, question: "If target < mid, we search?", options: ["Right half", "Left half", "Both"], correctIndex: 1, explanation: "In a sorted array, smaller items are on the left." }
        ]
    },
    {
        id: '906',
        module: MODULE_NAME,
        title: 'Time Complexity: Super Speed',
        shortTitle: '6. BS Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <SearchComplexityVisual />
                <div className="overflow-x-auto mt-4">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-black text-ink font-bold">
                                <th className="p-2">Case</th>
                                <th className="p-2">Time</th>
                                <th className="p-2">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Best Case</td>
                                <td className="p-2 text-green-600 font-bold">O(1)</td>
                                <td className="p-2 text-sm">Lucky guess! Mid is Target.</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-bold">Worst Case</td>
                                <td className="p-2 text-green-600 font-bold">O(log n)</td>
                                <td className="p-2 text-sm">Cutting list in half until 1 item left.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm mt-2 text-gray-500">Logarithmic means even for 1,000,000 items, it only takes ~20 steps!</p>
            </div>
        ),
        mcqs: [
            { id: 911, question: "Worst case complexity of Binary Search?", options: ["O(n)", "O(n log n)", "O(log n)"], correctIndex: 2, explanation: "Much faster than O(n)." },
            { id: 912, question: "O(log n) is faster than O(n)?", options: ["True", "False"], correctIndex: 0, explanation: "Significantly faster for large inputs." }
        ]
    },
    {
        id: '907',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '7. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>How much memory does the search need?</p>
                <div className="grid grid-cols-2 gap-4">
                    <SketchCard title="Iterative (Loop)" className="bg-green-50">
                        <p className="font-bold text-lg">O(1)</p>
                        <p className="text-sm">We just need 3 variables: Low, High, Mid. No matter how big the array is.</p>
                    </SketchCard>
                    <SketchCard title="Recursive" className="bg-yellow-50">
                        <p className="font-bold text-lg">O(log n)</p>
                        <p className="text-sm">Function calls pile up in the Stack memory.</p>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 913, question: "Iterative binary search space complexity?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "No extra memory usage." },
            { id: 914, question: "Recursive binary search space complexity?", options: ["O(1)", "O(log n)", "O(n)"], correctIndex: 1, explanation: "Due to stack frames." }
        ]
    },
    {
        id: '908',
        module: MODULE_NAME,
        title: 'Linear vs Binary: The Showdown',
        shortTitle: '8. Comparison',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-6">
                <p>When to use which?</p>
                <SearchComparisonTable />
            </div>
        ),
        mcqs: [
            { id: 915, question: "Which algorithm works on unsorted lists?", options: ["Binary Search", "Linear Search"], correctIndex: 1, explanation: "It simply scans everything." },
            { id: 916, question: "Which is faster for 1 million sorted items?", options: ["Linear", "Binary"], correctIndex: 1, explanation: "O(log 10^6) is approx 20 steps. O(n) is 1,000,000." }
        ]
    },
    {
        id: '909',
        module: MODULE_NAME,
        title: 'Where can we search?',
        shortTitle: '9. Structures',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SketchCard title="Arrays" className="bg-white">
                        Binary Search ✅<br /><span className="text-xs text-gray-500">(Can jump to index instantly)</span>
                    </SketchCard>
                    <SketchCard title="Linked List" className="bg-gray-100">
                        Linear Search Only ⚠️<br /><span className="text-xs text-gray-500">(Cannot jump to middle)</span>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 917, question: "Can we efficiently use Binary Search on a standard Linked List?", options: ["Yes", "No"], correctIndex: 1, explanation: "We cannot calculate Mid and jump there instantly." },
            { id: 918, question: "Which structure offers O(1) search on average?", options: ["BST", "Hash Table", "Array"], correctIndex: 1, explanation: "Hashing uses a mathematical formula." }
        ]
    },
    {
        id: '910',
        module: MODULE_NAME,
        title: 'Traps to Avoid',
        shortTitle: '10. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Lost!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Using Binary Search on Messy (Unsorted) Data.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> It will get confused and might say "Not Found" even if it's there!
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '911',
        module: MODULE_NAME,
        title: 'Cheat Sheet',
        shortTitle: '11. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Search Note" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Linear = Any order, Slow O(n)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Binary = Sorted only, Fast O(log n)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> LinkedList = No Binary Search</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];