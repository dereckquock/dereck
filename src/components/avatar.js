/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function Avatar() {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.logo.childImageSharp.gatsbyImageData}
      css={{
        width: '6rem',
        height: '6rem',
        flexShrink: 0,
        borderRadius: '3rem',
      }}
    />
  );
}

export default Avatar;
