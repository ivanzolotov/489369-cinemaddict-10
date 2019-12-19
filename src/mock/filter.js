const DEFAULT_FILMS_NUMBER = 5;

const filterNames = [
  `all movies`,
  `watchlist`,
  `history`,
  `favorites`,
];

const generateFilters = (films = new Array(DEFAULT_FILMS_NUMBER)) => {
  return filterNames.map((filter) => {
    return {
      name: filter,
      count: (filter === `all`) ? films.length : ~~(Math.random() * films.length),
    };
  });
};

export {generateFilters};
