import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'HOME' },
        { id: 'about', label: 'PERSPECTIVE' },
        { id: 'skills', label: 'STACK' },
        { id: 'projects', label: 'WORK' },
        { id: 'experience', label: 'LOOP' },
        { id: 'contact', label: 'SYNC' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            style={{
                position: 'fixed' as const,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
                transition: 'all 0.4s ease',
                background: isScrolled ? 'var(--color-bg-primary)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* Logo with Modern Typeface */}
                <div
                    onClick={() => scrollToSection('home')}
                    className="logo-minimal"
                    style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 900,
                        letterSpacing: '0.2em',
                        color: 'var(--color-text-primary)'
                    }}
                >
                    M_WAJEEH
                </div>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                }}
                    className="desktop-nav"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                            }}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="nav-active"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-12px',
                                        left: '50%',
                                        x: '-50%',
                                        width: '4px',
                                        height: '4px',
                                        background: 'var(--color-primary)',
                                        borderRadius: '50%',
                                    }}
                                />
                            )}
                        </button>
                    ))}
                    <div style={{ marginLeft: '1rem' }}>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-sm)',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute' as const,
                            top: '100%',
                            left: '0',
                            right: '0',
                            background: 'var(--color-bg-primary)',
                            borderBottom: '1px solid var(--color-border)',
                            padding: '2rem 1.5rem',
                            boxShadow: 'var(--shadow-lg)',
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        background: 'none',
                                        border: 'none',
                                        color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text-primary)',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div style={{ padding: '1rem 0', display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid var(--color-border)' }}>
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 968px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
