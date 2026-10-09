import { portfolioData } from '../data/portfolioData';

const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Say hi' },
];

/**
 * Notebook index tabs on wide screens; a plain strip on small ones.
 * Off the homepage, tabs lead back into it; "Say hi" stays on the page, since every page ends with it.
 */
const Tabs = ({ home = true }: { home?: boolean }) => {
    const { shortName, resumePrimaryUrl } = portfolioData.personalInfo;
    const href = (id: string) => (home || id === 'contact' ? `#${id}` : `/#${id}`);
    return (
        <>
            <nav className="tabs" aria-label="Sections">
                {tabs.map((t, i) => (
                    <a key={t.id} href={href(t.id)} className={`tab tab--${i}`}>{t.label}</a>
                ))}
            </nav>
            <header className="strip">
                <a href={home ? '#top' : '/'} className="strip-name">{shortName}</a>
                <nav aria-label="Sections">
                    {tabs.map(t => <a key={t.id} href={href(t.id)}>{t.label}</a>)}
                    <a href={resumePrimaryUrl} target="_blank" rel="noopener noreferrer">Résumé</a>
                </nav>
            </header>
        </>
    );
};

export default Tabs;
