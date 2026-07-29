import {
    Zap,
    BarChart3,
    Database,
    Brain,
    Trophy,
    TrendingUp,
    PieChart,
    Settings,
    Users,
    Terminal,
    Shirt,
    Layers,
    Search,
    Sparkles,
    Package,
    LucideIcon
} from 'lucide-react';

export interface PersonalInfo {
    name: string;
    roles: string[];
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    resumePrimaryLabel: string;
    resumePrimaryUrl: string;
    resumeSecondaryLabel: string;
    resumeSecondaryUrl: string;
    twitter: string;
    status: string;
    tagline: string;
    subTagline: string;
    bio: string;
}

export interface Stat {
    icon: LucideIcon;
    value: string;
    label: string;
    color: string;
}

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
}

export interface Experience {
    type: string;
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
}

export interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    githubUrl: string;
    icon: LucideIcon;
    /** Optional: short status badge, e.g. "Shipped v1" */
    status?: string;
    /** Optional: store / live URL (shown instead of GitHub icon when present) */
    storeUrl?: string;
    /** Optional: 2–4 short impact / highlights bullets */
    highlights?: string[];
    /** Optional: link to a privacy policy or legal page */
    privacyUrl?: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    stats: Stat[];
    heroHUD: {
        processingPower: string;
        neuralLatency: string;
        dataVolume: string;
    };
    skills: {
        categories: SkillCategory[];
        marquee: string[];
    };
    experience: Experience[];
    projects: Project[];
}

