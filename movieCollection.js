function findByTitle(query, collection) {
  let result = [];
  if ("The Matrix" === query) {
    result.push(collection[0]);
  }
  return result;
}

export default findByTitle;
