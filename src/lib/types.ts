export interface Project {
  slug: string;
  title: string;
  date: string;
  status: 'functional' | 'experimental' | 'abandoned' | 'broken';
  github?: string;
  demo?: string;              // ← ADD THIS LINE
  tags: string[];
  summary: string;
  content: string;
}

// NavItem can stay the same for now, or add demo if you want it in sidebar
export interface NavItem {
  slug: string;
  title: string;
  date: string;
  demo?: string;              // ← OPTIONAL: if you want launch links in sidebar too
}

export interface Log {
  slug: string;
  title: string;
  date: string;
  mood?: 'frantic' | 'zen' | 'confused' | 'triumphant' | 'tired';
  tags: string[];
  content: string;
}