export const portfolioData: PortfolioData = {
    personalInfo: {
        name: (import.meta as any).env.VITE_USER_NAME || "M. Wajeeh",
        roles: ["ML Engineer", "AI Engineer"],
        email: (import.meta as any).env.VITE_USER_EMAIL || "contact@example.com",
        github: (import.meta as any).env.VITE_USER_GITHUB || "https://github.com/",
        linkedin: (import.meta as any).env.VITE_USER_LINKEDIN || "https://linkedin.com/in/",
        // Backward-compatible single resume URL (defaults to the primary resume)
        resumeUrl: (import.meta as any).env.VITE_USER_RESUME_URL || (import.meta as any).env.VITE_USER_RESUME_PRIMARY_URL || "/AI-ML.pdf",
        resumePrimaryLabel: (import.meta as any).env.VITE_USER_RESUME_PRIMARY_LABEL || "AI/ML",
        resumePrimaryUrl: (import.meta as any).env.VITE_USER_RESUME_PRIMARY_URL || "/AI-ML.pdf",
        resumeSecondaryLabel: (import.meta as any).env.VITE_USER_RESUME_SECONDARY_LABEL || "",
        resumeSecondaryUrl: (import.meta as any).env.VITE_USER_RESUME_SECONDARY_URL || "",
        twitter: "",
        status: "ACCEPTING PROJECTS",
        tagline: "Engineering intelligent systems that solve real-world problems",
        subTagline: "AI Graduate with hands-on experience in ML Engineering and Generative AI.",
        bio: "I'm an AI graduate who builds machine learning systems that actually make it to production. I work across ML engineering and generative AI, from end-to-end ML pipelines with Docker to LLM-powered applications using LangChain and RAG. I care about building systems that aren't just smart, but reliable and ready for the real world."
    },

    stats: [
        { icon: Trophy, value: '#1', label: 'VYROTHON 2026', color: 'var(--color-accent-cyan)' },
        { icon: Zap, value: '580+', label: 'COMPETITORS OUTPERFORMED', color: 'var(--color-primary)' },
        { icon: TrendingUp, value: '7+', label: 'END-TO-END ML PIPELINES', color: 'var(--color-accent-magenta)' }
    ],

    heroHUD: {
        processingPower: "94.7%",
        neuralLatency: "0.002ms",
        dataVolume: "1.2 TB/S"
    },

    skills: {
        categories: [
            {
                title: 'DATA ANALYSIS',
                icon: BarChart3,
                skills: ['Data Cleaning', 'Preprocessing', 'EDA', 'Trend Analysis', 'Reporting', 'Feature Engineering', 'Statistical Analysis']
            },
            {
                title: 'DATA VISUALIZATION',
                icon: PieChart,
                skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
            },
            {
                title: 'MACHINE LEARNING & AI',
                icon: Brain,
                skills: ['Machine Learning', 'Deep Learning', 'CNN/RNN/LSTM', 'NLP', 'Scikit-learn', 'TensorFlow', 'PyTorch']
            },
            {
                title: 'GENERATIVE AI',
                icon: Sparkles,
                skills: ['Large Language Models (LLMs)', 'RAG Pipelines', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Vector Databases']
            },
            {
                title: 'MLOPS & DEPLOYMENT',
                icon: Settings,
                skills: ['ML Pipelines', 'Model Versioning', 'CI/CD for ML', 'Docker', 'DVC', 'MLflow', 'GitHub Actions']
            },
            {
                title: 'PROGRAMMING & TOOLS',
                icon: Terminal,
                skills: ['Python', 'SQL', 'Git & GitHub', 'Clean Code', 'Pandas', 'NumPy']
            },
            {
                title: 'DATABASES',
                icon: Database,
                skills: ['MongoDB', 'Microsoft SQL Server (SSMS) – T-SQL', 'Data Ingestion', 'ETL Pipelines', 'Schema Design']
            },
            {
                title: 'PROFESSIONAL SKILLS',
                icon: Users,
                skills: ['Problem Solving', 'Technical Communication', 'Stakeholder Collaboration', 'Teamwork', 'Project Management']
            }
        ],
        marquee: ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'LangChain', 'LLMs', 'RAG', 'LangGraph', 'Docker', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Scikit-learn', 'Git', 'MLflow', 'DVC']
    },

    experience: [
        {
            type: 'Internship',
            title: 'AI Intern',
            company: 'CESAI (Center of Excellence for Simulators and AI) - CEME NUST, Rawalpindi',
            period: 'July 2026 - Present',
            description: `• Working on AI development and intelligent system simulation at CESAI.
                            • Applied machine learning algorithms and computer vision techniques for simulation frameworks.`,
            tags: ['Artificial Intelligence', 'Simulators', 'Machine Learning', 'Computer Vision']
        },
        {
            type: 'Speaking',
            title: 'Guest Speaker - Vyrothon Journey & AI Development',
            company: 'GDG On Campus - COMSATS Abbottabad',
            period: '2026',
            description: `• Invited to speak about the journey of winning Vyrothon 2026 and building AI solutions under pressure.
                            • Shared technical insights on voice-agent development and effective team collaboration.
                            • Focused on bridging the gap between hackathon concepts and real-world AI applications.`,
            tags: ['Public Speaking', 'AI Development', 'Community Engagement', 'Career Journey']
        },
        {
            type: 'Achievement',
            title: '1st Place Winner - Vyrothon 2026',
            company: 'NUST | Vyro AI',
            period: '2026',
            description: `• Secured 1st position among 580+ applicants in an intensive multi-stage national hackathon.
                            • Built an AI voice agent for real-estate that qualifies leads and books appointments in real-time.
                            • Developed the core AI understanding and response logic, reducing business response time to zero.`,
            tags: ['AI Voice Agent', 'LLMs', 'Hackathon', 'Real Estate AI', 'Teamwork']
        },
        {
            type: 'EDU',
            title: 'BS Artificial Intelligence',
            company: 'National University of Modern Languages,Islamabad ',
            period: '2022 - 2026',
            description: 'Bachelor’s in Artificial Intelligence with a strong focus on machine learning and applied AI systems.',
            tags: ['Artificial Intelligence', 'Machine Learning', 'Applied AI']
        }
    ],

    projects: [
        {
            title: 'TabChest',
            category: 'Browser Extension / Indie Product',
            description: 'A local-first browser extension to save, organize, and restore tab workspaces. Supports cross-window capture, pinned-tab restore, workspace rename/delete with undo, JSON export/import, Light/Dark/System themes, and a Pro licensing flow with launch-offer support.',
            tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Chrome Extension MV3'],
            githubUrl: '',
            status: 'Shipped v1',
            privacyUrl: '/tabchest/privacy.html',
            highlights: [
                'Save named workspaces from any tab selection — not just whole windows',
                'Export to JSON and re-import with merge behavior (same-name updates, new names added)',
                'Local-first storage — no tab data sent to any server',
                'Pro licensing with buy / activate / deactivate and launch-offer support'
            ],
            icon: Package
        },

        {
            title: "Diffusion-Based Virtual Try-On Pipeline(Final Year Project)",
            category: "Deep Learning Project",
            description: "Built an end-to-end AI pipeline for virtual garment fitting using diffusion models, agnostic human parsing, tensor preprocessing, and chatbot-assisted interaction. Designed backend integration with Firebase for authentication and data handling.",
            tags: ["Diffusers", "PyTorch", "Image Processing", "Human Parsing", "MLOps", "Firebase"],
            githubUrl: "https://github.com/M-Wajeeh/Final-Year-Project",
            icon: Shirt
        },

        {
            title: 'Vehicle Insurance MLOps Pipeline',
            category: 'MLOps / Machine Learning Deployment',
            description: 'A production-grade end-to-end MLOps pipeline that demonstrates how machine learning systems are designed, deployed, and maintained in real-world environments. The project covers the full lifecycle, from cloud-based data ingestion and validation to automated model deployment using Docker and CI/CD workflows. This project emphasizes modular architecture, reproducibility, and production-ready ML engineering practices.',
            tags: ['MLOps', 'Machine Learning Deployment', 'Docker', 'CI/CD', 'Data Ingestion', 'Data Validation', 'Model Deployment', 'Modular Architecture', 'Reproducibility', 'Production-Ready ML Engineering Practices'],
            githubUrl: "https://github.com/M-Wajeeh/mlops-vehicle-insurance-pipeline",
            icon: Layers
        },
        {
            title: 'end-to-end-purchase-prediction-ml',
            category: 'Machine Learning/MLOps',
            description: 'Production-style ML pipeline for online purchase prediction with modular components (ingestion → transformation → training), XGBoost modeling, config-driven architecture, structured logging, and DVC-based reproducibility.',
            tags: [
                'Machine Learning',
                'MLOps',
                'XGBoost',
                'DVC',
                'Data Pipeline',
                'Model Training',
                'Reproducible ML'
            ],
            githubUrl: "https://github.com/M-Wajeeh/end-to-end-purchase-prediction-ml",
            icon: Brain
        },
        {
            title: 'end-to-end-telco-churn-ml',
            category: 'Machine Learning/Machine Learning Operations',
            description: 'End-to-end MLOps project for predicting telecom customer churn using Docker, GitHub Actions, with MLflow tracking and a web UI for real-time inference.',
            tags: ['Machine Learning', 'Machine Learning Operations', 'Docker', 'GitHub Actions', 'MLflow', 'Web UI', 'Real-time Inference'],
            githubUrl: "https://github.com/M-Wajeeh/end-to-end-telco-churn-ml",
            icon: Layers
        },
        {
            title: 'ResearchMind — Multi-Agent AI Research System',
            category: 'GenAI / Multi-Agent AI Systems',
            description: 'A fully autonomous multi-agent AI pipeline built with LangChain, LangGraph, and Streamlit. Given a topic, 6 specialized AI agents (Search, Reader, Writer, Critic, Verification, Revision) collaborate to search the web, scrape sources, draft, score, fact-check, and produce a polished research report with live pipeline UI tracking.',
            tags: ['GenAI', 'Multi-Agent Systems', 'LangChain', 'LangGraph', 'Streamlit', 'OpenAI', 'Tavily', 'Python'],
            githubUrl: 'https://github.com/M-Wajeeh/ResearchMind',
            icon: Sparkles,
            highlights: [
                'Autonomous 6-agent pipeline: search → scrape → write → critique → verify → revise',
                'Smart web scraping with bot-detection bypass, noise filtering, and sentence boundary truncation',
                'Fact-checking verification chain that cross-references claims against raw scraped evidence',
                'Live Streamlit UI with real-time step status animation and one-click Markdown export'
            ]
        },
        {
            title: 'RAG Insight Engine',
            category: 'GenAI / Retrieval-Augmented Generation',
            description: 'Modular RAG system for grounded document Q&A. Features pluggable loaders, recursive chunking, HuggingFace embeddings, a persistent Chroma vector store, and a citation-aware Groq LLM generator. Includes a Streamlit UI and an evaluation harness for measuring retrieval accuracy.',
            tags: ['GenAI', 'RAG', 'LangChain', 'ChromaDB', 'HuggingFace', 'Groq', 'Streamlit', 'Python', 'Evaluation Harness'],
            githubUrl: "https://github.com/M-Wajeeh/RAG-Insight-Engine",
            icon: Search
        }

    ]
};
