// title :: Movie -> String
const title = (movie) => {
  return movie.title;
};

// isInfixOf :: (String, String) -> Bool
const isInfixOf = (query) => (string) => {
  return string.includes(query);
};

// matches :: (String, Movie) -> Bool
const matches = (query) => (movie) => {
  return isInfixOf(query)(title(movie));
};

// addIf :: ((String, Movie) -> Bool, String, Movie, (Movie) -> ([Movie] -> [Movie])) -> ([Movie] -> [Movie])
const addIf = (predicate) => (query) => (movie) => (add) => {
  if (predicate(query)(movie)) {
    return add(movie);
  } else {
    return (movies) => {
      return movies;
    };
  }
};

// findByTitle :: (String, [Movie]) -> [Movie]
const findByTitle = (query) => (collection) => {
  let result = [];
  const predicate = matches;
  const add = (movie) => (movies) => {
    return movies.concat([movie]);
  };
  for (const movie of collection) {
    // FIXME: complicated :( ++++++++++
    result = addIf(predicate)(query)(movie)(add)(result);
  }
  return result;
};

export default findByTitle;
