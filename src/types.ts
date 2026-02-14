export interface AnimationFrame {
  id: number;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  definition: string;
  why: string;
  example: string;
  belAngle: {
    questionStyle: string;
    answer: string;
    confusion: string;
  };
  revisionHook: string;
  animationType: 'abstraction' | 'schema_instance' | 'keys' | 'super_candidate_keys' | 'er' | 'norm_1nf' | 'norm_2nf' | 'norm_3nf' | 'norm_bcnf' | 'norm_4nf' | 'norm_5nf' | 'acid' | 'sql' | 'joins' | 'indexing' | 'languages' | 'dbms_vs_files' | 'triggers' | 'none';
  slug: string;
  telugu?: {
    title: string;
    definition: string;
    why: string;
    example: string;
    revisionHook: string;
  };
  breakdown?: {
    label: string;
    text: string;
    icon?: string;
  }[];
  mcqs?: MCQ[];
}

export interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  priority: 1 | 2 | 3;
  topics: Topic[];
}

export interface FlashCard {
  front: string;
  back: string;
  category: string;
}