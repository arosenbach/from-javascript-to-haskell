function findByTitle(query, collection) {
  let result = [];
  let movie;
  while ((movie = collection.shift())) {
    if (movie.title.includes(query)) {
      result.push(movie);
    }
  }
  return result;
}

export default findByTitle;
