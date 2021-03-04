import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
import DarkModeToggle from './dark-mode-toggle';

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 800;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ siteTitle = '', path }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          css={{
            background:
              'linear-gradient(0deg, var(--background) 0%, var(--gold) 100%)',
            marginBottom: '1.45rem',
          }}
        >
          <StyledHeader>
            <Link
              to="/"
              css={{
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <h1
                css={{
                  margin: 0,
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: 'var(--text)',
                }}
              >
                {siteTitle}
              </h1>
            </Link>
            <nav css={{ display: 'flex', alignItems: 'center' }}>
              <Link
                to="/about"
                css={{
                  height: '2rem',
                  marginRight: '0.5rem',
                  padding: '0 0.5rem',
                  display: 'inline-block',
                  lineHeight: '1.778rem',
                  textDecoration: 'none',
                  textShadow: path.includes('/about') ? '0 0 4px' : '0',
                  ':focus': {
                    textDecoration: 'revert',
                  },
                  ':hover': {
                    textDecoration: 'revert',
                  },
                }}
                style={{ color: 'var(--text)' }}
              >
                about
              </Link>
              <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            </nav>
          </StyledHeader>
        </div>
      )}
    </ThemeToggler>
  );
};

export default Header;
