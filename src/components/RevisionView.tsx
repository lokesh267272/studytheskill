import React, { useState } from 'react';
import { FLASHCARDS } from '../data/conceptMeta';
import { SketchyBox, SketchyButton } from './Controls/SketchyComponents';
import { Check, RefreshCw } from 'lucide-react';

export const RevisionView: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 underline decoration-green-500">Exam Day Revision</h1>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <RefreshCw className="w-5 h-5" /> Flashcards (Click to Flip)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FLASHCARDS.map((card, idx) => (
            <div
              key={idx}
              className="h-40 perspective-1000 cursor-pointer group"
              onClick={() => setFlipped(flipped === idx ? null : idx)}
            >
              <div className={`
                relative w-full h-full transition-transform duration-500 transform-style-3d
                ${flipped === idx ? 'rotate-y-180' : ''}
              `}>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                  <SketchyBox className="h-full flex flex-col items-center justify-center text-center bg-white hover:bg-blue-50">
                    <span className="text-xs text-slate-400 uppercase font-bold mb-2">{card.category}</span>
                    <span className="text-lg font-bold text-slate-800">{card.front}</span>
                  </SketchyBox>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <SketchyBox className="h-full flex items-center justify-center text-center !bg-yellow-100 !border-yellow-500">
                    <span className="text-sm font-medium text-slate-800">{card.back}</span>
                  </SketchyBox>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" /> Confidence Checklist
        </h2>
        <div className="space-y-3 bg-white p-6 rounded-lg border-2 border-slate-200">
          {['I know the difference between Logical & Physical Independence', 'I can identify a Weak Entity in a diagram', 'I know which Normal Form removes Partial Dependency (2NF)', 'I can define ACID properties'].map((item, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded">
              <input type="checkbox" className="w-5 h-5 accent-green-600 rounded" />
              <span className="text-slate-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
