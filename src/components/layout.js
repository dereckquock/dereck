import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ path, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <main className="contents">
          <Header siteTitle={data.site.siteMetadata.title} path={path} />
          <div
            css={{
              margin: '0 auto',
              maxWidth: 800,
              padding: '0 1.5rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </main>
      )}
    />
  );
};

export default Layout;
