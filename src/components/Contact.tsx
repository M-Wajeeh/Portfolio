import { motion } from 'framer-motion';
import { Send, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <span className="sec-num">05 // CONNECT</span>

                <motion.h2
                    className="contact-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    LET'S BUILD<br />
                    <span className="hl">SOMETHING.</span>
                </motion.h2>

                <motion.p
                    className="contact-lead"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Open to high-impact projects and collaborations.<br />
                    Let's make something that actually matters.
                </motion.p>

                <motion.a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="contact-btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    START A CONVERSATION <Send size={16} />
                </motion.a>

                <div className="contact-footer">
                    <div className="contact-links">
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                            GITHUB <ArrowUpRight size={12} />
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                            LINKEDIN <ArrowUpRight size={12} />
                        </a>
                    </div>
                    <div className="status-row">
                        <div className="status-dot" />
                        <span>STATUS: {portfolioData.personalInfo.status}</span>
                    </div>
                </div>

                <div className="copyright">
                    <span>© {new Date().getFullYear()} {portfolioData.personalInfo.name}</span>
                    <span>AI GRADUATE / ML ENGINEER</span>
                </div>
            </div>

            <style>{`
                .contact { padding: 8rem 0 4rem; }
                .contact-title {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 900; line-height: 1;
                    letter-spacing: -0.04em;
                    color: var(--text);
                    margin-bottom: 2rem;
                }
                .hl { color: var(--accent); }
                .contact-lead {
                    font-size: 1.1rem; color: var(--text-sec);
                    line-height: 1.7; max-width: 450px;
                    margin-bottom: 2.5rem;
                }
                .contact-btn {
                    display: inline-flex; align-items: center; gap: 0.75rem;
                    background: var(--accent); color: var(--bg);
                    padding: 1.1rem 2.5rem; font-weight: 700;
                    font-size: 0.75rem; letter-spacing: 0.1em;
                    border: none; cursor: pointer; transition: all 0.3s;
                    text-decoration: none; font-family: inherit;
                }
                .contact-btn:hover {
                    background: var(--accent-hover);
                    transform: translateY(-3px);
                    box-shadow: 0 0 30px rgba(200, 165, 90, 0.2);
                }
                .contact-footer {
                    display: flex; justify-content: space-between;
                    align-items: center; margin-top: 5rem;
                    padding-top: 2rem; border-top: 1px solid var(--border);
                    flex-wrap: wrap; gap: 1.5rem;
                }
                .contact-links { display: flex; gap: 2rem; }
                .contact-link {
                    font-size: 0.7rem; font-weight: 700;
                    color: var(--text-mute); display: flex;
                    align-items: center; gap: 0.3rem;
                    letter-spacing: 0.1em; transition: color 0.3s;
                }
                .contact-link:hover { color: var(--accent); }
                .status-row {
                    display: flex; align-items: center; gap: 0.6rem;
                    font-size: 0.65rem; font-weight: 700;
                    color: var(--text-mute); letter-spacing: 0.1em;
                }
                .status-dot {
                    width: 7px; height: 7px; background: #22c55e;
                    border-radius: 50%; animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                .copyright {
                    display: flex; justify-content: space-between;
                    margin-top: 3rem; font-size: 0.65rem;
                    font-weight: 600; color: var(--text-mute);
                    letter-spacing: 0.08em; opacity: 0.6;
                }
                @media (max-width: 768px) {
                    .contact { padding: 5rem 0 3rem; }
                    .contact-footer { flex-direction: column; align-items: flex-start; }
                    .copyright { flex-direction: column; gap: 0.5rem; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
