import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    TreeHierarchy,
    TreeTerminology,
    TreeTypes,
    TraversalVisualizer,
    BSTSearchPlayground,
    SkewedVsBalanced
} from './components/TreeVisualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { CheckCircle, AlertTriangle, GitBranch, Layers, ArrowRight } from 'lucide-react';

const MODULE_NAME = "Module 7: Trees";

export const module7Data: ContentSection[] = [
    {
        id: '701',
        module: MODULE_NAME,
        title: 'What is a Tree?',
        shortTitle: '1. Definition',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">Unlike Arrays or Linked Lists which are lines, a Tree is <Highlight>Non-Linear</Highlight> and Hierarchical.</p>
                <SketchCard title="Family Tree Analogy">
                    <TreeHierarchy />
                </SketchCard>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">Core Concepts:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Used for hierarchical data (File systems, HTML DOM).</li>
                        <li>Consists of <strong>Nodes</strong> connected by <strong>Edges</strong>.</li>
                        <li>The top node is the <strong>Root</strong>.</li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: [
            { id: 701, question: "Tree is which type of data structure?", options: ["Linear", "Non-linear", "Circular"], correctIndex: 1, explanation: "It represents hierarchy, not a sequence." },
            { id: 702, question: "The top node in a tree is called?", options: ["Head", "Top", "Root"], correctIndex: 2, explanation: "Like a real tree (but inverted)." }
        ]
    },
    {
        id: '702',
        module: MODULE_NAME,
        title: 'Basic Tree Terminology',
        shortTitle: '2. Terms',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Click the buttons to identify parts of the tree!</p>
                <TreeTerminology />
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-2 border border-black rounded">
                        <strong>Height:</strong> Longest path from Root to Leaf.
                    </div>
                    <div className="bg-white p-2 border border-black rounded">
                        <strong>Depth:</strong> Distance from Root to Node.
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 703, question: "A node with no children is called?", options: ["Root", "Leaf", "Sibling"], correctIndex: 1, explanation: "It's the end of a branch." },
            { id: 704, question: "Nodes with same parent are?", options: ["Cousins", "Siblings", "Neighbors"], correctIndex: 1, explanation: "Just like brothers and sisters." }
        ]
    },
    {
        id: '703',
        module: MODULE_NAME,
        title: 'Binary Tree',
        shortTitle: '3. Binary Tree',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col items-center">
                    <div className="text-6xl mb-2 font-hand">≤ 2</div>
                    <p className="text-xl text-center">Every node can have <Highlight>at most 2 children</Highlight>.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-black bg-blue-50 text-center rounded">
                        <span className="font-bold block mb-2">Left Child</span>
                        <ArrowRight className="inline rotate-135 transform" />
                    </div>
                    <div className="p-4 border-2 border-black bg-blue-50 text-center rounded">
                        <span className="font-bold block mb-2">Right Child</span>
                        <ArrowRight className="inline rotate-45 transform" />
                    </div>
                </div>
                <CodeSnippet
                    title="Binary Tree Node"
                    code={`
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};`}
                />
            </div >
        ),
        mcqs: [
            { id: 705, question: "Maximum children in a binary tree node?", options: ["1", "2", "Unlimited"], correctIndex: 1, explanation: "Binary means two." },
            { id: 706, question: "Is a binary tree ordered?", options: ["Yes", "No"], correctIndex: 0, explanation: "Left and Right children are distinct." }
        ]
    },
    {
        id: '704',
        module: MODULE_NAME,
        title: 'Types of Binary Trees',
        shortTitle: '4. Types',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Shapes matter for complexity!</p>
                <TreeTypes />
                <div className="bg-yellow-50 p-2 border border-black rounded text-sm mt-4">
                    <strong>BEL Tip:</strong> A "Complete" tree is efficiently stored in an array (Heap).
                </div>
            </div>
        ),
        mcqs: [
            { id: 707, question: "A tree where all internal nodes have 2 children is?", options: ["Full", "Complete", "Perfect"], correctIndex: 0, explanation: "0 or 2 children rule." },
            { id: 708, question: "A Perfect Binary Tree of height h has how many nodes?", options: ["2^h", "2^(h+1) - 1", "h^2"], correctIndex: 1, explanation: "It's the maximum possible nodes." }
        ]
    },
    {
        id: '705',
        module: MODULE_NAME,
        title: 'Binary Tree Traversals',
        shortTitle: '5. Traversals',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Unlike arrays (0 to n), trees have multiple ways to walk through them.</p>
                <TraversalVisualizer />
                <div className="grid grid-cols-3 gap-2 text-xs font-bold text-center mt-4">
                    <div className="p-2 border border-black bg-blue-100">PRE<br />(Root First)</div>
                    <div className="p-2 border border-black bg-green-100">IN<br />(Root Middle)</div>
                    <div className="p-2 border border-black bg-purple-100">POST<br />(Root Last)</div>
                </div>
                <CodeSnippet
                    title="Recursive Traversal (Preorder)"
                    code={`
void preorder(struct Node* root) {
    if (root == NULL) return;
    
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}`}
                />
            </div>
        ),
        mcqs: [
            { id: 709, question: "Inorder traversal sequence?", options: ["Root-L-R", "L-Root-R", "L-R-Root"], correctIndex: 1, explanation: "Left, then Root, then Right." },
            { id: 710, question: "Which traversal is used to delete a tree?", options: ["Preorder", "Inorder", "Postorder"], correctIndex: 2, explanation: "Delete children first, then parent (Postorder)." }
        ]
    },
    {
        id: '706',
        module: MODULE_NAME,
        title: 'Binary Search Tree (BST)',
        shortTitle: '6. BST',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-xl">A special Binary Tree optimized for <Highlight>Searching</Highlight>.</p>
                <div className="flex justify-center items-center gap-4 text-2xl font-bold font-hand my-8">
                    <div className="text-blue-600">Left &lt; Root</div>
                    <div className="w-px h-10 bg-black"></div>
                    <div className="text-red-600">Right &gt; Root</div>
                </div>
                <div className="bg-green-50 p-4 border-l-4 border-green-500">
                    <strong>Magic Property:</strong> Inorder Traversal of a BST gives a <span className="font-bold underline">Sorted Array</span>!
                </div>
            </div>
        ),
        mcqs: [
            { id: 711, question: "In a BST, the left child is?", options: ["Greater than Root", "Smaller than Root", "Equal to Root"], correctIndex: 1, explanation: "Standard BST property." },
            { id: 712, question: "Inorder traversal of BST gives?", options: ["Random order", "Sorted order", "Reverse sorted"], correctIndex: 1, explanation: "Ascending order." }
        ]
    },
    {
        id: '707',
        module: MODULE_NAME,
        title: 'Searching in BST',
        shortTitle: '7. BST Search',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">We don't need to check every node. We can eliminate half the tree at every step!</p>
                <SketchCard title="Interactive Search">
                    <BSTSearchPlayground />
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 713, question: "Average search time in BST?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 1, explanation: "Similar to Binary Search." },
            { id: 714, question: "Worst case search in BST?", options: ["O(log n)", "O(n)", "O(1)"], correctIndex: 1, explanation: "If the tree becomes a line (skewed)." }
        ]
    },
    {
        id: '708',
        module: MODULE_NAME,
        title: 'Time Complexity Analysis',
        shortTitle: '8. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-black text-center bg-white shadow-sketch">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="p-2">Operation</th>
                                <th className="p-2">Average</th>
                                <th className="p-2">Worst (Skewed)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Search</td>
                                <td className="p-2 text-green-600 font-bold">O(log n)</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                            </tr>
                            <tr className="border-b border-black">
                                <td className="p-2 font-bold">Insert</td>
                                <td className="p-2 text-green-600 font-bold">O(log n)</td>
                                <td className="p-2 text-red-600 font-bold">O(n)</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-bold">Traversal</td>
                                <td className="p-2 text-blue-600 font-bold">O(n)</td>
                                <td className="p-2 text-blue-600 font-bold">O(n)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-center mt-2">Why Worst Case? See below:</p>
                <SkewedVsBalanced />
            </div>
        ),
        mcqs: [
            { id: 715, question: "Skewed BST behaves like?", options: ["Array", "Linked List", "Stack"], correctIndex: 1, explanation: "Linear search time O(n)." }
        ]
    },
    {
        id: '709',
        module: MODULE_NAME,
        title: 'Space Complexity',
        shortTitle: '9. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p>Space Complexity depends on the <Highlight>Height (h)</Highlight> of the tree due to the recursion stack.</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 border-2 border-black bg-green-50 rounded">
                        <strong>Balanced</strong><br />
                        Height = log n<br />
                        Space = O(log n)
                    </div>
                    <div className="p-4 border-2 border-black bg-red-50 rounded">
                        <strong>Skewed</strong><br />
                        Height = n<br />
                        Space = O(n)
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 716, question: "Space complexity of tree traversal?", options: ["O(1)", "O(h)", "O(n^2)"], correctIndex: 1, explanation: "Proportional to tree height (recursion stack)." }
        ]
    },
    {
        id: '710',
        module: MODULE_NAME,
        title: 'Tree vs Array vs Linked List',
        shortTitle: '10. Comparison',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="border-2 border-black p-2 bg-white rounded">
                        <strong className="block border-b border-gray-300 mb-1">Array</strong>
                        <ul className="list-disc pl-4">
                            <li>Fast Access O(1)</li>
                            <li>Fixed Size</li>
                            <li>Slow Search (Unsorted)</li>
                        </ul>
                    </div>
                    <div className="border-2 border-black p-2 bg-white rounded">
                        <strong className="block border-b border-gray-300 mb-1">Linked List</strong>
                        <ul className="list-disc pl-4">
                            <li>Slow Access O(n)</li>
                            <li>Dynamic Size</li>
                            <li>Linear structure</li>
                        </ul>
                    </div>
                    <div className="border-2 border-black p-2 bg-yellow-50 rounded transform rotate-1 shadow-sm">
                        <strong className="block border-b border-black mb-1">BST</strong>
                        <ul className="list-disc pl-4">
                            <li>Fast Search O(log n)</li>
                            <li>Dynamic Size</li>
                            <li>Hierarchical</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 717, question: "Best for hierarchical data?", options: ["Array", "Linked List", "Tree"], correctIndex: 2, explanation: "e.g., Folder structure." },
            { id: 718, question: "Best for ordered search?", options: ["Linked List", "BST"], correctIndex: 1, explanation: "Binary Search property." }
        ]
    },
    {
        id: '711',
        module: MODULE_NAME,
        title: 'COMMON PITFALLS',
        shortTitle: '11. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Module 7 Traps!</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Assuming all Binary Trees are BSTs.
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> Only if Left &lt; Root &lt; Right.
                </div>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded transform -rotate-1">
                    <span className="text-2xl mr-2">❌</span>
                    <span className="font-bold">Trap:</span> Thinking Traversal is O(log n).
                    <br /><span className="text-green-700 font-bold ml-8">✔ Truth:</span> Traversal visits EVERY node, so it is O(n).
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '712',
        module: MODULE_NAME,
        title: 'BEL EXAM SHORTCUTS',
        shortTitle: '12. Shortcuts',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="Module 7 Cheat Sheet" className="bg-yellow-50">
                    <ul className="space-y-2 font-bold text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Non-Linear Data Structure</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Inorder (BST) = Sorted</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Search = O(log n) to O(n)</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600" /> Max Nodes = 2^(h+1) - 1</li>
                    </ul>
                </SketchCard>
            </div>
        ),
        mcqs: []
    }
];
