import { portfolioData, Project } from '../data/portfolioData';
import { Mark, Sketch, Doodle } from './Hand';

const Entry = ({ p, n }: { p: Project; n: number }) => {
    const href = p.storeUrl || p.githubUrl;

    return (
        <article className="entry">
            <div className="entry-main">
                <p className="entry-cat">{p.category}</p>
                <h3 className="entry-title hand">
                    <span className="entry-n">#{n}</span>
                    {p.logoImg && <img src={p.logoImg} alt="" className="entry-logo" />}
                    {p.title}
                    {p.status && <span className="entry-status hand">{p.status}</span>}
                </h3>
                <p className="entry-sum">{p.summary}</p>

                <Sketch steps={p.pipeline} loopTo={p.loopTo} seed={n * 7 + 3} label={p.title} />

                {p.shots && (
                    <div className="shots">
                        {p.shots.map(shot => (
                            <figure key={shot.src} className="taped taped--shot">
                                <img src={shot.src} alt={shot.alt} loading="lazy" width={960} height={600} />
                            </figure>
                        ))}
                    </div>
                )}

                {p.highlights && p.highlights.length > 0 && (
                    <ul className="checks">
                        {p.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                )}

                <p className="tools"><span className="hand">tools:</span> {p.tags.join(', ')}</p>
                {p.role && <p className="tools"><span className="hand">role:</span> {p.role}</p>}

                <p className="entry-links">
                    {p.page && (
                        <a href={`/extensions/${p.page.slug}/`} className="pen-link hand">read the full entry →</a>
                    )}
                    {href && (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="pen-link hand">
                            {p.storeUrl ? 'see it in the store →' : 'read the code →'}
                        </a>
                    )}
                    {p.repos?.map(r => (
                        <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="pen-link hand">
                            {r.label} code →
                        </a>
                    ))}
                    {p.privacyUrl && (
                        <a href={p.privacyUrl} target="_blank" rel="noopener noreferrer" className="pen-link hand">privacy policy →</a>
                    )}
                </p>
            </div>

            <aside className="margin-note hand">
                <Doodle kind="arrow-left" />
                {p.note}
            </aside>
        </article>
    );
};

const Projects = () => {
    const { aiProjects, extensionProjects } = portfolioData;

    return (
        <section id="work" className="section">
            <h2 className="section-title hand">
                <Mark type="underline">Things I've built</Mark>
            </h2>
            <p className="section-lede">
                Each one with a quick sketch of how it works.
            </p>

            {aiProjects.map((p, i) => <Entry key={p.title} p={p} n={i + 1} />)}

            <h3 className="subsection hand">
                <Mark type="box" padding={6}>Side quests: browser extensions</Mark>
            </h3>
            <p className="section-lede">
                I also build Chrome extensions on my own: {extensionProjects.map(p => p.title).join(', ').replace(/, ([^,]*)$/, ' and $1')}.
            </p>
            <p className="entry-links">
                <a href="/extensions/" className="pen-link hand">see the extensions →</a>
            </p>
        </section>
    );
};

export default Projects;
