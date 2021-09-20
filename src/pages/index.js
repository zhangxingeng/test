import React from "react";
import { graphql, Link } from 'gatsby';

import PostList from "../components/PostList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class BlogIndex extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    // const siteTitle = data.site.siteMetadata.title;
    const blogListData = data.allMdx.nodes;
    const localSearchBlog = data.localSearchBlog;

    return (
      <div className="global-wrapper">
        <Header />
        <PostList posts={blogListData} localSearchBlog={localSearchBlog} navigate={navigate} location={location}/>
        <Link to="/">Go Home</Link>
        <Footer />
      </div>
    );
  }
}


export const pageQuery = graphql`query 
{
  site {
      siteMetadata {
        title
      }
  }
  localSearchBlog {
      index
      store
  }
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
}
`
