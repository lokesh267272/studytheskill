import React from 'react';
import { ArrowDown } from 'lucide-react';

export const NormBCNFDiagram = ({ step }: { step: number }) => (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="bg-yellow-50 border border-yellow-200 p-2 text-[10px] text-center rounded">
            Scenario: A student takes a Subject. A Professor teaches only one Subject.
            <br />Dependency: <strong>Professor → Subject</strong>.
        </div>
        <div className={`transition-all duration-500 ${step < 2 ? 'opacity-100' : 'opacity-40'}`}>
            <div className="text-center font-bold text-slate-500 text-xs mb-1">3NF Table (But not BCNF)</div>
            <div className="border-2 border-slate-400 bg-white text-[10px] shadow-sm">
                <div className="flex border-b border-slate-300 font-bold bg-slate-100">
                    <div className="w-16 p-2 border-r border-slate-300">Student*</div>
                    <div className="w-16 p-2 border-r border-slate-300">Subject*</div>
                    <div className="w-20 p-2 text-red-700">Professor</div>
                </div>
                <div className="flex p-2">
                    <div className="w-16">Alice</div><div className="w-16">CS</div><div className="w-20">Dr. Smith</div>
                </div>
            </div>
            {step === 1 && (
                <div className="mt-2 text-[10px] text-red-600 font-bold text-center border border-red-300 bg-red-50 p-1">
                    Violation: Prof → Subject, but Prof is NOT a Super Key!
                </div>
            )}
        </div>
        {step >= 2 && <ArrowDown className="text-slate-400" />}
        <div className={`flex gap-4 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table 1</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-14">Student</div><div className="w-14">Professor</div>
                    </div>
                    <div className="flex p-1"><div className="w-14">Alice</div><div className="w-14">Smith</div></div>
                </div>
            </div>
            <div>
                <div className="text-[10px] font-bold text-green-700 mb-1">Table 2</div>
                <div className="border-2 border-green-500 bg-green-50 text-[10px]">
                    <div className="flex border-b border-green-200 font-bold p-1 bg-green-100">
                        <div className="w-14 bg-yellow-100">Professor</div><div className="w-14">Subject</div>
                    </div>
                    <div className="flex p-1"><div className="w-14">Smith</div><div className="w-14">CS</div></div>
                </div>
            </div>
        </div>
        {step >= 2 && <div className="text-[10px] text-green-700 font-bold text-center">BCNF Achieved: LHS (Professor) is now a Key in Table 2.</div>}
    </div>
);
