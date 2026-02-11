import React from 'react';

export const TriggerDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center w-full max-w-lg relative min-h-[200px]">
        <div className="flex justify-between w-full gap-4">
            <div className="flex-1">
                <div className="text-xs font-bold mb-1 text-center">Employee Table</div>
                <div className="border-2 border-black bg-white shadow-sm text-[10px]">
                    <div className="grid grid-cols-2 bg-slate-100 border-b-2 border-black font-bold p-1">
                        <div>Name</div><div>Salary</div>
                    </div>
                    <div className="grid grid-cols-2 p-1 border-b border-slate-200">
                        <div>Alice</div><div>5000</div>
                    </div>
                    <div className={`grid grid-cols-2 p-1 transition-colors duration-500 ${step >= 2 ? 'bg-yellow-100' : ''}`}>
                        <div>Bob</div>
                        <div className="relative">
                            {step >= 2 ? <span className="text-blue-600 font-bold">6000</span> : "4000"}
                        </div>
                    </div>
                </div>
                {step === 1 && (
                    <div className="mt-2 text-center bg-blue-100 border border-blue-400 text-blue-800 text-xs p-1 rounded animate-pulse">
                        UPDATE Salary...
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center w-16 relative">
                {step >= 3 && (
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500 transition-all duration-300"></div>
                )}
                {step >= 3 && (
                    <div className="absolute top-[40%] left-[30%] bg-red-600 text-white text-[8px] font-bold px-1 rounded animate-bounce">
                        TRIGGER!
                    </div>
                )}
            </div>
            <div className="flex-1">
                <div className="text-xs font-bold mb-1 text-center">Audit_Log Table</div>
                <div className="border-2 border-dashed border-slate-400 bg-slate-50 text-[10px] min-h-[80px]">
                    <div className="grid grid-cols-1 bg-slate-200 font-bold p-1">
                        <div>Log Message</div>
                    </div>
                    {step >= 4 && (
                        <div className="p-1 text-red-600 font-mono animate-draw">
                            "Bob Sal changed to 6000"
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="mt-8 font-mono text-xs text-center text-slate-600 bg-white p-2 border border-slate-200 rounded">
            {step === 0 && "Two tables. Audit Log is empty."}
            {step === 1 && "User runs: UPDATE Emp SET Sal=6000 WHERE Name='Bob'"}
            {step === 2 && "Data changes in Employee Table."}
            {step === 3 && "Trigger fires AUTOMATICALLY on Update."}
            {step === 4 && "Trigger inserts record into Audit Table."}
        </div>
    </div>
);
