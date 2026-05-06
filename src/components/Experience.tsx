import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Trophy, Mic } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const exps = portfolioData.experience;

    const iconMap: Record<string, typeof Briefcase> = {
        'Achievement': Trophy,
        'Speaking': Mic,
        'Internship': Briefcase,
        'Job simulation': Briefcase,
        'EDU': GraduationCap,
    };

    return (
        <section id="experience" className="experience">
            <div className="container">
                <span className="sec-num">04 // JOURNEY</span>
                <h2 className="sec-title">THE PATH <span className="hl">SO FAR.</span></h2>

                <div className="timeline">
                    {exps.map((exp, idx) => {
                        const Icon = iconMap[exp.type] || Briefcase;
                        return (
                            <motion.div
                                key={idx}
                                className="tl-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                <div className="tl-marker">
                                    <div className="tl-dot"><Icon size={14} /></div>
                                    {idx < exps.length - 1 && <div className="tl-line" />}
                                </div>
                                <div className="tl-content">
                                    <div className="tl-top">
                                        <span className="tl-type">{exp.type}</span>
                                        <span className="tl-period"><Calendar size={11} /> {exp.period}</span>
                                    </div>
                                    <h3 className="tl-title">{exp.title}</h3>
                                    <p className="tl-company">{exp.company}</p>
                                    <p className="tl-desc">{exp.description}</p>
                                    <div className="tl-tags">
                                        {exp.tags.map((t, i) => (
                                            <span key={i} className="tl-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .experience { padding: 8rem 0; }
                .timeline { max-width: 800px; margin: 1rem auto 0; }
                .tl-item { display: grid; grid-template-columns: 50px 1fr; gap: 0; }
                .tl-marker {
                    display: flex; flex-direction: column; align-items: center;
                }
                .tl-dot {
                    width: 32px; height: 32px; border-radius: 50%;
                    background: var(--bg-alt); border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--accent); flex-shrink: 0;
                }
                .tl-line {
                    width: 1px; flex: 1; background: var(--border); margin: 0.5rem 0;
                }
                .tl-content {
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r);
                    padding: 1.5rem;
                    margin-bottom: 1.25rem;
                    margin-left: 0.5rem;
                    transition: all 0.3s;
                }
                .tl-content:hover {
                    border-color: var(--accent);
                    transform: translateX(4px);
                }
                .tl-top {
                    display: flex; justify-content: space-between;
                    align-items: center; margin-bottom: 0.5rem;
                }
                .tl-type {
                    font-size: 0.6rem; font-weight: 700;
                    color: var(--accent); letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
                .tl-period {
                    display: flex; align-items: center; gap: 0.3rem;
                    font-family: 'Courier New', monospace;
                    font-size: 0.65rem; color: var(--text-mute);
                }
                .tl-title {
                    font-size: 1.1rem; font-weight: 700;
                    color: var(--text); margin-bottom: 0.2rem;
                }
                .tl-company {
                    font-size: 0.9rem; color: var(--text-sec);
                    font-weight: 600; margin-bottom: 0.75rem;
                }
                .tl-desc {
                    font-size: 0.85rem; color: var(--text-sec);
                    line-height: 1.6; margin-bottom: 1rem;
                }
                .tl-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
                .tl-tag {
                    font-size: 0.6rem; font-weight: 600;
                    font-family: 'Courier New', monospace;
                    color: var(--text-mute);
                }
                @media (max-width: 768px) {
                    .experience { padding: 5rem 0; }
                    .tl-item { grid-template-columns: 40px 1fr; }
                }
            `}</style>
        </section>
    );
};

export default Experience;
