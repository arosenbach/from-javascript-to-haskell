function matches(query, movie) {
  return movie.title.includes(query);
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
