import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Norm3NFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <div className={`relative transition-all duration-500 ${step < 2 ? 'opacity-100' : 'opacity-40'}`}>
            <div className="text-center font-bold text-slate-500 text-xs mb-1">2NF Table</div>
            <div className="border-2 border-slate-400 bg-white text-[10px] shadow-sm">
                <div className="flex border-b border-slate-300 font-bold bg-slate-100">
                    <div className="w-12 p-2 border-r border-slate-300">ID (PK)</div>
                    <div className="w-12 p-2 border-r border-slate-300">Zip</div>
                    <div className="w-20 p-2 bg-red-50 text-red-700">City</div>
                </div>
                <div className="flex p-2 border-b border-slate-200">
                    <div className="w-12 border-r border-slate-200">1</div>
                    <div className="w-12 border-r border-slate-200">5001</div>
                    <div className="w-20">New York</div>
                </div>
            </div>
            {step === 1 && (
                <div className="absolute top-12 left-0 w-full flex items-center justify-center">
                    <div className="h-4 border-l-2 border-b-2 border-red-500 w-16 -translate-x-4"></div>
                    <span className="text-[10px] text-red-600 font-bold bg-white px-1">Transitive: Zip → City</span>
                </div>
            )}
        </div>
        {step >= 2 && <ArrowDown className="text-slate-400" />}
        <div className={`flex gap-4 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Student</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-8">ID</div><div className="w-10">Zip</div>
                    </div>
                    <div className="flex p-1"><div className="w-8">1</div><div className="w-10">5001</div></div>
                </div>
            </div>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Location</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-10">Zip</div><div className="w-16">City</div>
                    </div>
                    <div className="flex p-1"><div className="w-10">5001</div><div className="w-16">NY</div></div>
                </div>
            </div>
        </div>
        {step >= 2 && <div className="text-[10px] text-green-700 font-bold">3NF Achieved: Non-keys don't determine non-keys.</div>}
    </div>
);
