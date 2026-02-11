import React from 'react';
import { Database } from 'lucide-react';

export const AbstractionDiagram = ({ step }: { step: number }) => (
    <div className="relative w-full max-w-md h-64 flex flex-col items-center justify-center space-y-4">
        <div className={`transition-all duration-500 border-2 border-dashed border-blue-400 p-2 w-full text-center rounded-lg bg-blue-50 ${step >= 3 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="font-bold text-blue-800 text-sm md:text-base">View Level</span>
            <div className="text-[10px] md:text-xs text-blue-600">(User View)</div>
        </div>
        {step >= 3 && <div className="h-4 w-0.5 bg-black"></div>}
        <div className={`transition-all duration-500 border-2 border-black p-3 w-3/4 text-center rounded bg-white shadow-sketch ${step >= 2 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="font-bold text-sm md:text-base">Logical Level</span>
            <div className="text-[10px] md:text-xs">Tables & Relations</div>
        </div>
        {step >= 2 && <div className="h-4 w-0.5 bg-black"></div>}
        <div className={`transition-all duration-500 border-2 border-slate-600 bg-slate-200 p-3 w-1/2 text-center rounded flex items-center justify-center gap-2 ${step >= 1 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <Database size={16} />
            <div>
                <span className="font-bold text-slate-800 block text-sm md:text-base">Physical</span>
                <span className="text-[10px] text-slate-600">Storage</span>
            </div>
        </div>
    </div>
);
