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
        intro: "AI graduate working across ML engineering and generative AI: reproducible pipelines with Docker and CI/CD, and LLM applications built on LangChain, LangGraph and RAG.",
        bio: [
            "I'm an AI graduate who builds machine learning systems that actually make it to production.",
            "My work spans two sides of the field. On one side, end-to-end ML pipelines: ingestion, validation, training, tracking and deployment with Docker, DVC, MLflow and GitHub Actions. On the other, LLM applications: multi-agent systems, retrieval pipelines and speech-to-text tooling.",
            "I care about systems that aren't just smart, but reliable and ready for the real world."
        ]
    },

    facts: [
        { label: "Now", value: "AI Intern, CESAI, CEME NUST" },
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
            period: 'Jul 2026 to now',
            points: [
                'AI development and intelligent system simulation.',
                'Applying machine learning and computer vision techniques to simulation frameworks.'
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
            title: 'Swatcat',
            note: 'yes, the cat closes your tab',
            category: 'Chrome extension · Digital wellbeing',
            summary: 'A cat that guards your social media time. It makes you pause, warns you, and swats the tab closed when your daily limit runs out. Zero network requests.',
            pipeline: ['Open a feed', '5-second pause', 'Shared daily limit', 'Cat warns', 'Swat closes tab'],
            tags: ['JavaScript', 'Manifest V3', 'declarativeNetRequest', 'Shadow DOM', 'E2E tests', 'MIT'],
            githubUrl: '',
            status: 'Shipped v1',
            storeUrl: 'https://chromewebstore.google.com/detail/swatcat/fbkfchmfhdcgfgcmcplkggkbdjhohele',
            privacyUrl: '/swatcat/privacy.html',
            logoImg: '/swatcat/icon-128.png',
            shots: [
                { src: '/swatcat/shots/pause.webp', alt: 'Swatcat asking "Still want to go in?" with a five-second countdown before a social site opens' },
                { src: '/swatcat/shots/swat.webp', alt: `Swatcat's "Time's up for today" screen after the daily limit closes the tab` }
            ],
            role: 'Solo: idea, design, development',
            highlights: [
                'Animated SVG cat lives in a closed Shadow DOM, so it never breaks host pages.',
                'One limit shared across sites via declarativeNetRequest; no browsing traffic is inspected.'
            ],
            page: {
                slug: 'swatcat',
                steps: [
                    {
                        title: 'Pick your cat and give it a name',
                        text: 'Six cats to choose from: ginger tabby, grey tabby, tuxedo, calico, Siamese and snow white. Every one naps, grooms, sulks and swats.',
                        shot: { src: '/swatcat/shots/step-pick.webp', width: 960, height: 458, alt: 'Swatcat setup: six cats to pick from and a field to name yours' }
                    },
                    {
                        title: 'It wanders your pages',
                        text: 'The cat lives on the sites you chose to limit, and gets more insistent as your daily limit runs out.',
                        shot: { src: '/swatcat/shots/step-wander.webp', width: 960, height: 496, alt: 'A ginger cat napping on a social feed with a speech bubble saying "it\'s been a while..."' }
                    },
                    {
                        title: 'It asks before you go in',
                        text: 'A five-second pause before a social site opens, with how much of today\'s limit you have used. Often, that\'s enough.',
                        shot: { src: '/swatcat/shots/step-pause.webp', width: 960, height: 496, alt: 'Swatcat asking "Still want to go in?" with a five-second countdown before a social site opens' },
                        note: '5 seconds'
                    },
                    {
                        title: 'Your day and your week at a glance',
                        text: 'The popup shows time left today, a 7-day chart of good days and your streak. You can pause tracking: it stops the clock but doesn\'t lift a block, and the cat sulks.',
                        shot: { src: '/swatcat/shots/step-popup.webp', width: 440, height: 690, alt: 'Swatcat popup: 42 minutes left today, a seven-day bar chart and a streak of 3 good days' },
                        note: 'the cat sulks'
                    },
                    {
                        title: 'At the limit: one swat',
                        text: 'The tab closes and the site stays blocked until the daily reset. Once a day you can ask for five more minutes.',
                        shot: { src: '/swatcat/shots/step-swat.webp', width: 960, height: 496, alt: `Swatcat's "Time's up for today" screen after the daily limit closes the tab` },
                        note: '+5 min, once a day'
                    }
                ],
                permissions: [
                    { name: 'storage', why: 'Keeps your cat, site list, daily limit, streak and the last 7 days on your computer.' },
                    { name: 'alarms', why: 'Saves active time once a minute and runs the daily reset at the hour you pick.' },
                    { name: 'tabs', why: 'Reads the active tab\'s hostname to decide if time counts, and closes the tab at the limit. URLs are never stored.' },
                    { name: 'declarativeNetRequest', why: 'Lets Chrome itself block your limited sites at the limit, so the extension never reads your traffic.' },
                    { name: 'all sites', why: 'Shows the cat in a closed Shadow DOM on the pages you visit. Never used to read page text.' }
                ],
                privacy: 'Zero network requests, remote scripts, telemetry or ads. Swatcat never records the URLs you visit, your searches or what you type; everything it keeps stays in your browser, and uninstalling deletes all of it.',
                stamp: ['zero', 'network', 'requests']
            }
        },
        {
            title: 'TabChest',
            note: 'shipped v1',
            category: 'Browser extension · Indie product',
            summary: 'Save, organize and restore tab workspaces. Local-first, with JSON export/import and a Pro licensing flow.',
            pipeline: ['Select tabs', 'Save workspace', 'IndexedDB', 'Restore / export'],
            tags: ['TypeScript', 'React', 'Vite', 'Tailwind', 'IndexedDB', 'Manifest V3'],
            githubUrl: '',
            status: 'Shipped v1',
            storeUrl: 'https://chromewebstore.google.com/detail/tabchest/hgggkkijegbpooajfcopaclabingkfgk',
            privacyUrl: '/tabchest/privacy.html',
            role: 'Solo: architecture, development, licensing',
            shots: [
                { src: '/tabchest/shots/workspaces.webp', alt: 'TabChest popup showing saved tab workspaces ready to restore in one click' },
                { src: '/tabchest/shots/save.webp', alt: 'TabChest selector allowing you to choose and save tabs across windows' }
            ],
            highlights: [
                'Saves any selection of tabs, across windows, including pinned tabs.',
                'Import merges by name; rename and delete come with undo.'
            ],
            page: {
                slug: 'tabchest',
                steps: [
                    {
                        title: 'Pick the tabs to keep',
                        text: 'Save this window, every window, or hand-pick tabs one by one, pinned tabs included. Name the set after the project it belongs to.',
                        shot: { src: '/tabchest/shots/step-save.webp', width: 519, height: 560, alt: 'TabChest popup with a workspace being named and five tabs from this window checked to save' },
                        note: 'up to 50 tabs on Free'
                    },
                    {
                        title: 'Close them. Get them back in a click',
                        text: 'Every set becomes a named workspace you can search. Restoring brings the whole project back, across multiple windows, exactly as you left it.',
                        shot: { src: '/tabchest/shots/step-restore.webp', width: 519, height: 560, alt: 'TabChest popup listing saved workspaces with their tab counts, windows and when they were saved' },
                        note: '10 workspaces free'
                    },
                    {
                        title: 'Keep a backup',
                        text: 'Export your workspaces to JSON and keep an offline copy. Importing merges by name, and rename and delete come with undo.'
                    }
                ],
                permissions: [
                    { name: 'tabs', why: 'Reads the URL, title, icon and pinned state of the tabs you save, so a workspace can be restored.' },
                    { name: 'storage', why: 'Keeps your workspaces and settings on your device, in IndexedDB and extension storage.' },
                    { name: 'lemonsqueezy.com', why: 'Only if you activate Pro: checks your license key. No tab URLs, titles or workspace content are sent.' }
                ],
                privacy: 'Your workspaces stay on your device; TabChest has no backend holding your tabs or history. The one exception is optional: activating Pro sends your license key, and only that, to Lemon Squeezy to validate it. Uninstalling removes all local data.',
                stamp: ['your tabs', 'stay', 'local']
            }
        },
        {
            title: 'Smart Reader',
            note: 'the tl;dr never leaves your laptop',
            category: 'Chrome extension · On-device AI reading',
            summary: 'Turns any article into a clean reading view with a TL;DR, key points and highlights saved to a personal library. Summaries run on your device; nothing leaves the browser.',
            pipeline: ['Open article', 'Extract article', 'Clean reader', 'On-device summary', 'Highlight & save'],
            tags: ['JavaScript', 'Manifest V3', 'Chrome Summarizer API', 'Mozilla Readability', 'Shadow DOM', 'Lemon Squeezy'],
            githubUrl: '',
            status: 'In review',
            // storeUrl: 'https://chromewebstore.google.com/detail/...', // Add "see it in the store →" URL here once approved
            privacyUrl: '/smart-reader/privacy.html',
            role: 'Solo: idea, design, development, licensing',
            highlights: [
                "Summarizes with Chrome's built-in Gemini Nano, falling back to an extractive sentence ranker that skips headings, captions and footnotes.",
                'Reader lives in a closed Shadow DOM; highlights re-anchor by text and position when you return to an article.'
            ]
        }
    ],
};
