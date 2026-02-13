import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { TopicPage } from './components/TopicPage';
import { DSATopicPage } from './dsa/DSATopicPage';
import { COURSE_MODULES } from './data/conceptMeta';
import { DSA_MODULES } from './dsa/dsaMeta';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* DBMS Routes */}
        <Route path="/dbms" element={<MainLayout />}>
          <Route index element={<Navigate to={`/dbms/${COURSE_MODULES[0].topics[0].slug}`} replace />} />
          <Route path=":topicSlug" element={<TopicPage />} />
        </Route>

        {/* DSA Routes */}
        <Route path="/dsa" element={<MainLayout />}>
          <Route index element={<Navigate to={`/dsa/${DSA_MODULES[0].topics[0].slug}`} replace />} />
          <Route path=":topicSlug" element={<DSATopicPage />} />
        </Route>

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/dbms" replace />} />
      </Routes>
    </Router>
  );
}