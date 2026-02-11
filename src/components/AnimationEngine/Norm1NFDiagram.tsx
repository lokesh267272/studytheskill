import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Norm1NFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <div className={`transition-all duration-500 ${step === 0 || step === 1 ? 'opacity-100' : 'opacity-40 grayscale blur-[1px]'}`}>
            <div className="text-center font-bold text-red-600 text-xs mb-1">Un-Normalized (Bad)</div>
            <div className="border-2 border-red-400 bg-red-50 text-xs shadow-sm">
                <div className="flex border-b border-red-200 font-bold p-2 bg-red-100">
                    <div className="w-20">Name</div>
                    <div className="w-32">Subjects</div>
                </div>
                <div className="flex p-2">
                    <div className="w-20">Alice</div>
                    <div className={`w-32 border-2 ${step === 1 ? 'border-red-600 animate-pulse bg-white' : 'border-transparent'}`}>
                        Math, Science
                    </div>
                </div>
            </div>
            {step === 1 && <div className="text-red-600 text-[10px] mt-1 font-bold animate-bounce">❌ Multi-valued Attribute!</div>}
        </div>
        {step >= 2 && <ArrowDown className="text-slate-400" />}
        <div className={`transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center font-bold text-green-700 text-xs mb-1">1NF (Atomic)</div>
            <div className="border-2 border-green-500 bg-green-50 text-xs shadow-sketch">
                <div className="flex border-b border-green-200 font-bold p-2 bg-green-100">
                    <div className="w-20">Name</div>
                    <div className="w-32">Subject</div>
                </div>
                <div className="flex border-b border-green-200 p-2">
                    <div className="w-20">Alice</div>
                    <div className="w-32">Math</div>
                </div>
                <div className="flex p-2">
                    <div className="w-20">Alice</div>
                    <div className="w-32">Science</div>
                </div>
            </div>
            <div className="text-green-700 text-[10px] mt-1 font-bold">✅ Every cell has 1 value.</div>
        </div>
    </div>
);
