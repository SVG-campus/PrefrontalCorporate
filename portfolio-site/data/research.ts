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
    category: 'Medical',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/In-Silico-Brain-Drug-Delivery-Simulation',
  },
  {
    slug: 'economic-modeling-of-tech-adoption',
    title: 'Economic Modeling of Tech Adoption',
    summary: 'This project analyzes the economic factors influencing the adoption rate of new technologies in emerging markets, using predictive modeling to forecast market penetration.',
    category: 'Economics',
    featured: false,
  },
  {
    slug: 'executive-function-in-startups',
    title: 'Mapping Executive Function in Startup Founders',
    summary: 'An ongoing study analyzing the correlation between key executive functions (e.g., cognitive flexibility, working memory) and success metrics in early-stage technology startups.',
    category: 'Executive Entrepreneurship',
    featured: true,
  },
  {
    slug: 'federated-learning-for-privacy',
    title: 'Federated Learning for Privacy-Preserving AI',
    summary: 'An implementation of a federated learning system that trains machine learning models on decentralized data without compromising user privacy.',
    category: 'Machine Learning Algorithms',
    featured: false,
  },
  {
    slug: 'neuro-inspired-ai-models',
    title: 'Neuro-Inspired AI Models for Pattern Recognition',
    summary: 'Developing next-generation artificial intelligence by mimicking neural structures found in the human visual cortex to improve the accuracy and efficiency of pattern recognition tasks.',
    category: 'Artificial Intelligence',
    featured: false,
  },
  {
    slug: 'placeholder-physics',
    title: 'Placeholder Physics Project',
    summary: 'A placeholder summary for a future project in the field of theoretical physics.',
    category: 'Physics',
    featured: false,
  },
  {
    slug: 'placeholder-law',
    title: 'Placeholder Law Project',
    summary: 'A placeholder summary for a future project exploring the intersection of law and technology.',
    category: 'Law',
    featured: false,
  },
  {
    slug: 'placeholder-math',
    title: 'Placeholder Math Project',
    summary: 'A placeholder summary for a future project in advanced mathematical theory.',
    category: 'Math',
    featured: false,
  },
  {
    slug: 'placeholder-ee',
    title: 'Placeholder Electrical Engineering Project',
    summary: 'A placeholder summary for a future project in electrical engineering.',
    category: 'Electrical Engineering',
    featured: false,
  },
  {
    slug: 'placeholder-luxury',
    title: 'Placeholder Luxury Theory Project',
    summary: 'A placeholder summary for a future project analyzing the principles of luxury theory.',
    category: 'Luxury Theory',
    featured: false,
  },
  {
    slug: 'placeholder-hospitality',
    title: 'Placeholder Hospitality Project',
    summary: 'A placeholder summary for a future project in the hospitality industry.',
    category: 'Hospitality',
    featured: false,
  },
];
