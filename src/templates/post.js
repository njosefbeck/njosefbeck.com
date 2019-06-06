import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { DiscussionEmbed } from "disqus-react";
import Layout from "../components/layout";
import CTA from "../components/cta";
import './post.scss';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  const url = `${data.site.siteMetadata.siteUrl}${post.frontmatter.slug}`;
  const disqusShortname = 'njosefbeck';
  const disqusConfig = {
    url,
    identifier: post.frontmatter.slug,
    title: post.frontmatter.title,
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | njosefbeck</title>
        <meta name="description" content={post.frontmatter.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.description} />
        <meta property="og:site_name" content="njosefbeck" />
        <meta property="twitter:site" content="@njosefbeck" />
      </Helmet>
      <article className="post">
        <h1>{post.frontmatter.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <CTA>
          <p>What to see more of this kind of content? Let me know in the comments or <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/njosefbeck">reach out on Twitter</a>!</p>
        </CTA>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </article>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
        date
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;