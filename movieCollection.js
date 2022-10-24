function title(movie) {
  return movie.title;
}

function isInfixOf(query, string) {
  return string.includes(query);
}

function matches(query, movie) {
  return isInfixOf(query, title(movie));
}

function findByTitle(query, collection) {
  let result = [];
  let movie;
  while ((movie = collection.shift())) {
    if (matches(query, movie)) {
      result.push(movie);
    }
  }
  return result;
}

export default findByTitle;
