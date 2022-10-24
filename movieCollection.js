// title :: Movie -> String
function title(movie) {
  return movie.title;
}

// isInfixOf :: (String, String) -> Bool
function isInfixOf(query, string) {
  return string.includes(query);
}

// matches :: (String, Movie) -> Bool
function matches(query, movie) {
  return isInfixOf(query, title(movie));
}

// addIfMatches :: (String, Movie, [Movie]) -> ()
// FIXME: side-effect
function addIfMatches(query, movie, result) {
  if (matches(query, movie)) {
    result.push(movie);
  }
}

// findByTitle :: (String, [Movie]) -> [Movie]
function findByTitle(query, collection) {
  let result = [];
  for (const movie of collection) {
    addIfMatches(query, movie, result);
  }
  return result;
}

export default findByTitle;
