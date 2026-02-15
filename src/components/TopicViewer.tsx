import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Topic, LayoutContextType } from '../types';
import { AnimationCanvas } from './AnimationEngine/AnimationCanvas';
import { TeacherNote, SketchyHighlight, SketchyBox, SketchyButton } from './Controls/SketchyComponents';
import { Lightbulb, AlertTriangle, CheckCircle2, Languages, PanelLeftClose, PanelLeftOpen, Maximize, Minimize } from 'lucide-react';
import { QuizComponent } from '../dsa/components/Quiz';
import { COURSE_MODULES } from '../data/conceptMeta';

interface Props {
  topic: Topic;
}

import { useNavigate } from 'react-router-dom';

export const TopicViewer: React.FC<Props> = ({ topic }) => {
  const componentRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useOutletContext<LayoutContextType>();
  const [isTranslated, setIsTranslated] = useState(false);
  const isModule1 = topic.id.startsWith('t1-');
  const isModule2 = topic.id.startsWith('t2-');

  // Reset translation when topic changes
  useEffect(() => {
    setIsTranslated(false);
  }, [topic.id]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const previousSidebarState = React.useRef(isSidebarCollapsed);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && componentRef.current) {
      previousSidebarState.current = isSidebarCollapsed; // Save current state
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      if (!isNowFullscreen) {
        // Restore sidebar state when exiting focus mode
        setIsSidebarCollapsed(previousSidebarState.current);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Scroll to top when topic changes while in Focus Mode
  useEffect(() => {
    if (isFullscreen && componentRef.current) {
      componentRef.current.scrollTo(0, 0);
    }
  }, [topic.id, isFullscreen]);

  const handleQuizComplete = () => {
    // Find current topic index
    const allTopics = COURSE_MODULES.flatMap(m => m.topics);
    const currentIndex = allTopics.findIndex(t => t.id === topic.id);

    // Navigate to next topic if exists
    if (currentIndex < allTopics.length - 1) {
      const nextTopic = allTopics[currentIndex + 1];
      navigate(`/dbms/${nextTopic.slug}`);
      window.scrollTo(0, 0);
    } else {
      // End of course - maybe go back to home or show completion
      alert("Congratulations! You have completed the entire DBMS course!");
      navigate('/dbms');
    }
  };

  // Calculate Next/Prev Topics
  const allTopics = COURSE_MODULES.flatMap(m => m.topics);
  const currentIndex = allTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const navigateToTopic = (slug: string) => {
    navigate(`/dbms/${slug}`);
    window.scrollTo(0, 0);
  };

  const displayTitle = isTranslated && topic.telugu ? topic.telugu.title : topic.title;
  // ... rest of component ...

  const displayDefinition = isTranslated && topic.telugu ? topic.telugu.definition : topic.definition;
  const displayWhy = isTranslated && topic.telugu ? topic.telugu.why : topic.why;
  const displayExample = isTranslated && topic.telugu ? topic.telugu.example : topic.example;
  const displayRevisionHook = isTranslated && topic.telugu ? topic.telugu.revisionHook : topic.revisionHook;

  return (
    <div ref={componentRef} className={isFullscreen ? 'bg-white overflow-y-auto h-screen w-full' : ''}>
      <div className={`max-w-7xl mx-auto p-4 md:p-8 lg:p-12 ${isFullscreen ? 'max-w-none' : ''}`}>
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

              {prevTopic && (
                <SketchyButton onClick={() => navigateToTopic(prevTopic.slug)} className="text-sm px-4 py-2">
                  &lt;- Prev Topic
                </SketchyButton>
              )}
            </div>
            <div>
              {nextTopic ? (
                <SketchyButton onClick={() => navigateToTopic(nextTopic.slug)} className="text-sm px-4 py-2">
                  Next Topic -&gt;
                </SketchyButton>
              ) : <div />}
            </div>
          </div>
        )}

        {/* Title Header - Hidden in Focus Mode */}
        {!isFullscreen && (
          <div className="mb-10 border-b-4 border-black/10 pb-6 pr-12 md:pr-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 font-sans mb-2 md:mb-3 leading-tight transition-all">
                {displayTitle}
              </h1>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-slate-600 font-mono text-[10px] md:text-sm">
                {!isModule1 && !isModule2 && (
                  <>
                    <span className="bg-slate-200 px-2 py-1 md:px-3 rounded-full">EXAM FOCUS</span>
                    <span className="hidden md:inline text-slate-300">|</span>
                  </>
                )}
                <span className="tracking-widest opacity-70">INTERACTIVE THEORY MODULE</span>
              </div>
            </div>

            {/* Translate Button for Module 1 and 2 */}
            {(isModule1 || isModule2) && topic.telugu && (
              <SketchyButton
                onClick={() => setIsTranslated(!isTranslated)}
                active={isTranslated}
                className="flex items-center gap-2 text-xs md:text-sm w-full md:w-auto justify-center !py-2 !px-4"
              >
                <Languages size={16} />
                {isTranslated ? 'English Mode' : 'Romanized Telugu Mode'}
              </SketchyButton>
            )}
          </div>
        )}

        {/* Main Grid - Asymmetrical on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 md:gap-12 items-start">

          {/* Left Col: Theory - Sticky on large screens */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-8">
            <section className="bg-white p-4 md:p-6 rounded-xl border-2 border-slate-100 shadow-sm">
              <h3 className="text-sm font-black uppercase text-blue-500 mb-3 tracking-[0.2em]">The Concept</h3>
              <div className="text-xl md:text-xl font-bold leading-relaxed text-slate-800">
                <span className="relative inline-block">
                  {displayDefinition}
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-300 opacity-50"></div>
                </span>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-black uppercase text-slate-400 mb-2 tracking-[0.2em]">Why it matters?</h3>
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed">{displayWhy}</p>
            </section>

            <section>
              <div className="flex items-start gap-4 bg-green-50/50 p-5 rounded-xl border-2 border-dashed border-green-200 transition-all">
                <Lightbulb className="text-green-600 shrink-0 mt-1" size={24} />
                <p className="text-slate-700 font-medium italic text-sm md:text-lg leading-snug">{displayExample}</p>
              </div>
            </section>

            {/* Breakdown Section (for ACID etc) */}
            {topic.breakdown && (
              <section>
                <h3 className="text-xs font-black uppercase text-slate-400 mb-2 tracking-[0.2em]">Breakdown</h3>
                <div className="grid grid-cols-1 gap-3">
                  {topic.breakdown.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-800 mb-1">{item.label}</div>
                      <div className="text-slate-600 text-sm leading-snug">{item.text}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Col: Whiteboard - THE FOCUS AREA */}
          <div className="space-y-4 w-full min-w-0">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Interactive Whiteboard</h3>
              <span className="hidden md:inline text-[10px] font-mono text-slate-400 uppercase tracking-tighter">Click "Next" to build the model</span>
            </div>
            <AnimationCanvas type={topic.animationType} />
          </div>
        </div>

        {/* Exam Section */}
        <div className="mt-16 space-y-10">

          {/* Hide Exam Angle specifically for Module 1 topics */}
          {!isModule1 && (
            <SketchyBox className="!bg-yellow-50 !border-yellow-600 !p-6 md:!p-10">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-yellow-200 pb-4">
                <CheckCircle2 className="text-yellow-700" size={32} />
                <h3 className="text-2xl md:text-3xl font-black text-yellow-900 tracking-tight">Critical Exam Angle</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="text-[10px] font-black text-yellow-800 uppercase mb-2 tracking-widest">Typical Question Pattern:</div>
                  <p className="font-serif text-lg md:text-xl italic text-slate-800 leading-tight">"{topic.belAngle.questionStyle}"</p>
                </div>
                <div className="bg-white/60 p-5 rounded-lg border border-yellow-200 shadow-sm">
                  <div className="text-[10px] font-black text-green-800 uppercase mb-2 tracking-widest">The Winning Answer:</div>
                  <p className="font-black text-lg md:text-2xl text-green-700">{topic.belAngle.answer}</p>
                </div>
              </div>
            </SketchyBox>
          )}

          <TeacherNote>
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-blue-400 shrink-0" />
              <div className="text-sm md:text-lg">
                <span className="font-black block text-xs uppercase mb-1 tracking-widest opacity-60">Don't Get Confused!</span>
                {topic.belAngle.confusion}
              </div>
            </div>
          </TeacherNote>

          <div className="text-center mt-12">
            <div className="inline-block border-2 border-dashed border-slate-300 p-6 md:p-8 rounded-2xl bg-slate-50 shadow-inner max-w-full">
              <div className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-[0.3em]">Revision Hook</div>
              <div className="font-mono text-lg md:text-3xl font-black tracking-tighter text-slate-800 px-4">
                {displayRevisionHook}
              </div>
            </div>
          </div>

          {/* Topic Quiz Section */}
          {topic.mcqs && topic.mcqs.length > 0 && (
            <div className="mt-16 pt-8 border-t-4 border-black/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-black text-white px-3 py-1 text-sm font-bold transform -rotate-2">CHECK YOUR KNOWLEDGE</span>
                <h3 className="text-3xl font-black text-slate-800">Topic Quiz</h3>
              </div>
              <QuizComponent mcqs={topic.mcqs} onComplete={handleQuizComplete} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};