import React from 'react';
import { SectionType, ContentSection } from './types';
import {
    LoopVisualizer,
    SpeedComparison,
    SearchVisualizer,
    ComplexityGraph,
    RecursionVisualizer,
    NestedLoopVisualizer
} from './components/Visualizations';
import { Highlight, SketchCard } from './components/SketchyUI';
import { CodeSnippet } from './components/CodeSnippet';
import { AlertTriangle, CheckCircle } from 'lucide-react';


const MODULE_NAME = "Module 1: Time & Space Complexity";

export const module1Data: ContentSection[] = [
    {
        id: '1',
        module: MODULE_NAME,
        title: 'Why Do We Need Time & Space Complexity?',
        shortTitle: '1. Why?',
        type: SectionType.INTRO,
        content: (
            <div className="space-y-6">
                <p className="text-xl">
                    Imagine you're throwing a huge pizza party. You have two friends who want to be the chef:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                        <h4 className="font-bold text-blue-800">Chef A</h4>
                        <p>Takes 10 minutes to bake 1 pizza. <br />Checking 100 pizzas? <br /><strong>That's 1000 minutes!</strong></p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800">Chef B</h4>
                        <p>Takes 1 hour to heat the oven, but then bakes <strong>all pizzas instantly</strong>.</p>
                    </div>
                </div>
                <SketchCard title="The Race">
                    <SpeedComparison />
                    <p className="mt-4 text-center italic">
                        For 1 pizza, Chef A wins. But for 1,000 pizzas? Chef B destroys him. <br />
                        <Highlight>That is Scale.</Highlight>
                    </p>
                </SketchCard>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">The Reality Check:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Computers aren't infinitely fast.</li>
                        <li>We don't measure speed in <strong>seconds</strong> (because my laptop is slower than a supercomputer).</li>
                        <li>We measure <strong>steps</strong>. How many steps does it take as your input (<span className="font-mono">n</span>) grows?</li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: [
            { id: 1, question: "Why don't we measure algorithms in percentages or seconds?", options: ["Because hardware speeds vary", "Because seconds act differently in code", "Because it's impossible"], correctIndex: 0, explanation: "Exactly! A fast code on a slow computer might look slow. We need a hardware-independent metric." },
            { id: 2, question: "What is the 'Input Size' usually called?", options: ["x", "n", "i"], correctIndex: 1, explanation: "We use 'n' to represent the number of items we are processing." }
        ]
    },
    {
        id: '2',
        module: MODULE_NAME,
        title: 'What is Time Complexity?',
        shortTitle: '2. Time Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <SketchCard title="Counting Operations">
                    <LoopVisualizer />
                </SketchCard>
                <div className="text-lg space-y-4">
                    <p>Forget the clock. Think about <strong>Effort</strong>.</p>
                    <p>
                        Time Complexity is simply counting: <br />
                        <em>"If I give you <span className="font-bold font-mono">n</span> items, how many times do you have to touch them?"</em>
                    </p>
                    <p>
                        It's like scanning items at a supermarket checkout.
                        <br />
                        Scanning 5 items? 5 Beeps.
                        <br />
                        Scanning 100 items? 100 Beeps.
                        <br />
                        That's <Highlight>Linear Time O(n)</Highlight>.
                    </p>
                </div>

                <CodeSnippet
                    title="Real World: The Beeping Scanner"
                    code={`
// n is the number of items in your cart
function scanGroceries(cart) {
    for (let item of cart) {
        console.log("Beep!"); // 1 Operation
    }
}
// 10 items = 10 beeps
// n items = n beeps
// Time Complexity = O(n)`}
                />
            </div>
        ),
        mcqs: [
            { id: 3, question: "Time complexity counts...", options: ["Seconds passed", "Operations performed", "Lines of code"], correctIndex: 1, explanation: "It counts the fundamental steps/operations relative to input size." },
            { id: 4, question: "If a loop runs from 1 to n, what is the complexity?", options: ["O(1)", "O(n)", "O(n^2)"], correctIndex: 1, explanation: "One step for each of the n items." }
        ]
    },
    {
        id: '3',
        module: MODULE_NAME,
        title: 'What is Space Complexity?',
        shortTitle: '3. Space Complexity',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">
                    This is the "Backpack Problem".
                    How much memory (RAM) does your algorithm need to finish the job?
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-black p-4 rounded bg-white shadow-sm">
                        <h4 className="font-bold border-b-2 border-gray-200 mb-2">Input Space</h4>
                        <p>The space taken by the data itself. (The books you have to study).</p>
                    </div>
                    <div className="border-2 border-black p-4 rounded bg-highlight shadow-sm">
                        <h4 className="font-bold border-b-2 border-black mb-2">Auxiliary Space</h4>
                        <p>The <strong>extra</strong> scratch paper you need while calculating. (This is what we optimize!).</p>
                    </div>
                </div>

                <SketchCard title="Your Memory Desk">
                    <div className="flex gap-2 justify-center py-6">
                        <div className="w-16 h-16 border-2 border-dashed border-gray-400 bg-gray-100 flex items-center justify-center text-xs text-center p-1">Input (Can't change)</div>
                        <div className="w-1 bg-black mx-2"></div>
                        <div className="w-16 h-16 border-2 border-black bg-highlight flex items-center justify-center animate-bounce text-xs text-center p-1 font-bold">Extra Vars</div>
                    </div>
                    <p className="text-center text-sm pt-2">Ideally, we want the "Extra" stuff to be O(1) (Constant).</p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 5, question: "What is Auxiliary Space?", options: ["The input array size", "Extra temporary memory used", "Hard drive space"], correctIndex: 1, explanation: "It's the temporary workspace your algorithm needs to run." },
            { id: 6, question: "If you create a new array of size 'n' inside your function, what's the space complexity?", options: ["O(1)", "O(n)", "O(n^2)"], correctIndex: 1, explanation: "You allocated memory proportional to the input size." }
        ]
    },
    {
        id: '4',
        module: MODULE_NAME,
        title: 'Input Size (n) – The "Heart" of Complexity',
        shortTitle: '4. Input Size (n)',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">
                    When you see <span className="font-mono font-bold">O(n)</span>, don't get scared of the math.
                    <br />
                    <span className="font-mono font-bold">n</span> just means <strong>"The Size of the Pile"</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <li>Sorting a Spotify playlist? <strong>n = number of songs.</strong></li>
                    <li>Searching a Dictionary? <strong>n = number of words.</strong></li>
                    <li>Processing Instagram feed? <strong>n = number of posts.</strong></li>
                </ul>

                <div className="flex justify-around items-end h-40 border-b-2 border-black pb-2 mt-4">
                    <div className="w-12 bg-accent border-2 border-black h-10 flex items-center justify-center text-xs">Small (10)</div>
                    <div className="w-12 bg-accent border-2 border-black h-20 flex items-center justify-center text-xs">Med (100)</div>
                    <div className="w-12 bg-accent border-2 border-black h-32 flex items-center justify-center text-xs">Big (1k)</div>
                    <div className="w-12 bg-danger border-2 border-black h-full flex items-center justify-center text-white font-bold text-xs animate-pulse">Huge (1M)</div>
                </div>
                <p className="text-center font-bold text-red-600">We only care about what happens when 'n' gets HUGE.</p>
            </div>
        ),
        mcqs: [
            { id: 7, question: "What does 'n' represent?", options: ["The variable name", "The input size", "The number of loops"], correctIndex: 1, explanation: "n is the magnitude of data we are dealing with." }
        ]
    },
    {
        id: '5',
        module: MODULE_NAME,
        title: 'Best, Average & Worst Case',
        shortTitle: '5. Best/Avg/Worst',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">
                    Let's play "Find the Key".
                    Imagine you lost your house keys in a messy room.
                </p>
                <SearchVisualizer />
                <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="p-4 border-l-4 border-green-500 bg-white shadow-sm">
                        <span className="font-bold text-green-700 text-lg">Ω (Omega) - Best Case</span>
                        <p className="text-gray-700">You put your hand in your pocket... <strong>FOUND THEM!</strong> (1 second). <br />This is pure luck.</p>
                    </div>
                    <div className="p-4 border-l-4 border-yellow-500 bg-white shadow-sm">
                        <span className="font-bold text-yellow-700 text-lg">Θ (Theta) - Average Case</span>
                        <p className="text-gray-700">You look under the couch, on the table... find them after a few minutes. <br />This is realistic.</p>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-red-50 shadow-sm">
                        <span className="font-bold text-red-700 text-lg">O (Big O) - Worst Case</span>
                        <p className="text-gray-700">You search <em>EVERYWHERE</em>. They are in the very last place you look. <br /><strong>This is what we engineer for.</strong></p>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 8, question: "Why do programmers care most about Worst Case (Big O)?", options: ["It's unlikely to happen", "It guarantees performance won't get worse than this", "It's the easiest to calculate"], correctIndex: 1, explanation: "If we plan for the worst, our users are never disappointed." },
            { id: 9, question: "Finding an item at the very first index is?", options: ["Worst Case", "Best Case", "Average Case"], correctIndex: 1, explanation: "That's the luckiest scenario!" }
        ]
    },
    {
        id: '6',
        module: MODULE_NAME,
        title: 'Making Sense of the Graphs',
        shortTitle: '6. Notations',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Don't be intimidated by the squiggly lines. It's just a way to visualize "Speed Limit".</p>
                <ComplexityGraph types={['O(n)', 'O(1)']} />
                <div className="bg-blue-50 p-4 border-2 border-blue-200 rounded-lg">
                    <h4 className="font-bold mb-2">The Rule of "Ignoring the Fluff"</h4>
                    <p>If your code takes <span className="font-mono bg-white px-1">2n + 5</span> steps:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Ignore the <span className="font-bold">5</span> (It's tiny compared to a million).</li>
                        <li>Ignore the <span className="font-bold">2</span> (Multipliers don't change the curve shape).</li>
                        <li>Result: Just <span className="font-bold">O(n)</span>.</li>
                    </ul>
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '7',
        module: MODULE_NAME,
        title: 'Big-O Notation (The One You Need)',
        shortTitle: '7. Big-O',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-hand font-bold text-red-600">The Ceiling</h3>
                <p>Big-O puts a "Roof" on your algorithm. It says: <br /><em>"I promise it will never perform worse than this."</em></p>

                <div className="bg-red-50 border-2 border-red-400 p-4 rounded-lg flex items-center gap-3">
                    <AlertTriangle className="text-red-600 w-8 h-8" />
                    <p className="font-bold">Exam/Interview Tip: Always give the Big-O (Worst Case) complexity unless asked otherwise!</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold mt-4">
                    <div className="bg-green-100 p-2 border border-black rounded shadow-sm hover:scale-105 transition-transform">
                        O(1)<br /><span className="text-xs font-normal">Super Fast</span>
                    </div>
                    <div className="bg-yellow-100 p-2 border border-black rounded shadow-sm hover:scale-105 transition-transform">
                        O(n)<br /><span className="text-xs font-normal">Okay</span>
                    </div>
                    <div className="bg-red-100 p-2 border border-black rounded shadow-sm hover:scale-105 transition-transform">
                        O(n²)<br /><span className="text-xs font-normal">Slow!</span>
                    </div>
                </div>
            </div>
        ),
        mcqs: [
            { id: 10, question: "Big-O gives us the ____ bound?", options: ["Lower", "Upper", "Middle"], correctIndex: 1, explanation: "It sets the limit on how much time/space can be used." },
            { id: 11, question: "O(2n + 100) simplifies to?", options: ["O(2n)", "O(n)", "O(100)"], correctIndex: 1, explanation: "Drop constants and lower terms. Only 'n' matters." }
        ]
    },
    {
        id: '8',
        module: MODULE_NAME,
        title: 'Big-Ω (Omega) - The Best Case',
        shortTitle: '8. Big-Ω',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-hand font-bold text-green-600">The Floor</h3>
                <p>Big-Omega tells you the absolute best-case scenario.</p>
                <SketchCard>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl font-serif">Ω</span>
                        <p className="mt-2 text-center">"If the stars align, I can be this fast."</p>
                        <p className="text-xs text-gray-500 mt-2">(But rarely do the stars align in engineering)</p>
                    </div>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 12, question: "We use Omega for...", options: ["Worst Case", "Best Case", "Average Case"], correctIndex: 1, explanation: "It's the lower bound measurement." }
        ]
    },
    {
        id: '9',
        module: MODULE_NAME,
        title: 'Big-Θ (Theta) - The Realistic Bound',
        shortTitle: '9. Big-Θ',
        type: SectionType.CONCEPT,
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-hand font-bold text-blue-600">The Sandwich</h3>
                <p>When the Best Case and Worst Case are basically the same "shape", we call it Theta.</p>
                <p>It means we have a very tight grip on exactly how the code behaves.</p>
                <div className="flex justify-center items-center gap-4 text-xl font-bold bg-gray-100 p-4 rounded-full">
                    <span className="text-gray-400">Lower</span>
                    <span>≤</span>
                    <span className="text-blue-600 text-4xl">Θ</span>
                    <span>≤</span>
                    <span className="text-gray-400">Upper</span>
                </div>
            </div>
        ),
        mcqs: [
            { id: 13, question: "Theta means...", options: ["The value is exactly known", "The bounds are tight around the function", "The code is slow"], correctIndex: 1, explanation: "It sandwiches the growth rate from both top and bottom." }
        ]
    },
    {
        id: '10',
        module: MODULE_NAME,
        title: 'The Complexity Ladder (Memorize This!)',
        shortTitle: '10. The Ladder',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p>Knowing this order separates a junior dev from a senior dev. <br />Faster is always higher up.</p>
                <ComplexityGraph types={['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)']} />

                <div className="space-y-3 mt-4">
                    <div className="group flex items-center p-3 bg-green-200 border-2 border-black rounded transition-all hover:translate-x-2">
                        <span className="font-bold w-24 font-mono text-lg">O(1)</span>
                        <span className="flex-1">⚡ <strong>Lightning.</strong> Instant access.</span>
                    </div>
                    <div className="group flex items-center p-3 bg-green-100 border-2 border-black rounded ml-4 transition-all hover:translate-x-2">
                        <span className="font-bold w-24 font-mono text-lg">O(log n)</span>
                        <span className="flex-1">✈️ <strong>Jet Plane.</strong> Efficient search (Binary Search).</span>
                    </div>
                    <div className="group flex items-center p-3 bg-yellow-100 border-2 border-black rounded ml-8 transition-all hover:translate-x-2">
                        <span className="font-bold w-24 font-mono text-lg">O(n)</span>
                        <span className="flex-1">🏃 <strong>Runner.</strong> Decent. (Looping through a list).</span>
                    </div>
                    <div className="group flex items-center p-3 bg-orange-100 border-2 border-black rounded ml-12 transition-all hover:translate-x-2">
                        <span className="font-bold w-24 font-mono text-lg">O(n log n)</span>
                        <span className="flex-1">🚂 <strong>Freight Train.</strong> Typical for decent sorting (Merge Sort).</span>
                    </div>
                    <div className="group flex items-center p-3 bg-red-200 border-2 border-black rounded ml-16 transition-all hover:translate-x-2">
                        <span className="font-bold w-24 font-mono text-lg">O(n²)</span>
                        <span className="flex-1">🐌 <strong>Snail.</strong> Painfully slow (Nested Loops).</span>
                    </div>
                </div>

                <div className="mt-8 border-t-2 border-dashed border-gray-400 pt-6">
                    <h3 className="text-2xl font-bold mb-2">Wait, what is O(n log n)?</h3>
                    <SketchCard title="The 'Smart' Sort">
                        <div className="space-y-4">
                            <p>You'll see this everywhere in sorting. It's the "Sweet Spot" between fast and slow.</p>
                            <p>
                                Imagine organizing a shuffled deck of cards. You don't compare every card with every other card (O(n²)).
                                You divide the deck (log n) and merge them back (n).
                            </p>
                            <div className="bg-orange-50 p-2 text-center font-bold border rounded text-orange-800">
                                n × log n = Efficient Sorting
                            </div>
                        </div>
                    </SketchCard>
                </div>
            </div>
        ),
        mcqs: [
            { id: 14, question: "Which is the fastest complexity?", options: ["O(1)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "O(1) is constant means instant." },
            { id: 15, question: "Which complexity should you generally avoid for large data?", options: ["O(n log n)", "O(n)", "O(n^2)"], correctIndex: 2, explanation: "n-squared grows very fast. If n=10,000, n^2 is 100,000,000!" }
        ]
    },
    {
        id: '11',
        module: MODULE_NAME,
        title: 'O(log n) – The Magic of Halving',
        shortTitle: '11. O(log n)',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-xl italic">"Divide and Conquer"</p>
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                    <p className="font-bold mb-2">Think of the Phonebook Game:</p>
                    <p>I have a number in my head between 1 and 100.</p>
                    <ul className="list-decimal pl-6 mt-2 space-y-1">
                        <li>You guess 50. I say "Lower". (Boom! 50-100 is gone).</li>
                        <li>You guess 25. I say "Higher". (Boom! 1-25 is gone).</li>
                    </ul>
                    <p className="mt-2 text-green-700 font-bold">You eliminate HALF the possibilities with every step.</p>
                </div>

                <div className="flex flex-col items-center gap-2 mt-4 opacity-80">
                    <div className="w-full bg-accent h-6 border border-black flex items-center justify-center text-xs">Full Problem</div>
                    <div className="w-1/2 bg-accent h-6 border border-black flex items-center justify-center text-xs">Half</div>
                    <div className="w-1/4 bg-accent h-6 border border-black flex items-center justify-center text-xs">Quarter</div>
                    <div className="w-8 bg-accent h-6 border border-black flex items-center justify-center text-xs">Done</div>
                </div>
                <SketchCard title="Logarithmic Time">
                    <p className="text-center font-bold">Even if 'n' is a Billion, log(n) is tiny (~30 steps)!</p>
                </SketchCard>
            </div>
        ),
        mcqs: [
            { id: 16, question: "What happens in O(log n)?", options: ["The work doubles", "The work implies a loop", "The problem size is cut in half repeatedly"], correctIndex: 2, explanation: "Classic 'Divide and Conquer' approach." }
        ]
    },
    {
        id: '12',
        module: MODULE_NAME,
        title: 'Nested Loops – The O(n²) Trap',
        shortTitle: '12. Nested Loops',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <NestedLoopVisualizer />
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-red-600">The "Loop inside a Loop"</h3>
                    <p className="text-lg">Imagine a clock.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded text-center">
                        <p className="font-bold">Hour Hand</p>
                        <p className="text-sm">Outer Loop (i)</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded text-center">
                        <p className="font-bold">Minute Hand</p>
                        <p className="text-sm">Inner Loop (j)</p>
                    </div>
                </div>

                <p className="text-center">
                    For every single hour that passes, the minute hand runs 60 times.
                    <br />
                    <span className="font-mono font-bold bg-yellow-200 px-2">n * n = n²</span>
                </p>

                <CodeSnippet
                    title="The Slowpoke Code"
                    code={`
// Printing a multiplication table
for (let i = 1; i <= n; i++) {       // Runs n times
    for (let j = 1; j <= n; j++) {   // Runs n times for EACH i
        console.log(i * j); 
    }
}
// Total operations = n * n`}
                />
            </div>
        ),
        mcqs: [
            { id: 17, question: "How do you identify O(n²) usually?", options: ["A single loop", "Two loops", "Nested loops"], correctIndex: 2, explanation: "A loop inside another loop is the classic sign." }
        ]
    },
    {
        id: '13',
        module: MODULE_NAME,
        title: 'Recursion - The Hidden Memory Costs',
        shortTitle: '13. Recursion Space',
        type: SectionType.VISUALIZATION,
        content: (
            <div className="space-y-6">
                <p className="text-lg">Recursion is elegant, but it's not free.</p>
                <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400">
                    <p><strong>The Stack of Plates Analogy:</strong></p>
                    <p>Every time a function calls itself, it's like putting a new plate on a stack. You can't finish the bottom plate until you clear the top ones.</p>
                </div>
                <RecursionVisualizer />
                <p className="text-center text-sm font-mono text-gray-500">Each call takes up memory in the "Call Stack". Too many? Stack Overflow!</p>
            </div>
        ),
        mcqs: [
            { id: 18, question: "Does recursion use extra space?", options: ["No, it's free", "Yes, O(n) stack space usually", "Only if variables are used"], correctIndex: 1, explanation: "The computer has to remember where to return to for every single call." }
        ]
    },
    {
        id: '14',
        module: MODULE_NAME,
        title: 'Common Mistakes to Avoid',
        shortTitle: '14. Pitfalls',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4">Don't Get Tricked!</h3>
                <div className="grid gap-4">
                    <div className="bg-white border-2 border-red-200 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <span className="text-2xl mr-3">❌</span>
                            <div>
                                <p className="font-bold">Trap: "Two loops means O(n²)"</p>
                                <p className="text-sm">Not always! If the loops are <strong>separate</strong> (not nested), it is O(n) + O(n) = O(2n) = O(n).</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-red-200 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                            <span className="text-2xl mr-3">❌</span>
                            <div>
                                <p className="font-bold">Trap: "Constants matter"</p>
                                <p className="text-sm">In Big-O, O(500n) is just O(n). We care about the <strong>growth curve</strong>, not the starting point.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        mcqs: []
    },
    {
        id: '15',
        module: MODULE_NAME,
        title: 'Summary & Cheat Sheet',
        shortTitle: '15. Recap',
        type: SectionType.SUMMARY,
        content: (
            <div className="space-y-4">
                <SketchCard title="The Golden Rules" className="bg-yellow-50">
                    <ul className="space-y-3 font-medium text-lg">
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600 w-6 h-6" /> Drop the constants (2n → n).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600 w-6 h-6" /> Worst Case (Big-O) is King.</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600 w-6 h-6" /> Nested Loops? Probably O(n²).</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 text-green-600 w-6 h-6" /> Halving the input? Definitely O(log n).</li>
                    </ul>
                </SketchCard>
                <p className="text-center font-bold text-blue-600 text-xl mt-4">You're ready! 🚀</p>
            </div>
        ),
        mcqs: []
    }
];
