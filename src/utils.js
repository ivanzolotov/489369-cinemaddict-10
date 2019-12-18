const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const getRandomBoolean = () => Math.random() < 0.5;

const getRandomArrayItem = (array) => array[~~(Math.random() * array.length)];

const getRandomArrayItems = (array, n) => {
  return array
    .filter(() => getRandomBoolean())
    .slice(0, n);
};

const getRandomDateInPast = (years = 50) => {
  const targetDate = new Date();
  const difference = ~~(Math.random() * years * 365);

  targetDate.setDate(targetDate.getDate() - difference);

  return targetDate;
};

const formatDuration = (duration) => {
  const hours = ~~(duration / 60) ? `${~~(duration / 60)}h ` : ``;
  const minutes = `${duration % 60}m`;
  return (hours + minutes);
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const makeTwoDigitNumber = (value) => (value < 10 ? `0${value}` : String(value));

export {
  MONTHS,
  getRandomBoolean,
  getRandomArrayItem,
  getRandomArrayItems,
  getRandomDateInPast,
  formatDuration,
  capitalizeFirstLetter,
  makeTwoDigitNumber,
};
