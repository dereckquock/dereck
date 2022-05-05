import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

function SEO(props) {
  const {
    description,
    image,
    isPost = false,
    keywords = [],
    lang = 'en',
    meta = [],
    title,
  } = props;
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
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `);

  const { siteUrl } = data.site.siteMetadata;
  const url = `${siteUrl}${pathname}`;
  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage = `${siteUrl}${
    image || data.defaultImage.childImageSharp.gatsbyImageData.src
  }`;
  const structuredData = isPost
    ? `
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "url": "${url}",
      "author": {
        "@type": "Person",
        "name": "Dereck Quock"
      },
      "image": "${metaImage}",
      "headline": "${title}",
      "description": "${metaDescription}"
    }
  `
    : `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "url": "${url}",
      "givenName": "Dereck",
      "familyName": "Quock",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "djquock@gmail.com",
        "contactType": "Get in touch"
      }
    }
  `;

  return (
    <Helmet
      htmlAttributes={{ lang }}
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
          content: isPost ? 'article' : 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
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
          keywords && keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{structuredData}</script>
    </Helmet>
  );
}

export default SEO;
