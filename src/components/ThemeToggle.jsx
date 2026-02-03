import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{
                background: 'var(--hud-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--hud-border)',
                borderRadius: 'var(--radius-full)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--hud-border)';
            }}
        >
            {theme === 'light' ? (
                <Moon size={18} color="var(--color-primary)" />
            ) : (
                <Sun size={18} color="var(--color-accent-cyan)" />
            )}
        </button>
    );
};

export default ThemeToggle;
