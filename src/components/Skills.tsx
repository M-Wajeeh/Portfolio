import { portfolioData } from '../data/portfolioData';
import { Mark } from './Hand';

const Skills = () => (
    <section id="skills" className="section">
        <h2 className="section-title hand">
            <Mark type="underline">My toolbox</Mark>
        </h2>
        <dl className="toolbox">
            {portfolioData.skills.map(cat => (
                <div key={cat.title}>
                    <dt className="hand">{cat.title}</dt>
                    <dd>{cat.skills.join(', ')}</dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Skills;
