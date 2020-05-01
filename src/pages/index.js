import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Heading from '../components/Heading';

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
                  fluid(maxWidth: 300) {
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
      <p style={{ maxWidth: '45rem' }}>
        I do full stack development and I love building things that help people.
        Find out more about me <Link to="/about">here</Link>. 🍻🍻🍻 Cheers!
      </p>
      <hr />
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        {edges.map(({ node: { timeToRead, frontmatter } }) => {
          const { slug, image, title, description, date } = frontmatter;
          const { childImageSharp: { fluid } = {} } = image || {};

          return (
            <div key={slug} style={{ padding: '1.5rem 0 1rem' }}>
              <h3 style={{ marginBottom: 0 }}>
                <Link
                  to={`/${slug}`}
                  className="post"
                  style={{
                    display: 'inline-block',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {fluid && (
                    <Image
                      fluid={fluid}
                      style={{
                        maxWidth: '20rem',
                        margin: 'auto',
                        marginBottom: '1rem',
                        borderRadius: 8,
                      }}
                    />
                  )}
                  {title}
                </Link>
              </h3>
              {description && (
                <p style={{ margin: '0.333rem 0 0' }}>{description}</p>
              )}
              <div style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
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
