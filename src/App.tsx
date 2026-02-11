import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TopicPage } from './components/TopicPage';
import { COURSE_MODULES } from './data/conceptMeta';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa] text-slate-800 font-sans overflow-hidden">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto w-full">
          {/* Paper texture overlay for the content area */}
          <div className="min-h-full pb-20 p-4 md:p-8">
            <Routes>
              <Route path="/dbms/:topicSlug" element={<TopicPage />} />
              {/* Redirect /dbms to first topic */}
              <Route path="/dbms" element={<Navigate to={`/dbms/${COURSE_MODULES[0].topics[0].slug}`} replace />} />
            </Routes>
          </div>

          {/* Footer Credit */}
          <div className="w-full text-center py-4 text-xs text-slate-400 font-mono border-t border-slate-200 bg-white/50 backdrop-blur-sm">
            Core Concept Mastery • DBMS Module
          </div>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        {/* Default Redirect to DBMS */}
        <Route path="/" element={<Navigate to={`/dbms/${COURSE_MODULES[0].topics[0].slug}`} replace />} />
      </Routes>
    </Router>
  );
}