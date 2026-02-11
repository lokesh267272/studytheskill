import React from 'react';
import { ArrowRight } from 'lucide-react';

export const JoinsTableDiagram = ({ step }: { step: number }) => {
    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl overflow-x-auto pb-4">
            <div className="flex gap-4 md:gap-8 justify-center w-full">
                <div>
                    <div className="text-center font-bold text-red-700 text-xs mb-1">Table A (Emp)</div>
                    <div className="border-2 border-red-300 bg-white text-[10px] shadow-sm">
                        <div className="flex border-b border-red-200 bg-red-50 font-bold">
                            <div className="w-8 p-1 border-r border-red-200">ID</div>
                            <div className="w-12 p-1">Name</div>
                        </div>
                        <div className={`flex border-b border-red-100 ${step === 1 || step === 2 || step === 4 ? 'bg-yellow-100' : ''}`}>
                            <div className="w-8 p-1 border-r border-red-100">1</div>
                            <div className="w-12 p-1">Jon</div>
                        </div>
                        <div className={`flex border-b border-red-100 ${step === 1 || step === 2 || step === 4 ? 'bg-yellow-100' : ''}`}>
                            <div className="w-8 p-1 border-r border-red-100">2</div>
                            <div className="w-12 p-1">Ann</div>
                        </div>
                        <div className={`flex ${step === 2 || step === 4 ? 'bg-red-100' : 'opacity-50'}`}>
                            <div className="w-8 p-1 border-r border-red-100">3</div>
                            <div className="w-12 p-1">Dan</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl text-slate-300 self-center">+</div>
                <div>
                    <div className="text-center font-bold text-blue-700 text-xs mb-1">Table B (Dept)</div>
                    <div className="border-2 border-blue-300 bg-white text-[10px] shadow-sm">
                        <div className="flex border-b border-blue-200 bg-blue-50 font-bold">
                            <div className="w-8 p-1 border-r border-blue-200">ID</div>
                            <div className="w-12 p-1">Dept</div>
                        </div>
                        <div className={`flex border-b border-blue-100 ${step === 1 || step === 2 || step === 4 ? 'bg-yellow-100' : ''}`}>
                            <div className="w-8 p-1 border-r border-blue-100">1</div>
                            <div className="w-12 p-1">IT</div>
                        </div>
                        <div className={`flex border-b border-blue-100 ${step === 1 || step === 2 || step === 4 ? 'bg-yellow-100' : ''}`}>
                            <div className="w-8 p-1 border-r border-blue-100">2</div>
                            <div className="w-12 p-1">HR</div>
                        </div>
                        <div className={`flex ${step === 4 ? 'bg-blue-100' : 'opacity-50'}`}>
                            <div className="w-8 p-1 border-r border-blue-100">4</div>
                            <div className="w-12 p-1">Ops</div>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />
            <div className="w-full max-w-[280px]">
                <div className="text-center font-bold text-slate-800 text-sm mb-1">
                    {step === 0 && "Result Table (Click Next)"}
                    {step === 1 && "INNER JOIN (Matches Only)"}
                    {step === 2 && "LEFT JOIN (All A + Matches)"}
                    {step === 3 && "RIGHT JOIN (All B + Matches)"}
                    {step === 4 && "FULL JOIN (Everything)"}
                </div>
                <div className="border-2 border-black bg-white text-xs shadow-sketch w-full transition-all duration-300">
                    <div className="flex border-b-2 border-black bg-slate-100 font-bold">
                        <div className="flex-1 p-2 border-r border-slate-300">Name</div>
                        <div className="flex-1 p-2">Dept</div>
                    </div>
                    {(step >= 1) && (
                        <>
                            <div className="flex border-b border-slate-200 bg-yellow-50">
                                <div className="flex-1 p-2 border-r border-slate-200">Jon</div>
                                <div className="flex-1 p-2">IT</div>
                            </div>
                            <div className="flex border-b border-slate-200 bg-yellow-50">
                                <div className="flex-1 p-2 border-r border-slate-200">Ann</div>
                                <div className="flex-1 p-2">HR</div>
                            </div>
                        </>
                    )}
                    {(step === 2 || step === 4) && (
                        <div className="flex border-b border-slate-200">
                            <div className="flex-1 p-2 border-r border-slate-200">Dan</div>
                            <div className="flex-1 p-2 text-slate-400 italic">NULL</div>
                        </div>
                    )}
                    {(step === 4) && (
                        <div className="flex border-b border-slate-200">
                            <div className="flex-1 p-2 border-r border-slate-200 text-slate-400 italic">NULL</div>
                            <div className="flex-1 p-2">Ops</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-[10px] text-slate-500 text-center px-4">
                {step === 1 && "Only IDs present in BOTH tables (1, 2) appear."}
                {step === 2 && "Dan (ID 3) is in Table A but not B, so Dept is NULL."}
                {step === 4 && "Shows all records. Unmatched sides get NULL."}
            </div>
        </div>
    );
};
