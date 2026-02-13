import React from 'react';
import { Terminal } from 'lucide-react';

interface CodeSnippetProps {
    code: string;
    language?: string;
    title?: string;
    className?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'cpp', title, className = '' }) => {
    return (
        <div className={`border-2 border-black rounded-lg overflow-hidden bg-gray-900 text-gray-100 shadow-sketch my-4 ${className}`}>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 border-b-2 border-black">
                <Terminal size={16} className="text-green-400" />
                <span className="text-xs font-mono font-bold uppercase text-gray-400">{title || language}</span>
                <div className="flex gap-1.5 ml-auto">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                    <code>{code.trim()}</code>
                </pre>
            </div>
        </div>
    );
};
