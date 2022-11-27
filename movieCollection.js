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

const compose = (f) => (g) => (x) => {
  return f(g(x));
};

// matches :: String -> Movie -> Bool
const matches = (query) => (movie) => {
  return compose(isInfixOf(query))(title)(movie);
};

// findByTitle :: String -> [Movie] -> [Movie]
const findByTitle = (query) => {
  return compose(filter)(matches)(query);
};

export default findByTitle;
