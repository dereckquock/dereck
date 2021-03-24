/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

function Avatar() {
  const {
    logo: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Image
      fluid={fluid}
      css={{
        width: '6rem',
        height: '6rem',
        flexShrink: 0,
        borderRadius: 50,
      }}
    />
  );
}

export default Avatar;
