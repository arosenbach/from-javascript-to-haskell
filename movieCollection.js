import { o, includes, filter, path } from "ramda";

// matches :: Path -> String -> Movie -> Bool
const matches = (aPath) => (query) => o(includes(query))(path(aPath));

// findByTitle :: String -> [Movie] -> [Movie]
const findByTitle = o(filter)(matches(["title"]));

export default findByTitle;
