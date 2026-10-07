import { portfolioData } from '../data/portfolioData';
import { Mark } from './Hand';

const Contact = () => {
    const { name, email, github, linkedin, status, resumePrimaryUrl } = portfolioData.personalInfo;

    return (
        <footer id="contact" className="section contact">
            <h2 className="contact-title hand">Say hi!</h2>
            <p className="contact-lede">
                Hiring for an AI or ML role, or have a system that needs building? Email is the fastest way to reach me.
            </p>
            <p className="contact-mail">
                <a href={`mailto:${email}`}>
                    <Mark type="highlight">{email}</Mark>
                </a>
            </p>
            <p className="entry-links">
                <a href={github} target="_blank" rel="noopener noreferrer" className="pen-link hand">GitHub →</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="pen-link hand">LinkedIn →</a>
                <a href={resumePrimaryUrl} target="_blank" rel="noopener noreferrer" className="pen-link hand">Résumé →</a>
            </p>
            <p className="colophon">
                <span>© {new Date().getFullYear()} {name}</span>
                <span className="hand">{status.toLowerCase()} ✓</span>
            </p>
        </footer>
    );
};

export default Contact;
