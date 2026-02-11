import React from 'react';
import { Database, Key, ArrowRight } from 'lucide-react';

export const KeysDiagram = ({ step }: { step: number }) => {
    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-2xl px-4 py-8">
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full relative">
                <div className="flex-1 w-full md:w-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <Database size={16} className="text-slate-400" />
                        <h4 className="font-bold text-sm text-slate-700">STUDENT Table</h4>
                    </div>
                    <div className="border-2 border-black bg-white shadow-sketch text-[11px] overflow-hidden">
                        <div className="flex bg-slate-50 border-b-2 border-black font-bold">
                            <div className={`flex-1 p-2 border-r border-black/20 transition-all duration-300 ${step >= 1 ? 'bg-yellow-100 text-yellow-900' : ''}`}>
                                ID (PK)
                            </div>
                            <div className="flex-1 p-2 border-r border-black/20">Name</div>
                            <div className={`flex-1 p-2 transition-all duration-300 ${step >= 3 ? 'bg-blue-100 text-blue-900 ring-2 ring-blue-500 ring-inset' : ''}`}>
                                Dept_ID (FK)
                            </div>
                        </div>
                        <div className="flex border-b border-slate-100">
                            <div className="flex-1 p-2 border-r border-slate-100">101</div>
                            <div className="flex-1 p-2 border-r border-slate-100">Alice</div>
                            <div className={`flex-1 p-2 ${step >= 3 ? 'bg-blue-50 font-bold' : ''}`}>D1</div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 p-2 border-r border-slate-100">102</div>
                            <div className="flex-1 p-2 border-r border-slate-100">Bob</div>
                            <div className={`flex-1 p-2 ${step >= 3 ? 'bg-blue-50 font-bold' : ''}`}>D2</div>
                        </div>
                    </div>
                    <div className="mt-3 h-10 flex items-start">
                        {step === 1 && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-700 animate-in fade-in slide-in-from-left-2">
                                <Key size={12} /> ID is the Primary Key (Unique)
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-blue-700 animate-in fade-in slide-in-from-top-2">
                                Dept_ID connects to another table!
                            </div>
                        )}
                    </div>
                </div>
                {step >= 3 && (
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-400 z-20 items-center animate-in fade-in zoom-in">
                        <div className="w-16 h-0.5 bg-blue-500 border-t-2 border-blue-500 relative">
                            <div className="absolute -right-1 -top-[5px] w-2 h-2 bg-blue-500 rounded-full"></div>
                            <ArrowRight className="absolute -right-4 -top-2 text-blue-500" size={16} />
                        </div>
                    </div>
                )}
                <div className="flex-1 w-full md:w-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <Database size={16} className="text-slate-400" />
                        <h4 className="font-bold text-sm text-slate-700">DEPARTMENT Table</h4>
                    </div>
                    <div className="border-2 border-black bg-white shadow-sketch text-[11px] overflow-hidden">
                        <div className="flex bg-slate-50 border-b-2 border-black font-bold">
                            <div className={`flex-1 p-2 border-r border-black/20 transition-all duration-300 ${step >= 2 ? 'bg-green-100 text-green-900 ring-2 ring-green-500 ring-inset' : ''}`}>
                                Dept_ID (PK)
                            </div>
                            <div className="flex-1 p-2">Dept_Name</div>
                        </div>
                        <div className="flex border-b border-slate-100">
                            <div className={`flex-1 p-2 border-r border-slate-100 ${step >= 3 ? 'bg-green-50 font-bold' : ''}`}>D1</div>
                            <div className="flex-1 p-2">Computer Sci</div>
                        </div>
                        <div className="flex">
                            <div className={`flex-1 p-2 border-r border-slate-100 ${step >= 3 ? 'bg-green-50 font-bold' : ''}`}>D2</div>
                            <div className="flex-1 p-2">Electronics</div>
                        </div>
                    </div>
                    <div className="mt-3 h-10 flex items-start">
                        {step === 2 && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-green-700 animate-in fade-in slide-in-from-right-2">
                                <Key size={12} /> Dept_ID is PK for this table
                            </div>
                        )}
                        {step >= 3 && (
                            <div className="text-[10px] font-mono text-slate-500 italic bg-slate-50 p-1 border border-slate-200 rounded animate-in fade-in">
                                Reference established!
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-50 border-2 border-dashed border-blue-200 p-3 rounded text-center">
                <p className="text-xs font-bold text-blue-800">
                    {step === 0 && "Start by identifying the keys in both tables."}
                    {step === 1 && "Primary Key (PK) uniquely identifies each Student."}
                    {step === 2 && "Dept_ID is the Primary Key for the Department table."}
                    {step >= 3 && "The Foreign Key (FK) in Student points to the Primary Key in Department."}
                </p>
            </div>
        </div>
    );
};
