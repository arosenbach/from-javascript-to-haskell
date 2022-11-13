import * as R from "ramda";

// matches :: String -> Movie -> Bool
const matches = (query) => R.o(R.includes(query))(R.path(["title"]));

// findByTitle :: String -> [Movie] -> [Movie]
const findByTitle = R.o(R.filter)(matches);

export default findByTitle;
