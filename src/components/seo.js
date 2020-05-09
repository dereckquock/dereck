import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';

function SEO(props) {
  const { description, lang, meta, keywords, title, image } = props;
  const { pathname } = useLocation();
  const data = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      defaultImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { siteUrl } = data.site.siteMetadata;
  const metaDescription = description || data.site.siteMetadata.description;
  const {
    childImageSharp: {
      fluid: { src: defaultImage },
    },
  } = data.defaultImage;
  const metaImage = `${siteUrl}${image || defaultImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'image',
          content: metaImage,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:url',
          content: `${siteUrl}${pathname}`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'twitter:image',
          content: metaImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;
