import React from 'react';
import { Filter } from 'lucide-react';

export const SqlDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
        <div className="border-2 border-black p-2 bg-white text-xs font-mono relative">
            <div className="absolute -top-3 left-2 bg-blue-100 text-blue-800 px-1 font-bold text-[10px]">DATA</div>
            <div className="grid grid-cols-2 gap-2 border-b border-gray-200 pb-1 mb-1 font-bold">
                <div>NAME</div><div>SCORE</div>
            </div>
            <div className={`flex justify-between ${step >= 1 ? 'opacity-20' : 'opacity-100'}`}>
                <span>Alice</span><span>85</span>
            </div>
            <div className={`flex justify-between ${step >= 1 ? 'opacity-20' : 'opacity-100'}`}>
                <span>Bob</span><span>40</span>
            </div>
            <div className={`flex justify-between font-bold bg-yellow-100 ${step >= 1 ? 'scale-105' : ''}`}>
                <span>Charlie</span><span>92</span>
            </div>
        </div>
        <div className={`flex items-center justify-center gap-2 transition-all ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="font-mono text-xs font-bold text-blue-800">WHERE SCORE {'>'} 90</span>
        </div>
        <div className={`border-2 border-green-600 p-2 bg-green-50 text-xs font-mono transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="absolute -top-3 left-2 bg-green-100 text-green-800 px-1 font-bold text-[10px]">RESULT</div>
            <div className="grid grid-cols-2 gap-2 border-b border-green-200 pb-1 mb-1 font-bold">
                <div>NAME</div><div>SCORE</div>
            </div>
            <div className="flex justify-between font-bold">
                <span>Charlie</span><span>92</span>
            </div>
        </div>
    </div>
);
