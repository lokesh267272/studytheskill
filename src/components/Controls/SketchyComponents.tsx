import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export const SketchyBox: React.FC<Props> = ({ children, className = '', onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white hand-drawn-border shadow-sketch p-4 ${className}`}
  >
    {children}
  </div>
);

export const SketchyButton: React.FC<Props> = ({ children, className = '', onClick, active }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 font-bold transition-all duration-200
      border-2 border-black rounded-sm
      ${active ? 'bg-yellow-200 shadow-none translate-y-1 translate-x-1' : 'bg-white shadow-sketch hover:-translate-y-0.5 hover:bg-slate-50'}
      ${className}
    `}
  >
    {children}
  </button>
);

export const SketchyHighlight: React.FC<{children: React.ReactNode, color?: string}> = ({ children, color = 'bg-yellow-200' }) => (
  <span className={`${color} px-1 mx-1 skew-x-[-10deg] inline-block border-b-2 border-black/10`}>
    <span className="skew-x-[10deg] inline-block">{children}</span>
  </span>
);

export const TeacherNote: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="relative mt-6 mb-6 font-mono text-sm text-blue-700 bg-blue-50 p-4 border border-blue-200 rounded-lg transform rotate-[-1deg]">
    <div className="absolute -top-3 -left-2 bg-blue-600 text-white px-2 py-0.5 text-xs font-bold rotate-[2deg]">
      PROFESSOR'S NOTE
    </div>
    {children}
  </div>
);
