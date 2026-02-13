import { contentData } from './data';
import { Module, Topic } from '../types';

// Helper to slugify text
const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const dsaMeta: Module[] = [];

// Group contentData by module
const grouped = contentData.reduce((acc, section) => {
    if (!acc[section.module]) {
        acc[section.module] = [];
    }
    acc[section.module].push(section);
    return acc;
}, {} as Record<string, typeof contentData>);

// Sort modules if needed (assuming they are naturally ordered in contentData)
// Map to Module interface
Object.keys(grouped).forEach((moduleTitle, index) => {
    const sections = grouped[moduleTitle];
    const moduleId = `m${index + 1}`;

    const topics: Topic[] = sections.map((section, sIndex) => {
        // We are adapting ContentSection to Topic. 
        // Note: Topic interface has strict fields like definition, why, example.
        // For DSA, we might not use them in the same way, but we need to satisfy the interface if we want to use the same types.
        // Or we can cast/bypass if we are not using TopicViewer.
        // Since we are creating DSATopicPage, we just need the structure for the Sidebar.

        return {
            id: section.id,
            title: section.shortTitle || section.title, // Use short title for sidebar
            slug: slugify(section.module + '-' + (section.shortTitle || section.title)),
            // Dummy data to satisfy Topic interface, though we won't use TopicViewer
            definition: '',
            why: '',
            example: '',
            belAngle: { questionStyle: '', answer: '', confusion: '' },
            revisionHook: '',
            animationType: 'none',
            // Storing the original content section ID or full object might be useful to retrieve it later
            // logic: we will match by slug or we can add a custom field if we extend the type
        } as Topic;
    });

    dsaMeta.push({
        id: moduleId,
        title: moduleTitle,
        priority: 1,
        topics: topics
    });
});

export const DSA_MODULES = dsaMeta;
