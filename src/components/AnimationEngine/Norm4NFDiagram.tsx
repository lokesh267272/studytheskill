import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Norm4NFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="text-[10px] text-center bg-yellow-50 p-2 border border-yellow-200 rounded">
            <strong>Problem:</strong> Jon studies "Math & Science" AND plays "Cricket & Chess".<br />
            These lists are independent.
        </div>
        <div className={`transition-all duration-500 ${step < 2 ? 'opacity-100' : 'opacity-40'}`}>
            <div className="text-center font-bold text-slate-500 text-xs mb-1">Single Table (Explosion!)</div>
            <div className="border-2 border-red-400 bg-white text-[10px] shadow-sm">
                <div className="flex border-b border-red-200 font-bold bg-red-50">
                    <div className="w-12 p-1 border-r border-red-200">Name</div>
                    <div className="w-16 p-1 border-r border-red-200">Subject</div>
                    <div className="w-16 p-1">Hobby</div>
                </div>
                <div className="flex p-1 border-b border-slate-100"><div className="w-12">Jon</div><div className="w-16">Math</div><div className="w-16">Cricket</div></div>
                <div className="flex p-1 border-b border-slate-100"><div className="w-12">Jon</div><div className="w-16">Math</div><div className="w-16">Chess</div></div>
                <div className="flex p-1 border-b border-slate-100"><div className="w-12">Jon</div><div className="w-16">Science</div><div className="w-16">Cricket</div></div>
                <div className="flex p-1"><div className="w-12">Jon</div><div className="w-16">Science</div><div className="w-16">Chess</div></div>
            </div>
            {step === 1 && (
                <div className="text-red-600 text-[10px] font-bold mt-2 text-center animate-pulse">
                    Cartesian Product! 2 Subjects x 2 Hobbies = 4 Rows.<br />
                    What if he had 10 of each? 100 Rows!
                </div>
            )}
        </div>
        {step >= 2 && <ArrowDown className="text-slate-400" />}
        <div className={`flex gap-4 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table A (Subjects)</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-12">Name</div><div className="w-16">Subject</div>
                    </div>
                    <div className="flex p-1"><div className="w-12">Jon</div><div className="w-16">Math</div></div>
                    <div className="flex p-1"><div className="w-12">Jon</div><div className="w-16">Science</div></div>
                </div>
            </div>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table B (Hobbies)</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-12">Name</div><div className="w-16">Hobby</div>
                    </div>
                    <div className="flex p-1"><div className="w-12">Jon</div><div className="w-16">Cricket</div></div>
                    <div className="flex p-1"><div className="w-12">Jon</div><div className="w-16">Chess</div></div>
                </div>
            </div>
        </div>
        {step >= 2 && <div className="text-[10px] text-green-700 font-bold text-center">4NF Achieved: Lists are separated. 2+2=4 rows total, not 2x2=4 mixed rows.</div>}
    </div>
);
