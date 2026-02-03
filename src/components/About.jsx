import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="about-minimalist">
            <div className="container">
                <div className="about-content-wrapper">
                    <motion.div
                        className="about-header-minimal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="about-label-minimal">PERSPECTIVE</span>
                        <h2 className="about-title-minimal">My Approach to <span className="text-highlight">Engineering</span></h2>
                    </motion.div>

                    <div className="about-main-grid">
                        <motion.div
                            className="about-narrative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bio-content-minimal">
                                <p>
                                    {portfolioData.personalInfo.bio}
                                </p>
                            </div>

                            <div className="about-expertise-tags">
                                {['#DATA_ANALYSIS', '#MACHINE_LEARNING', '#MLOPS', '#SYSTEM_DESIGN'].map((tag, i) => (
                                    <span key={i} className="expertise-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-visual-minimal"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="minimal-accent-box">
                                <div className="accent-line"></div>
                                <div className="accent-text">
                                    Focused on real-world, <br />
                                    <span>deployable systems</span>.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-minimalist {
                    padding: 10rem 0;
                    background: var(--color-bg-primary);
                }

                .about-header-minimal {
                    margin-bottom: 4rem;
                }

                .about-label-minimal {
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                    display: block;
                }

                .about-title-minimal {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    color: var(--color-text-primary);
                    letter-spacing: -0.02em;
                }

                .text-highlight {
                    color: var(--color-primary);
                }

                .about-main-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 6rem;
                    align-items: center;
                }

                .bio-content-minimal p {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: var(--color-text-secondary);
                    margin-bottom: 3rem;
                }

                .about-expertise-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .expertise-tag {
                    font-family: 'monospace';
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 0.5rem 1rem;
                    background: var(--color-bg-secondary);
                    color: var(--color-text-tertiary);
                    border-radius: var(--radius-sm);
                    border: 1px solid var(--color-border);
                }

                .minimal-accent-box {
                    padding: 3rem;
                    background: var(--color-bg-secondary);
                    border-radius: var(--radius-xl);
                    border-left: 4px solid var(--color-primary);
                    position: relative;
                }

                .accent-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    line-height: 1.4;
                    color: var(--color-text-primary);
                }

                .accent-text span {
                    color: var(--color-text-tertiary);
                    font-weight: 500;
                }

                @media (max-width: 968px) {
                    .about-minimalist {
                        padding: 6rem 0;
                    }

                    .about-main-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }

                    .about-visual-minimal {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
