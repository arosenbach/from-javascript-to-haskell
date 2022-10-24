// title :: Movie -> String
const title = (movie) => {
  return movie.title;
};

// isInfixOf :: String -> String -> Bool
const isInfixOf = (query) => (string) => {
  return string.includes(query);
};

const filter = (predicate) => (collection) => {
  return collection.filter(predicate);
};

// matches :: String -> Movie -> Bool
const matches = (query) => (movie) => {
  return isInfixOf(query)(title(movie));
};

// findByTitle :: String -> [Movie] -> [Movie]
const findByTitle = (query) => (collection) => {
  const predicate = matches(query);
  return filter(predicate)(collection);
};

export default findByTitle;
