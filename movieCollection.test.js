import findByTitle from "./movieCollection";

describe("Movie collection search by name", () => {
  it("should return empty when none found", () => {
    const actual = findByTitle("Interstallar", [
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
    ]);
    expect(actual).toEqual([]);
  });
});
