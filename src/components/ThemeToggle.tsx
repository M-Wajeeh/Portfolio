import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
                background: 'none',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-sm)',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-mute)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-mute)'; }}
        >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
        </button>
    );
};

export default ThemeToggle;
