import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Norm2NFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <div className={`relative transition-all duration-500 ${step < 2 ? 'opacity-100' : 'opacity-40'}`}>
            <div className="text-center font-bold text-slate-500 text-xs mb-1">1NF Table (Composite Key)</div>
            <div className="border-2 border-slate-400 bg-white text-[10px] shadow-sm">
                <div className="flex border-b border-slate-300 font-bold bg-slate-100">
                    <div className="w-16 p-2 border-r border-slate-300">StdID*</div>
                    <div className="w-16 p-2 border-r border-slate-300">SubID*</div>
                    <div className="w-20 p-2 bg-red-50 text-red-700">SubName</div>
                </div>
                <div className="flex p-2 border-b border-slate-200">
                    <div className="w-16 border-r border-slate-200">1</div>
                    <div className="w-16 border-r border-slate-200">101</div>
                    <div className="w-20">Math</div>
                </div>
            </div>
            {step === 1 && (
                <div className="absolute -right-24 top-8 w-24 text-[10px] text-red-600 font-bold border border-red-400 bg-red-50 p-1 rounded">
                    Partial Dependency! <br /> SubName depends only on SubID, not StdID.
                </div>
            )}
        </div>
        {step >= 2 && <ArrowDown className="text-slate-400" />}
        <div className={`flex gap-4 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table 1 (Grades)</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-10">StdID</div><div className="w-10">SubID</div>
                    </div>
                    <div className="flex p-1"><div className="w-10">1</div><div className="w-10">101</div></div>
                </div>
            </div>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table 2 (Subjects)</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-10">SubID</div><div className="w-16">SubName</div>
                    </div>
                    <div className="flex p-1"><div className="w-10">101</div><div className="w-16">Math</div></div>
                </div>
            </div>
        </div>
        {step >= 2 && <div className="text-[10px] text-green-700 font-bold">2NF Achieved: Partial dependency removed.</div>}
    </div>
);
