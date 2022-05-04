/** @jsx jsx */
import { jsx } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from './code';
import Layout from './layout';
import SEO from './seo';

function Pre(props) {
  return <div {...props} />;
}

// Provide common components here so that they're globally available
const components = {
  code: Code,
  Link,
  pre: Pre,
};

export default function PageTemplate({ path, data: { mdx } }) {
  const { body, timeToRead, frontmatter } = mdx;
  const { image, imageAuthor, imageAuthorUrl, title } = frontmatter;
  const { childImageSharp: { fluid } = {} } = image || {};

  return (
    <Layout path={path}>
      <SEO {...frontmatter} isPost image={fluid.src} />

      <article>
        <h1>{title}</h1>
        <div
          css={{
            marginTop: '-1.25rem',
            marginBottom: '1.5rem',
            fontSize: '0.75rem',
            fontStyle: 'italic',
          }}
        >
          {timeToRead && <span> • {timeToRead} min read</span>}
        </div>
        {fluid && (
          <div css={{ marginBottom: '1rem' }}>
            <Image fluid={fluid} css={{ borderRadius: 8 }} />
            {imageAuthor && (
              <div css={{ fontSize: '0.75rem', textAlign: 'right' }}>
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
      <hr />
      <footer>
        <blockquote css={{ margin: 0 }}>
          <a
            href={`https://github.com/dereckquock/dereck/blob/master/src/posts${path}/index.mdx`}
            target="_blank"
            rel="noopener noreferrer"
            css={{ fontSize: '0.7778rem' }}
          >
            Edit this post on GitHub
          </a>
        </blockquote>
      </footer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAuthor
        imageAuthorUrl
        title
        description
        keywords
      }
    }
  }
`;
