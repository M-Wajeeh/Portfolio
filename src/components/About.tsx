import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import portrait from '../assets/portrait.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <span className="sec-num">01 // ORIGINS</span>
                <h2 className="sec-title">THE PERSON BEHIND <span className="hl">THE CODE.</span></h2>

                <div className="about-grid">
                    <motion.div
                        className="about-portrait"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src={portrait} alt={portfolioData.personalInfo.name} />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="about-bio">{portfolioData.personalInfo.bio}</p>

                        <div className="about-stats">
                            {portfolioData.stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="stat-block">
                                        <Icon size={18} className="stat-icon" />
                                        <span className="stat-val">{stat.value}</span>
                                        <span className="stat-lbl">{stat.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="about-tags">
                            {['#DATA_ANALYSIS', '#MACHINE_LEARNING', '#GENERATIVE_AI', '#MLOPS'].map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .about { padding: 8rem 0; }
                .about-grid {
                    display: grid;
                    grid-template-columns: 0.4fr 0.6fr;
                    gap: 4rem;
                    align-items: start;
                    margin-top: 1rem;
                }
                .about-portrait img {
                    width: 100%;
                    max-width: 350px;
                    aspect-ratio: 1;
                    object-fit: cover;
                    border-radius: var(--r);
                    border: 3px solid var(--border);
                    filter: grayscale(20%);
                    transition: filter 0.4s;
                }
                .about-portrait img:hover { filter: grayscale(0%); }
                .about-bio {
                    font-size: 1.1rem;
                    color: var(--text-sec);
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                }
                .about-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }
                .stat-block {
                    padding: 1.25rem;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--r-sm);
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    transition: border-color 0.3s;
                }
                .stat-block:hover { border-color: var(--accent); }
                .stat-icon { color: var(--accent); }
                .stat-val {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--text);
                    letter-spacing: -0.02em;
                }
                .stat-lbl {
                    font-size: 0.6rem;
                    font-weight: 700;
                    color: var(--text-mute);
                    letter-spacing: 0.08em;
                }
                .about-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; }
                .tag {
                    font-family: 'Courier New', monospace;
                    font-size: 0.7rem;
                    font-weight: 600;
                    padding: 0.4rem 0.8rem;
                    background: var(--bg-alt);
                    color: var(--text-mute);
                    border-radius: var(--r-sm);
                    border: 1px solid var(--border);
                }
                @media (max-width: 768px) {
                    .about { padding: 5rem 0; }
                    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
                    .about-portrait { display: flex; justify-content: center; }
                    .about-portrait img { max-width: 250px; }
                    .about-stats { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default About;
