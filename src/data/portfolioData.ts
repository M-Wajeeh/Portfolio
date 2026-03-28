import {
    Zap,
    BarChart3,
    Database,
    Brain,
    Award,
    TrendingUp,
    PieChart,
    Settings,
    Users,
    Terminal,
    Shirt,
    Layers,
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
        roles: ["Data Analyst", "MLOps Engineer", "ML Engineer"],
        email: (import.meta as any).env.VITE_USER_EMAIL || "contact@example.com",
        github: (import.meta as any).env.VITE_USER_GITHUB || "https://github.com/",
        linkedin: (import.meta as any).env.VITE_USER_LINKEDIN || "https://linkedin.com/in/",
        // Backward-compatible single resume URL (defaults to the primary resume)
        resumeUrl: (import.meta as any).env.VITE_USER_RESUME_URL || (import.meta as any).env.VITE_USER_RESUME_PRIMARY_URL || "/AI-ML.pdf",
        resumePrimaryLabel: (import.meta as any).env.VITE_USER_RESUME_PRIMARY_LABEL || "AI/ML",
        resumePrimaryUrl: (import.meta as any).env.VITE_USER_RESUME_PRIMARY_URL || "/AI-ML.pdf",
        resumeSecondaryLabel: (import.meta as any).env.VITE_USER_RESUME_SECONDARY_LABEL || "Data Analytics",
        resumeSecondaryUrl: (import.meta as any).env.VITE_USER_RESUME_SECONDARY_URL || "/DataAnalytics-Wajeeh.pdf",
        twitter: "",
        status: "ACCEPTING PROJECTS",
        tagline: "Engineering intelligent systems that solve real-world problems",
        subTagline: "AI Graduate with strong foundations in Data Analytics, Machine Learning, and MLOps.",
        bio: "I’m a dedicated AI graduate focused on building machine learning systems that move beyond experiments into production. With a strong foundation in data analysis and ML engineering, I specialize in turning complex datasets into deployable, real-world applications using Python, SQL, Docker, and AWS. I am passionate about engineering systems that are not just intelligent, but reliable and scalable."
    },

    stats: [
        { icon: Award, value: '20+', label: 'COMPLETED PROJECTS', color: 'var(--color-primary)' },
        { icon: TrendingUp, value: '2+', label: 'YEARS OF HANDS-ON EXPERIENCE', color: 'var(--color-accent-cyan)' },
        { icon: Zap, value: '98%', label: 'ACCURACY RATE', color: 'var(--color-accent-magenta)' }
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
                title: 'MLOPS & DEPLOYMENT',
                icon: Settings,
                skills: ['ML Pipelines', 'Model Versioning', 'CI/CD for ML', 'Docker', 'DVC', 'MLflow', 'GitHub Actions', 'FastAPI', 'AWS (EC2/S3)']
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
        marquee: ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Docker', 'AWS', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Scikit-learn', 'FastAPI', 'Git', 'MLflow', 'DVC']
    },

    experience: [
        {
            type: 'Internship',
            title: 'Data Science Intern',
            company: 'Elevvo pathways',
            period: 'July 2025 - Aug 2025',
            description: `• Data preprocessing & EDA
                            • Classification & regression modeling
                            • Statistical analysis & visualization`,
            tags: ['Python', 'EDA', 'Classification', 'Regression', 'Statistical Analysis', 'Visualization']
        },
        {
            type: 'Job simulation',
            title: 'Data Analytics',
            company: 'Deloitte',
            period: 'september 2025 - october 2025',
            description: `  • Cleaned and analyzed raw business datasets using Excel to ensure data accuracy and consistency.
                            • Built an interactive Tableau dashboard to highlight key trends and KPIs for decision-making.
                            • Presented insights in a clear, business-focused manner for non-technical stakeholders.`,
            tags: ['Excel', 'Tableau', 'Data Analysis', 'Data cleaning', 'Business Insights']
        },
        {
            type: 'EDU',
            title: 'BS Artificial Intelligence',
            company: 'National University of Modern Languages,Islamabad ',
            period: '2022 — 2026',
            description: 'Bachelor’s in Artificial Intelligence with a strong focus on data analysis, machine learning, and applied AI systems.',
            tags: ['Artificial Intelligence', 'Data Analysis', 'Machine Learning', 'Applied AI']
        }
    ],

    projects: [
        {
            title: "Diffusion-Based Virtual Try-On Pipeline(Final Year Project)",
            category: "Deep Learning Project",
            description: "Built an end-to-end AI pipeline for virtual garment fitting using diffusion models, agnostic human parsing, tensor preprocessing, and chatbot-assisted interaction. Designed backend integration with Firebase for authentication and data handling.",
            tags: ["Diffusers", "PyTorch", "Image Processing", "Human Parsing", "MLOps", "FastAPI", "Firebase"],
            githubUrl: "https://github.com/M-Wajeeh/Final-Year-Project",
            icon: Shirt
        },

        {
            title: 'Vehicle Insurance MLOps Pipeline',
            category: 'MLOps / Machine Learning Deployment',
            description: 'A production-grade end-to-end MLOps pipeline that demonstrates how machine learning systems are designed, deployed, and maintained in real-world environments. The project covers the full lifecycle — from cloud-based data ingestion and validation to automated model deployment using Docker, AWS, and CI/CD workflows.This project emphasizes modular architecture, reproducibility, and production-ready ML engineering practices.',
            tags: ['MLOps', 'Machine Learning Deployment', 'Docker', 'AWS', 'CI/CD', 'Data Ingestion', 'Data Validation', 'Model Deployment', 'Modular Architecture', 'Reproducibility', 'Production-Ready ML Engineering Practices'],
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
            githubUrl: "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME",
            icon: Brain
        },
        {
            title: 'Customer Analytics & KPI Reporting using SQL',
            category: 'Analytics Engineering / SQL Data Modeling',
            description: 'An advanced SQL analytics project that builds a customer-level reporting view by consolidating raw transactional data into meaningful KPIs and segments. The project uses SQL views, CTEs, and window functions to create an analytics-ready dataset that can be directly consumed by BI tools such as Power BI or Tableau for business decision-making.',
            tags: ['SQL', 'Power BI', 'Tableau', 'CTEs', 'Window Functions'],
            githubUrl: "https://github.com/M-Wajeeh/sql-customer-analytics",
            icon: Database
        },
        {
            title: 'Asia Cup Cricket Analytics Dashboard (Power BI)',
            category: 'Data Analysis / Business Intelligence',
            description: 'An interactive Power BI dashboard that analyzes historical Asia Cup cricket data, providing insights into team performance, player contributions, and tournament trends. The report features synced slicers across pages, dynamic visuals, and KPI summaries to enable intuitive data exploration and decision-making.',
            tags: ['Power BI', 'Data Analysis', 'Business Intelligence', 'Interactive Visualizations', 'Drill-down Capabilities', 'Drill-through Functionality'],
            githubUrl: "https://github.com/M-Wajeeh/asia-cup-powerbi-report",
            icon: BarChart3
        },
        {
            title: 'end-to-end-telco-churn-ml',
            category: 'Machine Learning/Machine Learning Operations',
            description: 'End-to-end MLOps project for predicting telecom customer churn using FastAPI, Docker, github actions, with MLflow tracking and a web UI for real-time inference.',
            tags: ['Machine Learning', 'Machine Learning Operations', 'FastAPI', 'Docker', 'GitHub Actions', 'MLflow', 'Web UI', 'Real-time Inference'],
            githubUrl: "https://github.com/M-Wajeeh/end-to-end-telco-churn-ml",
            icon: Layers
        }

    ]
};
