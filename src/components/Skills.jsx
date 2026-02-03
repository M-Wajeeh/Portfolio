import { motion } from 'framer-motion';
import { Database, Brain, Code, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const skillCategories = portfolioData.skills.categories;
    const allSkills = portfolioData.skills.marquee;

    return (
        <section id="skills" className="skills-modern">
            <div className="container">
                <div className="section-frame skills-header-frame">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Capabilities</span>
                        <h2>TECH STACK & <span className="text-highlight">EXPERTISE</span></h2>
                    </motion.div>
                </div>

                {/* Infinite Moving Marquee */}
                <motion.div
                    className="marquee-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="marquee-content">
                        {allSkills.map((skill, i) => (
                            <span key={i} className="marquee-item">{skill}</span>
                        ))}
                        {/* Repeat for seamless loop */}
                        {allSkills.map((skill, i) => (
                            <span key={`dup-${i}`} className="marquee-item">{skill}</span>
                        ))}
                    </div>
                </motion.div>

                <div className="skills-grid-modern">
                    {skillCategories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="skill-card-minimal"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                            >
                                <div className="card-header">
                                    <Icon size={24} className="card-icon" />
                                    <h3>{cat.title}</h3>
                                </div>
                                <div className="card-skills-list">
                                    {cat.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag-min">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .skills-modern {
                    padding: var(--spacing-2xl) 0;
                }

                .skills-header-frame {
                    margin-bottom: var(--spacing-2xl);
                    padding: 3rem 4rem;
                }

                .text-highlight {
                    color: var(--color-primary);
                }

                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    margin: var(--spacing-xl) 0 var(--spacing-2xl);
                    position: relative;
                }

                .marquee-container::before,
                .marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 150px;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }

                .marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, var(--color-bg-primary), transparent);
                }

                .marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, var(--color-bg-primary), transparent);
                }

                .marquee-content {
                    display: inline-block;
                    animation: marquee 60s linear infinite;
                }

                .marquee-item {
                    font-family: 'monospace';
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--color-text-tertiary);
                    opacity: 0.15;
                    margin-right: 4rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    transition: all 0.3s ease;
                }

                .marquee-item:hover {
                    color: var(--color-primary);
                    opacity: 0.6;
                }

                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .skills-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: var(--spacing-lg);
                }

                .skill-card-minimal {
                    background: var(--color-bg-secondary);
                    padding: var(--spacing-xl);
                    border-radius: var(--radius-xl);
                    border: 1px solid var(--color-border);
                    transition: all 0.4s ease;
                }

                .skill-card-minimal:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-primary);
                    box-shadow: var(--shadow-md);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: var(--spacing-lg);
                }

                .card-icon {
                    color: var(--color-primary);
                }

                .card-header h3 {
                    font-size: 0.85rem;
                    letter-spacing: 0.1em;
                    color: var(--color-text-tertiary);
                    font-weight: 700;
                }

                .card-skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                }

                .skill-tag-min {
                    padding: 0.4rem 0.8rem;
                    background: var(--color-bg-primary);
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--color-text-secondary);
                    border: 1px solid var(--color-border);
                    transition: all 0.3s ease;
                }

                .skill-tag-min:hover {
                    background: var(--color-primary);
                    color: white;
                    border-color: var(--color-primary);
                }
            `}</style>
        </section>
    );
};

export default Skills;
