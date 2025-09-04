export interface ResearchProject {
  slug: string;
  title: string;
  summary: string;
  category: string;
  featured: boolean;
  githubUrl?: string;
}

export const researchData: ResearchProject[] = [
  {
    slug: 'in-silico-brain-drug-delivery-simulation',
    title: 'In-Silico Brain Drug Delivery Simulation',
    summary: 'A computational model simulating the delivery of therapeutic agents across the blood-brain barrier. This project explores novel methods for increasing drug efficacy for neurological disorders.',
    category: 'Computational Neuroscience',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/In-Silico-Brain-Drug-Delivery-Simulation',
  },
  {
    slug: 'executive-function-in-startups',
    title: 'Mapping Executive Function in Startup Founders',
    summary: 'An ongoing study analyzing the correlation between key executive functions (e.g., cognitive flexibility, working memory) and success metrics in early-stage technology startups.',
    category: 'Executive Entrepreneurship',
    featured: true,
  },
  {
    slug: 'neuro-inspired-ai-models',
    title: 'Neuro-Inspired AI Models for Pattern Recognition',
    summary: 'Developing next-generation artificial intelligence by mimicking neural structures found in the human visual cortex to improve the accuracy and efficiency of pattern recognition tasks.',
    category: 'Artificial Intelligence',
    featured: false,
  },
  {
    slug: 'placeholder-project-1',
    title: 'Placeholder Research Project 1',
    summary: 'This is a placeholder description for a future research project. The details are currently under wraps, but it promises to be an exciting development in its field.',
    category: 'Computational Neuroscience',
    featured: false,
  },
];
