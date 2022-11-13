import * as R from "ramda";

// matches :: Path -> String -> Movie -> Bool
const matches = (path) => (query) => R.o(R.includes(query))(R.path(path));

// findByTitle :: String -> [Movie] -> [Movie]
const findByTitle = R.o(R.filter)(matches(["title"]));

export default findByTitle;
