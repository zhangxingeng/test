import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "katex/dist/katex.min.css";


export default function BlogPostTemplate({ data, location }) {
  const post = data.allMdx.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const previous = data.previous.nodes[0];
  const next = data.next.nodes[0];

  return (
    <div location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer><hr />
      </article>
      <nav className="blog-post-nav">
        <ul>
          <li>{previous && (<Link to={"/" + previous.slug} rel="prev">Previous: {previous.frontmatter.title}</Link>)}</li>
          <li>{next && (<Link to={"/" + next.slug} rel="next">Next: {next.frontmatter.title}</Link>)}</li>
        </ul>
      </nav>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {id: {eq: $id}}) {
      nodes {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
    previous: allMdx(filter: {id: {eq: $previousPostId}}) {
      nodes {
        id
        frontmatter {
          title
        }
        slug
      }
    }
    next: allMdx(filter: {id: {eq: $nextPostId}}) {
      nodes {
        id
        frontmatter {
          title
        }
        slug
      }
    }
  }
`
