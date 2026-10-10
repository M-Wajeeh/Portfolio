import { portfolioData } from '../data/portfolioData';
import Tabs from '../components/Tabs';
import Contact from '../components/Contact';
import { Mark } from '../components/Hand';

/** Every browser extension on one page, each leading to its full entry when it has one. */
const ExtensionsIndex = () => (
    <>
        <a href="#main" className="skip">Skip to content</a>
        <Tabs home={false} />
        <div className="notebook">
            <main id="main">
                <header id="top" className="xp-index-head">
                    <a href="/#work" className="back hand">← back to the notebook</a>
                    <h1 className="section-title hand">
                        <Mark type="underline">Browser extensions</Mark>
                    </h1>
                    <p className="section-lede">
                        Side quests next to the AI work: Chrome extensions I designed, built and published on my own.
                    </p>
                </header>

                <ol className="walk">
                    {portfolioData.extensionProjects.map((p, i) => {
                        // a walkthrough shot when there is one: those are cropped free of store headings
                        const shot = p.page?.steps.find(s => s.shot)?.shot ?? p.shots?.[0];
                        const page = p.page && `/extensions/${p.page.slug}/`;
                        return (
                            <li key={p.title} className={shot ? 'walk-step' : 'walk-step walk-step--text'}>
                                {shot && (
                                    <figure className="taped taped--shot">
                                        <img src={shot.src} alt={shot.alt} loading={i < 2 ? 'eager' : 'lazy'} width={shot.width ?? 960} height={shot.height ?? 600} />
                                    </figure>
                                )}
                                <div className="walk-text">
                                    <p className="entry-cat">{p.category}</p>
                                    <h2 className="walk-title shelf-title hand">
                                        {p.logoImg && <img src={p.logoImg} alt="" className="entry-logo" width={128} height={128} />}
                                        {page ? <a href={page}>{p.title}</a> : p.title}
                                        {p.status && <span className="entry-status hand">{p.status}</span>}
                                    </h2>
                                    <p>{p.summary}</p>
                                    <p className="entry-links">
                                        {page && <a href={page} className="pen-link hand">read the full entry →</a>}
                                        {p.storeUrl && (
                                            <a href={p.storeUrl} target="_blank" rel="noopener noreferrer" className="pen-link hand">see it in the store →</a>
                                        )}
                                        {p.privacyUrl && <a href={p.privacyUrl} className="pen-link hand">privacy policy →</a>}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </main>
            <Contact />
        </div>
    </>
);

export default ExtensionsIndex;
