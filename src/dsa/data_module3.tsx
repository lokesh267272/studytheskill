import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    StringMemoryView,
    StringVsCharArray,
    StringOperations,
    MutableVsImmutable
} from './components/StringVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle } from 'lucide-react';

const MODULE_NAME = "Module 3: Strings";

export const module3Data: ContentSection[] = [
    {
        id: '301',
        module: MODULE_NAME,
        title: 'What is a String? (The Pearl Necklace)',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    A String is like a <Highlight>Pearl Necklace</Highlight>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 border-2 border-black rounded shadow-sm">
                        <p className="font-bold text-lg mb-2">The Beads</p>
                        <p>Each bead is a **Character** ('H', 'i', '!').</p>
                    </div>
                    <div className="bg-white p-4 border-2 border-black rounded shadow-sm">
                        <p className="font-bold text-lg mb-2">The String</p>
                        <p>Holds them all together in a specific <Highlight>Sequence</Highlight>.</p>
                    </div>
                </div>
                <SketchCard title="The Hidden Clasp">
                    <StringMemoryView />
                    <p className="mt-4 text-center">
                        See that <span className="font-mono bg-red-100 px-1 border border-red-300">\0</span> at the end?
                        <br />That's the <strong>Null Terminator</strong>. It tells the computer "The necklace ends here!"
                    </p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 301, question: "String is a collection of?", options: ["Integers", "Characters", "Booleans"], correctIndex: 1, explanation: "Strings are made up of chars." },
            { id: 302, question: "String is stored as which data structure?", options: ["Stack", "Queue", "Array"], correctIndex: 2, explanation: "It's basically an array of characters." }
        ]
    },
    {
        id: '302',
        module: MODULE_NAME,
        title: 'Memory: The Parking Lot',
        shortTitle: '2. Memory',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Detailed View: Since strings are just arrays of characters, they park in <Highlight>Contiguous Memory</Highlight>.</p>

                <div className="flex justify-center flex-wrap gap-1 bg-gray-100 p-6 rounded-lg">
                    {['H', 'E', 'L', 'L', 'O', '\0'].map((c, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-bold bg-white group-hover:-translate-y-2 transition-transform shadow-sm relative">
                                {c}
                                {c === '\0' && <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>}
                            </div>
                            <span className="text-xs text-gray-500 font-mono mt-1">{1000 + i}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center text-sm bg-yellow-50 p-2 border border-yellow-200 inline-block w-full">
                    <p>Base Address (1000) + Offset.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 303, question: "Strings use contiguous memory?", options: ["Yes", "No"], correctIndex: 0, explanation: "Characters are stored next to each other." },
            { id: 304, question: "Indexing in strings starts from?", options: ["1", "0", "-1"], correctIndex: 1, explanation: "Zero-based indexing applies here too." }
        ]
    },
    {
        id: '303',
        module: MODULE_NAME,
        title: 'String vs Character Array',
        shortTitle: '3. vs Char Array',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>What's the difference between a <span className="font-mono">char[]</span> and a String?</p>
                <SketchCard title="The Stop Sign">
                    <StringVsCharArray />
                    <p className="mt-4 text-center">
                        <span className="font-bold text-green-600">String:</span> Has a Stop Sign (\0). <br />
                        <span className="font-bold text-red-600">Char Array:</span> Just data. Computer doesn't know where it ends!
                    </p>
                </SketchCard>
                <CodeSnippet
                    title="C Code Definition"
                    code={`
// Character Array (Dangerous!)
char arr[] = {'H', 'E', 'L', 'L', 'O'}; 
// If you print this, it might print garbage after "HELLO" because there's no stop sign!

// String (Safe)
char str[] = "HELLO"; 
// Implicitly: {'H', 'E', 'L', 'L', 'O', '\\0'}
// The \\0 stops the printing.`}
                />
            </div>
        ),
        mcqs: [
            { id: 305, question: "Null character is used to?", options: ["Start string", "Terminate string", "Add space"], correctIndex: 1, explanation: "It marks the end of the data." },
            { id: 306, question: "String termination symbol is?", options: ["\\n", "\\t", "\\0"], correctIndex: 2, explanation: "Null character." }
        ]
    },
    {
        id: '304',
        module: MODULE_NAME,
        title: 'Counting Characters (Length)',
        shortTitle: '4. Length',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">How does the computer know the length?</p>
                <p className="italic">Pro Tip: It doesn't! It has to count.</p>

                <div className="bg-yellow-50 p-4 border-2 border-black rounded relative overflow-hidden">
                    <p className="font-mono text-xl z-10 relative">"HI\0"</p>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center text-4xl font-bold">1... 2... STOP</div>
                </div>

                <div className="bg-blue-50 p-4 border-l-4 border-blue-500">
                    <p><strong>The Rule:</strong> Count characters <span className="text-red-600 font-bold">BEFORE</span> the null terminator.</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Length = 2 ('H', 'I')</li>
                        <li>Size in Memory = 3 (includes \0)</li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: [
            { id: 307, question: "Length of \"HELLO\" is?", options: ["5", "6", "4"], correctIndex: 0, explanation: "H-E-L-L-O = 5 characters." },
            { id: 308, question: "Null character is included in length?", options: ["Yes", "No"], correctIndex: 1, explanation: "Length counts actual content only." }
        ]
    },
    {
        id: '305',
        module: MODULE_NAME,
        title: 'Common String Operations',
        shortTitle: '5. Operations',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Strings are the most used data type. Here is what we do with them:</p>
                <SketchCard title="The String Lab">
                    <StringOperations />
                </SketchCard>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm mt-2">
                    <div className="p-2 border border-blue-200 bg-blue-50 rounded">
                        <strong>Combine (Concat)</strong>: Gluing two strings together.
                    </div>
                    <div className="p-2 border border-green-200 bg-green-50 rounded">
                        <strong>Compare</strong>: Checking if two passwords match.
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 309, question: "Which operation compares two strings?", options: ["strcat", "strcmp", "strcpy"], correctIndex: 1, explanation: "String Compare." },
            { id: 310, question: "Concatenation means?", options: ["Deleting", "Joining", "Reversing"], correctIndex: 1, explanation: "Appending one string to another." }
        ]
    },
    {
        id: '306',
        module: MODULE_NAME,
        title: 'Time Complexity (The Walk)',
        shortTitle: '6. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Most string operations involve <strong>Walking the Line</strong>.</p>
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="p-2">Operation</th>
                                <th className="p-2">Time</th>
                                <th className="p-2">Why?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="p-2 font-bold">Calculate Length</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                                <td className="p-2 text-sm">Walk until \0</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-2 font-bold">Compare</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                                <td className="p-2 text-sm">Check every letter</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-2 font-bold">Concatenate</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                                <td className="p-2 text-sm">Find end &rarr; Copy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-yellow-100 p-2 text-center text-sm border border-yellow-300 rounded">
                    <strong>Note:</strong> O(n) here means "n is the length of the string".
                </div>
            </div>
        ),
        mcqs: [
            { id: 311, question: "Time complexity of strlen()?", options: ["O(1)", "O(n)", "O(n^2)"], correctIndex: 1, explanation: "It loops through the string once." },
            { id: 312, question: "Worst-case string comparison?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 1, explanation: "If strings are identical, it checks all n characters." }
        ]
    },
    {
        id: '307',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '7. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Space complexity is <Highlight>O(n)</Highlight>.</p>
                <div className="flex flex-col items-center border-2 border-black p-4 bg-white rounded shadow-sm">
                    <p className="mb-2">Storing "ABC":</p>
                    <div className="flex gap-1">
                        <div className="w-10 h-10 border border-black bg-gray-200 flex items-center justify-center">A</div>
                        <div className="w-10 h-10 border border-black bg-gray-200 flex items-center justify-center">B</div>
                        <div className="w-10 h-10 border border-black bg-gray-200 flex items-center justify-center">C</div>
                        <div className="w-10 h-10 border-2 border-red-500 bg-red-100 flex items-center justify-center opacity-70">\0</div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Takes n characters + 1 terminator.</p>
                </div>
            </div>
        ),
        mcqs: [
            { id: 313, question: "Space complexity of string of length n?", options: ["O(1)", "O(n)", "O(n^2)"], correctIndex: 1, explanation: "Proportional to number of characters." }
        ]
    },
    {
        id: '308',
        module: MODULE_NAME,
        title: 'Mutable vs Immutable: The Stone Tablet',
        shortTitle: '8. Mutability',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">This is the biggest difference between languages.</p>
                <MutableVsImmutable />
                <div className="grid grid-cols-2 gap-4 text-center text-sm mt-4">
                    <div className="p-4 border-2 border-green-600 bg-green-50 rounded">
                        <h4 className="font-bold text-lg mb-1">Mutable (Whiteboard)</h4>
                        <p>C, C++, Ruby</p>
                        <hr className="my-2 border-green-200" />
                        <p>You can erase 'H' and write 'J' instantly.</p>
                    </div>
                    <div className="p-4 border-2 border-blue-600 bg-blue-50 rounded">
                        <h4 className="font-bold text-lg mb-1">Immutable (Stone)</h4>
                        <p>Java, Python, JS</p>
                        <hr className="my-2 border-blue-200" />
                        <p>You can't change it. You must carve a <strong>whole new tablet</strong>.</p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 314, question: "Java strings are?", options: ["Mutable", "Immutable", "Both"], correctIndex: 1, explanation: "Once created, they cannot be changed." },
            { id: 315, question: "Immutable means?", options: ["Can be changed", "Cannot be changed", "Deleted instantly"], correctIndex: 1, explanation: "Modification creates a new instance." }
        ]
    },
    {
        id: '309',
        module: MODULE_NAME,
        title: 'Input & Output Quirks',
        shortTitle: '9. Input/Output',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col gap-4">
                    <SketchCard title="Input: The Space Problem">
                        <p>If you type "Hello World", <span className="font-mono bg-gray-200 px-1">scanf</span> only reads "Hello".</p>
                        <p className="text-sm text-red-600 mt-2">Why? Because Space is considered a separator!</p>
                    </SketchCard>
                    <SketchCard title="Output: The Terminator Rule">
                        <p>The computer prints characters blindly until it hits <strong>\0</strong>.</p>
                        <p className="text-sm mt-2">If you forget the \0, it will print garbage memory next to your string!</p>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 316, question: "String input usually stops at?", options: ["End of line", "Whitespace", "Null"], correctIndex: 1, explanation: "Spaces break the input token." },
            { id: 317, question: "Output stops at which character?", options: ["\\n", "\\0", "Space"], correctIndex: 1, explanation: "Null terminator marks the end." }
        ]
    },
    {
        id: '310',
        module: MODULE_NAME,
        title: 'Classic String Problems',
        shortTitle: '10. Problems',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>You will face these in every interview:</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border-l-4 border-purple-500 bg-purple-50 shadow-sm">
                        <div className="text-3xl">🏎️</div>
                        <div>
                            <strong>Palindrome Check</strong>
                            <p className="text-sm text-gray-600">"RACECAR" forwards is "RACECAR" backwards.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border-l-4 border-orange-500 bg-orange-50 shadow-sm">
                        <div className="text-3xl">🔄</div>
                        <div>
                            <strong>Reverse String</strong>
                            <p className="text-sm text-gray-600">"HELLO" &rarr; "OLLEH". Usually done with Two Pointers.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border-l-4 border-teal-500 bg-teal-50 shadow-sm">
                        <div className="text-3xl">🔠</div>
                        <div>
                            <strong>Anagrams</strong>
                            <p className="text-sm text-gray-600">"LISTEN" and "SILENT". Same letters, different order.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 318, question: "Palindrome means?", options: ["Reads same forwards/backwards", "Contains all vowels", "Is empty"], correctIndex: 0, explanation: "e.g., RACECAR." },
            { id: 319, question: "Reverse string output of 'ABC'?", options: ["ABC", "CBA", "BCA"], correctIndex: 1, explanation: "Order is flipped." }
        ]
    },
    {
        id: '311',
        module: MODULE_NAME,
        title: 'Quick Comparison: Strings vs Arrays',
        shortTitle: '11. vs Arrays',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-black p-4 bg-white rounded">
                        <h4 className="font-bold border-b-2 border-gray-200 mb-2">Integer Array</h4>
                        <ul className="text-sm list-disc pl-4 space-y-1">
                            <li>No terminator needed.</li>
                            <li>Length is fixed/known.</li>
                            <li>[1, 2, 3]</li>
                        </ul>
                    </div>
                    <div className="border-2 border-black p-4 bg-highlight transform rotate-1 rounded">
                        <h4 className="font-bold border-b-2 border-black mb-2">String</h4>
                        <ul className="text-sm list-disc pl-4 space-y-1">
                            <li>Needs <strong>\0</strong> to end.</li>
                            <li>Length calculated by loop.</li>
                            <li>['A', 'B', '\0']</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 320, question: "Which has null character?", options: ["Int Array", "String", "Float Array"], correctIndex: 1, explanation: "Specific to strings." }
        ]
    },
    {
        id: '312',
        module: MODULE_NAME,
        title: 'Traps to Watch Out For',
        shortTitle: '12. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Bitten!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1 shadow-sm">
                    <span className="text-lg font-bold">Trap #1: The Phantom Byte</span>
                    <p className="mt-1">Assuming "ABC" takes 3 bytes. Nope! It takes 4. <br />(A, B, C, \0).</p>
                </div>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform -rotate-1 shadow-sm mt-2">
                    <span className="text-lg font-bold">Trap #2: "==" vs "equals()"</span>
                    <p className="mt-1">In Java/JS, <span className="font-mono">==</span> checks if they are the <em>same object</em> in memory. Use <span className="font-mono">.equals()</span> to check the text!</p>
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '313',
        module: MODULE_NAME,
        title: 'Summary & Cheat Sheet',
        shortTitle: '13. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Cheat Sheet" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> String = Char Array + \0</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> All Ops (Len, Cmp, Cat) = O(n)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Java Strings = Immutable (Stone)</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
