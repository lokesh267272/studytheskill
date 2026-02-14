import React, { useState } from 'react';
import { Navbar } from './Layout/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { COURSE_MODULES } from '../data/conceptMeta';
import { DSA_MODULES } from '../dsa/dsaMeta';

export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Determine context (DBMS or DSA) based on URL
    const isDSA = location.pathname.startsWith('/dsa');

    // Config based on context
    const currentModules = isDSA ? DSA_MODULES : COURSE_MODULES;
    const basePath = isDSA ? '/dsa' : '/dbms';
    const sidebarTitle = isDSA ? (
        <>DSA <br /> SKETCHY GUIDE</>
    ) : (
        <>DBMS <br /> MASTER</>
    );

    const mainRef = React.useRef<HTMLElement>(null);

    // Scroll back to top when navigating to a new topic
    React.useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col h-screen bg-[#f8f9fa] text-slate-800 font-sans overflow-hidden">
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="flex flex-1 overflow-hidden relative">
                <Sidebar
                    isOpen={sidebarOpen}
                    onToggle={() => setSidebarOpen(!sidebarOpen)}
                    modules={currentModules}
                    title={sidebarTitle}
                    basePath={basePath}
                />

                <main ref={mainRef} className="flex-1 overflow-y-auto w-full relative">
                    {/* Paper texture overlay for the content area */}
                    <div className="min-h-full pb-20 md:p-0">
                        <Outlet />
                    </div>

                    {/* Footer Credit */}
                    <div className="w-full text-center py-4 text-xs text-slate-400 font-mono border-t border-slate-200 bg-white/50 backdrop-blur-sm z-10 relative">
                        Core Concept Mastery • {isDSA ? 'DSA Module' : 'DBMS Module'}
                    </div>
                </main>
            </div>
        </div>
    );
};
