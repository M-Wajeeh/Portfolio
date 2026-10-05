import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Brain, Chrome } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

const Projects = () => {
    const { aiProjects, extensionProjects } = portfolioData;

    const renderProjectItem = (p: Project, idx: number, prefix: string = '') => {
        const Icon = p.icon;
        const href = p.storeUrl || p.githubUrl || '#';
        const hasLink = !!(p.storeUrl || p.githubUrl);

        return (
            <motion.a
                key={p.title + idx}
                href={href}
                target={hasLink ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`proj-item${p.status ? ' proj-item--featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={!hasLink ? (e) => e.preventDefault() : undefined}
                style={!hasLink ? { cursor: 'default' } : undefined}
            >
                <div className="proj-left">
                    <span className="proj-num">{prefix}{String(idx + 1).padStart(2, '0')}</span>
                    <div className="proj-icon-wrap">
                        {p.logoImg ? (
                            <img src={p.logoImg} alt={p.title} className="proj-logo-img" />
                        ) : (
                            <Icon size={24} />
                        )}
                    </div>
                </div>
                <div className="proj-center">
                    <div className="proj-meta-row">
                        <span className="proj-cat">{p.category}</span>
                        {p.role && <span className="proj-role-tag">{p.role}</span>}
                    </div>
                    <div className="proj-name-row">
                        <h3 className="proj-name">{p.title}</h3>
                        {p.status && <span className="proj-badge">{p.status}</span>}
                    </div>
                    <p className="proj-desc">{p.description}</p>
                    {p.highlights && p.highlights.length > 0 && (
                        <ul className="proj-highlights">
                            {p.highlights.map((h, hi) => (
                                <li key={hi}>{h}</li>
                            ))}
                        </ul>
                    )}
                    {p.privacyUrl && (
                        <button
                            type="button"
                            className="proj-privacy-link"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(p.privacyUrl, '_blank', 'noopener,noreferrer');
                            }}
                            aria-label={`View ${p.title} privacy policy`}
                        >
                            <ShieldCheck size={12} />
                            Privacy Policy
                        </button>
                    )}
                    <div className="proj-tags">
                        {p.tags.slice(0, 6).map((t, i) => (
                            <span key={i} className="proj-tag">{t}</span>
                        ))}
                        {p.tags.length > 6 && <span className="proj-tag">+{p.tags.length - 6}</span>}
                    </div>
                </div>
                <div className="proj-right">
                    {p.storeUrl
                        ? <ExternalLink size={16} />
                        : <Github size={16} />
                    }
                    {hasLink && <ArrowUpRight size={16} />}
                </div>
            </motion.a>
        );
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <span className="sec-num">03 // WORK</span>
                <h2 className="sec-title">SELECTED <span className="hl">PROJECTS & PRODUCTS.</span></h2>

                {/* Sub-navigation jump pills */}
                <div className="work-nav-pills">
                    <button
                        type="button"
                        className="work-pill"
                        onClick={() => document.getElementById('ai-systems')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Brain size={14} />
                        <span>AI & ML Systems ({aiProjects.length})</span>
                    </button>
                    <button
                        type="button"
                        className="work-pill work-pill--ext"
                        onClick={() => document.getElementById('chrome-extensions')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Chrome size={14} />
                        <span>Chrome Extensions ({extensionProjects.length})</span>
                    </button>
                </div>

                {/* Subsection 1: AI & ML */}
                <div id="ai-systems" className="subsection-block">
                    <div className="subsection-header">
                        <div className="subsection-header-top">
                            <span className="subsection-badge">01 // MACHINE LEARNING & AI</span>
                            <span className="subsection-count">{aiProjects.length} Projects</span>
                        </div>
                        <h3 className="subsection-heading">AI & MACHINE LEARNING SYSTEMS</h3>
                        <p className="subsection-desc">
                            Production-grade machine learning pipelines, LLM-powered multi-agent architectures, and end-to-end deep learning systems.
                        </p>
                    </div>

                    <div className="proj-list">
                        {aiProjects.map((p, idx) => renderProjectItem(p, idx, ''))}
                    </div>
                </div>

                {/* Subsection 2: Chrome Extensions */}
                <div id="chrome-extensions" className="subsection-block subsection-block--ext">
                    <div className="subsection-header subsection-header--ext">
                        <div className="subsection-header-top">
                            <span className="subsection-badge subsection-badge--ext">02 // CLIENT-SIDE PRODUCTS</span>
                            <span className="subsection-count subsection-count--ext">{extensionProjects.length} Extensions</span>
                        </div>
                        <h3 className="subsection-heading">CHROME WEB EXTENSIONS</h3>
                        <p className="subsection-desc">
                            Privacy-first browser extensions built with Manifest V3, zero remote tracking, and strictly local storage.
                        </p>
                    </div>

                    <div className="proj-list">
                        {extensionProjects.map((p, idx) => renderProjectItem(p, idx, 'EXT-'))}
                    </div>
                </div>
            </div>

            <style>{`
                .projects { padding: 8rem 0; }

                /* Jump pills */
                .work-nav-pills {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin: 1.5rem 0 3rem 0;
                    flex-wrap: wrap;
                }
                .work-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.45rem 1rem;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r);
                    color: var(--text-sec);
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-family: inherit;
                }
                .work-pill:hover {
                    color: var(--accent);
                    border-color: var(--accent);
                    transform: translateY(-2px);
                }
                .work-pill--ext:hover {
                    color: var(--accent);
                    border-color: var(--accent);
                }

                /* Subsections */
                .subsection-block {
                    margin-bottom: 5rem;
                }
                .subsection-block--ext {
                    margin-top: 4rem;
                    padding-top: 3.5rem;
                    border-top: 1px dashed var(--border);
                }
                .subsection-header {
                    margin-bottom: 2rem;
                }
                .subsection-header-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .subsection-badge {
                    font-family: 'JetBrains Mono', 'Courier New', monospace;
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: var(--accent);
                    text-transform: uppercase;
                }
                .subsection-badge--ext {
                    color: var(--accent);
                }
                .subsection-count {
                    font-family: 'JetBrains Mono', 'Courier New', monospace;
                    font-size: 0.68rem;
                    font-weight: 600;
                    color: var(--text-mute);
                    padding: 0.15rem 0.5rem;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r-sm);
                }
                .subsection-heading {
                    font-size: 1.45rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    color: var(--text);
                    margin: 0 0 0.4rem 0;
                }
                .subsection-desc {
                    font-size: 0.85rem;
                    color: var(--text-mute);
                    line-height: 1.5;
                    max-width: 680px;
                    margin: 0;
                }

                /* Project Cards */
                .proj-list { display: flex; flex-direction: column; gap: 1px; }
                .proj-item {
                    display: grid;
                    grid-template-columns: 100px 1fr 60px;
                    gap: 2rem;
                    align-items: start;
                    padding: 2rem 1.5rem;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r);
                    margin-bottom: 0.75rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                .proj-item--featured {
                    border-color: var(--accent);
                }
                .proj-item:hover {
                    border-color: var(--accent);
                    transform: translateX(6px);
                }
                .proj-left {
                    display: flex; flex-direction: column;
                    align-items: center; gap: 0.75rem; padding-top: 0.25rem;
                }
                .proj-num {
                    font-family: 'JetBrains Mono', 'Courier New', monospace;
                    font-size: 0.75rem; color: var(--text-mute);
                    font-weight: 700;
                }
                .proj-icon-wrap {
                    width: 48px; height: 48px; border-radius: 50%;
                    background: var(--bg); border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--accent);
                    overflow: hidden;
                }
                .proj-logo-img {
                    width: 28px;
                    height: 28px;
                    object-fit: contain;
                }
                .proj-meta-row {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-bottom: 0.35rem;
                }
                .proj-cat {
                    font-size: 0.65rem; font-weight: 700;
                    color: var(--accent); letter-spacing: 0.12em;
                    text-transform: uppercase; display: inline-block;
                }
                .proj-role-tag {
                    font-size: 0.62rem;
                    font-weight: 500;
                    color: var(--text-mute);
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: var(--r-sm);
                    padding: 0.1rem 0.45rem;
                }
                .proj-name-row {
                    display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;
                    margin-bottom: 0.5rem;
                }
                .proj-name {
                    font-size: 1.25rem; font-weight: 700;
                    color: var(--text); margin: 0;
                }
                .proj-badge {
                    font-size: 0.6rem; font-weight: 700;
                    padding: 0.18rem 0.55rem;
                    background: var(--accent);
                    color: var(--bg);
                    border-radius: var(--r-sm);
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .proj-desc {
                    font-size: 0.85rem; color: var(--text-sec);
                    line-height: 1.6; margin-bottom: 0.75rem;
                    display: -webkit-box; -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; overflow: hidden;
                }
                .proj-highlights {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 0.9rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }
                .proj-highlights li {
                    font-size: 0.8rem;
                    color: var(--text-mute);
                    padding-left: 1rem;
                    position: relative;
                    line-height: 1.5;
                }
                .proj-highlights li::before {
                    content: '›';
                    position: absolute;
                    left: 0;
                    color: var(--accent);
                    font-weight: 700;
                }
                .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
                .proj-tag {
                    font-size: 0.6rem; font-weight: 600;
                    padding: 0.2rem 0.5rem; background: var(--bg);
                    border: 1px solid var(--border); border-radius: var(--r-sm);
                    color: var(--text-mute);
                }
                .proj-right {
                    display: flex; flex-direction: column; gap: 0.75rem;
                    align-items: center; color: var(--text-mute);
                    transition: color 0.3s; padding-top: 0.25rem;
                }
                .proj-item:hover .proj-right { color: var(--accent); }
                .proj-privacy-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.68rem;
                    font-weight: 600;
                    color: var(--accent);
                    background: transparent;
                    border: 1px solid var(--border);
                    padding: 0.22rem 0.6rem;
                    border-radius: var(--r-sm);
                    margin-bottom: 0.75rem;
                    transition: all 0.2s;
                    width: fit-content;
                    cursor: pointer;
                    font-family: inherit;
                    line-height: inherit;
                }
                .proj-privacy-link:hover {
                    color: var(--bg);
                    background: var(--accent);
                    border-color: var(--accent);
                }
                @media (max-width: 768px) {
                    .projects { padding: 5rem 0; }
                    .proj-item { grid-template-columns: 1fr; gap: 1rem; align-items: start; }
                    .proj-left { flex-direction: row; justify-content: flex-start; }
                    .proj-right { flex-direction: row; justify-content: flex-end; }
                    .subsection-block--ext { margin-top: 3rem; padding-top: 2.5rem; }
                    .work-nav-pills { margin: 1rem 0 2rem 0; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
