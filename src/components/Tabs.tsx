import { portfolioData } from '../data/portfolioData';

const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Say hi' },
];

/** Notebook index tabs on wide screens; a plain strip on small ones. */
const Tabs = () => {
    const { shortName, resumePrimaryUrl } = portfolioData.personalInfo;
    return (
        <>
            <nav className="tabs" aria-label="Sections">
                {tabs.map((t, i) => (
                    <a key={t.id} href={`#${t.id}`} className={`tab tab--${i}`}>{t.label}</a>
                ))}
            </nav>
            <header className="strip">
                <a href="#top" className="strip-name">{shortName}</a>
                <nav aria-label="Sections">
                    {tabs.map(t => <a key={t.id} href={`#${t.id}`}>{t.label}</a>)}
                    <a href={resumePrimaryUrl} target="_blank" rel="noopener noreferrer">Résumé</a>
                </nav>
            </header>
        </>
    );
};

export default Tabs;
