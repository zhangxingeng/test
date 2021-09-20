import React from "react";
import {Link} from "gatsby";

export default function PostBrief({ title, slug, description }) {
  return (
    <article className="post-list-item" itemScope itemType="http://schema.org/Article">
      <header>
        <h2><Link to={slug} itemProp="url"><span itemProp="headline">{title}</span></Link></h2>
      </header>
      <section>
        <p dangerouslySetInnerHTML={{ __html: description }} itemProp="description" />
      </section>
    </article>
  );
}