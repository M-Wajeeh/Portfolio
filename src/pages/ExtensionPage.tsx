import { portfolioData } from '../data/portfolioData';
import Tabs from '../components/Tabs';
import Contact from '../components/Contact';
import { Mark, Sketch, Doodle } from '../components/Hand';

/** A browser extension's full notebook entry: what it is, a day with it, and what it asks Chrome for. */
const ExtensionPage = ({ slug }: { slug: string }) => {
    const p = portfolioData.extensionProjects.find(x => x.page?.slug === slug);
    if (!p?.page) throw new Error(`No extension page for "${slug}"`);
    const { steps, permissions, privacy, stamp } = p.page;

    return (
        <>
            <a href="#main" className="skip">Skip to content</a>
            <Tabs home={false} />
            <div className="notebook">
                <main id="main">
                    <header id="top" className="xp-head">
                        <div>
                            <a href="/#work" className="back hand">← back to the notebook</a>
                            <p className="entry-cat">{p.category}</p>
                            <h1 className="xp-title hand">
                                {p.logoImg && <img src={p.logoImg} alt="" className="xp-logo" width={128} height={128} />}
                                {p.title}
                                {p.status && <span className="entry-status hand">{p.status}</span>}
                            </h1>
                            <p className="xp-sum">{p.summary}</p>
                            <p className="tools"><span className="hand">tools:</span> {p.tags.join(', ')}</p>
                            {p.role && <p className="tools"><span className="hand">role:</span> {p.role}</p>}
                        </div>

                        <aside className="xp-side">
                            <div className="sticky">
                                <p className="hand">try it:</p>
                                {p.storeUrl
                                    ? <a href={p.storeUrl} target="_blank" rel="noopener noreferrer" className="hand">→ add it to Chrome</a>
                                    : <p className="hand sticky-wait">in review at the Chrome Web Store</p>}
                                {p.privacyUrl && <a href={p.privacyUrl} className="hand">→ privacy policy</a>}
                            </div>
                            <p className="note xp-note hand">
                                <Doodle kind="arrow-down-left" />
                                {p.note}
                            </p>
                        </aside>
                    </header>

                    <section className="section" aria-labelledby="how">
                        <h2 id="how" className="section-title hand">
                            <Mark type="underline">How it works</Mark>
                        </h2>
                        <Sketch steps={p.pipeline} loopTo={p.loopTo} seed={17} label={p.title} />
                        {p.highlights && (
                            <ul className="checks">
                                {p.highlights.map(h => <li key={h}>{h}</li>)}
                            </ul>
                        )}
                    </section>

                    <section className="section" aria-labelledby="day">
                        <h2 id="day" className="section-title hand">
                            <Mark type="underline">How a day goes</Mark>
                        </h2>
                        <ol className="walk">
                            {steps.map((s, i) => (
                                <li key={s.title} className={s.shot ? 'walk-step' : 'walk-step walk-step--text'}>
                                    {s.shot && (
                                        <figure className="taped taped--shot">
                                            <img src={s.shot.src} alt={s.shot.alt} loading={i < 2 ? 'eager' : 'lazy'} width={s.shot.width ?? 960} height={s.shot.height ?? 600} />
                                        </figure>
                                    )}
                                    <div className="walk-text">
                                        <h3 className="walk-title hand">
                                            <span className="entry-n">{i + 1}.</span> {s.title}
                                        </h3>
                                        <p>{s.text}</p>
                                        {s.note && <p className="walk-note hand">{s.note}</p>}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="section" aria-labelledby="privacy">
                        <h2 id="privacy" className="section-title hand">
                            <Mark type="underline">What it asks Chrome for</Mark>
                        </h2>
                        <div className="xp-privacy">
                            <p className="section-lede">{privacy}</p>
                            {stamp && (
                                <div className="stamp stamp--inline" role="img" aria-label={`Stamp: ${stamp.join(' ')}`}>
                                    <span>{stamp[0]}</span>
                                    <b>{stamp[1]}</b>
                                    <span>{stamp[2]}</span>
                                </div>
                            )}
                        </div>
                        {permissions && (
                            <dl className="index-card perms">
                                {permissions.map(x => (
                                    <div key={x.name}>
                                        <dt className="hand">{x.name}</dt>
                                        <dd>{x.why}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                        <p className="entry-links">
                            {p.privacyUrl && <a href={p.privacyUrl} className="pen-link hand">read the full privacy policy →</a>}
                            {p.storeUrl && (
                                <a href={p.storeUrl} target="_blank" rel="noopener noreferrer" className="pen-link hand">see it in the store →</a>
                            )}
                        </p>
                    </section>
                </main>
                <Contact />
            </div>
        </>
    );
};

export default ExtensionPage;
