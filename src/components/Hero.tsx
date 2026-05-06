import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="hero-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {portfolioData.personalInfo.subTagline}
                    </motion.p>

                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {portfolioData.personalInfo.tagline.split(' ').map((word, i) => (
                            <span key={i} className={i >= 4 ? 'hl' : ''}>{word} </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="hero-sub"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Hi, I'm <strong>{portfolioData.personalInfo.name}</strong>. {portfolioData.personalInfo.bio.split('.')[0]}.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <details className="resume-dd">
                            <summary className="btn-accent">GET RESUME</summary>
                            <div className="resume-dd-menu">
                                <a
                                    href={portfolioData.personalInfo.resumePrimaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-dd-item"
                                    onClick={(e) => { (e.currentTarget.closest('details') as HTMLDetailsElement | null)?.removeAttribute('open'); }}
                                >
                                    {portfolioData.personalInfo.resumePrimaryLabel}
                                </a>
                                <a
                                    href={portfolioData.personalInfo.resumeSecondaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-dd-item"
                                    onClick={(e) => { (e.currentTarget.closest('details') as HTMLDetailsElement | null)?.removeAttribute('open'); }}
                                >
                                    {portfolioData.personalInfo.resumeSecondaryLabel}
                                </a>
                            </div>
                        </details>
                        <button className="btn-ghost" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            VIEW WORK
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-hint"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                <ArrowDown size={18} />
            </motion.div>

            <style>{`
                .hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    padding: 120px 0 80px;
                }
                .hero-label {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--accent);
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-bottom: 1.25rem;
                }
                .hero-headline {
                    font-size: clamp(2.8rem, 7vw, 6rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1;
                    color: var(--text);
                    margin-bottom: 1.5rem;
                    max-width: 900px;
                }
                .hero-headline .hl { color: var(--accent); }
                .hero-sub {
                    font-size: 1.15rem;
                    color: var(--text-sec);
                    max-width: 550px;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }
                .hero-sub strong { color: var(--text); }
                .hero-actions { display: flex; gap: 1.25rem; align-items: center; }
                .btn-accent {
                    display: inline-flex; align-items: center; padding: 0.9rem 2.2rem;
                    background: var(--accent); color: var(--bg); font-weight: 700;
                    font-size: 0.75rem; letter-spacing: 0.12em; border: none;
                    cursor: pointer; transition: all 0.3s; font-family: inherit;
                }
                .btn-accent:hover { background: var(--accent-hover); transform: translateY(-2px); }
                .btn-ghost {
                    display: inline-flex; align-items: center; padding: 0.9rem 2.2rem;
                    background: transparent; color: var(--text); font-weight: 700;
                    font-size: 0.75rem; letter-spacing: 0.12em;
                    border: 1px solid var(--border); cursor: pointer;
                    transition: all 0.3s; font-family: inherit;
                }
                .btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
                .scroll-hint {
                    position: absolute; bottom: 2.5rem; left: 50%;
                    transform: translateX(-50%); color: var(--text-mute);
                }
                .resume-dd { position: relative; }
                .resume-dd > summary { list-style: none; }
                .resume-dd > summary::-webkit-details-marker { display: none; }
                .resume-dd-menu {
                    position: absolute; top: calc(100% + 0.5rem); left: 0;
                    min-width: 200px; background: var(--bg-alt);
                    border: 1px solid var(--border); border-radius: var(--r-sm);
                    box-shadow: var(--shadow); overflow: hidden; z-index: 10;
                }
                .resume-dd-item {
                    display: block; padding: 0.75rem 1rem;
                    color: var(--text); font-weight: 700; font-size: 0.75rem;
                    letter-spacing: 0.05em; transition: all 0.2s;
                }
                .resume-dd-item:hover { background: var(--bg); color: var(--accent); }
                @media (max-width: 768px) {
                    .hero { padding: 120px 0 80px; }
                    .hero-actions { flex-direction: column; align-items: flex-start; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
