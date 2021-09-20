function relativePath(path){
    const url = new URL(path);
    return url.pathname;
}
export {
    relativePath,
}