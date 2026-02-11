import React from 'react';
import { Search } from 'lucide-react';

export const IndexingDiagram = ({ step }: { step: number }) => (
    <div className="flex gap-4 md:gap-8 items-start justify-center w-full">
        <div className={`flex flex-col items-center transition-all ${step === 0 ? 'opacity-100' : 'opacity-50 blur-[1px]'}`}>
            <div className="text-[10px] md:text-xs font-bold mb-2">No Index</div>
            <div className="border-2 border-red-400 bg-red-50 p-2 space-y-1 w-16 md:w-20">
                {[1, 5, 2, 8].map(n => (
                    <div key={n} className="border border-red-200 bg-white p-1 text-center text-xs">{n}</div>
                ))}
            </div>
            <div className="text-[10px] text-red-600 mt-1">Slow...</div>
        </div>
        <div className={`flex flex-col items-center transition-all ${step >= 1 ? 'opacity-100 scale-110' : 'opacity-0'}`}>
            <div className="text-[10px] md:text-xs font-bold mb-2 text-green-700">Clustered</div>
            <div className="border-2 border-green-600 bg-green-50 p-2 space-y-1 w-16 md:w-20 relative">
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-green-600">
                    <Search className="w-4 h-4 animate-pulse" />
                </div>
                {[1, 2, 5, 8].map(n => (
                    <div key={n} className="border border-green-200 bg-white p-1 text-center text-xs font-bold">{n}</div>
                ))}
            </div>
            <div className="text-[10px] text-green-600 mt-1">Fast!</div>
        </div>
    </div>
);
