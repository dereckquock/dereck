import { Link } from 'gatsby';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Header = ({ siteTitle, path }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          style={{
            background:
              'linear-gradient(.49turn, var(--gold) 0%, var(--background) 55%)',
            marginBottom: '1.45rem',
          }}
        >
          <header
            style={{
              margin: '0 auto',
              maxWidth: 800,
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1
              style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.125rem',
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <nav style={{ fontSize: '1rem' }}>
              <Link
                to="/about"
                style={{
                  marginRight: '0.5rem',
                  padding: '0.2rem 0.5rem',
                  display: 'inline-block',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  borderBottom: path.includes('/about')
                    ? '2px solid var(--text)'
                    : '0',
                }}
              >
                about
              </Link>
              <button
                style={{
                  border: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? '🔆' : '🌙'}
              </button>
            </nav>
          </header>
        </div>
      )}
    </ThemeToggler>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
