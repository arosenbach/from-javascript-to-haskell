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

// addIf :: ((String, Movie) -> Bool, String, Movie, (Movie, [Movie]) -> [Movie]) -> ((Movie, [Movie]) -> [Movie])
function addIf(predicate, query, movie, add) {
  if (predicate(query, movie)) {
    return add;
  } else {
    return function doNothing(m, movies) {
      return movies;
    };
  }
}

// findByTitle :: (String, [Movie]) -> [Movie]
function findByTitle(query, collection) {
  let result = [];
  const predicate = matches;
  const add = function (movie, movies) {
    return movies.concat([movie]);
  };
  for (const movie of collection) {
    // FIXME: complicated :( ++++++++
    // FIXME: "movie" duplicated
    result = addIf(predicate, query, movie, add)(movie, result);
  }
  return result;
}

export default findByTitle;
