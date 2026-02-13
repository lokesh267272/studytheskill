import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSE_MODULES } from '../../data/conceptMeta';
import { Module, Topic } from '../../types';
import { CheckSquare } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onToggle: () => void;
    modules: Module[];
    title: React.ReactNode;
    subtitle?: string;
    basePath: string; // e.g. /dbms or /dsa
}

export const Sidebar: React.FC<Props> = ({
    isOpen,
    onToggle,
    modules,
    title,
    subtitle = "Core Concepts Mastery",
    basePath
}) => {
    const { topicSlug } = useParams();

    return (
        <>
            {/* Sidebar Container */}
            <div className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-[#fdfdfd] border-r-2 border-black transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl md:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:h-[calc(100vh-110px)] md:top-0
        top-[110px] /* Below Navbar (60px) + Secondary Bar (50px) approx */
        h-[calc(100vh-110px)]
      `}>
                <div className="p-6 border-b-2 border-black bg-yellow-300 sticky top-0 z-10">
                    <h1 className="text-2xl font-bold font-sans tracking-tight uppercase">{title}</h1>
                    <p className="text-xs font-mono mt-2">{subtitle}</p>
                </div>

                <div className="p-4 space-y-6">
                    {modules.map((module: Module) => (
                        <div key={module.id}>
                            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-3 flex items-center gap-2">
                                {module.priority === 1 && <span className="text-red-500">🔥</span>}
                                {module.title}
                            </h3>
                            <ul className="space-y-2 border-l-2 border-slate-200 ml-1 pl-2">
                                {module.topics.map((topic: Topic) => (
                                    <li key={topic.id}>
                                        <Link
                                            to={`${basePath}/${topic.slug}`}
                                            onClick={() => {
                                                if (window.innerWidth < 768) onToggle();
                                            }}
                                            className={`
                        text-left w-full text-sm py-2 px-2 rounded transition-colors block
                        ${topicSlug === topic.slug
                                                    ? 'bg-[#dbeafe] text-[#1e3a8a] font-bold border-l-4 border-blue-600'
                                                    : 'text-[#1e3a8a] hover:bg-slate-100 hover:text-black'}
                      `}
                                        >
                                            {topic.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {basePath === '/dbms' && (
                        <div className="pt-4 border-t-2 border-dashed border-slate-300">
                            <Link
                                to="/dbms/revision"
                                onClick={() => {
                                    if (window.innerWidth < 768) onToggle();
                                }}
                                className={`w-full text-left font-bold flex items-center gap-2 p-3 rounded transition-all ${topicSlug === 'revision' ? 'bg-green-100 text-green-800 border-l-4 border-green-600' : 'hover:bg-gray-100'}`}
                            >
                                <CheckSquare size={18} />
                                Final Revision Checklist
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden top-[110px]"
                    onClick={onToggle}
                />
            )}
        </>
    );
};
