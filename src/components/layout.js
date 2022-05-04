/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from './footer';
import Header from './header';
import './layout.css';

const Layout = ({ path, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <Header siteTitle={data.site.siteMetadata.title} path={path} />
      <div
        css={{
          margin: '0 auto',
          maxWidth: 1024,
          padding: '0 1.5rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
