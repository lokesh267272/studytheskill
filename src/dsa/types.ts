import React from 'react';

export enum SectionType {
    INTRO = 'INTRO',
    CONCEPT = 'CONCEPT',
    VISUALIZATION = 'VISUALIZATION',
    QUIZ = 'QUIZ',
    SUMMARY = 'SUMMARY'
}

export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface ContentSection {
    id: string;
    module: string; // New field to group sections
    title: string;
    shortTitle: string; // For sidebar
    type: SectionType;
    content: React.ReactNode;
    mcqs?: MCQ[];
}