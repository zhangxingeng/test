// import React from "react";
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"


// export default function Bio() {
//   const data = useStaticQuery(graphql`query BioQuery {
//     site {siteMetadata {
//         author { name summary }
//         social { twitter }
//         }}}`)

//   const author = data.site.siteMetadata?.author
//   const social = data.site.siteMetadata?.social

//   return (
//     <div className="bio">
//       <Link to="/"><h2 className="author">{author?.name || null}</h2></Link>
//       <Link to="/"><StaticImage className="avatar" layout="fixed" formats={["AUTO", "WEBP", "AVIF"]} src="../images/profile-pic.png" width={50} height={50} quality={95} alt="Profile picture" /></Link>
//       {author?.name && (
//         <p className="summary">
//           {author?.summary || null}
//           <a href={`${social?.twitter}`}>Follow on Twitter</a>
//         </p>)}
//     </div>
//   );
// }