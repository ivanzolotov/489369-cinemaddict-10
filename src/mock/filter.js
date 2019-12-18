const NUMBER_OF_FILMS = 5;

const filterNames = [
  `all movies`,
  `watchlist`,
  `history`,
  `favorites`,
];

const generateFilters = (films = new Array(NUMBER_OF_FILMS)) => {
  return filterNames.map((filter) => {
    return {
      name: filter,
      count: (filter === `all`) ? films.length : ~~(Math.random() * films.length),
    };
  });
};

export {generateFilters};
