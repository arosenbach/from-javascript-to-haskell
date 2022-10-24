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

// addIf :: ((String, Movie) -> Bool, String, Movie, (Movie) -> ([Movie] -> [Movie])) -> ([Movie] -> [Movie])
function addIf(predicate, query, movie, add) {
  if (predicate(query, movie)) {
    return add(movie);
  } else {
    return function (movies) {
      return movies;
    };
  }
}

// findByTitle :: (String, [Movie]) -> [Movie]
function findByTitle(query, collection) {
  let result = [];
  const predicate = matches;
  const add = function (movie) {
    return function (movies) {
      return movies.concat([movie]);
    };
  };
  for (const movie of collection) {
    // FIXME: complicated :( ++++++++++
    result = addIf(predicate, query, movie, add)(result);
  }
  return result;
}

export default findByTitle;
