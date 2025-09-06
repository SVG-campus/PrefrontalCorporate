export interface ResearchProject {
  slug: string;
  title: string;
  summary: string;
  category: string;
  featured: boolean;
  githubUrl?: string;
  date: string;
  status?: 'published' | 'coming-soon';
}

export const researchData: ResearchProject[] = [
  // Medical
  {
    slug: 'in-silico-brain-drug-delivery-simulation',
    title: 'In-Silico Brain Drug Delivery Simulation',
    summary: 'A computational model simulating the delivery of therapeutic agents across the blood-brain barrier. This project explores novel methods for increasing drug efficacy for neurological disorders.',
    category: 'Medical',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/In-Silico-Brain-Drug-Delivery-Simulation',
    date: 'October 2025',
    status: 'published',
  },
  // Machine Learning
  {
    slug: 'infinite-dimensional-bayesian-posterior-operator',
    title: 'Infinite-Dimensional Bayesian Posterior Operator',
    summary: 'This repository develops and validates an infinite-dimensional Bayesian posterior operator for updating distributions over asset weights or model parameters. It supports nonparametric modeling using Gaussian process priors to fully quantify uncertainty in hierarchical asset allocation.',
    category: 'Machine Learning Algorithms',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/Infinite-Dimensional-Bayesian-Posterior-Operator',
    date: 'November 2025',
    status: 'published',
  },
  {
    slug: 'kolmogorov-complexity-constraint-module',
    title: 'Kolmogorov Complexity Constraint Module',
    summary: 'This module introduces a novel regularization framework for portfolio optimization that explicitly penalizes allocation strategies based on their Kolmogorov complexity, aiming to favor simpler, more robust strategies.',
    category: 'Machine Learning Algorithms',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/Kolmogorov-Complexity-Constraint-Module',
    date: 'October 2025',
    status: 'published',
  },
  {
    slug: 'multi-information-bottleneck-module',
    title: 'Multi-Information Bottleneck Module',
    summary: 'This module presents a rigorous formulation of a Multi-Information Bottleneck (MIB), designed to compress multiple predictive signals into a robust, minimal representation for portfolio decision-making.',
    category: 'Machine Learning Algorithms',
    featured: false,
    githubUrl: 'https://github.com/SVG-campus/Multi-Information-Bottleneck-Module',
    date: 'September 2025',
    status: 'published',
  },
  // Economics
  {
    slug: 'unified-robust-duality-informed-convex-equilibrium-allocation-theory',
    title: 'Unified Robust Duality‑Informed Convex Equilibrium Allocation Theory',
    summary: 'This repository provides a reproducible implementation of a duality-informed convex equilibrium allocation theory. It features a robust solver that finds portfolio weights by minimizing a convex objective that combines risk, return, and distributional robustness, while enforcing simplex constraints.',
    category: 'Economics',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/Unified-Robust-Duality-Informed-Convex-Equilibrium-Allocation-Theory',
    date: 'September 2025',
    status: 'published',
  },
  {
    slug: 'cvar-adjusted-update-module',
    title: 'CVaR-Adjusted Update Module',
    summary: 'This module provides a production-ready implementation for a CVaR-Adjusted Update to portfolio weights. The method explicitly penalizes tail risk by down-weighting assets with larger Conditional Value-at-Risk (CVaR), making allocations more robust to extreme downside events.',
    category: 'Economics',
    featured: true,
    githubUrl: 'https://github.com/SVG-campus/CVaR-Adjusted-Update-Module',
    date: 'August 2025',
    status: 'published',
  },
  {
    slug: 'reinforcement-learning-inspired-adjustment-module',
    title: 'Reinforcement Learning–Inspired Adjustment Module',
    summary: 'This module provides a production-ready implementation of a portfolio weight adjustment mechanism inspired by reinforcement learning. It updates weights using a simple multiplicative rule based on a reward signal, ensuring the portfolio remains valid and normalized.',
    category: 'Economics',
    featured: false,
    githubUrl: 'https://github.com/SVG-campus/Reinforcement-Learning-Inspired-Adjustment-Module',
    date: 'July 2025',
    status: 'published',
  },
  {
    slug: 'entropy-regularization-module',
    title: 'Entropy Regularization Module',
    summary: 'A production-ready implementation of an Entropy Regularization Module. This module encourages portfolio diversification and robustness by penalizing concentrated allocations, using an entropy term and an exponentiated-gradient update.',
    category: 'Economics',
    featured: false,
    githubUrl: 'https://github.com/SVG-campus/Entropy-Regularization-Module',
    date: 'June 2025',
    status: 'published',
  },
  {
    slug: 'autocorrelation-penalty-module',
    title: 'Autocorrelation Penalty Module',
    summary: 'This module provides a production-ready implementation of an autocorrelation penalty for portfolio updates. The method detects serial correlation in a signal using a Ljung-Box test and applies a shrinkage penalty to reduce exposure when strong autocorrelation is present.',
    category: 'Economics',
    featured: false,
    githubUrl: 'https://github.com/SVG-campus/Autocorrelation-Penalty-Module',
    date: 'May 2025',
    status: 'published',
  },
  {
    slug: 'wasserstein-distributionally-robust-optimization-dro-module',
    title: 'Wasserstein Distributionally Robust Optimization (DRO) Module',
    summary: 'A production-ready implementation of a Wasserstein Distributionally Robust Optimization (DRO) penalty for portfolio updates. This module hedges against distribution shift by penalizing the divergence between historical mean returns and a stressed or perturbed mean.',
    category: 'Economics',
    featured: false,
    githubUrl: 'https://github.com/SVG-campus/Wasserstein-Distributionally-Robust-Optimization-DRO-Module',
    date: 'April 2025',
    status: 'published',
  },
  // Coming Soon
  {
    slug: 'von-neumann-algebra-stabilization-module',
    title: 'Von Neumann Algebra Stabilization Module',
    summary: 'Coming Soon, in GitHub, but applying to jobs and can not code it.',
    category: 'Partial Differential Equations',
    featured: false,
    date: 'Forthcoming',
    status: 'coming-soon',
  },
  {
    slug: 'quantum-kernel-qubo-game',
    title: 'Quantum Kernel Qubo Game',
    summary: 'Coming Soon, in GitHub, but applying to jobs and can not code it.',
    category: 'Quantum Kernel',
    featured: false,
    date: 'Forthcoming',
    status: 'coming-soon',
  },
  {
    slug: 'quantum-entangled-kernel',
    title: 'Quantum Entangled Kernel',
    summary: 'Coming Soon, in GitHub, but applying to jobs and can not code it.',
    category: 'Quantum Kernel',
    featured: false,
    date: 'Forthcoming',
    status: 'coming-soon',
  },
];
