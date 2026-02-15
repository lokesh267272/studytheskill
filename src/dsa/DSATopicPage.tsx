import React from 'react';
import { useParams, Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import { contentData } from './data';
import { SectionType } from './types';
import { LayoutContextType } from '../types';
import { QuizComponent } from './components/Quiz.tsx';
import { motion } from 'framer-motion';
import { SketchyButton } from '../components/Controls/SketchyComponents';
import { useSEO } from '../hooks/useSEO';
import { PanelLeftClose, PanelLeftOpen, Maximize, Minimize } from 'lucide-react';

// Helper to slugify text (must match dsaMeta.ts logic)
const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export const DSATopicPage = () => {
    const { topicSlug } = useParams();
    const navigate = useNavigate();
    const { isSidebarCollapsed, setIsSidebarCollapsed } = useOutletContext<LayoutContextType>();

    // Find section index by slug
    const currentSectionIndex = contentData.findIndex(section =>
        slugify(section.module + '-' + (section.shortTitle || section.title)) === topicSlug
    );
    const currentSection = contentData[currentSectionIndex];

    // Dynamic SEO
    const currentSlug = currentSection
        ? slugify(currentSection.module + '-' + (currentSection.shortTitle || currentSection.title))
        : '';
    useSEO(currentSection ? {
        title: `${currentSection.title} – ${currentSection.module}`,
        description: `Learn ${currentSection.title} in ${currentSection.module}. Interactive visuals, code examples, and quizzes on StudyTheSkill.`,
        path: `/dsa/${currentSlug}/`,
    } : {});

    if (!currentSection) {
        // Fallback to first section if not found
        if (!topicSlug) {
            const firstSection = contentData[0];
            const firstSlug = slugify(firstSection.module + '-' + (firstSection.shortTitle || firstSection.title));
            return <Navigate to={`/dsa/${firstSlug}`} replace />;
        }
        return <div className="p-8 text-center">Topic not found</div>;
    }

    const prevSection = currentSectionIndex > 0 ? contentData[currentSectionIndex - 1] : null;
    const nextSection = currentSectionIndex < contentData.length - 1 ? contentData[currentSectionIndex + 1] : null;

    const navigateToSection = (section: typeof contentData[0]) => {
        const slug = slugify(section.module + '-' + (section.shortTitle || section.title));
        navigate(`/dsa/${slug}`);
        window.scrollTo(0, 0);
    };

    const handleQuizComplete = () => {
        if (nextSection) {
            navigateToSection(nextSection);
        } else {
            alert("Congratulations! You have completed the entire DSA course!");
            navigate('/dsa');
        }
    };

    const componentRef = React.useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement && componentRef.current) {
            componentRef.current.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            setIsSidebarCollapsed(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    React.useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <motion.div
            ref={componentRef}
            key={currentSection.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`space-y-8 p-4 md:p-8 max-w-4xl mx-auto ${isFullscreen ? 'bg-white overflow-y-auto h-screen w-full max-w-none' : ''}`}
        >
            {/* Floating Exit Focus Button */}
            {isFullscreen && (
                <div className="fixed top-4 right-6 z-50 group">
                    <button
                        onClick={toggleFullscreen}
                        className="bg-black/10 hover:bg-black/80 text-black hover:text-white backdrop-blur-sm border border-black/10 rounded-full p-2 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group-hover:pr-4 group-hover:w-auto w-10 h-10 overflow-hidden"
                        title="Exit Focus Mode"
                    >
                        <Minimize size={18} className="shrink-0" />
                        <span className="font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2 text-sm overflow-hidden">
                            Exit Focus
                        </span>
                    </button>
                </div>
            )}

            {/* Top Navigation - Hidden in Focus Mode */}
            {!isFullscreen && (
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <SketchyButton
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className={`text-sm px-3 py-2 flex items-center gap-2 ${isSidebarCollapsed ? '!bg-blue-100' : ''}`}
                            title={isSidebarCollapsed ? "Show Sidebar" : "Collapse Contents"}
                        >
                            {isSidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
                            <span className="hidden sm:inline">{isSidebarCollapsed ? "Show Contents" : "Collapse Contents"}</span>
                        </SketchyButton>

                        <SketchyButton
                            onClick={toggleFullscreen}
                            className={`text-sm px-3 py-2 flex items-center gap-2 ${isFullscreen ? '!bg-blue-100' : ''}`}
                            title={isFullscreen ? "Exit Focus Mode" : "Enter Focus Mode"}
                        >
                            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                            <span className="hidden sm:inline">{isFullscreen ? "Exit Focus" : "Focus Mode"}</span>
                        </SketchyButton>

                        {prevSection && (
                            <SketchyButton onClick={() => navigateToSection(prevSection)} className="text-sm px-4 py-2">
                                &lt;- Prev Topic
                            </SketchyButton>
                        )}
                    </div>
                    <div>
                        {nextSection ? (
                            <SketchyButton onClick={() => navigateToSection(nextSection)} className="text-sm px-4 py-2">
                                Next Topic -&gt;
                            </SketchyButton>
                        ) : <div />}
                    </div>
                </div>
            )}

            {/* Title Header - Hidden in Focus Mode */}
            {!isFullscreen && (
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
            )}

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
                    <QuizComponent mcqs={currentSection.mcqs} onComplete={handleQuizComplete} />
                </div>
            )}
        </motion.div>
    );
};
