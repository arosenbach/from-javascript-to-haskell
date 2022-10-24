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

// addIf :: ((String, Movie) -> Bool, String, Movie, (Movie) -> ()) -> ((Movie) -> ())
function addIf(predicate, query, movie, add) {
  if (predicate(query, movie)) {
    return add;
  } else {
    return function doNothing(m) {};
  }
}

// findByTitle :: (String, [Movie]) -> [Movie]
function findByTitle(query, collection) {
  let result = [];
  const predicate = matches;
  // FIXME: side-effect
  // FIXME: "add" duplicated
  const add = function add(movie) {
    result.push(movie);
  };
  for (const movie of collection) {
    // FIXME: complicated :( ++++++++
    // FIXME: "movie" duplicated
    addIf(predicate, query, movie, add)(movie);
  }
  return result;
}

export default findByTitle;
