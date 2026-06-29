import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    const projects = portfolioData.projects;

    return (
        <section id="projects" className="projects">
            <div className="container">
                <span className="sec-num">03 // WORK</span>
                <h2 className="sec-title">SELECTED <span className="hl">PROJECTS.</span></h2>

                <div className="proj-list">
                    {projects.map((p, idx) => {
                        const Icon = p.icon;
                        const href = p.storeUrl || p.githubUrl || '#';
                        const hasLink = !!(p.storeUrl || p.githubUrl);
                        return (
                            <motion.a
                                key={idx}
                                href={href}
                                target={hasLink ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className={`proj-item${p.status ? ' proj-item--featured' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.06 }}
                                onClick={!hasLink ? (e) => e.preventDefault() : undefined}
                                style={!hasLink ? { cursor: 'default' } : undefined}
                            >
                                <div className="proj-left">
                                    <span className="proj-num">{String(idx + 1).padStart(2, '0')}</span>
                                    <div className="proj-icon-wrap"><Icon size={24} /></div>
                                </div>
                                <div className="proj-center">
                                    <span className="proj-cat">{p.category}</span>
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
                                            className="proj-privacy-link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.open(p.privacyUrl, '_blank', 'noopener,noreferrer');
                                            }}
                                            aria-label="View privacy policy"
                                        >
                                            <ShieldCheck size={11} />
                                            Privacy Policy
                                        </button>
                                    )}
                                    <div className="proj-tags">
                                        {p.tags.slice(0, 5).map((t, i) => (
                                            <span key={i} className="proj-tag">{t}</span>
                                        ))}
                                        {p.tags.length > 5 && <span className="proj-tag">+{p.tags.length - 5}</span>}
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
                    })}
                </div>
            </div>

            <style>{`
                .projects { padding: 8rem 0; }
                .proj-list { display: flex; flex-direction: column; gap: 1px; margin-top: 1rem; }
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
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem; color: var(--text-mute);
                    font-weight: 700;
                }
                .proj-icon-wrap {
                    width: 48px; height: 48px; border-radius: 50%;
                    background: var(--bg); border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--accent);
                }
                .proj-cat {
                    font-size: 0.65rem; font-weight: 700;
                    color: var(--accent); letter-spacing: 0.12em;
                    text-transform: uppercase; margin-bottom: 0.4rem; display: block;
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
                    gap: 0.3rem;
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: var(--text-mute);
                    text-decoration: none;
                    background: transparent;
                    border: 1px solid var(--border);
                    padding: 0.18rem 0.5rem;
                    border-radius: var(--r-sm);
                    margin-bottom: 0.6rem;
                    transition: color 0.2s, border-color 0.2s;
                    width: fit-content;
                    cursor: pointer;
                    font-family: inherit;
                    line-height: inherit;
                }
                .proj-privacy-link:hover {
                    color: var(--accent);
                    border-color: var(--accent);
                }
                @media (max-width: 768px) {
                    .projects { padding: 5rem 0; }
                    .proj-item { grid-template-columns: 1fr; gap: 1rem; align-items: start; }
                    .proj-left { flex-direction: row; justify-content: flex-start; }
                    .proj-right { flex-direction: row; justify-content: flex-end; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
