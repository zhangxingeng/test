import React, { useState } from "react";
// import { Link } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string"
import AllPosts from "./AllPosts";
import SearchedList from "./SearchedList";
import {relativePath} from "../components/_helper_scripts";

export default function PostList({ posts, localSearchBlog, location, navigate }) {
    const { search } = queryString.parse(location.search);
    const [query, setQuery] = useState(search || "");
    const results = useFlexSearch(query, localSearchBlog.index, localSearchBlog.store);
    const path = relativePath(location.href)
    return (
        <div className={"post_list"}>
            <div>
                <input id="searchBox" type="search" placeholder="Search all posts" value={query}
                    onChange={e => {
                        navigate(e.target.value ? `${path}?search=${e.target.value}` : path);
                        setQuery(e.target.value);
                    }} /> 
            </div>
            {query ? <SearchedList results={results} /> : <AllPosts blogListData={posts} />}
        </div>
    );
}