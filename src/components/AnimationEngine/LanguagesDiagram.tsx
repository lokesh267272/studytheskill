import React from 'react';

export const LanguagesDiagram = ({ step }: { step: number }) => (
    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-xs mx-auto">
        <div className={`border-2 border-black p-2 rounded bg-blue-50 transition-all ${step >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="font-bold text-xs border-b border-blue-200 mb-1">DDL</div>
            <div className="text-[10px] font-mono">CREATE<br />ALTER</div>
        </div>
        <div className={`border-2 border-black p-2 rounded bg-green-50 transition-all ${step >= 2 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="font-bold text-xs border-b border-green-200 mb-1">DML</div>
            <div className="text-[10px] font-mono">INSERT<br />UPDATE</div>
        </div>
    </div>
);
