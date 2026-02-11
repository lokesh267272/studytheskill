import React from 'react';
import { ArrowRight, FileText, Database } from 'lucide-react';

export const DbmsVsFilesDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-lg">
        <div className={`flex flex-col items-center transition-all duration-500 ${step === 0 || step === 1 ? 'opacity-100' : 'opacity-40 grayscale'}`}>
            <div className="text-xs font-bold mb-2 underline decoration-red-400">File System</div>
            <div className="relative border-2 border-slate-400 p-4 bg-slate-50 w-32 h-32 flex flex-col gap-2 rounded shadow-sm">
                <div className="flex items-center gap-1 border border-slate-300 bg-white p-1 text-[10px]">
                    <FileText size={12} /> Student.txt
                </div>
                <div className="flex items-center gap-1 border border-slate-300 bg-white p-1 text-[10px]">
                    <FileText size={12} /> Grades.txt
                </div>
                {step === 1 && (
                    <div className="absolute inset-0 bg-red-100/80 flex items-center justify-center text-center text-xs font-bold text-red-700 p-1 border-2 border-red-500 animate-pulse">
                        Redundant Data! <br /> Hard to Search!
                    </div>
                )}
            </div>
        </div>
        {step >= 2 && <ArrowRight className="hidden md:block text-slate-400" />}
        <div className={`flex flex-col items-center transition-all duration-500 ${step >= 2 ? 'opacity-100 scale-105' : 'opacity-0 translate-y-4'}`}>
            <div className="text-xs font-bold mb-2 underline decoration-green-400">DBMS</div>
            <div className="relative border-2 border-black bg-blue-50 w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-sketch">
                <Database size={40} className="text-blue-800 mb-2" />
                <div className="text-[10px] font-bold text-blue-900">Centralized</div>
                {step >= 3 && (
                    <div className="absolute -right-12 top-0 bg-green-100 border border-green-600 px-2 py-1 text-[10px] rounded-full text-green-800 shadow-sm animate-bounce">
                        Structured!
                    </div>
                )}
            </div>
        </div>
        <div className="absolute bottom-0 w-full text-center text-xs font-mono text-slate-500">
            {step === 0 && "Traditional Files: Separate & Messy"}
            {step === 1 && "Problem: Duplication & Inconsistency"}
            {step === 2 && "Solution: Database Management System"}
            {step === 3 && "Organized, Secure, Efficient"}
        </div>
    </div>
);
