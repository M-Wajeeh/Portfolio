import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps { theme: string; toggleTheme: () => void; }

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const links = [
        { id: 'about', label: 'ORIGINS' },
        { id: 'skills', label: 'ARSENAL' },
        { id: 'projects', label: 'WORK' },
        { id: 'experience', label: 'JOURNEY' },
        { id: 'contact', label: 'CONNECT' },
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        >
            <div className="container nav-inner">
                <div className="nav-logo" onClick={() => scrollTo('home')}>MW<span className="dot">.</span></div>
                <div className="nav-links-desktop">
                    {links.map(l => (
                        <button key={l.id} onClick={() => scrollTo(l.id)} className="nav-link">{l.label}</button>
                    ))}
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <button className="nav-mob-btn" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div className="mob-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        {links.map(l => (
                            <button key={l.id} onClick={() => scrollTo(l.id)} className="mob-link">{l.label}</button>
                        ))}
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.5rem 0; transition: all 0.4s; }
                .nav--scrolled { padding: 0.75rem 0; background: var(--bg); border-bottom: 1px solid var(--border); }
                .nav-inner { display: flex; justify-content: space-between; align-items: center; }
                .nav-logo { font-size: 1.2rem; font-weight: 900; cursor: pointer; color: var(--text); letter-spacing: -0.02em; }
                .dot { color: var(--accent); }
                .nav-links-desktop { display: flex; align-items: center; gap: 2.5rem; }
                .nav-link {
                    background: none; border: none; font-size: 0.65rem; font-weight: 700;
                    color: var(--text-mute); cursor: pointer; letter-spacing: 0.15em;
                    transition: color 0.3s; font-family: inherit;
                }
                .nav-link:hover { color: var(--accent); }
                .nav-mob-btn {
                    display: none; background: none; border: 1px solid var(--border);
                    color: var(--text); width: 38px; height: 38px; align-items: center;
                    justify-content: center; cursor: pointer; border-radius: var(--r-sm);
                }
                .mob-menu {
                    position: absolute; top: 100%; left: 0; right: 0;
                    background: var(--bg); border-bottom: 1px solid var(--border);
                    padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;
                }
                .mob-link {
                    background: none; border: none; font-size: 0.8rem; font-weight: 700;
                    color: var(--text-sec); cursor: pointer; text-align: left;
                    letter-spacing: 0.1em; font-family: inherit;
                }
                @media (max-width: 768px) {
                    .nav-links-desktop { display: none !important; }
                    .nav-mob-btn { display: flex; }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
