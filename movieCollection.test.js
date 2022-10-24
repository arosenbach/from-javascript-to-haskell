import findByTitle from "./movieCollection";

const movies = [
  {
    title: "The Matrix",
    year: 1999,
  },
  {
    title: "A Beautiful Mind",
    year: 2001,
  },
  {
    title: "Intouchable",
    year: 2011,
  },
  {
    title: "Forest Gump",
    year: 1994,
  },
];

describe("Movie collection search by name", () => {
  it("should return empty when none found", () => {
    const actual = findByTitle("Interstallar")(movies);
    expect(actual).toEqual([]);
  });

  it("should return a matching movie", () => {
    const actual = findByTitle("The Matrix")(movies);
    expect(actual).toEqual([
      {
        title: "The Matrix",
        year: 1999,
      },
    ]);
  });

  it("should return all matching movies", () => {
    const actual = findByTitle("o")(movies);
    expect(actual).toEqual([
      {
        title: "Intouchable",
        year: 2011,
      },
      {
        title: "Forest Gump",
        year: 1994,
      },
    ]);
  });
});
