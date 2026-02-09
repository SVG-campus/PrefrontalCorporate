
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // === Projects API ===
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  // === Profile API ===
  app.get(api.profile.get.path, async (_req, res) => {
    const profile = await storage.getProfile();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  });

  // === Seeding Logic (Run once if empty) ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProfile = await storage.getProfile();
  if (!existingProfile) {
    await storage.createProfile({
      name: "Santiago D. J. V. G.",
      title: "Research Engineer & Optimization Architect",
      bio: "Exploring the intersection of Neuroscience and Executive Entrepreneurship. My mission is to mentor the next generation and provide access to cutting-edge technology.",
      avatarUrl: "/src/assets/images/profile.jpg",
      emails: ["svillalobos-gonzalez@my.campus.edu", "prefrontalcorporate@gmail.com"],
      phone: "3412211752",
      address: "4162 Hansen Avenue, Fremont, California 94536",
      socialLinks: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/prefrontalcorporate" },
        { platform: "Kaggle", url: "https://www.kaggle.com/seasthaalores" }
      ]
    });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    const projects = [
      {
        title: "Optimized Transportation Engine",
        slug: "optimized-transportation-engine",
        description: "Titan Transportation Omni-Framework (GPU Enabled). Integrated engine for discovery, validation, attribution, intervention, and optimization.",
        fullContent: "# TITAN TRANSPORTATION OMNI-FRAMEWORK\n\nA comprehensive GPU-enabled framework for optimizing industrial transportation systems. Features include:\n\n1. **Unified Discovery Engine**: Scans for non-linear drivers and temporal lags.\n2. **Titan Validation Framework**: Checks for physics violations and anomalies.\n3. **Universal Attribution Validator**: Maps neural causality using Shapley values.\n4. **Platinum Causal Engine**: Simulates counterfactuals and interventions.\n5. **Unified Optimization Framework**: Uses differential evolution to find global maxima.\n\nSimulates 50,000 industrial engine scenarios to find the optimal configuration for torque, durability, and efficiency.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/optimized-transportation-engine",
        category: "Optimization",
        tags: ["Python", "GPU", "XGBoost", "PyTorch", "Physics"],
        featured: true
      },
      {
        title: "Enterprise Business Profit Optimization",
        slug: "enterprise-business-profit-optimization",
        description: "Titan Gaia: Planetary Optimization Engine. A comprehensive system for geo-spatial and temporal business intelligence.",
        fullContent: "# TITAN GAIA: PLANETARY OPTIMIZATION ENGINE\n\nUpdates V14.1 - Fixed string formatting and verified planetary logic.\n\n**Modules:**\n1. **Planetary Generator**: Terraforms data with geo-spatial and temporal layers.\n2. **Omni-Funnel Simulator**: Simulates web traffic and broken funnels (entropy injection).\n3. **Temporal Bidding Optimizer**: Calculates hourly bid modifiers for ad spend.\n4. **Gaia Optimizer**: Runs the Gaia Protocol for zombie detection, geo-arbitrage, scaling, and sustaining strategies.\n5. **Planetary Dashboard**: Visualizes efficiency gains and optimized actions.\n\nResult: Total Efficiency Gain of ~$24M/Year in simulation.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/enterprise-business-profit-optimization",
        category: "Economics",
        tags: ["Business Intelligence", "Simulation", "Python", "Optimization"],
        featured: true
      },
      {
        title: "Kardashev Architect Optimization",
        slug: "kardashev-architect-optimization",
        description: "Titan Energy Ladder: Optimizing energy harvesting across 4 astrophysical scales, from Dyson Swarms to Black Hole Penrose Spheres.",
        fullContent: "# TITAN ENERGY LADDER\n\nFrom Starlight to Singularity. A physics-constrained optimization of energy harvesting megastructures.\n\n**Stages:**\n1. **Dyson Swarm (G-Type Star)**: Optimizing for maximum power without melting hematite mirrors.\n2. **White Dwarf Dynamo**: Harvesting magnetic induction from degenerate stars.\n3. **Neutron Star Magnetar**: Alfven wave receiver optimization.\n4. **Black Hole Penrose Sphere**: Extracting spacetime rotational energy via the Blandford-Znajek process.\n\nDemonstrates component-level optimization of Type II -> Type III energy systems.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/kardashev-architect-optimization",
        category: "Physics",
        tags: ["Astrophysics", "Energy", "Simulation", "Sci-Fi"],
        featured: true
      },
      {
        title: "Health: Physiological Optimization",
        slug: "health-physiological-optimization",
        description: "Physiological Optimization Framework V29.1. Clinical convergence for bio-artificial implantation and nanotherapeutic intervention.",
        fullContent: "# PHYSIOLOGICAL OPTIMIZATION FRAMEWORK\n\n**Target**: Physiological Homeostasis Restoration (Reference Age: 20-25).\n\n**Components:**\n1. **Therapeutic Vault**: A database of bio-artificial implants and gene therapies (e.g., Silicon Nanopore Kidneys, AAV8-FOXN1).\n2. **Physiological Monitor**: Calculates biological age based on biomarkers (e.g., Thymic Volume, eGFR, PWV).\n3. **Clinical Optimization Engine**: Uses basinhopping to find the optimal therapeutic regimen.\n4. **Pharmacometrics Engine**: Calculates PK/PD parameters for dosage optimization.\n\nAchieved 'Optimal' status across Neurological, Cardiovascular, Metabolic, Integumentary, Skeletal, and Renal systems in simulation.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/health",
        category: "Health",
        tags: ["Medicine", "Bioinformatics", "Optimization", "Longevity"],
        featured: true
      },
      {
        title: "Fire Extinguishing Drones",
        slug: "fire-extinguishing-drones",
        description: "The Phoenix Rebirth: 'God Mode' Integrated Simulation for complete engineering blueprint generation of firefighting drones.",
        fullContent: "# THE PHOENIX REBIRTH\n\nComplete, unredacted engineering blueprint generation covering geometry, chemistry, physics, and logistics.\n\n**Phases:**\n1. **Drone Body Engineering**: Mycelium-Hemp composite optimization and aerodynamic teardrop shape.\n2. **Chemical Payload**: Exact recipes for fire retardants and simulation of burst physics (hydraulic shock).\n3. **Swarm Logistics**: Optimization of 20,000 unit swarm formations and heavy lift logistics (C-130 vs Balloons).\n4. **Ecological Aftercare**: Safety protocols for wildlife and biodegradable materials.\n5. **Economics**: Final project budget and efficiency calculation per km².",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/fire-extinguishing-drones",
        category: "Engineering",
        tags: ["Drones", "Engineering", "Safety", "Simulation"],
        featured: false
      },
      {
        title: "Academic Writing Optimization",
        slug: "academic-writing-optimization",
        description: "The Omega Research Framework. Optimizing academic impact through causal drivers, attribution, and hyperparameter tuning.",
        fullContent: "# OMEGA RESEARCH FRAMEWORK\n\nOptimizing academic impact.\n\n**Modules:**\n1. **Genesis**: Simulating the academic corpus.\n2. **Titan Validation**: Integrity checks for fraudulent/AI-generated outliers.\n3. **Unified Discovery**: Finding causal drivers of citations (Novelty, Visibility, Readability).\n4. **Unified Optimization**: Solving for the 'Perfect Paper' parameters (Title Length, Sentiment, Readability).\n5. **Deep Validation**: Stress-testing results with noise injection and causal verification.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/academic-writing",
        category: "Optimization",
        tags: ["Research", "NLP", "Causality"],
        featured: false
      },
      {
        title: "Optimized Enterprise Transportation",
        slug: "optimized-enterprise-transportation",
        description: "Enterprise Transportation Engine Mega-Optimizer. Physics-based simulations for trains, ships, and planes.",
        fullContent: "# ENTERPRISE TRANSPORTATION ENGINE\n\n**Targets**: Trains, Cargo Ships, Cargo Planes.\n**Scale**: Hundreds of millions of physics-based simulations.\n\n**Frameworks:**\n- **Unified Transportation Simulator**: Implements logic from NREL ADVISOR, IMO EEDI, and FAA models.\n- **Train Simulator**: Diesel and Electric locomotive physics.\n- **Ship Simulator**: Marine diesel performance.\n- **Plane Simulator**: Cargo turboprop physics.\n\nOptimizes for efficiency, emissions, and operating costs.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/optimized-enterprise-transportation",
        category: "Transportation",
        tags: ["Logistics", "Physics", "Simulation"],
        featured: false
      },
      {
        title: "Gradient Boost AI Opt",
        slug: "gradient-boost-ai-opt",
        description: "AI Genesis: The Infinity Engine. Achieving global top-tier performance (0.871 R²) on housing data.",
        fullContent: "# INFINITY ENGINE (AI GENESIS)\n\n**Architecture:**\n1. **Spatial Risk Layer**: KNN for neighborhood wealth variance.\n2. **Genetic Math Layer**: Explicitly engineered interaction features.\n3. **Geo-Clustering Layer**: K-Means micro-cities.\n4. **Bayesian Singularity**: Hyper-tuned LightGBM.\n5. **Seed Averaging**: 10-Fold ensemble for variance reduction.\n\nBenchmarked against raw XGBoost, LightGBM, and Random Forest, achieving a +2.8% accuracy improvement over industry standards.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/gradient-boost-ai-opt",
        category: "AI",
        tags: ["Machine Learning", "Gradient Boosting", "Optimization"],
        featured: true
      },
      {
        title: "Poem Optimization",
        slug: "poem-optimization",
        description: "Optimization framework applied to poetic structures and creative writing.",
        fullContent: "Optimization framework applied to poetic structures and creative writing. Analysis of rhyme schemes, meter, and sentiment to maximize aesthetic impact.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/poem-optimization",
        category: "Art",
        tags: ["NLP", "Art", "Optimization"],
        featured: false
      },
      {
        title: "Education Optimization",
        slug: "education-optimization",
        description: "Titan Cognitive Architecture: MK-IX. Synthetic injection and hybrid training for student performance optimization.",
        fullContent: "# TITAN COGNITIVE ARCHITECTURE\n\n**Strategy:**\n1. **Synthetic Data Injection**: Creating 'Titan' students with perfect habits.\n2. **Hybrid Training**: Learning from Real + Titan students.\n3. **Result**: High accuracy grade prediction.\n\n**Modules:**\n- **Titan Engine**: Training hybrid causal stack (XGBoost, LightGBM, RF).\n- **Optimizer**: Breeding the perfect daily schedule via differential evolution.\n- **Elite Scheduler**: Generating a specific weekly protocol for high cognitive load.",
        externalUrl: "https://www.kaggle.com/code/seasthaalores/education-optimization",
        category: "Education",
        tags: ["Education", "Optimization", "Scheduling"],
        featured: false
      },
      {
        title: "In-Silico Brain Drug Delivery Simulation",
        slug: "in-silico-brain-drug-delivery",
        description: "A computational model simulating the delivery of therapeutic agents across the blood-brain barrier.",
        fullContent: "# In-Silico Brain Drug Delivery Simulation\n\nA computational model simulating the delivery of therapeutic agents across the blood-brain barrier. This project explores novel methods for increasing drug efficacy for neurological disorders.",
        externalUrl: "https://www.prefrontalcorporate.website/research/in-silico-brain-drug-delivery-simulation",
        category: "Medical",
        tags: ["Neuroscience", "Simulation", "Pharmacology"],
        featured: true
      },
      {
        title: "Infinite-Dimensional Bayesian Posterior Operator",
        slug: "infinite-dimensional-bayesian-operator",
        description: "Develops and validates an infinite-dimensional Bayesian posterior operator for updating distributions.",
        fullContent: "# Infinite-Dimensional Bayesian Posterior Operator\n\nThis repository develops and validates an infinite-dimensional Bayesian posterior operator for updating distributions over asset weights or model parameters. It supports nonparametric modeling using Gaussian process priors to fully quantify uncertainty in hierarchical asset allocation.",
        externalUrl: "https://www.prefrontalcorporate.website/research/infinite-dimensional-bayesian-posterior-operator",
        category: "Machine Learning Algorithms",
        tags: ["Bayesian", "Gaussian Process", "Nonparametric"],
        featured: true
      },
      {
        title: "Kolmogorov Complexity Constraint Module",
        slug: "kolmogorov-complexity-module",
        description: "A novel regularization framework for portfolio optimization based on Kolmogorov complexity.",
        fullContent: "# Kolmogorov Complexity Constraint Module\n\nThis module introduces a novel regularization framework for portfolio optimization that explicitly penalizes allocation strategies based on their Kolmogorov complexity, aiming to favor simpler, more robust strategies.",
        externalUrl: "https://www.prefrontalcorporate.website/research/kolmogorov-complexity-constraint-module",
        category: "Machine Learning Algorithms",
        tags: ["Regularization", "Portfolio Optimization", "Complexity"],
        featured: true
      },
      {
        title: "Unified Robust Duality‑Informed Convex Equilibrium Allocation Theory",
        slug: "unified-robust-duality-informed-theory",
        description: "Reproducible implementation of a duality-informed convex equilibrium allocation theory.",
        fullContent: "# Unified Robust Duality‑Informed Convex Equilibrium Allocation Theory\n\nThis repository provides a reproducible implementation of a duality-informed convex equilibrium allocation theory. It features a robust solver that finds portfolio weights by minimizing a convex objective that combines risk, return, and distributional robustness, while enforcing simplex constraints.",
        externalUrl: "https://www.prefrontalcorporate.website/research/unified-robust-duality-informed-convex-equilibrium-allocation-theory",
        category: "Economics",
        tags: ["Duality", "Convex Optimization", "Equilibrium"],
        featured: true
      },
      {
        title: "CVaR-Adjusted Update Module",
        slug: "cvar-adjusted-update-module",
        description: "Production-ready implementation for a CVaR-Adjusted Update to portfolio weights.",
        fullContent: "# CVaR-Adjusted Update Module\n\nThis module provides a production-ready implementation for a CVaR-Adjusted Update to portfolio weights. The method explicitly penalizes tail risk by down-weighting assets with larger Conditional Value-at-Risk (CVaR), making allocations more robust to extreme downside events.",
        externalUrl: "https://www.prefrontalcorporate.website/research/cvar-adjusted-update-module",
        category: "Economics",
        tags: ["CVaR", "Risk Management", "Portfolio Optimization"],
        featured: true
      }
    ];

    for (const p of projects) {
      await storage.createProject(p);
    }
  }
}
