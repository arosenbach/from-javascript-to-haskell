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

// addIf :: ((String, Movie) -> Bool, String, Movie, (Movie) -> ()) -> ()
// FIXME: side-effect
function addIf(predicate, query, movie, add) {
  if (predicate(query, movie)) {
    add(movie);
  }
}

// findByTitle :: (String, [Movie]) -> [Movie]
function findByTitle(query, collection) {
  let result = [];
  const predicate = matches;
  const add = function add(movie) {
    result.push(movie);
  };
  for (const movie of collection) {
    // FIXME: complicated :(
    addIf(predicate, query, movie, add);
  }
  return result;
}

export default findByTitle;
