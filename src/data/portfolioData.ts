export interface PersonalInfo {
    name: string;
    shortName: string;
    role: string;
    email: string;
    github: string;
    linkedin: string;
    resumePrimaryLabel: string;
    resumePrimaryUrl: string;
    resumeSecondaryLabel: string;
    resumeSecondaryUrl: string;
    status: string;
    intro: string;
    bio: string[];
}

export interface Fact {
    label: string;
    value: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Experience {
    id: string;
    type: string;
    title: string;
    company: string;
    period: string;
    points: string[];
    tags: string[];
    featured?: boolean;
}

export interface Project {
    title: string;
    category: string;
    summary: string;
    /** Ordered stages of the system, drawn as a hand sketch */
    pipeline: string[];
    /** Optional: stage index the last stage loops back to, drawn as a feedback arrow */
    loopTo?: number;
    /** Short handwritten margin note */
    note: string;
    tags: string[];
    githubUrl: string;
    /** Optional: short status badge, e.g. "Shipped v1" */
    status?: string;
    /** Optional: store / live URL (shown instead of GitHub when present) */
    storeUrl?: string;
    /** Optional: direct buy / checkout URL */
    buyUrl?: string;
    /** Optional: label for buy CTA */
    buyLabel?: string;
    /** Optional: 2 to 4 short highlights */
    highlights?: string[];
    /** Optional: link to a privacy policy or legal page */
    privacyUrl?: string;
    /** Optional: custom logo image URL (e.g. extension icon) */
    logoImg?: string;
    /** Optional: creator role summary */
    role?: string;
    /** Optional: several repos under one entry */
    repos?: { label: string; url: string }[];
    /** Optional: screenshots, taped into the entry */
    shots?: Shot[];
    /** Optional: the project's own page, at /extensions/<slug>/ */
    page?: ProjectPage;
}

export interface Shot {
    src: string;
    alt: string;
    /** Optional: pixel size, when it isn't the usual 960 x 600 */
    width?: number;
    height?: number;
}

/** A full notebook entry on its own page */
export interface ProjectPage {
    slug: string;
    /** Walkthrough, one screenshot per step */
    steps: { title: string; text: string; shot?: Shot; note?: string }[];
    /** Browser permissions, each with why it's needed */
    permissions?: { name: string; why: string }[];
    /** Privacy in a sentence or two; the full policy lives at privacyUrl */
    privacy: string;
    /** Optional: a red rubber stamp beside the privacy note, top line / big word / bottom line */
    stamp?: [string, string, string];
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    facts: Fact[];
    skills: SkillCategory[];
    experience: Experience[];
    aiProjects: Project[];
    extensionProjects: Project[];
}

const env = (import.meta as any).env;

export const portfolioData: PortfolioData = {
    personalInfo: {
        name: env.VITE_USER_NAME || "M. Wajeeh",
        shortName: "M. Wajeeh",
        role: "AI Engineer",
        email: env.VITE_USER_EMAIL || "contact@example.com",
        github: env.VITE_USER_GITHUB || "https://github.com/",
        linkedin: env.VITE_USER_LINKEDIN || "https://linkedin.com/in/",
        resumePrimaryLabel: env.VITE_USER_RESUME_PRIMARY_LABEL || "AI / ML",
        resumePrimaryUrl: env.VITE_USER_RESUME_PRIMARY_URL || "/AI_Engineer_Wajeeh.pdf",
        resumeSecondaryLabel: env.VITE_USER_RESUME_SECONDARY_LABEL || "Data Analytics",
        resumeSecondaryUrl: env.VITE_USER_RESUME_SECONDARY_URL || "/DataAnalytics-Wajeeh.pdf",
        status: "Open to AI / ML roles",
        intro: "AI engineer who builds end to end. I turn raw data into reproducible MLOps pipelines, design grounded LLM and RAG systems with LangGraph, and ship local-first Chrome extensions on the side.",
        bio: [
            "I'm an AI graduate who builds machine learning systems that actually make it to production.",
            "My work spans two sides of the field. On one side, end-to-end ML pipelines: ingestion, validation, training, tracking and deployment with Docker, DVC, MLflow and GitHub Actions. On the other, LLM applications: multi-agent systems, retrieval pipelines and speech-to-text tooling.",
            "I care about systems that aren't just smart, but reliable and ready for the real world."
        ]
    },

    facts: [
        { label: "Interned", value: "AI Intern, CESAI, CEME NUST, 2026" },
        { label: "Record", value: "1st of 580+, Vyrothon 2026" },
        { label: "Degree", value: "BS Artificial Intelligence, NUML, 2026" },
        { label: "Focus", value: "MLOps, LLM agents, RAG" }
    ],

    skills: [
        { title: 'Generative AI', skills: ['LLMs', 'RAG pipelines', 'LangChain', 'LangGraph', 'Prompt engineering', 'Vector databases'] },
        { title: 'Machine learning', skills: ['Deep learning', 'CNN / RNN / LSTM', 'NLP', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
        { title: 'MLOps', skills: ['ML pipelines', 'Model versioning', 'CI/CD for ML', 'Docker', 'DVC', 'MLflow', 'GitHub Actions'] },
        { title: 'Data analysis', skills: ['Cleaning & preprocessing', 'EDA', 'Feature engineering', 'Statistical analysis', 'Reporting'] },
        { title: 'Visualization', skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'] },
        { title: 'Languages & tools', skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Git & GitHub'] },
        { title: 'Databases', skills: ['MongoDB', 'SQL Server (T-SQL)', 'ETL pipelines', 'Schema design'] },
    ],

    experience: [
        {
            id: 'cesai',
            type: 'Internship',
            title: 'AI Intern',
            company: 'CESAI (Center of Excellence for Simulators and AI), CEME NUST, Rawalpindi',
            period: 'Jul to Sep 2026',
            points: [
                'AI development and intelligent system simulation.',
                'Applied machine learning and computer vision techniques to simulation frameworks.'
            ],
            tags: ['Machine Learning', 'Computer Vision', 'Simulators']
        },
        {
            id: 'vyrothon',
            type: 'Win',
            title: '1st place, Vyrothon 2026',
            company: 'NUST × Vyro AI',
            period: '2026',
            points: [
                'Won a multi-stage national hackathon against 580+ applicants.',
                'Built an AI voice agent for real estate that qualifies leads and books appointments in real time.',
                'Owned the core language understanding and response logic, bringing business response time to zero.'
            ],
            tags: ['Voice Agent', 'LLMs', 'Real-time'],
            featured: true
        },
        {
            id: 'gdg-talk',
            type: 'Talk',
            title: 'Guest speaker: the Vyrothon build',
            company: 'GDG On Campus, COMSATS Abbottabad',
            period: '2026',
            points: [
                'Spoke on building AI under hackathon pressure, voice-agent development and team collaboration.',
                'Focused on turning hackathon prototypes into real-world AI applications.'
            ],
            tags: ['Public Speaking', 'Community']
        },
        {
            id: 'siberkoza',
            type: 'Internship',
            title: 'AI/ML Engineer Intern',
            company: 'SiberKoza Alpha (NASTP)',
            period: 'Jul to Sep 2025',
            points: [
                'Developed end-to-end ML pipelines on 80K+ records, reaching 88% accuracy.',
                'Covered ingestion, feature engineering, training, evaluation and deployment with Docker, MLflow and DVC.'
            ],
            tags: ['ML Pipelines', 'MLOps', 'Docker']
        },
        {
            id: 'degree',
            type: 'Education',
            title: 'BS Artificial Intelligence',
            company: 'National University of Modern Languages, Islamabad',
            period: '2022 to 2026',
            points: ['Focus on machine learning and applied AI systems.'],
            tags: ['Machine Learning', 'Applied AI']
        }
    ],

    aiProjects: [
        {
            title: 'ResearchMind',
            note: '6 agents, every claim fact-checked',
            loopTo: 2,
            category: 'Multi-agent system',
            summary: 'Give it a topic; six agents search the web, read sources, draft, critique, fact-check and revise into a finished research report.',
            pipeline: ['Search', 'Read', 'Write', 'Critique', 'Verify', 'Revise'],
            tags: ['LangGraph', 'LangChain', 'OpenAI', 'Tavily', 'Streamlit', 'Python'],
            githubUrl: 'https://github.com/M-Wajeeh/ResearchMind',
            highlights: [
                'Verification chain cross-checks every claim against the raw scraped evidence.',
                'Scraper handles bot detection, filters noise and truncates on sentence boundaries.',
                'Live Streamlit UI tracks each agent step; reports export to Markdown in one click.'
            ]
        },
        {
            title: 'Video Agent',
            note: 'handles Urdu + Hinglish too',
            category: 'Multilingual video intelligence',
            summary: 'Turns a YouTube link or meeting recording into a transcript, summary, action items and a chat assistant that answers from the video.',
            pipeline: ['YouTube / file', 'FFmpeg 16 kHz', 'Whisper STT', 'Map-reduce summary', 'RAG chat'],
            tags: ['LangChain LCEL', 'OpenAI Whisper', 'GPT-4o-mini', 'ChromaDB', 'FFmpeg', 'yt-dlp'],
            githubUrl: 'https://github.com/M-Wajeeh/meetingmind',
            highlights: [
                'Transcribes English, Urdu (with a Perso-Arabic script guard) and Hinglish.',
                'Routes speech-to-text across Whisper API, ElevenLabs Scribe, Sarvam AI and local Whisper.',
                'Extracts action items, key decisions and open questions; vector store resets per video to stop context bleed.'
            ]
        },
        {
            title: 'Virtual Try-On',
            note: 'final year project',
            category: 'Diffusion pipeline · Final year project',
            summary: 'End-to-end virtual garment fitting with diffusion models, agnostic human parsing and a chatbot-assisted flow, backed by Firebase.',
            pipeline: ['Person + garment', 'Human parsing', 'Agnostic mask', 'Tensor prep', 'Diffusion', 'Try-on result'],
            tags: ['Diffusers', 'PyTorch', 'Image Processing', 'Firebase'],
            githubUrl: 'https://github.com/M-Wajeeh/Final-Year-Project'
        },
        {
            title: 'RAG Insight Engine',
            note: 'answers come with citations',
            category: 'Retrieval-augmented generation',
            summary: 'Grounded document Q&A with citations, plus an evaluation harness that measures retrieval accuracy.',
            pipeline: ['Load', 'Chunk', 'Embed', 'Chroma store', 'Retrieve', 'Cited answer'],
            tags: ['LangChain', 'ChromaDB', 'HuggingFace', 'Groq', 'Streamlit'],
            githubUrl: 'https://github.com/M-Wajeeh/RAG-Insight-Engine'
        },
        {
            title: 'Production ML pipelines ×3',
            note: 'same discipline, three domains',
            category: 'MLOps · Vehicle insurance, telco churn, purchase prediction',
            summary: 'Three end-to-end pipelines built the way production models are: modular stages, tracked experiments, reproducible runs and automated deployment.',
            pipeline: ['Ingest', 'Validate', 'Transform', 'Train', 'Track', 'Deploy'],
            tags: ['Docker', 'GitHub Actions', 'CI/CD', 'MLflow', 'DVC', 'XGBoost', 'Data Validation'],
            githubUrl: '',
            highlights: [
                'Vehicle insurance: cloud ingestion and validation through to automated deployment with Docker and CI/CD.',
                'Telco churn: MLflow experiment tracking and a web UI for real-time inference.',
                'Purchase prediction: config-driven XGBoost pipeline with structured logging and DVC-reproducible runs.'
            ],
            repos: [
                { label: 'vehicle insurance', url: 'https://github.com/M-Wajeeh/mlops-vehicle-insurance-pipeline' },
                { label: 'telco churn', url: 'https://github.com/M-Wajeeh/end-to-end-telco-churn-ml' },
                { label: 'purchase prediction', url: 'https://github.com/M-Wajeeh/end-to-end-purchase-prediction-ml' }
            ]
        }
    ],

    extensionProjects: [
        {
            title: 'TabChest',
            note: 'shipped v1.0.2',
            category: 'Browser extension · Indie product',
            summary: 'Save, organize and restore tab workspaces. Local-first, with JSON export/import and a Polar licensing flow.',
            pipeline: ['Select tabs', 'Save workspace', 'IndexedDB', 'Restore / export'],
            tags: ['TypeScript', 'React', 'Vite', 'Tailwind', 'IndexedDB', 'Manifest V3', 'Polar'],
            githubUrl: '',
            status: 'Shipped v1.0.2',
            storeUrl: 'https://chromewebstore.google.com/detail/tabchest/hgggkkijegbpooajfcopaclabingkfgk',
            buyUrl: '/tabchest/buy',
            buyLabel: 'Get Pro · $9.99',
            privacyUrl: '/extensions/tabchest/privacy-policy/',
            role: 'Solo: architecture, development, licensing',
            shots: [
                { src: '/tabchest/shots/workspaces.webp', alt: 'TabChest popup showing saved tab workspaces ready to restore in one click' },
                { src: '/tabchest/shots/save.webp', alt: 'TabChest selector allowing you to choose and save tabs across windows' }
            ],
            highlights: [
                'Free allows up to 3 workspaces (15 tabs each) with instant search across windows.',
                'Pro ($9.99 one-time) unlocks unlimited workspaces, up to 500 tabs per workspace, multi-window capture, and JSON backup export/import.',
                'IndexedDB local-first storage; optional weekly backup reminders so tabs never get lost.'
            ],
            page: {
                slug: 'tabchest',
                steps: [
                    {
                        title: 'Pick the tabs to keep',
                        text: 'Save this window, every window, or hand-pick tabs one by one, pinned tabs included. Free allows up to 3 workspaces with 15 tabs each. Pro ($9.99 one-time) unlocks unlimited workspaces, up to 500 tabs per workspace, and multi-window capture.',
                        shot: { src: '/tabchest/shots/step-save.webp', width: 519, height: 560, alt: 'TabChest popup with a workspace being named and five tabs checked to save' },
                        note: 'up to 15 tabs on Free'
                    },
                    {
                        title: 'Close them. Get them back in a click',
                        text: 'Every set becomes a named workspace you can search instantly. Restoring brings the whole project back across windows, exactly as you left it.',
                        shot: { src: '/tabchest/shots/step-restore.webp', width: 519, height: 560, alt: 'TabChest popup listing saved workspaces with their tab counts, windows and when they were saved' },
                        note: '3 workspaces free'
                    },
                    {
                        title: 'Keep a backup',
                        text: 'Export your workspaces to JSON and keep an offline copy (Pro). Importing merges by name, rename and delete come with undo, and optional weekly backup reminders keep you covered.',
                        note: 'JSON backup in Pro'
                    }
                ],
                permissions: [
                    { name: 'tabs', why: 'Reads the URL, title, favicon and pinned state of the tabs you save, so a workspace can be restored.' },
                    { name: 'storage', why: 'Keeps your workspaces and settings on your device, in IndexedDB and extension storage.' },
                    { name: 'alarms', why: 'Runs optional weekly backup reminders in Pro and periodic maintenance tasks locally.' },
                    { name: 'notifications', why: 'Alerts you when automated weekly backup reminders trigger.' },
                    { name: 'favicon', why: 'Loads high-resolution site icons for quick visual recognition in saved workspaces.' },
                    { name: 'contextMenus', why: 'Adds right-click options to save active tabs or windows directly to a workspace.' },
                    { name: 'https://api.polar.sh/*', why: 'Only if you activate Pro: verifies your TABCHEST-XXXX license key and anonymous device ID with Polar (3-device limit). No tab URLs, titles or workspace content are sent.' }
                ],
                privacy: 'Your workspaces stay on your device; TabChest has no backend holding your tabs or history. The one optional exception: activating Pro sends your TABCHEST-XXXX license key and an anonymous device ID to Polar (api.polar.sh, 3-device limit) to validate it. Uninstalling removes all local data.',
                stamp: ['your tabs', 'stay', 'local']
            }
        },
        {
            title: 'Smart Reader',
            note: 'the tl;dr never leaves your laptop',
            category: 'Chrome extension · On-device AI reading',
            summary: 'Turns articles, AI chats, and docs into a clean reading view with on-device AI summaries, color highlights, and 1-click Markdown export. Zero page content leaves your browser.',
            pipeline: ['Open page', 'Multi-section extract', 'Clean reader', 'On-device AI', 'Highlight & export'],
            tags: ['JavaScript', 'Manifest V3', 'Chrome Gemini Nano', 'Mozilla Readability', 'Shadow DOM', 'Polar'],
            githubUrl: '',
            status: 'v0.3.0',
            buyUrl: '/smart-reader/buy',
            buyLabel: 'Get Pro · $9.99',
            privacyUrl: '/extensions/smart-reader/privacy-policy/',
            role: 'Solo: idea, design, development, licensing',
            shots: [
                { src: '/smart-reader/shots/before-after.webp', alt: 'A cluttered news page before, and the same article after in Smart Reader with a TL;DR and key points' },
                { src: '/smart-reader/shots/library.webp', alt: 'Smart Reader library listing saved articles with their highlights, search and Markdown export' }
            ],
            highlights: [
                'Whole-page multi-section extraction for news articles, Gemini AI chats, GitHub READMEs, and Chrome Web Store pages with responsive A+/A- font scaling.',
                'On-device summaries via Chrome Gemini Nano and local extractive ranking: TL;DR and Key Points free; AI Action Items and Key Quotes lenses in Pro.',
                'Persistent highlights (Yellow free; Green, Blue, Coral in Pro) and 1-click YAML frontmatter Markdown export for Obsidian and Notion (vault export in Pro).'
            ],
            page: {
                slug: 'smart-reader',
                steps: [
                    {
                        title: 'One click, and the clutter is gone',
                        text: 'Click the icon, use the shortcut, or pick it from the right-click menu. Any page opens in a calm reading view. Handles multi-section articles, Gemini AI chats, GitHub READMEs, and Chrome Web Store pages with responsive A+/A- font scaling.',
                        shot: { src: '/smart-reader/shots/step-clean.webp', width: 960, height: 456, alt: 'A cluttered news page with ads and a cookie banner, next to the same article in Smart Reader' }
                    },
                    {
                        title: 'Know what it says before you read it',
                        text: 'A TL;DR and key points sit at the top of every article, made on your device by Chrome\'s built-in AI (Gemini Nano) or a balanced extractive algorithm (both free). Pro unlocks AI Action Items and Key Quotes lenses.',
                        shot: { src: '/smart-reader/shots/step-tldr.webp', width: 960, height: 514, alt: 'Smart Reader showing a TL;DR and five key points above an article' },
                        note: 'Gemini Nano on device'
                    },
                    {
                        title: 'Highlight what matters',
                        text: 'Select any text to keep it. Yellow highlighter is free, while Pro unlocks Green, Blue, and Coral for color-coded research. Highlights re-anchor by text and position when you return.',
                        shot: { src: '/smart-reader/shots/step-highlight.webp', width: 960, height: 514, alt: 'An article in Smart Reader on a sepia page with one sentence highlighted in yellow' },
                        note: 'color-coded in Pro'
                    },
                    {
                        title: 'Everything you saved, in one place',
                        text: 'Search titles, summaries, and highlights in your reading library (3 saved articles free, unlimited in Pro). Export clean Markdown with YAML frontmatter for Obsidian and Notion, with full vault export in Pro.',
                        shot: { src: '/smart-reader/shots/step-library.webp', width: 960, height: 514, alt: 'My Reading Library: saved articles with their highlights, a search box and Export Markdown' },
                        note: 'Obsidian & Notion ready'
                    },
                    {
                        title: 'Easy on the eyes, day or night',
                        text: 'Light, sepia, and dark themes, with adjustable font size controls (A+/A-) that remember your preferences across sessions.',
                        shot: { src: '/smart-reader/shots/step-dark.webp', width: 960, height: 514, alt: 'Smart Reader in its dark theme, with key points and a highlighted sentence' },
                        note: 'sepia, light & dark'
                    }
                ],
                permissions: [
                    { name: 'activeTab', why: 'Reads page content only when you deliberately click the extension, use a shortcut, or choose it from the right-click menu.' },
                    { name: 'storage', why: 'Keeps your saved articles, highlights, and reader settings on your device in local extension storage.' },
                    { name: 'contextMenus', why: 'Adds a right-click menu item to open any article or link directly in reader view.' },
                    { name: 'https://api.polar.sh/*', why: 'Only if you activate Pro: verifies your SMARTREADER-XXXX license key and anonymous device ID with Polar (3-device limit). Page text, URLs and summaries are never uploaded.' }
                ],
                privacy: 'Summaries are made on your device, and page content is never sent to a server. Saved articles and highlights stay in your browser, with no analytics or ads. The one optional exception: activating Pro sends your SMARTREADER-XXXX license key to Polar (api.polar.sh, 3-device limit) to confirm it is valid.',
                stamp: ['made on', 'your', 'device']
            }
        }
    ],
};
