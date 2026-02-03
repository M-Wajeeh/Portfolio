import { Mail, Linkedin, Github, ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="contact-modern">
            <div className="container">
                <div className="section-frame">
                    <div className="contact-content-inner">
                        <span className="section-label">Collaboration</span>
                        <h2 className="contact-title">READY TO <br /><span className="text-highlight">SYNC?</span></h2>

                        <p className="contact-lead">
                            I am currently open to high-impact projects and strategic partnerships.
                            Let's build something that matters.
                        </p>

                        <div className="contact-methods-minimal">
                            <a href={`mailto:${portfolioData.personalInfo.email}`} className="minimal-contact-btn">
                                START A CONVERSATION <Send size={18} />
                            </a>
                        </div>

                        <div className="social-footer-minimal">
                            <div className="social-tags">
                                <a href={portfolioData.personalInfo.github} className="social-links-min">GITHUB <ArrowUpRight size={14} /></a>
                                <a href={portfolioData.personalInfo.linkedin} className="social-links-min">LINKEDIN <ArrowUpRight size={14} /></a>
                            </div>
                            <div className="availability-indicator">
                                <div className="status-dot"></div>
                                <span>STATUS: {portfolioData.personalInfo.status}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="footer-left">© {new Date().getFullYear()} — {portfolioData.personalInfo.name}</div>
                    <div className="footer-right">AI GRADUATE / ML ENGINEER</div>
                </div>
            </div>

            <style>{`
                .contact-modern {
                    padding: 10rem 0;
                }

                .contact-title {
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.04em;
                    color: var(--color-text-primary);
                }

                .text-highlight {
                    color: var(--color-primary);
                }

                .contact-lead {
                    font-size: 1.25rem;
                    color: var(--color-text-secondary);
                    max-width: 500px;
                    margin: 3rem 0;
                    line-height: 1.6;
                }

                .minimal-contact-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    background: var(--color-text-primary);
                    color: var(--color-bg-primary);
                    padding: 1.5rem 3rem;
                    border-radius: var(--radius-md);
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .minimal-contact-btn:hover {
                    transform: translateY(-5px);
                    background: var(--color-primary);
                    color: white;
                }

                .social-footer-minimal {
                    margin-top: 6rem;
                    padding-top: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid var(--color-border);
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .social-tags {
                    display: flex;
                    gap: 2rem;
                }

                .social-links-min {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--color-text-tertiary);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    transition: color 0.3s ease;
                    letter-spacing: 0.1em;
                }

                .social-links-min:hover {
                    color: var(--color-primary);
                }

                .availability-indicator {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: var(--color-text-tertiary);
                    letter-spacing: 0.1em;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                }

                .footer-copyright {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 4rem;
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: var(--color-text-tertiary);
                    opacity: 0.4;
                    letter-spacing: 0.1em;
                }

                @media (max-width: 768px) {
                    .contact-modern {
                         padding: 6rem 0;
                    }
                    .social-footer-minimal {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
