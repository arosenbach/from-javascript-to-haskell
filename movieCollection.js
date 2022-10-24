function title(movie) {
  return movie.title;
}

function isInfixOf(query, string) {
  return string.includes(query);
}

function matches(query, movie) {
  return isInfixOf(query, title(movie));
}

function addIfMatches(query, movie, result) {
  if (matches(query, movie)) {
    result.push(movie);
  }
}

function findByTitle(query, collection) {
  let result = [];
  for (const movie of collection) {
    addIfMatches(query, movie, result);
  }
  return result;
}

export default findByTitle;
