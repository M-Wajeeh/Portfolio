import { portfolioData } from '../data/portfolioData';
import { Mark } from './Hand';

const About = () => {
    const { bio, github, linkedin } = portfolioData.personalInfo;
    const [lead, ...rest] = bio;

    return (
        <section id="about" className="section">
            <h2 className="section-title hand">
                <Mark type="underline">About me</Mark>
            </h2>
            <div className="about">
                <p className="about-lead">{lead}</p>
                {rest.map(p => <p key={p}>{p}</p>)}
                <p className="entry-links">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="pen-link hand">GitHub →</a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="pen-link hand">LinkedIn →</a>
                </p>
            </div>
        </section>
    );
};

export default About;
