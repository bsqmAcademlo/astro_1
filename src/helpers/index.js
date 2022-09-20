function parseUrl(str) {
    return str.toLowerCase().split(" ").join("-");
}

export { parseUrl };
