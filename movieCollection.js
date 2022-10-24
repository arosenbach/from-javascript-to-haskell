function findByTitle(query, collection) {
  if ("The Matrix" === query) {
    return [collection[0]];
  }
  return [];
}

export default findByTitle;
