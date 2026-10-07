import { portfolioData } from '../data/portfolioData';
import { Mark } from './Hand';

const Experience = () => (
    <section id="experience" className="section">
        <h2 className="section-title hand">
            <Mark type="underline">Where I've been</Mark>
        </h2>

        <ol className="timeline">
            {portfolioData.experience.map(x => (
                <li key={x.id} className={`tl${x.featured ? ' tl--win' : ''}`}>
                    <p className="tl-when hand">{x.period}</p>
                    <div>
                        <p className="tl-type">{x.type}</p>
                        <h3 className="tl-title">
                            {x.featured ? <Mark type="highlight">{x.title}</Mark> : x.title}
                        </h3>
                        <p className="tl-org">{x.company}</p>
                        <ul className="tl-points">
                            {x.points.map(pt => <li key={pt}>{pt}</li>)}
                        </ul>
                        {x.featured && (
                            <p className="note note--win hand">
                                out of <Mark type="circle" padding={8} delay={400}>580+ applicants</Mark>, we came first!
                            </p>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    </section>
);

export default Experience;
