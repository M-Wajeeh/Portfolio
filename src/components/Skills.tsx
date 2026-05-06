import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const cats = portfolioData.skills.categories;
    const marquee = portfolioData.skills.marquee;

    return (
        <section id="skills" className="skills">
            <div className="container">
                <span className="sec-num">02 // ARSENAL</span>
                <h2 className="sec-title">MASTERING THE <span className="hl">STACK.</span></h2>

                <div className="marquee-wrap">
                    <div className="marquee-track">
                        {[...marquee, ...marquee].map((s, i) => (
                            <span key={i} className="marquee-item">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="skills-grid">
                    {cats.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                <div className="skill-header">
                                    <Icon size={20} className="skill-icon" />
                                    <h3>{cat.title}</h3>
                                </div>
                                <div className="skill-tags">
                                    {cat.skills.map((s, i) => (
                                        <span key={i} className="skill-tag">{s}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .skills { padding: 8rem 0; }
                .marquee-wrap {
                    overflow: hidden; position: relative;
                    margin: 2rem 0 3rem; padding: 1rem 0;
                }
                .marquee-wrap::before, .marquee-wrap::after {
                    content: ''; position: absolute; top: 0; width: 120px; height: 100%;
                    z-index: 2; pointer-events: none;
                }
                .marquee-wrap::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
                .marquee-wrap::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
                .marquee-track {
                    display: inline-flex; gap: 3rem;
                    animation: slide 50s linear infinite; white-space: nowrap;
                }
                .marquee-item {
                    font-size: 1rem; font-weight: 800; color: var(--text-mute);
                    opacity: 0.25; letter-spacing: 0.05em; text-transform: uppercase;
                }
                @keyframes slide { to { transform: translateX(-50%); } }
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.25rem;
                }
                .skill-card {
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r);
                    padding: 1.75rem;
                    transition: all 0.3s;
                }
                .skill-card:hover {
                    border-color: var(--accent);
                    transform: translateY(-3px);
                }
                .skill-header {
                    display: flex; align-items: center; gap: 0.75rem;
                    margin-bottom: 1.25rem;
                }
                .skill-icon { color: var(--accent); }
                .skill-header h3 {
                    font-size: 0.75rem; font-weight: 700;
                    letter-spacing: 0.1em; color: var(--text-sec);
                }
                .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
                .skill-tag {
                    padding: 0.3rem 0.7rem;
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: var(--r-sm);
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: var(--text-sec);
                    transition: all 0.3s;
                }
                .skill-tag:hover {
                    background: var(--accent);
                    color: var(--bg);
                    border-color: var(--accent);
                }
                @media (max-width: 768px) {
                    .skills { padding: 5rem 0; }
                }
            `}</style>
        </section>
    );
};

export default Skills;
