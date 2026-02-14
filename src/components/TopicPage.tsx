import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COURSE_MODULES } from '../data/conceptMeta';
import { TopicViewer } from './TopicViewer';
import { RevisionView } from './RevisionView';
import { useSEO } from '../hooks/useSEO';

export const TopicPage = () => {
    const { topicSlug } = useParams();

    if (topicSlug === 'revision') {
        return <RevisionView />;
    }

    // Flatten topics to find the one matching the slug
    const allTopics = COURSE_MODULES.flatMap(m => m.topics);
    const foundTopic = allTopics.find(t => t.slug === topicSlug);

    // Dynamic SEO
    useSEO(foundTopic ? {
        title: `${foundTopic.title} – DBMS`,
        description: foundTopic.definition?.slice(0, 160),
        path: `/dbms/${foundTopic.slug}/`,
    } : {});

    if (!foundTopic) {
        // Fallback or 404. For now, redirect to first topic.
        const firstTopic = COURSE_MODULES[0].topics[0];
        // Prevent infinite loop if URL is bad but valid
        if (!topicSlug) return <Navigate to={`/dbms/${firstTopic.slug}`} replace />;

        return (
            <div className="p-8 text-center text-red-500">
                Topic not found: {topicSlug}
                <div className="mt-4">
                    <a href={`/dbms/${firstTopic.slug}`} className="text-blue-500 underline">Go to Home</a>
                </div>
            </div>
        );
    }

    return <TopicViewer topic={foundTopic} />;
};

