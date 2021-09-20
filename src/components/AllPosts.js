import React from "react";
// import { graphql } from "gatsby";

import Seo from "./Seo";
import PostBrief from "./PostBrief";

export default function AllPosts({ blogListData }) {
    return (
        <div className="global-wrapper">
            <Seo title="All posts" />
            <ol style={{ listStyle: `none` }}>
                {blogListData.map(post => {
                    const title = post.frontmatter.title;
                    const slug = post.fields.slug;
                    const description = post.frontmatter.description;
                    return (
                        <li key={post.fields.slug}>
                            <PostBrief title={title} slug={slug} description={description} />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}


