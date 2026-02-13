import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCcw } from 'lucide-react';
import { SketchyButton } from '../Controls/SketchyComponents';
import { AbstractionDiagram } from './AbstractionDiagram';
import { SchemaInstanceDiagram } from './SchemaInstanceDiagram';
import { KeysDiagram } from './KeysDiagram';
import { SuperCandidateKeysDiagram } from './SuperCandidateKeysDiagram';
import { JoinsTableDiagram } from './JoinsTableDiagram';
import { AcidDiagram } from './AcidDiagram';
import { ERDiagram } from './ERDiagram';
import { Norm1NFDiagram } from './Norm1NFDiagram';
import { Norm2NFDiagram } from './Norm2NFDiagram';
import { Norm3NFDiagram } from './Norm3NFDiagram';
import { NormBCNFDiagram } from './NormBCNFDiagram';
import { Norm4NFDiagram } from './Norm4NFDiagram';
import { Norm5NFDiagram } from './Norm5NFDiagram';
import { SqlDiagram } from './SqlDiagram';
import { IndexingDiagram } from './IndexingDiagram';
import { LanguagesDiagram } from './LanguagesDiagram';
import { DbmsVsFilesDiagram } from './DbmsVsFilesDiagram';
import { TriggerDiagram } from './TriggerDiagram';

interface AnimationCanvasProps {
    type: string;
}

const MAX_STEPS: Record<string, number> = {
    'abstraction': 3,
    'schema_instance': 2,
    'keys': 3,
    'super_candidate_keys': 3,
    'joins': 4,
    'acid': 3,
    'er': 6,
    'norm_1nf': 2,
    'norm_2nf': 2,
    'norm_3nf': 2,
    'norm_bcnf': 2,
    'norm_4nf': 2,
    'norm_5nf': 2,
    'sql': 2,
    'indexing': 1,
    'languages': 2,
    'dbms_vs_files': 1,
    'triggers': 4
};

export const AnimationCanvas: React.FC<AnimationCanvasProps> = ({ type }) => {
    const [step, setStep] = useState(0);

    // Get max steps for current type, default to 3 if not found
    const maxSteps = MAX_STEPS[type] ?? 3;

    useEffect(() => {
        setStep(0);
    }, [type]);

    const nextStep = () => {
        if (step < maxSteps) {
            setStep(s => s + 1);
        }
    };

    const reset = () => setStep(0);

    const renderContent = () => {
        switch (type) {
            case 'abstraction':
                return <AbstractionDiagram step={step} />;
            case 'schema_instance':
                return <SchemaInstanceDiagram step={step} />;
            case 'keys':
                return <KeysDiagram step={step} />;
            case 'super_candidate_keys':
                return <SuperCandidateKeysDiagram step={step} />;
            case 'joins':
                return <JoinsTableDiagram step={step} />;
            case 'acid':
                return <AcidDiagram step={step} />;
            case 'er':
                return <ERDiagram step={step} />;
            case 'norm_1nf':
                return <Norm1NFDiagram step={step} />;
            case 'norm_2nf':
                return <Norm2NFDiagram step={step} />;
            case 'norm_3nf':
                return <Norm3NFDiagram step={step} />;
            case 'norm_bcnf':
                return <NormBCNFDiagram step={step} />;
            case 'norm_4nf':
                return <Norm4NFDiagram step={step} />;
            case 'norm_5nf':
                return <Norm5NFDiagram step={step} />;
            case 'sql':
                return <SqlDiagram step={step} />;
            case 'indexing':
                return <IndexingDiagram step={step} />;
            case 'languages':
                return <LanguagesDiagram step={step} />;
            case 'dbms_vs_files':
                return <DbmsVsFilesDiagram step={step} />;
            case 'triggers':
                return <TriggerDiagram step={step} />;
            default:
                return <div className="p-10 text-center text-gray-400">Sketching concept...</div>;
        }
    };

    return (
        <div className="w-full bg-white border-2 border-slate-300 rounded-2xl p-2 md:p-8 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-3 bg-slate-100 pattern-diagonal-lines opacity-50"></div>

            {/* Full View Content Container */}
            <div className="flex-grow flex items-center justify-center w-full overflow-hidden p-4">
                <div className="w-full h-full flex items-center justify-center transition-all duration-700">
                    {renderContent()}
                </div>
            </div>

            {/* Controls - Refined and Modern */}
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row justify-between items-center border-t-2 border-dashed border-slate-200 pt-6 w-full bg-white/50 backdrop-blur-md z-50 gap-4">
                <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em]">Sequence Status</span>
                    <div className="flex gap-1 mt-1">
                        {Array.from({ length: maxSteps + 1 }).map((_, i) => (
                            <div key={i} className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step >= i ? 'bg-blue-600' : 'bg-slate-200'}`} />
                        ))}
                    </div>
                </div>
                <div className="flex gap-3">
                    <SketchyButton onClick={reset} className="!text-[10px] md:!text-xs py-2 px-5 !bg-slate-50 !border-slate-300 flex items-center gap-2">
                        <RefreshCcw size={14} /> Reset View
                    </SketchyButton>
                    <div className={`transition-all duration-300 ${step >= maxSteps ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <SketchyButton onClick={nextStep} active={false} className="!text-[10px] md:!text-xs py-2 px-8 !bg-blue-600 !text-white !border-blue-700 flex items-center gap-2 shadow-lg shadow-blue-200">
                            Next Action <ArrowRight size={14} />
                        </SketchyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
