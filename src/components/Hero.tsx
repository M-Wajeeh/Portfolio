import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import portrait from '../assets/portrait.jpg';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % portfolioData.personalInfo.roles.length);
        }, 3000);

        return () => clearInterval(roleInterval);
    }, []);

    return (
        <section id="home" className="hero-minimalist">
            <div className="container">
                <div className="hero-grid">
                    {/* Left: Headline & CTA */}
                    <motion.div
                        className="hero-content-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="hero-headline">
                            {portfolioData.personalInfo.tagline}
                        </h1>
                        <p className="hero-subtext">
                            {portfolioData.personalInfo.subTagline}
                        </p>

                        <div className="hero-cta-minimal">
                            <button
                                className="btn-primary-minimal"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                VIEW SELECTED WORK
                            </button>

                            <details className="resume-dropdown">
                                <summary className="btn-primary-minimal">VIEW RESUME</summary>
                                <div className="resume-dropdown-menu" role="menu" aria-label="Resume options">
                                    <a
                                        className="resume-dropdown-item"
                                        href={portfolioData.personalInfo.resumePrimaryUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        role="menuitem"
                                        onClick={(e) => {
                                            (e.currentTarget.closest('details') as HTMLDetailsElement | null)?.removeAttribute('open');
                                        }}
                                    >
                                        {portfolioData.personalInfo.resumePrimaryLabel}
                                    </a>
                                    <a
                                        className="resume-dropdown-item"
                                        href={portfolioData.personalInfo.resumeSecondaryUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        role="menuitem"
                                        onClick={(e) => {
                                            (e.currentTarget.closest('details') as HTMLDetailsElement | null)?.removeAttribute('open');
                                        }}
                                    >
                                        {portfolioData.personalInfo.resumeSecondaryLabel}
                                    </a>
                                </div>
                            </details>
                            <div className="social-hero-minimal">
                                <a href={portfolioData.personalInfo.github} className="hero-social-link"><Github size={20} /></a>
                                <a href={portfolioData.personalInfo.linkedin} className="hero-social-link"><Linkedin size={20} /></a>
                                <a href={`mailto:${portfolioData.personalInfo.email}`} className="hero-social-link"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Portrait & Identity */}
                    <motion.div
                        className="hero-identity-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="portrait-container">
                            <div className="portrait-frame">
                                <img src={portrait} alt={portfolioData.personalInfo.name} className="hero-portrait-img" />
                            </div>

                            <div className="identity-block">
                                <h2 className="identity-name">{portfolioData.personalInfo.name}</h2>
                                <div className="identity-role-box">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={roleIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.5 }}
                                            className="identity-role"
                                        >
                                            {portfolioData.personalInfo.roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .hero-minimalist {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding-top: 80px;
                    background: var(--color-bg-primary);
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }

                .hero-headline {
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    font-weight: 800;
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: var(--color-text-primary);
                    margin-bottom: 2rem;
                }

                .hero-subtext {
                    font-size: 1.25rem;
                    color: var(--color-text-secondary);
                    max-width: 550px;
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }

                .hero-cta-minimal {
                    display: flex;
                    align-items: center;
                    gap: 2.5rem;
                }

                .hero-cta-minimal .btn-primary-minimal,
                .hero-cta-minimal .btn-secondary-minimal {
                    width: 280px;
                    height: 56px;
                    padding: 0 2rem;
                    justify-content: center;
                    text-align: center;
                    white-space: nowrap;
                    box-sizing: border-box;
                    line-height: 1;
                }

                .btn-primary-minimal {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-text-primary);
                    color: var(--color-bg-primary);
                    padding: 1rem 2rem;
                    border: 1px solid transparent;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    border-radius: var(--radius-sm);
                }

                .btn-secondary-minimal {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    color: var(--color-text-primary);
                    padding: 1rem 2rem;
                    border: 1px solid var(--color-text-primary);
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    border-radius: var(--radius-sm);
                    text-decoration: none;
                }

                .resume-dropdown {
                    position: relative;
                }

                .resume-dropdown > summary {
                    list-style: none;
                }

                .resume-dropdown > summary::-webkit-details-marker {
                    display: none;
                }

                .resume-dropdown-menu {
                    position: absolute;
                    top: calc(100% + 0.75rem);
                    left: 0;
                    min-width: 220px;
                    background: var(--color-bg-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    box-shadow: var(--shadow-xl);
                    overflow: hidden;
                    z-index: 10;
                }

                .resume-dropdown-item {
                    display: block;
                    padding: 0.9rem 1rem;
                    color: var(--color-text-primary);
                    text-decoration: none;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .resume-dropdown-item:hover {
                    background: var(--color-bg-primary);
                    color: var(--color-primary);
                }

                .btn-primary-minimal:hover {
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-xl);
                }

                .btn-secondary-minimal:hover {
                    transform: translateY(-3px);
                    background: var(--color-text-primary);
                    color: var(--color-bg-primary);
                    box-shadow: var(--shadow-xl);
                }

                .resume-dropdown[open] > summary.btn-primary-minimal {
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-xl);
                }

                .social-hero-minimal {
                    display: flex;
                    gap: 1.5rem;
                }

                .hero-social-link {
                    color: var(--color-text-tertiary);
                    transition: color 0.3s ease;
                }

                .hero-social-link:hover {
                    color: var(--color-primary);
                }

                .portrait-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                .portrait-frame {
                    width: 100%;
                    max-width: 400px;
                    aspect-ratio: 1/1;
                    border-radius: var(--radius-2xl);
                    overflow: hidden;
                    box-shadow: var(--shadow-xl);
                    border: 8px solid var(--color-bg-secondary);
                    background: var(--color-bg-secondary);
                }

                .hero-portrait-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .portrait-frame:hover .hero-portrait-img {
                    transform: scale(1.05);
                }

                .identity-block {
                    text-align: center;
                }

                .identity-name {
                    font-size: 1.5rem;
                    font-weight: 800;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.25rem;
                    color: var(--color-text-primary);
                }

                .identity-role-box {
                    height: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .identity-role {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                @media (max-width: 1024px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }

                    .hero-content-left {
                        order: 2;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .hero-identity-right {
                        order: 1;
                    }

                    .hero-cta-minimal {
                        flex-direction: column;
                        gap: 1.5rem;
                    }

                    .resume-dropdown-menu {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .hero-headline {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
