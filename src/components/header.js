/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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
    <div
      css={{
        background: 'var(--header-background)',
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
              color: 'var(--white)',
              textShadow: 'var(--white) 0.5px 0.5px 2px',
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
              fontStyle: 'italic',
              textDecoration: 'none',
              textShadow: path.includes('/about')
                ? 'var(--white) 0 0 4px'
                : 'var(--background) 0 0 4px',
              ':focus': {
                textDecoration: 'revert',
              },
              ':hover': {
                textDecoration: 'revert',
              },
            }}
            style={{ color: 'var(--white)' }}
          >
            about
          </Link>
        </nav>
      </StyledHeader>
    </div>
  );
};

export default Header;
