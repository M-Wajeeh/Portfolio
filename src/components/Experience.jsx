import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const experiences = portfolioData.experience;

    return (
        <section id="experience" className="experience-modern">
            <div className="container">
                <div className="section-frame experience-header-frame">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Trajectory</span>
                        <h2>PROFESSIONAL <span className="gradient-text">LOOP</span></h2>
                    </motion.div>
                </div>

                <div className="timeline-modern">
                    {experiences.map((exp, idx) => {
                        const Icon = exp.type === 'WORK' ? Briefcase : GraduationCap;
                        return (
                            <motion.div
                                key={idx}
                                className="timeline-item-modern"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <div className="timeline-dot-modern">
                                    <Icon size={16} />
                                </div>
                                <div className="timeline-content-modern">
                                    <div className="content-side-strip"></div>
                                    <div className="content-inner">
                                        <div className="content-header">
                                            <span className="type-badge">{exp.type}</span>
                                            <span className="period"><Calendar size={12} /> {exp.period}</span>
                                        </div>
                                        <h3>{exp.title}</h3>
                                        <div className="company-name">{exp.company}</div>
                                        <p className="exp-description">{exp.description}</p>
                                        <div className="exp-tags">
                                            {exp.tags.map((tag, i) => (
                                                <span key={i} className="exp-tag"># {tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .experience-modern {
                    padding: var(--spacing-2xl) 0;
                }

                .experience-header-frame {
                    margin-bottom: var(--spacing-2xl);
                    padding: 3rem 4rem;
                }

                .text-highlight {
                    color: var(--color-primary);
                }

                .timeline-modern {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    max-width: 900px;
                    margin: 0 auto;
                    margin-top: var(--spacing-xl);
                }

                .timeline-item-modern {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: 0;
                }

                .timeline-dot-modern {
                    display: flex;
                    justify-content: center;
                    padding-top: 1.5rem;
                    color: var(--color-primary);
                    position: relative;
                }

                .timeline-dot-modern::after {
                    content: '';
                    position: absolute;
                    top: 3.5rem;
                    bottom: 0;
                    width: 2px;
                    background: var(--color-border);
                }

                .timeline-item-modern:last-child .timeline-dot-modern::after {
                    display: none;
                }

                .timeline-content-modern {
                    margin-bottom: var(--spacing-xl);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    transition: all 0.3s ease;
                    background: var(--color-bg-secondary);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--color-border);
                }

                .timeline-content-modern:hover {
                    transform: translateX(5px);
                    border-color: var(--color-primary);
                    box-shadow: var(--shadow-md);
                }

                .content-side-strip {
                    width: 4px;
                    background: var(--color-primary);
                }

                .content-inner {
                    padding: 1.5rem 2rem;
                    width: 100%;
                }

                .content-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                }

                .type-badge {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                .period {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.7rem;
                    font-family: 'monospace';
                    color: var(--color-text-tertiary);
                }

                .timeline-content-modern h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    color: var(--color-text-primary);
                }

                .company-name {
                    font-size: 0.95rem;
                    color: var(--color-text-secondary);
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .exp-description {
                    color: var(--color-text-secondary);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .exp-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .exp-tag {
                    font-size: 0.7rem;
                    font-family: 'monospace';
                    color: var(--color-text-tertiary);
                    font-weight: 600;
                }

                @media (max-width: 640px) {
                    .timeline-item-modern {
                        grid-template-columns: 50px 1fr;
                    }
                    .content-inner {
                        padding: 1.25rem;
                    }
                }
            `}</style>
        </section >
    );
};

export default Experience;
