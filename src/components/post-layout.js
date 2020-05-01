import React, { Suspense } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Code from '../components/code';

const Counter = React.lazy(() => import('./counter'));
const BlinkingDot = React.lazy(() => import('./blinking-dot'));
const StickyButton = React.lazy(() => import('./sticky-button'));

// Provide common components here so that they're globally available
const components = {
  BlinkingDot,
  code: Code,
  Counter,
  Link,
  pre: (props) => <div {...props} />,
  StickyButton,
  Suspense,
};

export default function PageTemplate({ data: { mdx } }) {
  const { slug, body, timeToRead, frontmatter } = mdx;
  const { image, imageAuthor, imageAuthorUrl, title, date } = frontmatter;
  const { childImageSharp: { fluid } = {} } = image || {};

  return (
    <Layout path={`/${slug}`}>
      <SEO {...frontmatter} />

      <article>
        <h1>{title}</h1>
        <div
          style={{
            marginTop: '-1.25rem',
            marginBottom: '1.5rem',
            fontSize: '0.75rem',
            fontStyle: 'italic',
          }}
        >
          <time>{date}</time>
          {timeToRead && <span> • {timeToRead} min read</span>}
        </div>
        {fluid && (
          <div style={{ marginBottom: '1rem' }}>
            <Image fluid={fluid} style={{ borderRadius: 8 }} />
            {imageAuthor && (
              <div style={{ fontSize: '0.75rem', textAlign: 'right' }}>
                Photo by{' '}
                <a
                  href={imageAuthorUrl}
                  alt={imageAuthor}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {imageAuthor}
                </a>
              </div>
            )}
          </div>
        )}
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAuthor
        imageAuthorUrl
        title
        description
        keywords
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
