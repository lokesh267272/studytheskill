import React from 'react';
import { Clock } from 'lucide-react';

export const SchemaInstanceDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
            <Clock size={16} className="text-slate-500" />
            <span className="text-xs font-bold text-slate-600">
                {step === 0 ? "Design Phase" : step === 1 ? "Time T1" : "Time T2"}
            </span>
        </div>
        <div className="w-full relative">
            <div className={`absolute -left-4 top-0 -translate-x-full h-10 flex items-center transition-all ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sketch-sm rotate-[-5deg]">SCHEMA</div>
            </div>
            <div className="border-2 border-black bg-white shadow-sketch overflow-hidden">
                <div className="flex border-b-2 border-black bg-blue-50 font-bold text-xs">
                    <div className="flex-1 p-2 border-r border-black/20">Name</div>
                    <div className="flex-1 p-2 border-r border-black/20">Age</div>
                    <div className="flex-1 p-2">Dept</div>
                </div>
                <div className="min-h-[80px] relative">
                    <div className={`absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full flex items-center transition-all duration-500 ${step > 0 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sketch-sm rotate-[5deg]">INSTANCE</div>
                    </div>
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex text-xs border-b border-slate-100">
                                <div className="flex-1 p-2 border-r border-slate-100">Alice</div>
                                <div className="flex-1 p-2 border-r border-slate-100">22</div>
                                <div className="flex-1 p-2">CS</div>
                            </div>
                            <div className="flex text-xs border-b border-slate-100">
                                <div className="flex-1 p-2 border-r border-slate-100">Bob</div>
                                <div className="flex-1 p-2 border-r border-slate-100">24</div>
                                <div className="flex-1 p-2">IT</div>
                            </div>
                        </div>
                    )}
                    {step >= 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="flex text-xs border-b border-slate-100 bg-yellow-50">
                                <div className="flex-1 p-2 border-r border-slate-100">Charlie</div>
                                <div className="flex-1 p-2 border-r border-slate-100">21</div>
                                <div className="flex-1 p-2">ECE</div>
                            </div>
                            <div className="flex text-xs border-b border-slate-100">
                                <div className="flex-1 p-2 border-r border-slate-100">Alice</div>
                                <div className="flex-1 p-2 border-r border-slate-100">22</div>
                                <div className="flex-1 p-2">CS</div>
                            </div>
                            <div className="flex text-xs border-b border-slate-100 bg-green-50">
                                <div className="flex-1 p-2 border-r border-slate-100">Dave</div>
                                <div className="flex-1 p-2 border-r border-slate-100">25</div>
                                <div className="flex-1 p-2">ME</div>
                            </div>
                        </div>
                    )}
                    {step === 0 && (
                        <div className="h-20 flex items-center justify-center text-slate-300 italic text-[10px]">
                            No data yet (Instance is empty)
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="text-center bg-white p-3 border-2 border-dashed border-slate-200 rounded text-xs font-mono">
            {step === 0 && <span className="text-blue-700 font-bold">Schema: The Blueprint. Columns are defined once.</span>}
            {step === 1 && <span className="text-green-700 font-bold">Instance T1: The rows present at this specific moment.</span>}
            {step >= 2 && <span className="text-green-700 font-bold">Instance T2: Rows changed/added. Schema (Headers) stayed SAME.</span>}
        </div>
    </div>
);
