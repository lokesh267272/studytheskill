import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Zap, RefreshCcw, ArrowRight, Banknote, Database, AlertOctagon } from 'lucide-react';
import { SketchyButton } from '../Controls/SketchyComponents';

export const AcidDiagram = ({ step }: { step: number }) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AcidCard
                    title="Atomicity"
                    icon={<RefreshCcw />}
                    isActive={step === 0}
                    description="All or Nothing"
                >
                    <AtomicityDemo active={step === 0} />
                </AcidCard>

                <AcidCard
                    title="Consistency"
                    icon={<Shield />}
                    isActive={step === 1}
                    description="Rules are Sacred"
                >
                    <ConsistencyDemo active={step === 1} />
                </AcidCard>

                <AcidCard
                    title="Isolation"
                    icon={<Lock />}
                    isActive={step === 2}
                    description="Queue, don't crowd"
                >
                    <IsolationDemo active={step === 2} />
                </AcidCard>

                <AcidCard
                    title="Durability"
                    icon={<Database />}
                    isActive={step === 3}
                    description="Saved forever"
                >
                    <DurabilityDemo active={step === 3} />
                </AcidCard>
            </div>
        </div>
    );
};

// --- Sub Components ---

const AcidCard = ({ title, icon, isActive, description, children }: any) => (
    <motion.div
        className={`p-4 rounded-xl border-2 transition-all overflow-hidden relative
            ${isActive ? 'bg-white border-black shadow-sketch scale-105 z-10' : 'bg-slate-50 border-slate-200 opacity-60 scale-95'}
        `}
        animate={{ height: isActive ? 'auto' : 100 }}
    >
        <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}`}>
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg leading-none">{title}</h3>
                <p className="text-xs text-slate-500 font-mono">{description}</p>
            </div>
        </div>
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 pt-4 border-t border-dashed border-slate-200"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

// 1. Atomicity: Transfer Fails -> Rollback
const AtomicityDemo = ({ active }: { active: boolean }) => {
    const [status, setStatus] = useState<'start' | 'transferring' | 'failed' | 'rollback'>('start');

    useEffect(() => {
        if (!active) return;
        let timeout: NodeJS.Timeout;

        const cycle = () => {
            setStatus('start');
            setTimeout(() => setStatus('transferring'), 1000);
            setTimeout(() => setStatus('failed'), 2500); // Fail halfway
            setTimeout(() => setStatus('rollback'), 3500); // Revert
            setTimeout(cycle, 5000); // Loop
        };
        cycle();
        return () => clearTimeout(timeout);
    }, [active]);

    return (
        <div className="flex items-center justify-between px-2 text-xs font-bold">
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 border border-black rounded flex items-center justify-center mb-1">A</div>
                <span className={status === 'rollback' || status === 'start' ? "text-green-600" : "text-slate-400"}>$100</span>
            </div>

            <div className="flex-1 px-2 relative h-8">
                {/* Money moving */}
                {status !== 'start' && status !== 'rollback' && (
                    <motion.div
                        initial={{ x: 0 }}
                        animate={status === 'failed' ? { x: '50%', backgroundColor: '#ef4444' } : { x: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-2 w-6 h-4 bg-green-500 rounded shadow-sm text-[8px] flex items-center justify-center text-white"
                    >
                        $$
                    </motion.div>
                )}

                {/* Feedback */}
                {status === 'failed' && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-0 left-[40%] text-red-500 bg-white p-1 border border-red-500 rounded z-10">
                        CRASH!
                    </motion.div>
                )}
                {status === 'rollback' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-8 w-full text-center text-[10px] text-blue-600 uppercase tracking-widest">
                        Rollback Triggered
                    </motion.div>
                )}
            </div>

            <div className="flex flex-col items-center">
                <div className="w-10 h-10 border border-slate-300 bg-slate-100 rounded flex items-center justify-center mb-1 text-slate-400">B</div>
                <span className="text-slate-400">$0</span>
            </div>
        </div>
    );
};

// 2. Consistency: Rules Block Invalid Data
const ConsistencyDemo = ({ active }: { active: boolean }) => {
    return (
        <div className="relative h-20 bg-slate-50 border rounded-lg flex items-center justify-center overflow-hidden">

            {/* Database */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-blue-100 border-l border-blue-300 flex items-center justify-center">
                <Database size={24} className="text-blue-400" />
            </div>

            {/* Rule Wall */}
            <div className="absolute right-16 top-2 bottom-2 w-1 bg-red-400/50 rounded-full"></div>

            {/* Bad Data Input */}
            <motion.div
                animate={{ x: [0, 100, 80] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute left-4 bg-red-500 text-white text-[10px] px-2 py-1 rounded"
            >
                Age: -5
            </motion.div>

            {/* Shield Block */}
            <motion.div
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, times: [0.6, 0.7, 0.9] }}
                className="absolute right-20 text-red-600 bg-white rounded-full p-1"
            >
                <Shield size={24} fill="currentColor" className="opacity-20" />
            </motion.div>
        </div>
    );
}

// 3. Isolation: Locks
const IsolationDemo = ({ active }: { active: boolean }) => (
    <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
            <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs border border-purple-300"
            >
                User A
            </motion.div>
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs border border-orange-300 opacity-50"
            >
                User B (Waiting)
            </motion.div>
        </div>

        <div className="relative p-3 border border-black rounded bg-white">
            <span className="text-xs font-bold">$500</span>
            <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 p-1 rounded-full shadow-sm"
            >
                <Lock size={12} />
            </motion.div>
        </div>
    </div>
)

// 4. Durability: Power Cut
const DurabilityDemo = ({ active }: { active: boolean }) => (
    <div className="relative h-24 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
        <motion.div
            animate={{ opacity: [1, 0, 1] }} // Flicker
            transition={{ duration: 0.2, repeat: 3, repeatDelay: 2 }}
            className="absolute top-2 right-2 text-yellow-400"
        >
            <Zap size={16} fill="currentColor" />
        </motion.div>

        <div className="text-center z-10">
            <div className="text-white text-xs mb-1">System Memory</div>
            <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 10, 0] }} // RAM clears on flicker
                transition={{ duration: 0.2, repeat: 3, repeatDelay: 2 }}
                className="text-red-400 text-[10px]"
            >
                *volatile*
            </motion.div>
        </div>

        <div className="absolute bottom-0 w-full bg-green-900 p-1 text-center border-t border-green-700">
            <div className="flex items-center justify-center gap-2 text-green-400 text-[10px] font-bold">
                <Database size={10} />
                COMMITTED DATA SAFETY
            </div>
        </div>
    </div>
)
