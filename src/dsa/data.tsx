import { ContentSection } from './types';
import { module1Data } from './data_module1';
import { module2Data } from './data_module2';
import { module3Data } from './data_module3';
import { module4Data } from './data_module4';
import { module5Data } from './data_module5';
import { module6Data } from './data_module6';
import { module7Data } from './data_module7';
import { module8Data } from './data_module8';
import { module9Data } from './data_module9';

export const contentData: ContentSection[] = [
    ...module1Data,
    ...module2Data,
    ...module3Data,
    ...module4Data,
    ...module5Data,
    ...module6Data,
    ...module7Data,
    ...module8Data,
    ...module9Data
];

export const finalQuizMCQs: any[] = [
    // --- MODULE 1 (Existing) ---
    { id: 101, question: "What is the time complexity of accessing an array element by index?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "Direct access is instant." },
    { id: 102, question: "Which notation represents the worst-case scenario?", options: ["Big-Ω", "Big-θ", "Big-O"], correctIndex: 2, explanation: "Big-O is the upper bound." },
    { id: 103, question: "A loop runs n/2 times. Complexity?", options: ["O(n/2)", "O(n)", "O(1)"], correctIndex: 1, explanation: "Constants (1/2) are ignored." },
    { id: 104, question: "Binary Search is efficient because it is:", options: ["O(n)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "It halves the search space every step." },
    // --- MODULE 2 (Existing) ---
    { id: 201, question: "Which operation is fastest in an array?", options: ["Search", "Insertion", "Access"], correctIndex: 2, explanation: "Access is O(1)." },
    { id: 202, question: "Arrays are best for?", options: ["Frequent Insertions", "Random Access", "Dynamic Size"], correctIndex: 1, explanation: "O(1) access is the main strength." },
    { id: 203, question: "If you delete index 0, what happens to index 1?", options: ["Stays same", "Moves to index 0", "Becomes null"], correctIndex: 1, explanation: "Elements shift left to fill gap." },
    { id: 204, question: "A 2D array is essentially?", options: ["Array of pointers", "Array of Arrays", "Linked List"], correctIndex: 1, explanation: "Rows of columns." },
    // --- MODULE 3 (Existing) ---
    { id: 301, question: "What character ends a string in C?", options: [".", "\\0", "\\n"], correctIndex: 1, explanation: "The null terminator." },
    { id: 302, question: "Time complexity to find string length?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 1, explanation: "Must count until null terminator." },
    { id: 303, question: "String \"AB\" occupies how many bytes?", options: ["2", "3", "4"], correctIndex: 1, explanation: "A, B, and \\0." },
    { id: 304, question: "If a string is Immutable, modifying it:", options: ["Changes it in place", "Creates a new copy", "Crashes program"], correctIndex: 1, explanation: "Original memory is untouched." },
    // --- MODULE 4 (Existing) ---
    { id: 401, question: "Which data structure uses non-contiguous memory?", options: ["Array", "Linked List", "Stack"], correctIndex: 1, explanation: "Linked lists store nodes anywhere in heap." },
    { id: 402, question: "What is the complexity of inserting at the beginning of a Linked List?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "It only requires pointer updates." },
    { id: 403, question: "A node contains data and...?", options: ["Index", "Pointer to next node", "Previous value"], correctIndex: 1, explanation: "The link to the next element." },
    { id: 404, question: "Can you access the 5th element of a Linked List directly?", options: ["Yes", "No"], correctIndex: 1, explanation: "No, you must traverse from the head." },
    // --- MODULE 5 (Existing) ---
    { id: 501, question: "In a Stack, which element is removed first?", options: ["First In", "Last In", "Middle One"], correctIndex: 1, explanation: "LIFO Principle." },
    { id: 502, question: "What is the time complexity of Pop operation?", options: ["O(n)", "O(1)", "O(log n)"], correctIndex: 1, explanation: "It's a constant time operation." },
    { id: 503, question: "Stack Overflow happens when?", options: ["Stack is empty", "Stack is full", "Stack is null"], correctIndex: 1, explanation: "No more space to push." },
    { id: 504, question: "Which data structure is used for function recursion?", options: ["Queue", "Stack", "Array"], correctIndex: 1, explanation: "The Call Stack manages function calls." },
    // --- MODULE 6 (Existing) ---
    { id: 601, question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Tree"], correctIndex: 1, explanation: "First In, First Out." },
    { id: 602, question: "In a circular queue, where does the Rear point after reaching the end?", options: ["Stops", "Beginning (if empty)", "Middle"], correctIndex: 1, explanation: "It wraps around to 0." },
    { id: 603, question: "What is the main advantage of Circular Queue?", options: ["Faster access", "No wasted space", "Simpler code"], correctIndex: 1, explanation: "Solves false overflow of linear queues." },
    { id: 604, question: "BFS algorithm primarily uses?", options: ["Stack", "Queue", "Matrix"], correctIndex: 1, explanation: "For level-order traversal." },
    // --- MODULE 7 (Existing) ---
    { id: 701, question: "A Binary Search Tree (BST) search complexity is usually?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 1, explanation: "Halves the search space each step." },
    { id: 702, question: "Which traversal prints BST values in sorted order?", options: ["Preorder", "Postorder", "Inorder"], correctIndex: 2, explanation: "Left (Smaller) -> Root -> Right (Larger)." },
    { id: 703, question: "A tree is a ___ data structure?", options: ["Linear", "Hierarchical", "Circular"], correctIndex: 1, explanation: "Parent-Child relationship." },
    { id: 704, question: "Maximum nodes in a binary tree of height h?", options: ["2*h", "2^(h+1)-1", "h^2"], correctIndex: 1, explanation: "Geometric progression sum." },
    // --- MODULE 8 (Existing) ---
    { id: 801, question: "In hashing, if two keys map to the same index, it is called?", options: ["Overlap", "Collision", "Clustering"], correctIndex: 1, explanation: "Pigeonhole principle in action." },
    { id: 802, question: "Separate Chaining handles collision using?", options: ["Linked Lists", "Stacks", "Trees"], correctIndex: 0, explanation: "Creates a chain of values at the index." },
    { id: 803, question: "Ideally, Hash Table search complexity is?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 2, explanation: "Direct mapping gives constant time." },
    { id: 804, question: "Linear Probing is a type of?", options: ["Open Hashing", "Closed Hashing (Open Addressing)", "Sorting"], correctIndex: 1, explanation: "We search for the next available slot within the array." },
    // --- MODULE 9 (New) ---
    { id: 901, question: "Binary search works on?", options: ["Sorted Arrays", "Unsorted Arrays", "Linked Lists"], correctIndex: 0, explanation: "Order is mandatory." },
    { id: 902, question: "Worst case complexity of Linear Search?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 1, explanation: "Checking every element." },
    { id: 903, question: "Best case complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(1)"], correctIndex: 2, explanation: "If mid element is the target." },
    { id: 904, question: "Which search is faster for large sorted arrays?", options: ["Linear", "Binary"], correctIndex: 1, explanation: "Logarithmic growth is much slower than linear." }
];
