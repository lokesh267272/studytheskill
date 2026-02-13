import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { contentData } from './data';
import { SectionType } from './types';
import { QuizComponent } from './components/Quiz.tsx';
import { motion } from 'framer-motion';

// Helper to slugify text (must match dsaMeta.ts logic)
const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export const DSATopicPage = () => {
    const { topicSlug } = useParams();

    // Find section by slug
    const currentSection = contentData.find(section =>
        slugify(section.module + '-' + (section.shortTitle || section.title)) === topicSlug
    );

    if (!currentSection) {
        // Fallback to first section if not found
        if (!topicSlug) {
            const firstSection = contentData[0];
            const firstSlug = slugify(firstSection.module + '-' + (firstSection.shortTitle || firstSection.title));
            return <Navigate to={`/dsa/${firstSlug}`} replace />;
        }
        return <div className="p-8 text-center">Topic not found</div>;
    }

    return (
        <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 p-4 md:p-8 max-w-4xl mx-auto"
        >
            <div className="border-b-2 border-black pb-4">
                <div className="mb-2">
                    <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded font-bold">{currentSection.module}</span>
                </div>
                <h2 className="text-4xl font-bold mb-2">{currentSection.title}</h2>
                <div className="flex gap-2">
                    {/* Only showing type tag if strictly needed, keeping it clean like DBMS layout */}
                    {currentSection.type === SectionType.VISUALIZATION && <span className="px-2 py-1 bg-blue-200 text-xs font-bold border border-black rounded">Interactive</span>}
                </div>
            </div>

            {/* Educational Content */}
            <div className="text-xl leading-relaxed font-hand text-ink">
                {currentSection.content}
            </div>

            {/* Section Quiz (if any) */}
            {currentSection.mcqs && currentSection.mcqs.length > 0 && (
                <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-400">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-black text-white px-2 py-1 mr-2 text-sm transform -rotate-3">Quick Check</span>
                        Concept Quiz
                    </h3>
                    <QuizComponent mcqs={currentSection.mcqs} />
                </div>
            )}
        </motion.div>
    );
};
