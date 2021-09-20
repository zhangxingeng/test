import React from "react";
import PostBrief from "./PostBrief";

export default function SearchedList({ results }) {
    if (results.length > 0) {
        return (
            <ol style={{ listStyle: `none` }}>
                {results.map((result) => {
                    return (<li key={result.slug}><PostBrief title={result.title} slug={result.slug} description={result.description} /></li>);
                })}
            </ol>
        )
    } else {
        return (
            <p style={{ textAlign: "center" }}>
                Sorry, couldn't find any posts matching this search.
            </p>
        );
    }
}