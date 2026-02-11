import React from 'react';
import { Layers } from 'lucide-react';

export const Norm5NFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-6 w-full max-md">
        <div className="text-[10px] text-center bg-blue-50 p-2 border border-blue-200 rounded">
            <strong>The 3-Way Rule:</strong><br />
            An <strong>Agent</strong> sells a <strong>Product</strong> made by a <strong>Company</strong>.
        </div>
        <div className="relative w-40 h-40">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-700 ${step >= 1 ? '-translate-y-2' : ''}`}>
                <div className="w-20 h-20 bg-red-100 border-2 border-red-400 rounded-t-full flex items-center justify-center text-[10px] font-bold text-red-800 shadow-sm z-10">
                    Agent<br />Company
                </div>
            </div>
            <div className={`absolute bottom-0 right-0 transition-all duration-700 ${step >= 1 ? 'translate-x-2 translate-y-2' : ''}`}>
                <div className="w-20 h-20 bg-blue-100 border-2 border-blue-400 rounded-br-full flex items-center justify-center text-[10px] font-bold text-blue-800 shadow-sm">
                    Company<br />Product
                </div>
            </div>
            <div className={`absolute bottom-0 left-0 transition-all duration-700 ${step >= 1 ? '-translate-x-2 translate-y-2' : ''}`}>
                <div className="w-20 h-20 bg-green-100 border-2 border-green-400 rounded-bl-full flex items-center justify-center text-[10px] font-bold text-green-800 shadow-sm">
                    Agent<br />Product
                </div>
            </div>
            {step === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-slate-400 rounded-full flex items-center justify-center z-20">
                    <Layers size={14} />
                </div>
            )}
        </div>
        <div className="h-16 flex items-center justify-center text-center px-4">
            {step === 0 && <span className="text-xs text-slate-600">The 3 relationships are locked together tightly.</span>}
            {step === 1 && <span className="text-xs text-slate-600">If we split them, we need ALL 3 tables to recreate the logic correctly.</span>}
            {step === 2 && <span className="text-xs text-green-700 font-bold">5NF ensures we don't assume an Agent sells EVERY product of a Company just because they work with the Company.</span>}
        </div>
    </div>
);
