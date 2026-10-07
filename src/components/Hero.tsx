import { portfolioData } from '../data/portfolioData';
import portrait from '../assets/portrait.webp';
import { Mark, Doodle } from './Hand';

const Hero = () => {
    const { shortName, name, role, intro, resumePrimaryUrl, resumePrimaryLabel, resumeSecondaryUrl, resumeSecondaryLabel } = portfolioData.personalInfo;

    return (
        <section id="top" className="cover">
            <div className="cover-text">
                <p className="cover-label hand">{shortName}'s notebook · {role}</p>
                <h1 className="cover-title hand">
                    Hi, I'm Wajeeh.
                    <span>I build ML systems that <Mark type="underline" delay={500}>actually ship.</Mark></span>
                </h1>
                <p className="cover-intro">
                    <strong>{name}.</strong> {intro}
                </p>

                <dl className="index-card">
                    {portfolioData.facts.map(f => (
                        <div key={f.label}>
                            <dt className="hand">{f.label}</dt>
                            <dd>{f.label === 'Record' ? <Mark type="highlight" delay={900}>{f.value}</Mark> : f.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="cover-side">
                <figure className="taped">
                    <img src={portrait} alt={`Photo of ${name}`} width={516} height={645} />
                </figure>
                <p className="note note--me hand" aria-hidden="true">
                    that's me
                    <Doodle kind="arrow-right" />
                </p>

                <div className="stamp" role="img" aria-label="Stamp: 1st place, Vyrothon 2026, out of 580+ applicants">
                    <span>1st place</span>
                    <b>Vyrothon</b>
                    <span>2026 · 580+</span>
                </div>

                <div className="sticky">
                    <p className="hand">grab my résumé:</p>
                    <a href={resumePrimaryUrl} target="_blank" rel="noopener noreferrer" className="hand">→ {resumePrimaryLabel}</a>
                    {resumeSecondaryUrl && (
                        <a href={resumeSecondaryUrl} target="_blank" rel="noopener noreferrer" className="hand">→ {resumeSecondaryLabel}</a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
