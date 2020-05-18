import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Heading from '../components/heading';

function App(props) {
  // get blog posts, which always contain a date 📅
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
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
              date(formatString: "MMMM DD, YYYY")
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
      <p css={{ maxWidth: '45rem' }}>
        I do full stack development and I love building things that help people.{' '}
        <Link to="/about">Find out more about me here</Link>. 🍻🍻🍻 Cheers!
      </p>
      <hr />
      <div css={{ margin: 'auto', textAlign: 'center' }}>
        {edges.map(({ node: { timeToRead, frontmatter } }) => {
          const { slug, image, title, description, date } = frontmatter;
          const { childImageSharp: { fluid } = {} } = image || {};

          return (
            <div key={slug} css={{ padding: '1.5rem 0 1rem' }}>
              <h3 css={{ marginBottom: 0 }}>
                <Link
                  to={`/${slug}`}
                  className="post"
                  css={{
                    width: '100%',
                    display: 'inline-block',
                    fontWeight: 700,
                    textDecoration: 'none',

                    ':hover .post-image': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {fluid && (
                    <Image
                      fluid={fluid}
                      className="post-image"
                      css={{
                        maxWidth: '20rem',
                        margin: 'auto',
                        marginBottom: '1rem',
                        borderRadius: 8,
                        transform: 'scale(1)',
                        transition:
                          'transform 0.25s cubic-bezier(0, -0.55, 0.25, 2) 0s',
                      }}
                    />
                  )}
                  {title}
                </Link>
              </h3>
              {description && (
                <p css={{ maxWidth: '26rem', margin: '0.333rem auto 0' }}>
                  {description}
                </p>
              )}
              <div css={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
                <time>{date}</time>
                {timeToRead && <span> • {timeToRead} min read</span>}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default App;
