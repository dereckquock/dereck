/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Heading from '../components/heading';
import Layout from '../components/layout';
import SEO from '../components/seo';

function App(props) {
  const {
    allMdx: { edges = [] },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(
        filter: { frontmatter: { date: { ne: null } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            timeToRead
            frontmatter {
              slug
              image {
                childImageSharp {
                  gatsbyImageData(width: 400, layout: CONSTRAINED)
                }
              }
              title
              description
              externalUrl
            }
          }
        }
      }
    }
  `);

  return (
    <Layout {...props}>
      <SEO title="Home" keywords={['dereck', 'quock', 'dereck quock']} />

      <Heading />
      <p>
        I love building things that help people.{' '}
        <Link to="/about">Find out more about me here</Link> 🍻🍻🍻 Cheers!
      </p>
      <hr />
      <div css={{ margin: 'auto', textAlign: 'center' }}>
        {edges.map(({ node: { timeToRead, frontmatter } }) => {
          const { slug, image, title, description, externalUrl } = frontmatter;

          return (
            <div key={slug} css={{ padding: '1.5rem 0 1rem' }}>
              <h2 css={{ marginBottom: 0 }}>
                <Link
                  to={externalUrl || `/${slug}`}
                  className="post"
                  css={{
                    width: '100%',
                    maxWidth: '40rem',
                    margin: 'auto',
                    display: 'inline-block',
                    fontWeight: 700,
                    textDecoration: 'none',

                    ':hover .post-image': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {image && (
                    <GatsbyImage
                      image={image.childImageSharp.gatsbyImageData}
                      alt={title}
                      className="post-image"
                      css={{
                        maxWidth: '20rem',
                        margin: 'auto',
                        marginBottom: '1rem',
                        display: 'block',
                        borderRadius: 8,
                        transform: 'scale(1)',
                        transition:
                          'transform 0.25s cubic-bezier(0, -0.55, 0.25, 2) 0s',
                      }}
                    />
                  )}
                  {title}
                </Link>
              </h2>
              {description && (
                <p css={{ maxWidth: '26rem', margin: '0.333rem auto 0' }}>
                  {description}
                </p>
              )}
              <div css={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
                {externalUrl ||
                  (timeToRead && <span>{timeToRead} min read</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default App;
