import { Link } from 'gatsby';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import VisuallyHidden from '@reach/visually-hidden';

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
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link
              to="/"
              style={{
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: '1.125rem',
                  color: 'var(--text)',
                }}
              >
                {siteTitle}
              </h1>
            </Link>
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Link
                to="/about"
                style={{
                  height: '2rem',
                  marginRight: '0.5rem',
                  padding: '0 0.5rem',
                  display: 'inline-block',
                  lineHeight: '1.778rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  textShadow: path.includes('/about') ? '0 0 4px' : '0',
                }}
              >
                about
              </Link>
              <label
                htmlFor="dark-mode-toggle"
                className="dark-mode-toggle"
                style={{
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.111rem',
                  lineHeight: '1.778rem',
                  border: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <VisuallyHidden>
                  <input
                    type="checkbox"
                    id="dark-mode-toggle"
                    value={theme === 'dark'}
                    onChange={() =>
                      toggleTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  />
                </VisuallyHidden>
                <span>{theme === 'dark' ? '🔆' : '🌙'}</span>
              </label>
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
