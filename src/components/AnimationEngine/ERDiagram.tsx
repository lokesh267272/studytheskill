import React from 'react';

export const ERDiagram = ({ step }: { step: number }) => {
    return (
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center transition-all">

            {/* Scaling Container to prevent overflow on mobile and expand on desktop */}
            <div className="relative scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 xl:scale-110 transition-transform duration-500 w-[600px] h-[400px] flex items-center justify-center">

                {/* Central Module: STUDENT ENTITY */}
                <div className={`relative transition-all duration-1000 z-30 ${step >= 6 ? '-translate-x-40' : ''}`}>
                    {/* The Main Entity Box */}
                    <div className={`
              w-40 h-16 border-4 border-black bg-white flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl tracking-tight
              transition-all duration-500 transform ${step >= 0 ? 'scale-100' : 'scale-0'}
            `}>
                        STUDENT
                    </div>

                    {/* ATTRIBUTE CONNECTIONS (CENTER-OUT) */}

                    {/* PK: Stu_ID (Key) - Bottom Left */}
                    <div className={`absolute -bottom-24 -left-20 transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
                        <svg className="absolute top-[-30px] right-[-10px] w-20 h-20 -z-10 overflow-visible">
                            <line x1="10" y1="60" x2="80" y2="10" stroke="black" strokeWidth="2" strokeDasharray="4 2" />
                        </svg>
                        <div className="border-[3px] border-black rounded-[50%] bg-white px-5 py-2 flex items-center justify-center shadow-sketch-sm text-sm font-black ring-4 ring-yellow-400 ring-offset-2">
                            <span className="underline decoration-2">Stu_ID</span>
                        </div>
                    </div>

                    {/* Simple: Name - Top Left */}
                    <div className={`absolute -top-24 -left-20 transition-all duration-700 ${step >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-50'}`}>
                        <svg className="absolute bottom-[-30px] right-[-10px] w-20 h-20 -z-10 overflow-visible">
                            <line x1="10" y1="10" x2="80" y2="70" stroke="black" strokeWidth="2" strokeDasharray="4 2" />
                        </svg>
                        <div className="border-[3px] border-black rounded-[50%] bg-white px-5 py-2 flex items-center justify-center shadow-sketch-sm text-sm font-bold">
                            Name
                        </div>
                    </div>

                    {/* Composite: Address - Top Right */}
                    <div className={`absolute -top-32 left-1/2 -translate-x-1/2 transition-all duration-700 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 -translate-y-10 scale-50'}`}>
                        <div className="flex flex-col items-center">
                            <div className="flex gap-4 -mb-3">
                                <div className="border-2 border-slate-400 rounded-[50%] px-3 py-1 bg-slate-50 text-xs font-bold text-slate-500">City</div>
                                <div className="border-2 border-slate-400 rounded-[50%] px-3 py-1 bg-slate-50 text-xs font-bold text-slate-500">Zip</div>
                            </div>
                            <div className="flex justify-center w-full mb-2">
                                <div className="h-6 w-px bg-slate-300 -rotate-45"></div>
                                <div className="h-6 w-px bg-slate-300 rotate-45"></div>
                            </div>
                            <div className="border-[3px] border-black rounded-[50%] bg-white px-6 py-2 flex items-center justify-center shadow-sketch-sm text-sm font-bold">
                                Address
                            </div>
                            <div className="h-8 w-px bg-black"></div>
                        </div>
                    </div>

                    {/* Multi-valued: Phones - Bottom Center */}
                    <div className={`absolute -bottom-28 left-1/2 -translate-x-1/2 transition-all duration-700 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
                        <div className="h-10 w-px bg-black"></div>
                        <div className="relative border-[3px] border-black rounded-[50%] bg-white px-6 py-2 flex items-center justify-center shadow-sketch-sm text-sm font-bold overflow-hidden">
                            <div className="absolute inset-0 border border-black rounded-[50%] scale-[0.85] opacity-50"></div>
                            Phones
                        </div>
                    </div>

                    {/* Derived: Age - Bottom Right */}
                    <div className={`absolute -bottom-24 -right-20 transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
                        <svg className="absolute top-[-30px] left-[-10px] w-20 h-20 -z-10 overflow-visible">
                            <line x1="70" y1="60" x2="10" y2="10" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                        <div className="border-[3px] border-dashed border-slate-500 rounded-[50%] bg-slate-50 px-5 py-2 flex items-center justify-center shadow-sketch-sm text-sm font-bold text-slate-600">
                            Age
                        </div>
                    </div>
                </div>

                {/* RELATIONSHIP: "Enrolls" - Center-Right Linking */}
                <div className={`absolute left-1/2 -translate-y-1/2 flex items-center transition-all duration-1000 ${step >= 6 ? 'opacity-100 translate-x-10' : 'opacity-0 -translate-x-20 pointer-events-none'}`}>
                    {/* The Link Line */}
                    <div className="w-24 h-1 bg-black"></div>

                    {/* Relationship Diamond */}
                    <div className="relative w-24 h-24 border-4 border-black bg-yellow-400 transform rotate-45 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 z-20">
                        <div className="transform -rotate-45 text-sm font-black uppercase tracking-tighter">Enrolls</div>
                    </div>

                    <div className="w-24 h-1 bg-black"></div>

                    {/* Second Entity: COURSE */}
                    <div className="w-40 h-16 border-4 border-black bg-white flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl tracking-tight shrink-0">
                        COURSE
                    </div>

                    {/* Cardinality Label */}
                    <div className="absolute top-[-30px] left-[10px] font-mono text-xl font-black bg-white px-2 border-2 border-black rounded">M</div>
                    <div className="absolute top-[-30px] right-[10px] font-mono text-xl font-black bg-white px-2 border-2 border-black rounded">N</div>
                </div>

            </div>

            {/* Floating UI Elements for Status */}
            <div className="absolute bottom-6 left-6 right-6 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="inline-block bg-black text-white text-[10px] md:text-xs px-6 py-2 rounded-full font-black tracking-[0.2em] shadow-2xl">
                    {step === 0 && "ENTITY CREATED"}
                    {step === 1 && "PRIMARY KEY IDENTIFIED"}
                    {step === 2 && "ADDED DESCRIPTIVE ATTRIBUTE"}
                    {step === 3 && "COMPOSITE HIERARCHY BUILT"}
                    {step === 4 && "MULTI-VALUED SET DEFINED"}
                    {step === 5 && "DERIVED VALUE (CALCULATED)"}
                    {step >= 6 && "FULL M-to-N RELATIONSHIP ESTABLISHED"}
                </div>
            </div>
        </div>
    );
};
